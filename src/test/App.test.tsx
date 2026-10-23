import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

let App: typeof import('../App').default;

beforeAll(async () => {
  vi.stubEnv('VITE_WHATSAPP_NUMBER', '');
  vi.stubEnv('VITE_BUSINESS_ADDRESS', '');
  vi.stubEnv('VITE_BUSINESS_HOURS', '');
  vi.stubEnv('VITE_GOOGLE_MAPS_URL', '');

  App = (await import('../App')).default;
});

afterAll(() => {
  vi.unstubAllEnvs();
});

describe('App', () => {
  it('menampilkan identitas, heading utama, dan navigasi', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /berhenti sejenak/i,
      }),
    ).toBeInTheDocument();
    const nav = screen.getByRole('navigation', { name: 'Navigasi utama' });
    expect(nav).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /kembali ke beranda/i }),
    ).toBeInTheDocument();

    for (const label of ['Tentang', 'Layanan', 'Galeri', 'Kontak']) {
      expect(
        within(nav).getByRole('link', { name: label }),
      ).toBeInTheDocument();
    }
  });

  it('membuka dan menutup menu mobile dengan keyboard', async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole('button', {
      name: /buka menu navigasi/i,
    });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(
      screen.getByRole('navigation', { name: 'Navigasi utama' }),
    ).toHaveClass('main-nav-open');

    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('mengarahkan CTA ke bagian kontak saat WhatsApp belum dikonfigurasi', () => {
    const { container } = render(<App />);

    const whatsappLinks = container.querySelectorAll(
      '[data-whatsapp-state="needs-configuration"]',
    );

    expect(whatsappLinks.length).toBeGreaterThan(0);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#kontak');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });
  });

  it('menautkan navigasi ke bagian halaman yang tersedia', () => {
    const { container } = render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Navigasi utama' });

    for (const link of within(nav).getAllByRole('link')) {
      const href = link.getAttribute('href');
      if (href?.startsWith('#') && href !== '#') {
        expect(container.querySelector(href)).not.toBeNull();
      }
    }
  });

  it('menandai data kontak dan foto yang belum terverifikasi', () => {
    const { container } = render(<App />);

    expect(
      screen.getByText(/nomor WhatsApp resmi belum dicantumkan/i),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/alamat lengkap belum dikonfirmasi/i).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/jam operasional belum dikonfirmasi/i).length,
    ).toBeGreaterThan(0);
    expect(
      screen.queryByRole('link', { name: /buka google maps/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(/bukan dokumentasi lokasi senzu/i),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.hero-visual .illustration-tag'),
    ).toHaveTextContent('Ilustrasi');
    expect(screen.getAllByText('Ilustrasi')).toHaveLength(4);
  });
});

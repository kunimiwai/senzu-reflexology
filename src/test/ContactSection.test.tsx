import { render, screen } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

let ContactSection: typeof import('../sections/ContactSection').default;

beforeAll(async () => {
  vi.stubEnv('VITE_WHATSAPP_NUMBER', '+62 812-3456-7890');
  vi.stubEnv('VITE_BUSINESS_ADDRESS', 'Jl. Contoh No. 1, Jakarta');
  vi.stubEnv('VITE_BUSINESS_HOURS', 'Setiap hari, 10.00–21.00');
  vi.stubEnv('VITE_GOOGLE_MAPS_URL', 'https://maps.google.com/?q=senzu');

  ContactSection = (await import('../sections/ContactSection')).default;
});

afterAll(() => {
  vi.unstubAllEnvs();
});

describe('ContactSection dengan konfigurasi lengkap', () => {
  it('menampilkan WhatsApp, alamat, jam, dan tautan peta yang aman', () => {
    render(<ContactSection />);

    const whatsapp = screen.getByRole('link', {
      name: /reservasi via whatsapp/i,
    });
    expect(whatsapp.getAttribute('href')).toMatch(
      /^https:\/\/wa\.me\/6281234567890\?text=/,
    );
    expect(whatsapp).toHaveAttribute('target', '_blank');
    expect(whatsapp).toHaveAttribute('rel', 'noreferrer noopener');

    const maps = screen.getByRole('link', { name: /buka google maps/i });
    expect(maps).toHaveAttribute('href', 'https://maps.google.com/?q=senzu');
    expect(maps).toHaveAttribute('target', '_blank');
    expect(maps).toHaveAttribute('rel', 'noreferrer noopener');

    expect(
      screen.getByText('Jl. Contoh No. 1, Jakarta'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Setiap hari, 10.00–21.00'),
    ).toBeInTheDocument();
    expect(screen.getByText('+6281234567890')).toBeInTheDocument();
    expect(screen.queryByText('Perlu dikonfirmasi')).not.toBeInTheDocument();
  });
});

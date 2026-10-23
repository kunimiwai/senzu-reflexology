import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  isSafeHttpUrl,
  normalizeWhatsAppNumber,
} from '../config';

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe('normalizeWhatsAppNumber', () => {
  it('menghapus format dan menyimpan nomor internasional', () => {
    expect(normalizeWhatsAppNumber('+62 812-3456-7890')).toBe(
      '6281234567890',
    );
  });

  it('menolak nomor tanpa kode negara', () => {
    expect(normalizeWhatsAppNumber('0812 3456 7890')).toBe('');
  });

  it('menolak nomor yang terlalu pendek atau kosong', () => {
    expect(normalizeWhatsAppNumber('12345')).toBe('');
    expect(normalizeWhatsAppNumber(undefined)).toBe('');
  });
});

describe('isSafeHttpUrl', () => {
  it('menerima tautan http dan https', () => {
    expect(isSafeHttpUrl('https://maps.google.com/?q=senzu')).toBe(true);
    expect(isSafeHttpUrl('http://example.com')).toBe(true);
  });

  it('menolak protokol lain dan nilai kosong', () => {
    expect(isSafeHttpUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeHttpUrl('')).toBe(false);
    expect(isSafeHttpUrl(undefined)).toBe(false);
  });
});

describe('getWhatsAppUrl', () => {
  it('membuat URL wa.me yang valid ketika nomor tersedia', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '+62 812-3456-7890');

    const { getWhatsAppUrl, isWhatsAppConfigured } = await import(
      '../config'
    );

    expect(isWhatsAppConfigured()).toBe(true);
    expect(getWhatsAppUrl('Halo tes')).toBe(
      'https://wa.me/6281234567890?text=Halo%20tes',
    );
  });

  it('mengembalikan null ketika nomor belum dikonfigurasi', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '');

    const { getWhatsAppUrl, isWhatsAppConfigured } = await import(
      '../config'
    );

    expect(isWhatsAppConfigured()).toBe(false);
    expect(getWhatsAppUrl()).toBeNull();
  });
});

describe('status data placeholder', () => {
  it('tidak menganggap teks placeholder sebagai data terkonfirmasi', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_BUSINESS_ADDRESS', 'Alamat bisnis perlu dikonfirmasi');
    vi.stubEnv('VITE_BUSINESS_HOURS', 'Jam operasional belum dikonfirmasi');
    vi.stubEnv('VITE_GOOGLE_MAPS_URL', '');

    const { contactCopy, dataStatus } = await import('../config');

    expect(dataStatus.address).toBe('pending');
    expect(dataStatus.hours).toBe('pending');
    expect(contactCopy.address).toMatch(/belum dikonfirmasi/i);
    expect(contactCopy.hours).toMatch(/belum dikonfirmasi/i);
  });
});

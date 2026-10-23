const env = import.meta.env;

export type DataStatus = 'confirmed' | 'pending';

const clean = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

const placeholderPattern = /perlu dikonfirmasi|belum dikonfirmasi|^tbd$/i;

/**
 * Teks placeholder tidak boleh dianggap sebagai data bisnis terverifikasi.
 * Ini menjaga salinan lama `.env.example` agar tetap tampil sebagai pending.
 */
const confirmedText = (value: unknown): string => {
  const text = clean(value);
  return text && !placeholderPattern.test(text) ? text : '';
};

/**
 * Nomor WhatsApp harus berupa kode negara + nomor, tanpa tanda "+", spasi,
 * atau tanda hubung. Nomor domestik yang diawali "0" sengaja ditolak karena
 * tidak dapat dipetakan ke kode negara secara aman.
 */
export function normalizeWhatsAppNumber(raw: string | undefined): string {
  const digits = clean(raw).replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15 || digits.startsWith('0')) {
    return '';
  }
  return digits;
}

export function isSafeHttpUrl(raw: string | undefined): boolean {
  const value = clean(raw);
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

const whatsappNumber = normalizeWhatsAppNumber(env.VITE_WHATSAPP_NUMBER);
const address = confirmedText(env.VITE_BUSINESS_ADDRESS);
const hours = confirmedText(env.VITE_BUSINESS_HOURS);
const mapsUrl = isSafeHttpUrl(env.VITE_GOOGLE_MAPS_URL)
  ? clean(env.VITE_GOOGLE_MAPS_URL)
  : '';

/**
 * Satu-satunya sumber data bisnis. Nilai yang kosong TIDAK diisi dengan data
 * karangan; antarmuka akan menampilkannya sebagai informasi yang belum
 * dikonfirmasi.
 */
export const businessConfig = {
  name: confirmedText(env.VITE_BUSINESS_NAME) || 'Senzu Reflexology',
  tagline: 'Reflexology & Wellness',
  whatsappNumber,
  address,
  hours,
  mapsUrl,
};

export const dataStatus: Record<
  'whatsapp' | 'address' | 'hours' | 'maps',
  DataStatus
> = {
  whatsapp: whatsappNumber ? 'confirmed' : 'pending',
  address: address ? 'confirmed' : 'pending',
  hours: hours ? 'confirmed' : 'pending',
  maps: mapsUrl ? 'confirmed' : 'pending',
};

export const contactCopy = {
  address: address || 'Alamat lengkap belum dikonfirmasi oleh pengelola.',
  hours: hours || 'Jam operasional belum dikonfirmasi oleh pengelola.',
  whatsapp: whatsappNumber
    ? `+${whatsappNumber}`
    : 'Nomor WhatsApp belum dikonfigurasi.',
};

export const hasPendingContactData = Object.values(dataStatus).some(
  (status) => status === 'pending',
);

export const DEFAULT_WHATSAPP_MESSAGE =
  'Halo Senzu Reflexology, saya ingin bertanya mengenai informasi layanan dan reservasi.';

/**
 * Mengembalikan null jika nomor belum valid. Komponen pemanggil wajib
 * mengarahkan pengguna ke bagian kontak, bukan membuat tautan wa.me yang rusak.
 */
export function getWhatsAppUrl(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
): string | null {
  if (!businessConfig.whatsappNumber) return null;
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function isWhatsAppConfigured(): boolean {
  return Boolean(businessConfig.whatsappNumber);
}

export const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' },
] as const;

export type AdvantageIcon = 'leaf' | 'info' | 'sparkles';

export const advantages: Array<{
  icon: AdvantageIcon;
  title: string;
  description: string;
}> = [
  {
    icon: 'leaf',
    title: 'Nuansa yang menenangkan',
    description:
      'Kami mengutamakan suasana yang tenang dan teratur agar waktu kunjungan terasa lebih nyaman.',
  },
  {
    icon: 'info',
    title: 'Informasi yang terbuka',
    description:
      'Detail layanan, durasi, harga, dan jam operasional disampaikan dengan jelas sebelum Anda memutuskan.',
  },
  {
    icon: 'sparkles',
    title: 'Waktu untuk diri sendiri',
    description:
      'Kunjungan adalah jeda dari rutinitas. Kami ingin Anda dapat mengatur waktu tanpa terburu-buru.',
  },
];

export const serviceCategories: Array<{
  id: string;
  title: string;
  description: string;
  message: string;
}> = [
  {
    id: 'refleksi',
    title: 'Refleksi',
    description:
      'Kategori layanan refleksi untuk membantu tubuh beristirahat. Area, metode, dan durasi dikonfirmasi oleh pengelola.',
    message:
      'Halo Senzu Reflexology, saya ingin menanyakan pilihan layanan refleksi yang tersedia.',
  },
  {
    id: 'perawatan-tubuh',
    title: 'Perawatan tubuh',
    description:
      'Pilihan perawatan tubuh untuk melengkapi waktu relaksasi Anda. Jenis perawatan dan durasi mengikuti ketersediaan.',
    message:
      'Halo Senzu Reflexology, saya ingin menanyakan pilihan perawatan tubuh yang tersedia.',
  },
  {
    id: 'konsultasi',
    title: 'Konsultasi kunjungan',
    description:
      'Tanyakan kebutuhan Anda sebelum datang. Pengelola akan menjelaskan pilihan layanan, durasi, dan harga yang berlaku.',
    message:
      'Halo Senzu Reflexology, saya ingin berkonsultasi mengenai layanan yang sesuai untuk kunjungan saya.',
  },
];

export const serviceNotice =
  'Daftar treatment resmi, durasi, dan harga belum dipublikasikan. Informasi tersebut akan diperbarui setelah dikonfirmasi pengelola.';

export const heroImage = {
  src: '/images/hero-refleksi.webp',
  alt: 'Ilustrasi perawatan relaksasi dengan minyak, bukan foto lokasi Senzu.',
  width: 1200,
  height: 1500,
};

export const galleryPhotos = [
  {
    src: '/images/galeri-batu-panas.webp',
    alt: 'Ilustrasi terapi batu panas pada punggung, bukan foto lokasi Senzu.',
    label: 'Terapi batu panas',
    width: 1000,
    height: 760,
  },
  {
    src: '/images/galeri-perawatan.webp',
    alt: 'Ilustrasi perawatan punggung, bukan foto lokasi Senzu.',
    label: 'Perawatan punggung',
    width: 900,
    height: 700,
  },
  {
    src: '/images/galeri-oli.webp',
    alt: 'Ilustrasi perawatan dengan minyak, bukan foto lokasi Senzu.',
    label: 'Perawatan minyak',
    width: 900,
    height: 700,
  },
] as const;

/**
 * Ubah flag menjadi false setelah foto asli Senzu menggantikan ilustrasi.
 * Ingat untuk memperbarui src, alt text, dan keterangan galeri.
 */
export const imageDisclosure = {
  heroIsIllustration: true,
  galleryIsIllustration: true,
  galleryNote:
    'Foto di galeri ini adalah ilustrasi stok, bukan dokumentasi lokasi Senzu. Foto asli akan menggantikan ilustrasi setelah tersedia.',
};

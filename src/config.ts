const env = import.meta.env;

export const businessConfig = {
  name: env.VITE_BUSINESS_NAME || 'Senzu Reflexology',
  whatsappNumber: env.VITE_WHATSAPP_NUMBER || '',
  address: env.VITE_BUSINESS_ADDRESS || 'Alamat akan diperbarui setelah dikonfirmasi.',
  hours: env.VITE_BUSINESS_HOURS || 'Jam operasional akan diperbarui setelah dikonfirmasi.',
  mapsUrl: env.VITE_GOOGLE_MAPS_URL || '',
};

export function getWhatsAppUrl(message = 'Halo Senzu Reflexology, saya ingin bertanya tentang layanan.') {
  const number = businessConfig.whatsappNumber.replace(/\D/g, '');
  if (!number) return '#kontak';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

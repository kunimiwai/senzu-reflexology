import { ArrowUpRight, CircleHelp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { getWhatsAppUrl } from '../config';

const services = [
  { number: '01', title: 'Refleksi', description: 'Informasi mengenai pilihan layanan refleksi akan dikonfirmasi oleh pengelola.' },
  { number: '02', title: 'Perawatan tubuh', description: 'Jenis perawatan, durasi, dan ketentuan layanan perlu diverifikasi sebelum dipublikasikan.' },
  { number: '03', title: 'Paket layanan', description: 'Ketersediaan paket dan harga dapat ditanyakan langsung melalui kontak resmi.' },
];

export default function ServicesSection() {
  return (
    <section className="section services-section" id="layanan">
      <SectionHeading eyebrow="PILIHAN LAYANAN" title="Temukan layanan yang sesuai." description="Lihat gambaran kategori layanan. Hubungi tim Senzu untuk memastikan jenis treatment, durasi, harga, dan ketersediaan terbaru." />
      <div className="service-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-content"><h3>{service.title}</h3><p>{service.description}</p></div>
            <a className="service-link" href={getWhatsAppUrl(`Halo Senzu Reflexology, saya ingin bertanya tentang ${service.title.toLowerCase()}.`)} aria-label={`Tanyakan tentang ${service.title}`}><ArrowUpRight /></a>
          </article>
        ))}
      </div>
      <p className="service-disclaimer"><CircleHelp size={16} /> Daftar ini merupakan kerangka awal, bukan konfirmasi katalog layanan resmi.</p>
    </section>
  );
}

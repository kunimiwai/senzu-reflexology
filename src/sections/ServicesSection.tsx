import { ArrowUpRight, CircleHelp } from 'lucide-react';
import {
  isWhatsAppConfigured,
  serviceCategories,
  serviceNotice,
} from '../config';
import SectionHeading from '../components/SectionHeading';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ServicesSection() {
  const whatsappReady = isWhatsAppConfigured();

  return (
    <section className="section services-section" id="layanan">
      <SectionHeading
        eyebrow="Pilihan layanan"
        title="Temukan layanan yang sesuai."
        description="Lihat gambaran kategori layanan. Hubungi tim Senzu untuk memastikan jenis treatment, durasi, harga, dan ketersediaan terbaru."
      />

      <div className="service-list">
        {serviceCategories.map((service, index) => (
          <article className="service-row" key={service.id}>
            <span className="service-number" aria-hidden="true">
              0{index + 1}
            </span>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <WhatsAppButton
              className="service-link"
              message={service.message}
              ariaLabel={
                whatsappReady
                  ? `Tanyakan tentang ${service.title} melalui WhatsApp`
                  : `Lihat informasi kontak untuk menanyakan ${service.title}`
              }
            >
              <ArrowUpRight aria-hidden="true" />
            </WhatsAppButton>
          </article>
        ))}
      </div>

      <div className="service-footnote">
        <CircleHelp size={18} aria-hidden="true" />
        <div>
          <strong>Informasi layanan lengkap belum tersedia.</strong>
          <p>{serviceNotice}</p>
        </div>
      </div>
    </section>
  );
}

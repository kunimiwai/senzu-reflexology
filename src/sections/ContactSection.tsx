import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import {
  businessConfig,
  contactCopy,
  dataStatus,
  isWhatsAppConfigured,
} from '../config';
import PendingBadge from '../components/PendingBadge';
import SectionHeading from '../components/SectionHeading';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ContactSection() {
  const whatsappReady = isWhatsAppConfigured();

  return (
    <section
      className="contact-section"
      id="kontak"
      aria-labelledby="contact-title"
    >
      <div className="contact-main">
        <SectionHeading
          eyebrow="Kunjungi Senzu"
          title="Mari rencanakan waktu Anda."
          description="Tanyakan informasi layanan, jam operasional, dan lokasi sebelum berkunjung."
          light
          id="contact-title"
        />

        {whatsappReady ? (
          <WhatsAppButton className="button button-light">
            <MessageCircle size={17} aria-hidden="true" /> Reservasi via WhatsApp
            <ArrowUpRight size={17} aria-hidden="true" />
          </WhatsAppButton>
        ) : (
          <p className="contact-callout" role="note">
            <MessageCircle size={17} aria-hidden="true" />
            Nomor WhatsApp resmi belum dicantumkan. Informasi ini akan
            ditampilkan setelah dikonfirmasi pengelola.
          </p>
        )}
      </div>

      <div className="contact-details">
        <div className="contact-detail">
          <MapPin size={19} aria-hidden="true" />
          <div>
            <span>Lokasi</span>
            <p>{contactCopy.address}</p>
            {dataStatus.address === 'pending' ? (
              <PendingBadge />
            ) : dataStatus.maps === 'confirmed' ? (
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Buka Google Maps <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : (
              <PendingBadge>Tautan peta belum tersedia</PendingBadge>
            )}
          </div>
        </div>

        <div className="contact-detail">
          <Clock3 size={19} aria-hidden="true" />
          <div>
            <span>Jam operasional</span>
            <p>{contactCopy.hours}</p>
            {dataStatus.hours === 'pending' && <PendingBadge />}
          </div>
        </div>

        <div className="contact-detail">
          <MessageCircle size={19} aria-hidden="true" />
          <div>
            <span>WhatsApp</span>
            <p>{contactCopy.whatsapp}</p>
            {dataStatus.whatsapp === 'pending' && <PendingBadge />}
          </div>
        </div>
      </div>
    </section>
  );
}

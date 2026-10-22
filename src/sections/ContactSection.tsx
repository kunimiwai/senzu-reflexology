import { ArrowUpRight, Clock3, MapPin, MessageCircle } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '../config';
import SectionHeading from '../components/SectionHeading';

export default function ContactSection() {
  return (
    <section className="contact-section" id="kontak">
      <div className="contact-main">
        <SectionHeading eyebrow="KUNJUNGI SENZU" title="Mari rencanakan waktu Anda." description="Tanyakan informasi layanan, jam operasional, dan lokasi sebelum berkunjung." light />
        <a className="button button-light" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> Hubungi via WhatsApp <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="contact-details">
        <div className="contact-detail"><MapPin size={19} /><div><span>LOKASI</span><p>{businessConfig.address}</p>{businessConfig.mapsUrl && <a href={businessConfig.mapsUrl} target="_blank" rel="noreferrer">Buka Google Maps <ArrowUpRight size={14} /></a>}</div></div>
        <div className="contact-detail"><Clock3 size={19} /><div><span>JAM OPERASIONAL</span><p>{businessConfig.hours}</p></div></div>
      </div>
    </section>
  );
}

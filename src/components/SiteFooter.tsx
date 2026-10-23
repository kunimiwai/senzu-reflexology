import { ArrowUp, Clock3, Leaf, MapPin } from 'lucide-react';
import {
  businessConfig,
  contactCopy,
  imageDisclosure,
  isWhatsAppConfigured,
  navLinks,
} from '../config';
import WhatsAppButton from './WhatsAppButton';

export default function SiteFooter() {
  const whatsappReady = isWhatsAppConfigured();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <a className="brand footer-brand" href="#beranda">
            <span className="brand-mark" aria-hidden="true">
              <Leaf size={18} />
            </span>
            <span className="brand-name">
              {businessConfig.name}
              <small>{businessConfig.tagline}</small>
            </span>
          </a>
          <p>
            Informasi layanan, suasana, dan kontak untuk membantu Anda
            merencanakan kunjungan.
          </p>
          {(imageDisclosure.heroIsIllustration ||
            imageDisclosure.galleryIsIllustration) && (
            <p className="footer-note">
              Foto pada situs ini merupakan ilustrasi, bukan dokumentasi
              lokasi.
            </p>
          )}
        </div>

        <nav className="footer-nav" aria-label="Navigasi footer">
          <h2>Jelajahi</h2>
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <h2>Kunjungi</h2>
          <p>
            <MapPin size={15} aria-hidden="true" />
            <span>{contactCopy.address}</span>
          </p>
          <p>
            <Clock3 size={15} aria-hidden="true" />
            <span>{contactCopy.hours}</span>
          </p>
          <WhatsAppButton className="footer-whatsapp">
            {whatsappReady ? 'Chat WhatsApp' : 'Lihat informasi kontak'}
          </WhatsAppButton>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {year} {businessConfig.name}. Hak cipta dilindungi.
        </span>
        <a className="back-to-top" href="#beranda">
          Kembali ke atas <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

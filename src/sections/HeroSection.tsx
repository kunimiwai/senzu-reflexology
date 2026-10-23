import { ArrowDownRight, ArrowUpRight, Leaf } from 'lucide-react';
import {
  hasPendingContactData,
  heroImage,
  imageDisclosure,
  isWhatsAppConfigured,
} from '../config';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HeroSection() {
  const whatsappReady = isWhatsAppConfigured();

  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <Leaf size={15} aria-hidden="true" /> Momen untuk diri sendiri
        </p>
        <h1 id="hero-title">
          Berhenti sejenak.
          <br />
          <em>Rasakan kembali</em>
          <br />
          kenyamanan.
        </h1>
        <p className="hero-description">
          Kenali Senzu Reflexology, ruang untuk mengambil jeda dari rutinitas.
          Temukan informasi layanan dan rencanakan kunjungan Anda.
        </p>
        <div className="hero-actions">
          <WhatsAppButton className="button button-dark">
            {whatsappReady ? 'Reservasi via WhatsApp' : 'Lihat informasi kontak'}
            <ArrowUpRight size={17} aria-hidden="true" />
          </WhatsAppButton>
          <a className="text-link" href="#layanan">
            Jelajahi layanan <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-note">
          <span className="note-line" aria-hidden="true" />
          {hasPendingContactData
            ? 'Beberapa informasi masih menunggu konfirmasi pengelola.'
            : 'Informasi kontak resmi Senzu Reflexology.'}
        </p>
      </div>

      <figure className="hero-visual">
        {imageDisclosure.heroIsIllustration && (
          <span className="illustration-tag">Ilustrasi</span>
        )}
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="image-caption">
          <span>01 / Suasana</span>
          <span>
            {imageDisclosure.heroIsIllustration
              ? 'Ilustrasi relaksasi'
              : 'Suasana Senzu'}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

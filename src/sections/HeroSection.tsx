import { ArrowDownRight, ArrowUpRight, Leaf } from 'lucide-react';
import { getWhatsAppUrl } from '../config';

export default function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-copy">
        <div className="eyebrow"><Leaf size={15} /> MOMEN UNTUK DIRI SENDIRI</div>
        <h1>Berhenti sejenak.<br /><em>Rasakan kembali</em><br />kenyamanan.</h1>
        <p className="hero-description">
          Kenali Senzu Reflexology, ruang untuk mengambil jeda dari rutinitas.
          Temukan informasi layanan dan rencanakan kunjungan Anda.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Hubungi kami <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#layanan">Jelajahi layanan <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-note"><span className="note-line" />Informasi resmi Senzu Reflexology</div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
          alt="Suasana ruang spa yang tenang"
          fetchPriority="high"
        />
        <div className="image-caption"><span>01 / THE EXPERIENCE</span><span>Ruang untuk beristirahat</span></div>
        <div className="round-stamp"><span>PAUSE</span><Leaf size={19} /><span>BREATHE</span></div>
      </div>
    </section>
  );
}

import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const values = [
  { icon: HeartHandshake, title: 'Pengalaman yang nyaman', text: 'Informasi dan layanan disampaikan dengan jelas agar pengunjung dapat memilih sesuai kebutuhan.' },
  { icon: ShieldCheck, title: 'Informasi transparan', text: 'Detail layanan, harga, dan ketentuan kunjungan akan ditampilkan setelah dikonfirmasi oleh pengelola.' },
  { icon: Sparkles, title: 'Waktu untuk diri sendiri', text: 'Temukan ruang untuk beristirahat sejenak dari aktivitas sehari-hari.' },
];

export default function AboutSection() {
  return (
    <section className="section about-section" id="tentang">
      <div className="about-intro">
        <SectionHeading eyebrow="TENTANG SENZU" title="Kenyamanan dimulai dari perhatian." description="Senzu Reflexology hadir sebagai tempat untuk mengenal pilihan layanan relaksasi dan merencanakan kunjungan dengan lebih mudah." />
        <p className="muted-note">Profil dan keunggulan spesifik akan disesuaikan dengan informasi resmi dari pengelola.</p>
      </div>
      <div className="value-grid">
        {values.map(({ icon: Icon, title, text }, index) => (
          <article className="value-card" key={title}>
            <div className="value-top"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.5} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

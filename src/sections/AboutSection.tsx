import { Info, Leaf, Sparkles } from 'lucide-react';
import { advantages, type AdvantageIcon } from '../config';
import SectionHeading from '../components/SectionHeading';

const icons: Record<AdvantageIcon, typeof Leaf> = {
  leaf: Leaf,
  info: Info,
  sparkles: Sparkles,
};

export default function AboutSection() {
  return (
    <section className="section about-section" id="tentang">
      <div className="about-intro">
        <SectionHeading
          eyebrow="Tentang Senzu"
          title="Kenyamanan dimulai dari perhatian."
          description="Senzu Reflexology adalah ruang refleksi dan perawatan tubuh. Halaman ini menyediakan informasi layanan serta kontak resmi agar Anda dapat merencanakan kunjungan dengan lebih mudah."
        />
        <p className="muted-note">
          Kami sedang melengkapi profil, fasilitas, dan detail layanan bersama
          pengelola. Informasi yang belum terverifikasi tidak ditampilkan
          sebagai fakta.
        </p>
      </div>

      <div className="advantages">
        <div className="advantages-heading">
          <p className="eyebrow">Keunggulan tempat</p>
          <h3>Yang kami utamakan</h3>
        </div>
        <div className="value-grid">
          {advantages.map(({ icon, title, description }, index) => {
            const Icon = icons[icon];

            return (
              <article className="value-card" key={title}>
                <div className="value-top">
                  <span>0{index + 1}</span>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <p className="section-note">
        Fasilitas dan keunggulan spesifik akan diperbarui setelah dikonfirmasi
        oleh pengelola.
      </p>
    </section>
  );
}

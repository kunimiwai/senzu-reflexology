import { useState } from 'react';
import { Menu, X, Leaf, ArrowUpRight } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import { businessConfig, getWhatsAppUrl } from './config';

const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label={`${businessConfig.name}, beranda`}>
          <span className="brand-mark"><Leaf size={20} /></span>
          <span className="brand-name">{businessConfig.name}<small>REFLEXOLOGY & WELLNESS</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label="Navigasi utama">
          {navLinks.map((link) => <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <a className="nav-cta" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">Hubungi kami <ArrowUpRight size={15} /></a>
        </nav>
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#beranda"><span className="brand-mark"><Leaf size={18} /></span><span className="brand-name">{businessConfig.name}<small>REFLEXOLOGY & WELLNESS</small></span></a>
        <p>Informasi yang membantu Anda merencanakan kunjungan.</p>
        <span>© {new Date().getFullYear()} {businessConfig.name}</span>
      </footer>
    </div>
  );
}

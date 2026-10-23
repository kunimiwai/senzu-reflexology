import { useEffect, useState } from 'react';
import { ArrowUpRight, Leaf, Menu, X } from 'lucide-react';
import { businessConfig, isWhatsAppConfigured, navLinks } from '../config';
import WhatsAppButton from './WhatsAppButton';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappReady = isWhatsAppConfigured();

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 651px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#beranda"
        aria-label={`${businessConfig.name}, kembali ke beranda`}
      >
        <span className="brand-mark" aria-hidden="true">
          <Leaf size={20} />
        </span>
        <span className="brand-name">
          {businessConfig.name}
          <small>{businessConfig.tagline}</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="primary-navigation"
        className={`main-nav${menuOpen ? ' main-nav-open' : ''}`}
        aria-label="Navigasi utama"
      >
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <WhatsAppButton className="nav-cta">
          {whatsappReady ? 'Reservasi' : 'Hubungi kami'}
          <ArrowUpRight size={15} aria-hidden="true" />
        </WhatsAppButton>
      </nav>
    </header>
  );
}

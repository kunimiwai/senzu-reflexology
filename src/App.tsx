import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import GallerySection from './sections/GallerySection';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#konten">
        Lewati ke konten utama
      </a>
      <SiteHeader />
      <main id="konten" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

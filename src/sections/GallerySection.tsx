import SectionHeading from '../components/SectionHeading';

const photos = [
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80', alt: 'Interior ruang relaksasi', label: 'Ruang relaksasi' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80', alt: 'Suasana perawatan spa', label: 'Suasana perawatan' },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80', alt: 'Detail ruang wellness', label: 'Detail ruang' },
];

export default function GallerySection() {
  return (
    <section className="section gallery-section" id="galeri">
      <SectionHeading eyebrow="GALERI" title="Suasana yang mengundang jeda." description="Gambar di bawah adalah foto ilustrasi dari sumber eksternal. Ganti dengan foto asli Senzu sebelum situs dipublikasikan." />
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption><span>0{index + 1}</span>{photo.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

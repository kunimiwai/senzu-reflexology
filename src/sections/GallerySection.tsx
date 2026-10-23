import { galleryPhotos, imageDisclosure } from '../config';
import SectionHeading from '../components/SectionHeading';

export default function GallerySection() {
  return (
    <section className="section gallery-section" id="galeri">
      <SectionHeading
        eyebrow="Galeri"
        title="Suasana yang mengundang jeda."
        description={
          imageDisclosure.galleryIsIllustration
            ? 'Gambaran suasana perawatan dan relaksasi. Seluruh foto pada bagian ini masih berupa ilustrasi.'
            : 'Gambaran suasana perawatan dan relaksasi.'
        }
      />

      <div className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <figure
            className={`gallery-item gallery-item-${index + 1}`}
            key={photo.src}
          >
            <div className="gallery-image">
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              {imageDisclosure.galleryIsIllustration && (
                <span className="illustration-tag">Ilustrasi</span>
              )}
            </div>
            <figcaption>
              <span aria-hidden="true">0{index + 1}</span>
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {imageDisclosure.galleryIsIllustration && (
        <p className="gallery-note">{imageDisclosure.galleryNote}</p>
      )}
    </section>
  );
}

import { Helmet } from 'react-helmet';

function Gallery() {
  // You might store your image data (e.g., paths, alt text) in an array here
  // For now, we'll use placeholder image sources.
  const galleryImages = [
    { src: 'gallery-image-1.jpg', alt: 'A soothing massage setting' },
    { src: 'gallery-image-2.jpg', alt: 'Close-up of essential oils' },
    { src: 'gallery-image-3.jpg', alt: 'Relaxing spa interior' },
    { src: 'gallery-image-4.jpg', alt: 'Therapist performing a treatment' },
    { src: 'gallery-image-5.jpg', alt: 'Calm waiting area at the spa' },
    { src: 'gallery-image-6.jpg', alt: 'Detail of a hot stone massage' },
  ];

  return (
    <section className='bg-neutral text-text-light py-20 px-4 min-h-screen'>
      {/* Helmet for SEO: Update title and description for the gallery page */}
      <Helmet>
        <title>Galleri | Racha Beauty & Wellness</title>
        <meta
          name='description'
          content='Se billeder fra Racha Beauty & Wellness: vores faciliteter og behandlinger.'
        />
      </Helmet>

      <div className='max-w-7xl mx-auto space-y-12'>
        {/* Gallery Header */}
        <h1 className='text-3xl font-lora font-bold text-center text-primary mb-10'>
          Vores Galleri
        </h1>

        {/* Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='relative overflow-hidden rounded-lg shadow-md group'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                loading='lazy' // Keep lazy loading for performance
              />
              {/* Optional: Overlay for image title/description on hover */}
              <div className='absolute inset-0 bg-primary-dark bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='font-roboto text-text-dark text-lg text-center p-2'>
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* You can add more sections here if you want to categorize galleries */}
      </div>
    </section>
  );
}

export default Gallery;

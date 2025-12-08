import services from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import { Helmet } from 'react-helmet';
import { isChristmasPromoActive } from '../utils/promoUtils';

function Services() {
  const isPromo = isChristmasPromoActive();

  return (
    <section className='bg-neutral text-text-light py-20 px-4 min-h-screen'>
      <Helmet>
        <title>Behandlinger & Priser | Racha Beauty & Wellness</title>
        <meta
          name='description'
          content='Se vores udvalg af massage, voksbehandlinger og skønhedspleje.'
        />
      </Helmet>

      <div className='max-w-7xl mx-auto space-y-20'>
        {/* Header */}
        <div className="text-center">
          <h1 className='text-3xl font-lora font-bold text-primary mb-2'>
            Behandlinger & Priser
          </h1>
          {isPromo && (
            <p className="text-red-600 font-bold animate-bounce">
              🎄 Julekampagne: Spar 10% på alle massagebehandlinger! 🎄
            </p>
          )}
        </div>

        {/* Section A: Massage */}
        <div>
          <h2 className='text-2xl font-lora font-semibold mb-6 text-primary'>
            Massage & Wellness
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services
              .filter(
                (s) =>
                  !s.name.toLowerCase().includes('voks') &&
                  !s.name.toLowerCase().includes('manicure') &&
                  !s.name.toLowerCase().includes('brude')
              )
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.name}
                  description={service.description}
                  options={service.options}
                  showDiscount={isPromo} // <--- Discount applied ONLY here
                />
              ))}
          </div>
        </div>

        {/* Section B: Beauty */}
        <div>
          <h2 className='text-2xl font-lora font-semibold mb-6 text-primary'>
            Skønhedsbehandlinger
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services
              .filter(
                (s) =>
                  s.name.toLowerCase().includes('manicure') ||
                  s.name.toLowerCase().includes('brude')
              )
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.name}
                  description={service.description}
                  options={service.options}
                  showDiscount={false} 
                />
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <p className='text-lg font-roboto text-secondary'>
            Vi hjælper dig med at finde den behandling, der passer bedst til
            dine behov.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
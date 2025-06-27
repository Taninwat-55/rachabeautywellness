import services from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import WaxAccordion from '../components/WaxAccordion';
import { Helmet } from 'react-helmet';

function Services() {
  const waxService = services.find((s) =>
    s.name.toLowerCase().includes('voks')
  );

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
        <h1 className='text-3xl font-lora font-bold text-center text-primary'>
          Behandlinger & Priser
        </h1>

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
                />
              ))}
          </div>
        </div>

        {/* Section B: Wax */}
        {/* <div>
          <h2 className='text-2xl font-lora font-semibold mb-6 text-primary'>
            Voksbehandlinger
          </h2>
          <div className='bg-primary text-text-dark rounded-xl shadow-md p-6'>
            <h3 className='text-xl font-bold mb-2'>{waxService.name}</h3>
            <p className='italic text-sm mb-4'>{waxService.description}</p>
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm'>
              {waxService.options.map((opt, idx) => (
                <div
                  key={idx}
                  className='flex justify-between border-b border-text-dark/20 pb-1'
                >
                  <span>
                    {opt.label ? (
                      <>
                        <span className='font-semibold'>{opt.label}</span>{' '}
                        <span className='text-text-dark/70'>
                          ({opt.duration})
                        </span>
                      </>
                    ) : (
                      opt.duration
                    )}
                  </span>
                  <span>{opt.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Section B: Wax */}
        <div>
          <h2 className='text-2xl font-lora font-semibold mb-6 text-primary'>
            Voksbehandlinger
          </h2>
          <WaxAccordion
            name={waxService.name}
            description={waxService.description}
            options={waxService.options}
          />
        </div>

        {/* Section C: Beauty */}
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

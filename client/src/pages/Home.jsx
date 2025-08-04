import { Link } from 'react-router-dom';
import { Leaf, Hand, Sparkles } from 'lucide-react';

function Home() {
  return (
    <div className='bg-neutral'>
      {/* Hero Section */}
      <section className='bg-neutral text-text-light py-20 px-4'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8'>
          {/* Left: Text Content */}
          <div>
            <h1 className='font-lora text-primary text-4xl md:text-5xl font-bold mb-4'>
              Velkommen til{' '}
              <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                Racha Beauty & Wellness
              </span>
            </h1>
            <p className='font-roboto text-lg md:text-xl mb-6 leading-relaxed'>
              Forkæl din krop og sjæl med afslappende massage og velvære i
              hjertet af Næstved.
            </p>
            {/* --- PRIMARY AND SECONDARY CTAs --- */}
            <div className='flex items-center gap-4'>
              <Link
                to='/behandlinger'
                className='font-lora bg-primary text-text-dark px-6 py-3 hover:bg-primary-dark hover:text-text-dark transition focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
              >
                Udforsk vores behandlinger
              </Link>
              <Link
                to='/kontakt'
                className='font-lora text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
              >
                Book din tid nu
              </Link>
            </div>
          </div>

          {/* Right: Banner Image */}
          {/* <div className='flex justify-center'>
            <img
              src='image1.jpg'
              alt='Racha Spa and Wellness banner'
              className='w-full h-auto max-h-[400px] rounded-lg shadow-[0_10px_40px_rgba(67,112,102,0.3)] object-cover'
              loading='lazy'
            />
          </div> */}

          <div className='flex justify-center'>
            <div className='relative w-full max-w-md h-[300px] perspective'>
              <div className='relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180'>
                {/* Front Image */}
                <img
                  src='/RachaFrontDesk4.jpg'
                  alt='Boutique image front'
                  className='absolute w-full h-full object-cover rounded-lg shadow-lg backface-hidden'
                />
                {/* Back Image */}
                <img
                  src='/FrontDesk.jpg'
                  alt='Boutique image back'
                  className='absolute w-full h-full object-cover rounded-lg shadow-lg rotate-y-180 backface-hidden'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Values Section */}
      <section className='bg-primary py-16 px-4'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
          {/* Left: Image */}
          <div className='flex justify-center'>
            <img
              src='Essence.jpg'
              alt='Essence image'
              className='w-full max-w-sm rounded-lg shadow-lg object-cover'
              loading='lazy'
            />
          </div>

          {/* Right: Text Content */}
          <div className='space-y-8 text-text-dark'>
            <h2 className='font-lora text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-10 '>
              Essensen af Racha
            </h2>
            <div className='flex items-start gap-4'>
              <Sparkles className='w-6 h-6 text-accent mt-1' />
              <div>
                <h3 className='font-lora text-xl font-bold mb-1'>
                  Terapeutisk Fornyelse
                </h3>
                <p className='font-roboto'>
                  Genopdag friskheden i kroppen med vores skræddersyede
                  massagebehandlinger og æteriske olier.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Hand className='w-6 h-6 text-accent mt-1' />
              <div>
                <h3 className='font-lora text-xl font-bold mb-1'>
                  Blid Berøring
                </h3>
                <p className='font-roboto'>
                  Omsorgsfulde behandlinger der respekterer din krops behov og
                  hjælper dig til ægte afslapning.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <Leaf className='w-6 h-6 text-accent mt-1' />
              <div>
                <h3 className='font-lora text-xl font-bold mb-1'>
                  Naturlige Ingredienser
                </h3>
                <p className='font-roboto'>
                  Vi bruger kun naturlige produkter, som er skånsomme mod huden
                  og fremmer sundhed og balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className='bg-neutral py-16 px-4'>
        <h2 className='font-lora text-2xl font-semibold text-center text-primary mb-10'>
          Populære behandlinger
        </h2>
        <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {[
            {
              name: 'Hot Stone Massage',
              price: '60 min / 650 DKK',
              description:
                'Varm stenmassage der lindrer muskelspændinger og fremmer dyb afslapning.',
            },
            {
              name: 'Aroma Massage',
              price: '60 min / 500 DKK',
              description:
                'Blid massage med æteriske olier, der balancerer krop og sind.',
            },
            {
              name: 'Thai Massage',
              price: '60 min / 500 DKK',
              description:
                'Traditionel thailandsk massage med tryk og stræk for fleksibilitet og energi.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className='bg-primary text-text-dark p-6 rounded-xl shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]'
            >
              <h3 className='font-lora text-xl font-bold mb-2'>
                {service.name}
              </h3>
              <p className='font-roboto mb-2 italic text-sm leading-relaxed'>
                {service.description}
              </p>
              <p className='font-roboto font-semibold'>{service.price}</p>
            </div>
          ))}
        </div>

        <div className='text-center mt-8'>
          <p className='font-roboto text-center text-sm text-primary mb-2'>
            Find den rette behandling for dig
          </p>
          <Link
            to='/behandlinger'
            className='font-lora inline-block text-primary underline hover:scale-105 hover:text-accent transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Se alle behandlinger
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className='bg-primary py-16 px-4'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10'>
          {/* Left: Text Content */}
          <div className='text-left text-text-dark'>
            <h2 className='font-lora text-2xl font-semibold mb-4'>Om os</h2>
            <p className='font-roboto text-lg mb-4 leading-relaxed'>
              Hos Racha tilbyder vi professionelle og rolige behandlinger, der
              kombinerer traditionel thailandsk viden med moderne velvære.
            </p>
            <p className='font-roboto text-lg mb-4 leading-relaxed'>
              Vores mål er at hjælpe dig med at finde ro, energi og balance i
              hverdagen i en atmosfære af fred og omsorg.
            </p>
            <p className='font-roboto text-lg leading-relaxed'>
              Du er i trygge hænder hos os – vores erfarne behandlere lytter til
              dine behov og skaber en skræddersyet oplevelse, du kan stole på.
            </p>
          </div>

          {/* Right: Image */}
          <div className='flex justify-center'>
            <img
              src='FrontDesk2.jpg'
              alt='Om Racha Wellness'
              className='w-full max-w-sm rounded-lg shadow-lg object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-neutral py-16 px-4 text-center'>
        <h2 className='font-lora text-2xl font-semibold text-primary mb-4'>
          Klar til at slappe af?
        </h2>
        <p className='font-roboto mb-6 text-primary'>
          Kontakt os i dag og book din næste behandling.
        </p>
        <Link
          to='/kontakt'
          className='font-lora bg-neutral text-primary border-2 border-primary font-bold px-6 py-3 hover:bg-primary hover:text-text-dark hover:border-transparent transition focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
        >
          Kontakt os
        </Link>
      </section>
    </div>
  );
}

export default Home;

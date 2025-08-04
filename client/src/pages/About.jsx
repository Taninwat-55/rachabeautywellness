// import { useEffect } from 'react';

function About() {
  // Use a state or ref if you need to access the image element
  // For simplicity, we just use a static path here
  const ownerImage = 'RachaWelcome.jpg'; // Using one of the provided images as a placeholder for the owner

  return (
    <section className='bg-neutral text-text-light py-20 px-4 min-h-screen'>
      <div className='max-w-7xl mx-auto space-y-20'> {/* Added space-y to separate sections */}

        {/* Section 1: About the Boutique */}
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* Left: Image */}
          <div className='flex justify-center'>
            <img
              src='Racha-Logo.jpg'
              alt='Om os billede'
              className='w-full max-w-sm rounded-lg shadow-lg object-cover'
              loading='lazy'
            />
          </div>

          {/* Right: Text */}
          <div>
            <h1 className='text-3xl font-lora font-semibold mb-6 text-primary'>
              Om os
            </h1>
            <p className='font-roboto mb-4 leading-relaxed'>
              Racha Beauty & Wellness er et roligt og indbydende sted dedikeret
              til dit velvære. Vores mål er at skabe en helhedsoplevelse, hvor
              både krop og sind kan finde ro.
            </p>
            <p className='font-roboto mb-4 leading-relaxed'>
              Vi kombinerer traditionelle thailandske behandlingsmetoder med
              moderne wellness-teknikker. Hver behandling er skræddersyet til dine
              behov – uanset om du søger afslapning, smertelindring eller ny
              energi.
            </p>
            <p className='font-roboto mb-4 leading-relaxed'>
              Vores terapeuter har mange års erfaring og en passion for at hjælpe
              mennesker. Vi tror på, at ægte skønhed kommer indefra – og den
              begynder med balance og harmoni i kroppen.
            </p>
            <p className='font-roboto leading-relaxed'>
              {' '}
              Besøg os i hjertet af byen og oplev en personlig og professionel
              behandling i afslappende omgivelser. Din velvære er vores prioritet.
            </p>
            <blockquote className='font-lora italic text-primary text-center max-w-xl mx-auto mt-12'>
              “At Racha, din ro og velvære er altid i centrum.”
            </blockquote>
          </div>
        </div>

        {/* Section 2: About the Owner */}
        <div className='grid md:grid-cols-2 gap-10 items-center px-6'>
          {/* Left: Text */}
          <div className='order-2 md:order-1'> {/* Reordered for visual variety on desktop */}
            <h2 className='text-3xl font-lora font-semibold mb-6 text-primary'>
              Mød ejeren
            </h2>
            <p className='font-roboto mb-4 leading-relaxed'>
              Hej! Mit navn er Rachanon Damrongrithikun. Jeg er 37 år gammel,
              født i 1988, og jeg har boet i Danmark siden 2014. Jeg ejer Racha
              Beauty & Wellness i Næstved.
            </p>
            <p className='font-roboto mb-4 leading-relaxed'>
              Jeg voksede op i en familie, der drev en skønhedsforretning i
              Thailand. Efter folkeskolen begyndte jeg at studere skønhed og
              massage på en professionel skole og hjalp samtidig til i familiens
              virksomhed.
            </p>
            <p className='font-roboto leading-relaxed'>
              Da jeg flyttede til Danmark, arbejdede jeg i en massagesalon og
              tog freelanceopgaver som brudemakeupartist og skønhedsterapeut. Min
              passion og erfaring førte til, at jeg åbnede min egen salon, hvor
              jeg i dag tilbyder professionelle og personlige behandlinger til
              mine kunder.
            </p>
          </div>
          
          {/* Right: Image of the Owner */}
          <div className='flex justify-center order-1 md:order-2'> {/* Reordered for visual variety on desktop */}
            <img
              src={ownerImage}
              alt='Portræt af ejeren af Racha Beauty & Wellness'
              className='w-full max-w-sm rounded-lg shadow-lg object-cover'
              loading='lazy'
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
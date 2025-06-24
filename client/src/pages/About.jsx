function About() {
  return (
    <section className='bg-neutral text-text-light py-20 px-4 min-h-screen'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Left: Image */}
        <div className='flex justify-center'>
          <img
            src='image10.jpg'
            alt='Om os billede'
            className='w-full max-w-md rounded-lg shadow-lg object-cover'
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
    </section>
  );
}

export default About;

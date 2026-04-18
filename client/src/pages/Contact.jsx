import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <section className='bg-neutral text-text-light py-20 px-4'>
      <Helmet>
        <title>Kontakt os | Racha Beauty &amp; Wellness</title>
        <meta
          name='description'
          content='Kontakt Racha Beauty & Wellness i Næstved. Send en besked eller ring til os for at booke din næste behandling.'
        />
      </Helmet>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl font-lora font-bold mb-6 text-primary'>Kontakt os</h1>
        <p className='font-roboto mb-8 text-lg max-w-2xl mx-auto'>
          Udfyld formularen herunder for at sende os en besked – eller ring til
          os på <strong className="whitespace-nowrap"><a href="tel:+4550316769" className="text-primary hover:underline">+45 50 31 67 69</a></strong> i vores åbningstid.
        </p>
        <div className='flex justify-center'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
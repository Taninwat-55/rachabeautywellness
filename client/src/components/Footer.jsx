import Logo from '../assets/logo/Racha-Logo.webp';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      role='contentinfo'
      aria-label='Sidefod for Racha Beauty & Wellness'
      className='bg-primary text-text-dark py-10'
    >
      <div className='max-w-7xl mx-auto px-6 flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10'>
        {/* Left: Business Info */}
        <div className='text-left'>
          <Link
            to='/'
            className='flex items-center gap-2 mb-4'
            aria-current='page'
          >
            <img
              src={Logo}
              alt='Racha Wellness Logo - Hjem'
              className='h-12 w-auto'
              aria-label='Shop Logo'
            />
          </Link>
          <p className='font-roboto'>Ringstedgade 25A</p>
          <p className='font-roboto'>4700, Næstved</p>
          <p className='font-roboto mt-2'>
            Telefon:{' '}
            <a
              href='tel:+4550316769'
              className='text-text-dark hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm whitespace-nowrap'
            >
              {' '}
              +45 50 31 67 69
            </a>
          </p>

          {/* Mobile: Opening Hours and Contact should appear below business info */}
          <div className='block md:hidden mt-6'>
            <h4 className='text-lg font-lora font-medium mb-2'>Åbningstider</h4>
            <p className='font-roboto'>Mandag – Fredag: 09:00 – 20:00</p>
            <p className='font-roboto'>Lørdag – Søndag: 10:00 – 17:00</p>
            <h4 className='text-lg font-lora font-medium mt-6 mb-2'>Kontakt</h4>
            <p className='font-roboto'>
              <a
                href='mailto:rachabeautywellness@gmail.com'
                className='text-text-dark hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
              >
                rachabeautywellness@gmail.com
              </a>
            </p>
            <p className='font-roboto mt-2'>Følg os på sociale medier</p>
            <div className='flex gap-4 mt-2'>
              {' '}
              <a
                href='https://www.facebook.com/profile.php?id=61575987172452'
                aria-label='Facebook'
                className='text-text-dark hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop only: Opening Hours */}
        <div className='hidden md:block text-center'>
          <h4 className='text-lg font-lora font-medium mb-2'>Åbningstider</h4>
          <p className='font-roboto'>Mandag – Fredag: 09:00 – 20:00</p>
          <p className='font-roboto'>Lørdag – Søndag: 10:00 – 17:00</p>
        </div>

        {/* Desktop only: Contact */}
        <div className='hidden md:block text-right'>
          <h4 className='text-lg font-lora font-medium mb-2'>Kontakt</h4>
          <p className='font-roboto'>
            <a
              href='mailto:rachabeautywellness@gmail.com'
              className='text-text-dark hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
            >
              rachabeautywellness@gmail.com
            </a>
          </p>
          <p className='font-roboto mt-2'>Følg os på sociale medier</p>
          <div className='flex justify-end gap-4 mt-2'>
            <a
              href='https://www.facebook.com/profile.php?id=61575987172452'
              aria-label='Facebook'
              className='text-text-dark hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className='font-roboto text-center text-sm mt-10'>
        &copy; {new Date().getFullYear()} Racha Beauty & Wellness. Alle
        rettigheder forbeholdes.
      </div>
    </footer>
  );
}

export default Footer;

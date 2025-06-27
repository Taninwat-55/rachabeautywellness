import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/Racha-Logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-primary text-text-dark shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-2' aria-current='page'>
          <img
            src={Logo}
            alt='Racha Wellness Logo - Hjem'
            className='h-15 w-auto'
          />
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-6 items-center'>
          <Link
            to='/'
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Hjem
          </Link>
          <Link
            to='/behandlinger'
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Behandlinger
          </Link>
          <Link
            to='/galleri'
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Galleri
          </Link>
          <Link
            to='/om'
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Om
          </Link>
          <Link
            to='/kontakt'
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none text-text-dark focus:ring-2 focus:ring-accent rounded-sm'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6 cursor-pointer'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 py-4' : 'max-h-0'
        } bg-primary`}
      >
        <div className='flex flex-col items-center space-y-2'>
          <Link
            to='/'
            onClick={() => setIsOpen(false)}
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Hjem
          </Link>
          <Link
            to='/behandlinger'
            onClick={() => setIsOpen(false)}
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Behandlinger
          </Link>
          <Link
            to='/galleri'
            onClick={() => setIsOpen(false)}
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Galleri
          </Link>
          <Link
            to='/om'
            onClick={() => setIsOpen(false)}
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Om
          </Link>
          <Link
            to='/kontakt'
            onClick={() => setIsOpen(false)}
            className='font-lora hover:underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm'
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

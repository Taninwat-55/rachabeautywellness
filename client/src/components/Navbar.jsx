import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo/Racha-Logo.webp';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    'font-lora hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-sm transition-colors duration-200';
  const activeLinkClass = 'underline text-accent';

  return (
    <nav className='bg-primary text-text-dark shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2'
          aria-label='Racha Wellness Logo - Hjem'
          onClick={() => setIsOpen(false)}
        >
          <img src={Logo} alt='Racha Wellness Logo' className='h-12 w-auto' />
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-6 items-center'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Hjem
          </NavLink>
          <NavLink
            to='/behandlinger'
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Behandlinger
          </NavLink>
          <NavLink
            to='/om'
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Om
          </NavLink>
          <NavLink
            to='/kontakt'
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Kontakt
          </NavLink>
        </div>

        {/* Mobile Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none text-text-dark focus:ring-2 focus:ring-accent rounded-sm p-1'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-56 py-4' : 'max-h-0'
          } bg-primary border-t border-primary-dark`}
      >
        <div className='flex flex-col items-center gap-4'>
          <NavLink
            to='/'
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Hjem
          </NavLink>
          <NavLink
            to='/behandlinger'
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Behandlinger
          </NavLink>
          <NavLink
            to='/om'
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Om
          </NavLink>
          <NavLink
            to='/kontakt'
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ''}`
            }
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
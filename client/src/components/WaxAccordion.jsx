import { useState, useRef } from 'react';

function WaxAccordion({ name, description, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    // Scroll to the element if it's opening, allowing content to render first
    if (!isOpen) {
      setIsOpen(true);
      // Give a small delay for the content to expand before scrolling
      //   setTimeout(() => {
      //     sectionRef.current?.scrollIntoView({
      //       behavior: 'smooth',
      //       block: 'start',
      //     });
      //   }, 100);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className='bg-primary text-text-dark rounded-xl shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl'
    >
      {/* Header Button */}
      <button
        onClick={handleToggle}
        onKeyDown={(e) =>
          (e.key === 'Enter' || e.key === ' ') && handleToggle()
        }
        tabIndex={0}
        aria-expanded={isOpen}
        className='cursor-pointer w-full text-left p-6 flex items-center justify-between focus:outline-none rounded-xl'
      >
        <div>
          <h3 className='text-xl font-lora font-bold mb-1'>{name}</h3>
          <p className='font-roboto italic text-sm text-text-dark/80 leading-relaxed'>
            {description}
          </p>
        </div>
        <span
          className={`text-2xl font-lora transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Collapsible Content */}
      <div
        className={`grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm px-6 overflow-hidden ${
          isOpen ? 'max-h-screen pb-6' : 'max-h-0'
        }`}
      >
        {options.map((opt, idx) => (
          <div
            key={idx}
            className='flex justify-between border-b border-text-dark/20 pb-1 font-roboto'
          >
            <span>
              {opt.label ? (
                <>
                  <span className='font-semibold'>{opt.label}</span>{' '}
                  <span className='text-text-dark/70'>({opt.duration})</span>
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
  );
}

export default WaxAccordion;

import { useEffect, useState } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className='cursor-pointer fixed bottom-6 right-6 bg-primary text-text-dark p-3 border border-text-dark rounded-full shadow-lg hover:bg-primary-dark transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent z-50'
        aria-label='Scroll to top'
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;

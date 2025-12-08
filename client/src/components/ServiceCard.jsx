import { calculateDiscountPrice } from '../utils/promoUtils';

function ServiceCard({ name, description, options, showDiscount = false }) {
  return (
    <div className='bg-primary text-text-dark rounded-xl shadow-md p-6 h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]'>
      <div className="flex justify-between items-start">
        <h3 className='text-xl font-lora font-bold mb-2'>{name}</h3>
        {showDiscount && (
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            -10%
          </span>
        )}
      </div>

      <p className='font-roboto italic text-sm mb-4 leading-relaxed'>
        {description}
      </p>

      <ul className='space-y-2 text-sm font-roboto'>
        {options.map((opt, idx) => (
          <li
            key={idx}
            className='flex justify-between border-b border-text-dark/20 pb-1'
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

            {showDiscount ? (
              <div className="flex flex-col items-end leading-tight">
                <span className="text-red-300 line-through text-xs opacity-80">
                  {opt.price}
                </span>
                <span className="font-bold text-accent">
                  {calculateDiscountPrice(opt.price)}
                </span>
              </div>
            ) : (
              <span>{opt.price}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;
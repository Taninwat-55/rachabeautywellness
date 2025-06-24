function ServiceCard({ name, description, options }) {
  return (
    <div className='bg-primary text-text-dark rounded-xl shadow-md p-6 h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]'>
      <h3 className='text-xl font-lora font-bold mb-2'>{name}</h3>
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
            <span>{opt.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;

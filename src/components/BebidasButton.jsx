import { useNavigate, useLocation } from 'react-router-dom';

const BebidasButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/bebidas');
  };

  if (location.pathname !== '/carta') return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-28 right-6 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 z-40 hover:scale-105 flex items-center justify-center"
      aria-label="Ir a Bebidas"
    >
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2L13 7h3a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h3L10 2z"/>
      </svg>
    </button>
  );
};

export default BebidasButton;

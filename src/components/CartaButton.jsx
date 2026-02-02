import { useNavigate, useLocation } from 'react-router-dom';

const CartaButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/carta');
  };

  if (location.pathname !== '/bebidas') return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-28 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 z-40 hover:scale-105 flex items-center justify-center"
      aria-label="Volver a Carta"
    >
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
  );
};

export default CartaButton;

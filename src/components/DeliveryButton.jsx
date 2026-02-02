import { useNavigate } from 'react-router-dom';

const DeliveryButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 md:bottom-8 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-accent text-surface rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 z-40 hover:scale-105 flex items-center justify-center"
      aria-label="Ir a la página principal"
    >
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    </button>
  );
};

export default DeliveryButton;

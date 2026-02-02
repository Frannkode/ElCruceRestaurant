import { Link } from 'react-router-dom';
import { BiSolidDrink } from "react-icons/bi";
import { menuData } from '../data/menu.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import DeliveryButton from './DeliveryButton.jsx';

const CartaPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-['Google_Sans'] cartapage">
      {/* BOTÓN VOLVER */}
      <Link
        to="/bebidas"
        className="fixed top-4 left-4 z-50 flex items-center"
      >
        {/* BOTÓN */}
        <div
          className="w-12 h-12 rounded-full bg-black text-white
               flex items-center justify-center shadow-lg"
        >
          <BiSolidDrink size={22} />
        </div>

        {/* ALERTA SIEMPRE VISIBLE */}
        <span
          className="ml-3 px-3 py-1 rounded-full
               bg-black text-white text-sm font-bold
               whitespace-nowrap shadow-md"
        >
          Bebidas!
        </span>
      </Link>


      <style>{`
        .dotted-line {
          background-image: repeating-linear-gradient(to right, #000000 0, #000000 1px, transparent 1px, transparent 4px);
          height: 1px;
        }
        .cartapage * {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: 700 !important;
        }
      `}</style>
      {menuData.categoriesOrder.filter(categoryKey => Array.isArray(menuData[categoryKey])).map((categoryKey, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-xl md:text-xl font-serif font-semibold text-text-primary text-center uppercase tracking-wider mb-8 mt-12 ">
            {categoryKey.replace(/_/g, ' ')}
          </h2>
          <div className="space-y-4">
            {menuData[categoryKey].map((item, itemIndex) => (
              <div key={itemIndex} className="grid grid-rows-[auto auto] gap-1">
                <div className="grid grid-cols-3 items-center min-w-0">
                  <h3 className="text-base md:text-lg font-serif font-medium text-text-primary leading-tight">
                    {item.nombre}
                  </h3>
                  <div className="dotted-line min-w-0"></div>
                  <span className="text-base md:text-lg font-bold text-accent justify-self-end">
                    ${item.precio.toLocaleString()}
                  </span>
                </div>
                {item.descripcion && (
                  <p className="text-gray-600 text-sm leading-relaxed col-start-1 col-end-2">
                    {item.descripcion}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center space-x-4 mb-4">
        <DeliveryButton />
        <WhatsAppButton />
      </div>
    </div>
  );
};
export default CartaPage;

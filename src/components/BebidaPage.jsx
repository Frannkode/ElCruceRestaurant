import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { bebidasData } from '../data/menu.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import DeliveryButton from './DeliveryButton.jsx';

const BebidaPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-['Google_Sans'] cartapage">

      {/* BOTÓN VOLVER */}
      <Link
        to="/carta"
        className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full
                   bg-black text-white flex items-center justify-center
                   shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <IoArrowBack size={22} />
      </Link>

      <style>{`
        .dotted-line {
          background-image: repeating-linear-gradient(
            to right,
            #000000 0,
            #000000 1px,
            transparent 1px,
            transparent 4px
          );
          height: 1px;
        }
        .cartapage * {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: 700 !important;
        }
        .category-title {
          background-color: black;
          color: white;
          padding: 0.5rem 1rem;
          display: inline-block;
          margin: 0 auto;
        }
        .bodega-title {
          background-color: #B8860B;
          color: white;
          padding: 0.25rem 0.75rem;
          display: inline-block;
          margin: 0 auto;
        }
      `}</style>

      {bebidasData.categoriesOrder
        .filter(categoryKey => Array.isArray(bebidasData[categoryKey]))
        .map((categoryKey, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">

            <h2 className="text-xl font-serif text-center uppercase tracking-wider mb-8 mt-12 category-title">
              {categoryKey.replace(/_/g, ' ')}
            </h2>

            <div className="space-y-4">
              {bebidasData[categoryKey].map((entry, entryIndex) => {
                if (entry.bodega && entry.items) {
                  return (
                    <div key={entryIndex} className="mb-8">
                      <h3 className="text-lg font-serif text-center uppercase tracking-wider mb-4 bodega-title">
                        {entry.bodega}
                      </h3>

                      <div className="space-y-4">
                        {entry.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="grid grid-rows-[auto auto] gap-1">
                            <div className="grid grid-cols-3 items-center min-w-0">
                              <h4 className="text-base font-serif leading-tight">
                                {item.nombre}
                              </h4>

                              <div className="dotted-line min-w-0"></div>

                              <span className="text-base font-bold justify-self-end">
                                {item.precio
                                  ? `$${item.precio.toLocaleString()}`
                                  : item.precio_3_8 && item.precio_3_4
                                  ? `3/8: $${item.precio_3_8.toLocaleString()} | 3/4: $${item.precio_3_4.toLocaleString()}`
                                  : item.precio_3_4
                                  ? `3/4: $${item.precio_3_4.toLocaleString()}`
                                  : item.precio_3_8
                                  ? `3/8: $${item.precio_3_8.toLocaleString()}`
                                  : ''}
                              </span>
                            </div>

                            {item.descripcion && (
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.descripcion}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={entryIndex} className="grid grid-rows-[auto auto] gap-1">
                    <div className="grid grid-cols-3 items-center min-w-0">
                      <h3 className="text-base font-serif leading-tight">
                        {entry.nombre}
                      </h3>

                      <div className="dotted-line min-w-0"></div>

                      <span className="text-base font-bold justify-self-end">
                        {entry.precio
                          ? `$${entry.precio.toLocaleString()}`
                          : entry.precio_3_8 && entry.precio_3_4
                          ? `3/8: $${entry.precio_3_8.toLocaleString()} | 3/4: $${entry.precio_3_4.toLocaleString()}`
                          : entry.precio_3_4
                          ? `3/4: $${entry.precio_3_4.toLocaleString()}`
                          : entry.precio_3_8
                          ? `3/8: $${entry.precio_3_8.toLocaleString()}`
                          : ''}
                      </span>
                    </div>

                    {entry.descripcion && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {entry.descripcion}
                      </p>
                    )}
                  </div>
                );
              })}
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

export default BebidaPage;

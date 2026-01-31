import { Link } from 'react-router-dom';
import { ChefHat, Leaf, Home } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-24 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-text-primary mb-6 md:mb-8 leading-tight">
        Bienvenidos a Restaurant El Cruce
      </h1>
      <p className="text-base md:text-xl text-text-secondary mb-8 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
        Gastronomía tradicional con un toque moderno en Reconquista, Santa Fe.
        Descubre nuestros platos elaborados con los mejores ingredientes locales.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-20">
        <div className="bg-surface border border-surface-border rounded-2xl p-6 md:p-10 hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">
          <ChefHat className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3 md:mb-4 mx-auto" />
          <h3 className="text-xl md:text-3xl font-serif font-medium text-text-primary mb-4 md:mb-6">Nuestra Cocina</h3>
          <p className="text-text-secondary leading-relaxed text-sm md:text-base">
            Platos tradicionales de la región preparados con pasión y dedicación.
          </p>
        </div>
        <div className="bg-surface border border-surface-border rounded-2xl p-6 md:p-10 hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">
          <Leaf className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3 md:mb-4 mx-auto" />
          <h3 className="text-xl md:text-3xl font-serif font-medium text-text-primary mb-4 md:mb-6">Ingredientes Frescos</h3>
          <p className="text-text-secondary leading-relaxed text-sm md:text-base">
            Utilizamos productos locales y frescos para garantizar la mejor calidad.
          </p>
        </div>
        <div className="bg-surface border border-surface-border rounded-2xl p-6 md:p-10 hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">
          <Home className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3 md:mb-4 mx-auto" />
          <h3 className="text-xl md:text-3xl font-serif font-medium text-text-primary mb-4 md:mb-6">Ambiente Acogedor</h3>
          <p className="text-text-secondary leading-relaxed text-sm md:text-base">
            Un espacio perfecto para disfrutar de una comida en familia o con amigos.
          </p>
        </div>
      </div>

      <Link
        to="/menu"
        className="inline-block bg-accent text-surface px-8 py-4 md:px-12 md:py-5 rounded-2xl text-base md:text-xl font-medium hover:bg-accent-hover transition-colors duration-300 hover:scale-[1.02] min-h-[48px] md:min-h-[56px]"
      >
        Ver Nuestro Menú
      </Link>
    </div>
  );
};

export default HomePage;

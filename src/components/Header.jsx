import { Link, useLocation } from 'react-router-dom';
import useCartStore from '../stores/cartStore';
import { Home, Menu, ShoppingCart } from 'lucide-react';

const Header = () => {
  const itemCount = useCartStore((state) => state.getItemCount());
  const location = useLocation();

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-surface border-b border-border-subtle sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-8 py-12 lg:py-16">
          <div className="flex justify-center">
            <Link
              to="/"
              className="text-5xl lg:text-6xl font-serif font-bold text-accent hover:text-accent-hover transition-all duration-300 hover:scale-105 drop-shadow-sm"
            >
              Restaurant El Cruce
            </Link>
          </div>
          <nav className="flex justify-center space-x-16 mt-8">
            <Link
              to="/"
              className="flex items-center space-x-3 text-text-primary hover:text-accent transition-all duration-300 text-lg font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              <Home className="w-6 h-6" />
              <span>Inicio</span>
            </Link>
            <Link
              to="/menu"
              className="flex items-center space-x-3 text-text-primary hover:text-accent transition-all duration-300 text-lg font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              <Menu className="w-6 h-6" />
              <span>Menú</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-3 text-text-primary hover:text-accent transition-all duration-300 text-lg font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Carrito</span>
              {itemCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-accent text-surface rounded-full px-2 py-1 text-sm font-bold shadow-lg border-2 border-surface">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border-subtle z-50">
        <div className="flex justify-around items-center py-2 px-4">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors duration-300 min-h-[44px] min-w-[44px] ${
              location.pathname === '/' ? 'text-accent' : 'text-text-secondary hover:text-accent'
            }`}
          >
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Inicio</span>
          </Link>
          <Link
            to="/menu"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors duration-300 min-h-[44px] min-w-[44px] ${
              location.pathname === '/menu' ? 'text-accent' : 'text-text-secondary hover:text-accent'
            }`}
          >
            <Menu className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Menú</span>
          </Link>
          <Link
            to="/cart"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors duration-300 min-h-[44px] min-w-[44px] relative ${
              location.pathname === '/cart' ? 'text-accent' : 'text-text-secondary hover:text-accent'
            }`}
          >
            <ShoppingCart className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Carrito</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-surface rounded-full min-w-[18px] h-[18px] flex items-center justify-center text-xs font-medium">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Spacer */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Header;

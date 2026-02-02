import React, { useState, useEffect } from 'react';
import { menuData } from '../data/menu';
import useCartStore from '../stores/cartStore';
import { UtensilsCrossed, Baby, ChefHat, Wheat, Soup, Plus, Beef, PlusCircle, Carrot, Salad, Cake, MoreHorizontal, Check } from 'lucide-react';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categoriesOrder[0]);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const addItem = useCartStore((state) => state.addItem);

  // Main categories for mobile (prioritized)
  const mainCategories = ["entradas", "principales", "pastas", "postres"];

  // Secondary categories (shown when "Más" is tapped)
  const secondaryCategories = [
    "menu_infantil", "cremas_y_salsas", "agregados", "carnes",
    "adicionales", "guarniciones", "ensaladas", "adicional_postres"
  ];

  // Simplified category names for mobile
  const categoryLabels = {
    entradas: "Entradas",
    menu_infantil: "Menú Niño",
    principales: "Principales",
    pastas: "Pastas",
    cremas_y_salsas: "Salsas",
    agregados: "Agregados",
    carnes: "Carnes",
    adicionales: "Adicionales",
    guarniciones: "Guarniciones",
    ensaladas: "Ensaladas",
    postres: "Postres",
    adicional_postres: "Más Postres",
  };

  // Get visible categories based on mobile state
  const visibleCategories = showCategorySelector
    ? menuData.categoriesOrder
    : mainCategories;

  const handleAddToCart = (item) => {
    addItem(item);
    setToastMessage(`${item.nombre} agregado al carrito`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      entradas: UtensilsCrossed,
      menu_infantil: Baby,
      principales: ChefHat,
      pastas: Wheat,
      cremas_y_salsas: Soup,
      agregados: Plus,
      carnes: Beef,
      adicionales: PlusCircle,
      guarniciones: Carrot,
      ensaladas: Salad,
      postres: Cake,
      adicional_postres: Cake,
    };
    return icons[category] || MoreHorizontal;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 md:py-20">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-text-primary mb-4 md:mb-6 drop-shadow-sm">
          Nuestro Menú
        </h1>
        <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Descubre nuestros platos elaborados con los mejores ingredientes locales
        </p>
      </div>

      {/* Category Filter - Mobile-first design */}
      <div className="mb-8 md:mb-12">
        {/* Mobile: Rappi-style category selector */}
        <div className="md:hidden">
          {!showCategorySelector ? (
            /* Default state: Show only active category as "change category" button */
            <button
              onClick={() => setShowCategorySelector(true)}
              className="w-full flex items-center justify-between px-6 py-5 bg-accent text-surface rounded-2xl text-lg font-semibold shadow-lg border-2 border-accent"
            >
              <div className="flex items-center space-x-4">
                {React.createElement(getCategoryIcon(selectedCategory), { className: 'w-7 h-7' })}
                <span>{categoryLabels[selectedCategory]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Cambiar</span>
                <Plus className="w-5 h-5 rotate-45" />
              </div>
            </button>
          ) : (
            /* Expanded state: Show all categories in one list */
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-text-primary">Categorías</h3>
                <button
                  onClick={() => setShowCategorySelector(false)}
                  className="p-2 rounded-full bg-surface border border-surface-border hover:bg-accent hover:text-surface transition-colors duration-200"
                >
                  <Plus className="w-5 h-5 rotate-45" />
                </button>
              </div>
              {menuData.categoriesOrder.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategorySelector(false);
                  }}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent text-surface shadow-lg border-2 border-accent'
                      : 'bg-surface border border-surface-border text-text-secondary hover:bg-accent hover:text-surface hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {React.createElement(getCategoryIcon(category), { className: 'w-6 h-6' })}
                    <span>{categoryLabels[category]}</span>
                  </div>
                  {selectedCategory === category && (
                    <div className="w-3 h-3 bg-surface rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: Prioritized horizontal layout with main categories */}
        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-4 md:pb-4">
          {/* Main categories always visible */}
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-accent text-surface shadow-xl border-2 border-accent'
                  : 'bg-surface border-2 border-surface-border text-text-primary hover:bg-accent hover:text-surface hover:shadow-lg'
              }`}
            >
              {React.createElement(getCategoryIcon(category), { className: 'w-5 h-5' })}
              <span>{categoryLabels[category]}</span>
            </button>
          ))}

          {/* Secondary categories in a dropdown-style reveal */}
          <div className="relative">
            <button
              onClick={() => setShowCategorySelector(!showCategorySelector)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 ${
                showCategorySelector
                  ? 'bg-accent text-surface shadow-xl border-2 border-accent'
                  : 'bg-surface border-2 border-surface-border text-text-primary hover:bg-accent hover:text-surface hover:shadow-lg'
              }`}
            >
              <Plus className={`w-5 h-5 transition-transform duration-300 ${showCategorySelector ? 'rotate-45' : ''}`} />
              <span>Más categorías</span>
            </button>

            {/* Dropdown for secondary categories */}
            {showCategorySelector && (
              <div className="absolute top-full mt-4 left-0 right-0 bg-surface border-2 border-surface-border rounded-2xl shadow-xl p-4 z-10 min-w-[300px]">
                <div className="grid grid-cols-2 gap-3">
                  {secondaryCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategorySelector(false);
                      }}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        selectedCategory === category
                          ? 'bg-accent text-surface shadow-lg'
                          : 'bg-surface border border-surface-border text-text-secondary hover:bg-accent hover:text-surface hover:shadow-md'
                      }`}
                    >
                      {React.createElement(getCategoryIcon(category), { className: 'w-4 h-4' })}
                      <span>{categoryLabels[category]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-12">
        {menuData.categoriesOrder.map((category) => (
          selectedCategory === category && (
            <div key={category}>
              <div className="border-t border-border-accent mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {menuData[selectedCategory]?.map((item, index) => (
                  <div key={index} className="bg-surface border border-surface-border rounded-2xl p-6 md:p-8 hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 md:mb-4 text-text-primary leading-tight">{item.nombre}</h3>
                    {item.descripcion && (
                      <p className="text-text-secondary mb-6 md:mb-8 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">{item.descripcion}</p>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t border-border-subtle">
                      <span className="text-xl md:text-2xl font-bold text-accent">${item.precio.toLocaleString()}</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-accent text-surface px-6 py-3 rounded-xl hover:bg-accent-hover transition-all duration-300 font-semibold min-h-[48px] text-base shadow-sm hover:shadow-md"
                        aria-label={`Agregar ${item.nombre} al carrito`}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {selectedCategory === 'pastas' && menuData.pasta_note && (
        <p className="text-center text-sm text-text-muted mt-12 italic">{menuData.pasta_note}</p>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div role="status" aria-live="polite" className="toast fixed bottom-24 md:bottom-20 right-4 bg-accent text-surface px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 z-60">
          <Check className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default MenuPage;

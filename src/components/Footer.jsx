const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-subtle py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-serif font-medium mb-4 text-text-primary">Restaurant El Cruce</h3>
            <p className="text-sm text-text-secondary">
              Gastronomía tradicional con un toque moderno en Reconquista, Santa Fe.
            </p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-medium mb-4 text-text-primary">Contacto</h4>
            <p className="text-sm text-text-secondary">Dirección: Reconquista, Santa Fe, Argentina</p>
            <p className="text-sm text-text-secondary">Teléfono: (03482)577245</p>
            <p className="text-sm text-text-secondary">Email: info@restaurantelcruce.com</p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-medium mb-4 text-text-primary">Horarios</h4>
            <p className="text-sm text-text-secondary">Lunes a Domingo: 12:00 - 15:00 y 20:00 - 00:00</p>
            <p className="text-sm text-text-secondary">WiFi: 20405060</p>
          </div>
        </div>
        <div className="border-t border-border-subtle mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-sm text-text-secondary">&copy; 2025 Restaurant El Cruce. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import useCartStore from '../stores/cartStore';
import { Trash2, Minus, Plus, X } from 'lucide-react';

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const safeItems = Array.isArray(cart) ? cart : [];
  const deliveryFee = 200;
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
    observations: '',
    deliveryMethod: 'pickup' // 'pickup' or 'delivery'
  });
  const subtotal = safeItems.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
  const total = subtotal + (customerInfo.deliveryMethod === 'delivery' ? deliveryFee : 0);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'
  const [validationErrors, setValidationErrors] = useState({});
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  // Scroll to top when component mounts (navigating to cart)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (itemNombre, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemNombre);
    } else {
      updateQuantity(itemNombre, newQuantity);
    }
  };

  const handleRemoveItem = (itemNombre) => {
    removeItem(itemNombre);
    setToastMessage(`${itemNombre} eliminado del carrito`);
    setToastType('error');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleSubmit = () => {
    // Validate required fields
    const errors = {};
    if (!customerInfo.name.trim()) errors.name = 'Este campo es obligatorio';
    if (!customerInfo.phone.trim()) errors.phone = 'Este campo es obligatorio';
    if (customerInfo.deliveryMethod === 'delivery' && !customerInfo.address.trim()) errors.address = 'Este campo es obligatorio';

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      // Show validation message and scroll to form
      setShowValidationMessage(true);
      setTimeout(() => setShowValidationMessage(false), 5000);

      // Scroll to form section
      const formElement = document.querySelector('[data-form-section]');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Clear any previous validation state
    setValidationErrors({});
    setShowValidationMessage(false);

    const message = `¡Hola! 👋 Me gustaría hacer un pedido:\n\n🧾 *Detalles del Pedido:*\n${safeItems.map(item => `${item.nombre} x${item.quantity} - $${(item.precio * item.quantity).toLocaleString()}`).join('\n')}\n\n💰 *Total: $${total.toLocaleString()}${customerInfo.deliveryMethod === 'delivery' ? ' (+ Delivery)' : ''}*\n\n👤 *Información del Cliente:*\n${customerInfo.deliveryMethod === 'delivery' ? `📍 Dirección: ${customerInfo.address}\n` : ''}📞 Teléfono: ${customerInfo.phone}\n${customerInfo.observations ? `📝 Observaciones: ${customerInfo.observations}\n` : ''}${customerInfo.deliveryMethod === 'delivery' ? '🚚 Delivery' : '🏪 Retiro en local'}`;

    const whatsappUrl = `https://wa.me/5493482577245?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-6 md:px-8 md:py-16">
      <h1 className="text-2xl md:text-5xl font-serif font-medium text-center text-text-primary mb-6 md:mb-12">Tu Carrito</h1>

      {/* Toast Notification */}
      {toastMessage && (
        <div role="status" aria-live="polite" aria-atomic="true" className={`toast fixed top-4 right-4 px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 z-60 ${toastType === 'success' ? 'bg-accent text-surface' : 'bg-red-500 text-white'}`}>
          <span>{toastMessage}</span>
        </div>
      )}

      {safeItems.length === 0 ? (
        <p className="text-center text-text-secondary text-base md:text-xl">Tu carrito está vacío</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="grid gap-3 md:gap-8 mb-4 md:mb-16">
            {safeItems.map((item) => (
              <div key={item.id} className="bg-surface border border-surface-border rounded-2xl p-3 md:p-8 hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">
                {/* Top Section: Product name and unit price */}
                <div className="flex justify-between items-center mb-2 md:mb-4">
                  <h3 className="font-medium text-text-primary text-base md:text-2xl flex-1 pr-2">{item.nombre}</h3>
                  <p className="text-accent text-sm md:text-base font-medium">${item.precio.toLocaleString()} c/u</p>
                </div>
                {/* Bottom Section: Quantity control and subtotal */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 md:gap-2">
                    {/* Quantity Control */}
                    <div className="flex items-center bg-background border border-surface-border rounded-lg min-h-[40px] md:min-h-[44px]">
                      <button
                        onClick={() => handleQuantityChange(item.nombre, item.quantity - 1)}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-300 rounded-l-lg"
                        aria-label={`Disminuir cantidad de ${item.nombre}`}
                      >
                        <Minus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <span className="font-semibold text-base md:text-lg px-2 md:px-3 min-w-[2rem] md:min-w-[2.5rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.nombre, item.quantity + 1)}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-text-primary hover:text-accent hover:bg-accent/10 transition-colors duration-300 rounded-r-lg"
                        aria-label={`Aumentar cantidad de ${item.nombre}`}
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>
                    {/* Remove Action */}
                    <button
                      onClick={() => handleRemoveItem(item.nombre)}
                      className="text-red-400 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors duration-200 p-2 rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
                      aria-label={`Eliminar ${item.nombre} del carrito`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Product Subtotal */}
                  <span className="font-bold text-accent text-lg md:text-2xl">${(item.precio * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-surface border border-surface-border rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-lg md:text-xl font-medium">
                <span className="text-text-primary">Subtotal:</span>
                <span className="text-text-primary">${subtotal.toLocaleString()}</span>
              </div>
              {customerInfo.deliveryMethod === 'delivery' && (
                <div className="flex justify-between items-center text-lg md:text-xl font-medium">
                  <span className="text-text-primary">Delivery:</span>
                  <span className="text-text-primary">${deliveryFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-2xl md:text-3xl font-medium border-t border-surface-border pt-2">
                <span className="text-text-primary">Total:</span>
                <span className="text-accent">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Customer Form */}
          <div data-form-section className="bg-surface border border-surface-border rounded-2xl p-6 md:p-10 mb-12 md:mb-16 opacity-80 md:opacity-100">
            <h2 className="text-xl md:text-4xl font-serif font-medium mb-6 md:mb-8 text-text-secondary md:text-text-primary">Datos del Cliente</h2>

            {/* Validation Message */}
            {showValidationMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm md:text-base">
                Por favor complete sus datos de contacto antes de enviar el pedido.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-colors duration-300 bg-background ${
                    validationErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-surface-border focus:ring-accent'
                  }`}
                  required
                  aria-label="Nombre completo"
                />
                {validationErrors.name && (
                  <p className="text-red-600 text-sm mt-1">{validationErrors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-colors duration-300 bg-background ${
                    validationErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-surface-border focus:ring-accent'
                  }`}
                  required
                  aria-label="Teléfono"
                />
                {validationErrors.phone && (
                  <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>
                )}
              </div>
              {customerInfo.deliveryMethod === 'delivery' && (
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    className={`border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-colors duration-300 bg-background ${
                      validationErrors.address ? 'border-red-500 focus:ring-red-500' : 'border-surface-border focus:ring-accent'
                    }`}
                    required
                    aria-label="Dirección"
                  />
                  {validationErrors.address && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.address}</p>
                  )}
                </div>
              )}
              <div className="md:col-span-2">
                <textarea
                  placeholder="Observaciones (opcional)"
                  value={customerInfo.observations}
                  onChange={(e) => setCustomerInfo({...customerInfo, observations: e.target.value})}
                  className="border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300 bg-background"
                  rows="3"
                  aria-label="Observaciones"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg md:text-xl font-medium text-text-primary mb-4">Método de Entrega</h3>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCustomerInfo({...customerInfo, deliveryMethod: 'pickup'})}
                    className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all duration-300 ${
                      customerInfo.deliveryMethod === 'pickup'
                        ? 'border-accent bg-accent text-surface'
                        : 'border-surface-border bg-background text-text-primary hover:border-accent/50'
                    }`}
                    aria-label="Retiro en local"
                  >
                    🏪 Retiro en Local
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomerInfo({...customerInfo, deliveryMethod: 'delivery'})}
                    className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all duration-300 ${
                      customerInfo.deliveryMethod === 'delivery'
                        ? 'border-accent bg-accent text-surface'
                        : 'border-surface-border bg-background text-text-primary hover:border-accent/50'
                    }`}
                    aria-label="Delivery"
                  >
                    🚚 Envio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-sm border-t border-border-subtle p-4 z-40" style={{ marginBottom: '72px' }}>
            <button
              onClick={handleSubmit}
              className="w-4/5 mx-auto bg-accent/90 text-surface py-3 rounded-xl hover:bg-accent transition-colors duration-300 font-semibold text-base min-h-[48px] block"
              aria-label="Enviar pedido por WhatsApp"
            >
              Enviar Pedido por WhatsApp
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:flex-row justify-between gap-6">
            <button
              onClick={clearCart}
              className="bg-surface border border-surface-border text-text-primary px-8 py-4 rounded-xl hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors duration-300 font-medium"
              aria-label="Vaciar carrito"
            >
              Vaciar Carrito
            </button>
            <button
              onClick={handleSubmit}
              className="bg-accent text-surface px-8 py-4 rounded-xl hover:bg-accent-hover transition-colors duration-300 font-medium"
              aria-label="Enviar pedido por WhatsApp"
            >
              Enviar Pedido por WhatsApp
            </button>
          </div>

          {/* Mobile Spacer */}
          <div className="md:hidden h-20"></div>
        </>
      )}
    </div>
  );
};

export default CartPage;

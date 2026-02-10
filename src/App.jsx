import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import AdminPage from './components/AdminPage';
import CartaPage from './components/CartaPage';
import BebidaPage from './components/BebidaPage';
import WhatsAppButton from './components/WhatsAppButton';
import BebidasButton from './components/BebidasButton';
import CartaButton from './components/CartaButton';

/**
 * Top-level application component that configures client-side routes and page layout.
 * @returns {JSX.Element} The root JSX element containing the header, routed main content, footer, and WhatsApp button.
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isCartaPage = location.pathname === '/carta';
  const isBebidaPage = location.pathname === '/bebidas';

  return (
    <div className="min-h-screen flex flex-col">
      {!(isCartaPage || isBebidaPage) && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/carta" element={<CartaPage />} />
          <Route path="/bebidas" element={<BebidaPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      {!(isCartaPage || isBebidaPage) && <Footer />}
      {!(isCartaPage || isBebidaPage) && <WhatsAppButton />}
    </div>
  );
}

export default App;
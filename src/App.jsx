import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import AdminPage from './components/AdminPage';
import CartaPage from './components/CartaPage';
import WhatsAppButton from './components/WhatsAppButton';

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

  return (
    <div className="min-h-screen flex flex-col">
      {!isCartaPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/carta" element={<CartaPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      {!isCartaPage && <Footer />}
      {!isCartaPage && <WhatsAppButton />}
    </div>
  );
}

export default App;

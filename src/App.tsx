import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './styles/Brutalist.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutAnujin from './pages/AboutAnujin';
import { Collections, Lookbook, Manifesto, Archive, Shop, Contact } from './pages/OtherPages';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutAnujin />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="grain-overlay"></div>
      <Navigation />
      <AnimatedRoutes />
      <footer style={{ padding: '4rem 2rem', borderTop: '1px solid #333', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.3em' }}>
        © GRE/LDTURE BY M.ANUJIN 2026. ALL RIGHTS RECONSTRUCTED.
      </footer>
    </Router>
  );
}

export default App;

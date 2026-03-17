import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'M.Anujin', path: '/about' },
    { name: 'Collections', path: '/collections' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Archive', path: '/archive' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        padding: '2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        zIndex: 1000,
        mixBlendMode: 'difference'
      }}
    >
      <div className="logo">
        <Link to="/" className="nav-link" style={{ fontSize: '1.5rem', fontWeight: 900 }}>GRE/LDTURE</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 4rem', textAlign: 'right' }}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="nav-link glitch-text">
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;

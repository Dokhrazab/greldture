import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container" style={{ justifyContent: 'center', height: '100vh', padding: 0 }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(45deg, #222, #000)' }}
        />
        
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', zIndex: 10 }}>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: 'clamp(3rem, 15vw, 15rem)', lineHeight: 0.7, marginBottom: '2rem' }}
            className="glitch-text"
          >
            GRE/<br/>LDTURE
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p style={{ letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)' }}>BY M.ANUJIN</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
              <Link to="/collections" className="btn-brutal" style={{ textDecoration: 'none' }}>Enter Atelier</Link>
              <Link to="/about" className="btn-brutal" style={{ textDecoration: 'none' }}>The Designer</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';

const AboutAnujin = () => {
  return (
    <div className="page-container" style={{ paddingTop: '15vh' }}>
      <section style={{ marginBottom: '10rem' }}>
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ fontSize: 'clamp(3rem, 15vw, 10rem)', lineHeight: 0.8, color: 'var(--accent)' }}
        >
          M.ANUJIN
        </motion.h1>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: '2rem', marginLeft: 'auto' }}>
          An avant-garde force in alternative fashion. M.Anujin is not just a designer; 
          she is a constructor of identities. Based in the intersection of digital decay and traditional craftsmanship.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '10rem' }}>
        <div style={{ background: '#111', height: '600px', width: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem' }}>THE VISIONARY</h2>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>"Fashion is the final skin we choose to wear before we become ghosts."</p>
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>AWARDS & RECOGNITION</h3>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid #333' }}>[2024] Global Avant-Garde Designer of the Year</li>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid #333' }}>[2023] Innovation in Sustainable Textile Construction</li>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid #333' }}>[2022] Featured: VOGUE Alternative Frontier</li>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid #333' }}>[2021] Founder of the GRE/LDTURE Collective</li>
          </ul>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h2 style={{ fontSize: '5vw', letterSpacing: '-0.02em' }}>THE MASTER OF RECONSTRUCTION</h2>
        <div className="grid-gallery">
          <div className="gallery-item"><div style={{ padding: '2rem', textAlign: 'left' }}><h4>SCULPTURAL TAILORING</h4><p>Defining new silhouettes through brutalist architecture techniques.</p></div></div>
          <div className="gallery-item"><div style={{ padding: '2rem', textAlign: 'left' }}><h4>DIGITAL WEAVE</h4><p>Integrating smart-fabrics with recycled industrial waste.</p></div></div>
          <div className="gallery-item"><div style={{ padding: '2rem', textAlign: 'left' }}><h4>MANIFESTO PIECES</h4><p>Each garment carries a coded message of resistance.</p></div></div>
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <button className="btn-brutal" style={{ width: '100%', padding: '4rem', fontSize: '2rem' }}>
          WORK WITH THE DESIGNER
        </button>
      </section>
    </div>
  );
};

export default AboutAnujin;

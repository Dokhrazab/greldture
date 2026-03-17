import { useState } from 'react';

const pages = {
  Collections: () => (
    <div className="page-container" style={{ paddingTop: '15vh' }}>
      <h2 style={{ fontSize: '10vw' }}>COLLECTIONS</h2>
      <div className="grid-gallery">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="gallery-item">
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 5 }}>
              <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>SERIES 00{i}</p>
              <h4 style={{ fontSize: '1.2rem' }}>CYBER-GOTH '25</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  Lookbook: () => (
    <div className="page-container" style={{ paddingTop: '15vh' }}>
      <h2 style={{ fontSize: '10vw', textAlign: 'right' }}>LOOKBOOK</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem', marginTop: '5rem' }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ width: i % 2 === 0 ? '60%' : '80%', alignSelf: i % 2 === 0 ? 'flex-end' : 'flex-start', background: '#111', height: '80vh', border: '1px solid #333' }}>
             <div style={{ padding: '2rem' }}>EDITORIAL / 00{i}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  Manifesto: () => (
    <div className="page-container" style={{ paddingTop: '20vh', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '5rem', marginBottom: '4rem', color: 'var(--accent)' }}>MANIFESTO</h2>
      <div style={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <p>1. WE REJECT THE CYCLE OF DISPOSABLE FAST FASHION.</p>
        <p>2. EVERY GARMENT IS A WEAPON OF SELF-EXPRESSION.</p>
        <p>3. BRUTALISM IN TEXTILE. MINIMALISM IN WASTE.</p>
        <p>4. THE FUTURE IS DECONSTRUCTED.</p>
        <p style={{ marginTop: '5rem', opacity: 0.5 }}>— GRE/LDTURE BY M.ANUJIN</p>
      </div>
    </div>
  ),

  Archive: () => (
    <div className="page-container" style={{ paddingTop: '15vh' }}>
      <h2 style={{ fontSize: '10vw' }}>ARCHIVE</h2>
      <table style={{ width: '100%', marginTop: '5rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid white' }}>
            <th style={{ padding: '1rem' }}>YEAR</th>
            <th style={{ padding: '1rem' }}>PROJECT</th>
            <th style={{ padding: '1rem' }}>MEDIUM</th>
          </tr>
        </thead>
        <tbody>
          {[2024, 2023, 2022, 2021, 2020].map(yr => (
            <tr key={yr} style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '1.5rem' }}>{yr}</td>
              <td style={{ padding: '1.5rem' }}>SKETCH SERIES _{yr}</td>
              <td style={{ padding: '1.5rem' }}>RAW ANALOG</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),

  Shop: () => (
    <div className="page-container" style={{ paddingTop: '15vh' }}>
      <h2 style={{ fontSize: '10vw', color: 'var(--accent-secondary)' }}>BOUTIQUE</h2>
      <div className="grid-gallery">
        {[1,2,3,4].map(i => (
          <div key={i} className="gallery-item" style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1rem' }}>
            <h3>INDUSTRIAL VEST v0{i}</h3>
            <p>$450.00</p>
            <button className="btn-brutal" style={{ marginTop: '1rem' }}>ADD TO BAG</button>
          </div>
        ))}
      </div>
    </div>
  ),

  Contact: () => {
    const [sent, setSent] = useState(false);
    return (
      <div className="page-container" style={{ paddingTop: '15vh', alignItems: 'center' }}>
        <h2 style={{ fontSize: '10vw' }}>ATELIER</h2>
        {!sent ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '600px', marginTop: '4rem' }}
          >
            <input type="text" placeholder="NAME" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid white', color: 'white', padding: '1rem', fontSize: '1.2rem' }} required />
            <input type="email" placeholder="EMAIL" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid white', color: 'white', padding: '1rem', fontSize: '1.2rem' }} required />
            <textarea placeholder="MESSAGE" rows={5} style={{ background: 'transparent', border: '1px solid #333', color: 'white', padding: '1rem', fontSize: '1.2rem' }} required />
            <button type="submit" className="btn-brutal">SEND INQUIRY</button>
          </form>
        ) : (
          <div style={{ marginTop: '5rem', fontSize: '2rem', color: 'var(--accent)' }}>MESSAGE TRANSMITTED.</div>
        )}
      </div>
    );
  }
};

export const Collections = pages.Collections;
export const Lookbook = pages.Lookbook;
export const Manifesto = pages.Manifesto;
export const Archive = pages.Archive;
export const Shop = pages.Shop;
export const Contact = pages.Contact;

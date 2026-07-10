import React, { useState } from 'react';

import russiaImg from '../assets/mascots/russia_chibi.png';
import turkeyImg from '../assets/mascots/turkey_chibi.png';
import colombiaImg from '../assets/mascots/colombia_chibi.png';
import chinaImg from '../assets/mascots/china_chibi.png';
import indiaImg from '../assets/mascots/india_chibi.png';
import egyptImg from '../assets/mascots/egypt_chibi.png';
import norwayImg from '../assets/mascots/norway_chibi.png';
import italyImg from '../assets/mascots/italy_chibi.png';
import spainImg from '../assets/mascots/spain_chibi.png';
import mexicoImg from '../assets/mascots/mexico_chibi.png';
import brazilImg from '../assets/mascots/brazil_chibi.png';
import germanyImg from '../assets/mascots/germany_chibi.png';
import japanImg from '../assets/mascots/japan_chibi.png';
import franceImg from '../assets/mascots/france_chibi.png';
import ukImg from '../assets/mascots/uk_chibi.png';
import usaImg from '../assets/mascots/usa_chibi.png';
import greeceImg from '../assets/mascots/greece_chibi.png';
import bosniaImg from '../assets/mascots/bosnia_chibi.png';
const MASCOT_IMAGES = {
  russia: russiaImg,
  turkey: turkeyImg,
  colombia: colombiaImg,
  china: chinaImg,
  india: indiaImg,
  egypt: egyptImg,
  norway: norwayImg,
  italy: italyImg,
  spain: spainImg,
  mexico: mexicoImg,
  brazil: brazilImg,
  germany: germanyImg,
  japan: japanImg,
  france: franceImg,
  uk: ukImg,
  usa: usaImg,
  greece: greeceImg,
  bosnia: bosniaImg
};
export default function PhotoModal({ countryKey, countryName, countryColor, countryFlag, mascotName, photoBg, photoScene, userEmail, onClose }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const storageKey = `photos_${userEmail}`;
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    // Don't duplicate for same country
    if (!existing.find(p => p.country === countryKey)) {
      existing.push({
        country: countryKey,
        countryName,
        mascotName,
        scene: photoScene,
        liked: true,
        date: new Date().toLocaleDateString('tr-TR')
      });
      localStorage.setItem(storageKey, JSON.stringify(existing));
    }
    setSaved(true);
  };

  const bgImage = `/images/${countryKey}.jpg`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px', textAlign: 'center', border: `4px solid ${countryColor}` }}>
        <button className="modal-close-btn" onClick={onClose} style={{ zIndex: 10 }}>&times;</button>
        <h2 style={{ color: countryColor, marginBottom: '8px', fontSize: '32px' }}>📸 Fotoğraf Çekin!</h2>
        <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '18px', fontWeight: '500' }}>{countryName} hatırası olarak maskotla fotoğraf çekin!</p>

        {/* Photo Frame */}
        <div style={{
          background: '#ffffff',
          border: `12px solid #ffffff`,
          borderRadius: '16px', position: 'relative',
          overflow: 'hidden', marginBottom: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          transform: 'rotate(-2deg)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
        >
          {/* Background Scene (Real Image) */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
            zIndex: 0
          }}></div>

          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: `linear-gradient(to bottom, rgba(255,255,255,0.2), ${countryColor}cc)`,
            zIndex: 1
          }}></div>

          <div style={{ padding: '30px', position: 'relative', zIndex: 2 }}>
            {/* Scene Label */}
            <div style={{
              background: 'rgba(255,255,255,0.95)', borderRadius: '20px',
              padding: '6px 16px', fontSize: '14px', fontWeight: '800',
              color: countryColor, display: 'inline-block', marginBottom: '40px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              📍 {photoScene} {photoBg}
            </div>

            {/* Characters */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '24px' }}>
              {/* Mascot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '140px', height: '140px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <img src={MASCOT_IMAGES[countryKey]} alt={mascotName} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff', marginTop: '8px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{mascotName}</span>
              </div>

              {/* Peace sign between */}
              <div style={{ fontSize: '42px', marginBottom: '40px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))', animation: 'float-delayed 3s ease-in-out infinite' }}>✌️</div>

              {/* User */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '130px', height: '130px', borderRadius: '50%',
                  background: '#f8fafc', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '64px', border: '6px solid #ffffff',
                  boxShadow: '0 10px 15px rgba(0,0,0,0.2)'
                }}>
                  🧑‍✈️
                </div>
                <span style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff', marginTop: '8px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Sen</span>
              </div>
            </div>
          </div>
          
          {/* Polaroid style bottom text */}
          <div style={{
            background: '#ffffff',
            padding: '12px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 3,
            borderTop: '2px solid rgba(0,0,0,0.05)'
          }}>
            <span style={{ fontFamily: '"Kalam", cursive, "Segoe UI"', fontSize: '20px', color: '#334155', fontWeight: 'bold' }}>
              {countryName} Hatırası - {new Date().toLocaleDateString('tr-TR')}
            </span>
          </div>
        </div>

        {/* Save Button */}
        {!saved ? (
          <button
            onClick={handleSave}
            style={{
              padding: '16px 36px', borderRadius: '24px', border: 'none',
              background: countryColor, color: '#fff', fontSize: '1.2rem',
              fontWeight: '800', cursor: 'pointer',
              boxShadow: `0 8px 24px ${countryColor}66`,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            ❤️ Beğen & Koleksiyona Kaydet
          </button>
        ) : (
          <div style={{
            background: '#fef2f2', border: '3px dashed #fca5a5', borderRadius: '24px',
            padding: '16px', color: '#dc2626', fontWeight: '800', fontSize: '1.1rem',
            animation: 'bounce-celebrate 0.5s ease'
          }}>
            ❤️ Fotoğraf koleksiyonuna kaydedildi!
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '520px', textAlign: 'center' }}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ color: countryColor, marginBottom: '4px' }}>📸 Fotoğraf Çekin!</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>{countryName} hatırası olarak maskotla fotoğraf çekin!</p>

        {/* Photo Frame */}
        <div style={{
          background: `linear-gradient(135deg, ${countryColor}22 0%, ${countryColor}11 100%)`,
          border: `4px solid ${countryColor}`,
          borderRadius: '20px', padding: '24px', position: 'relative',
          overflow: 'hidden', marginBottom: '20px'
        }}>
          {/* Background Scene */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '120px', opacity: 0.1, pointerEvents: 'none'
          }}>
            {photoBg}
          </div>

          {/* Scene Label */}
          <div style={{
            background: 'rgba(255,255,255,0.85)', borderRadius: '20px',
            padding: '4px 14px', fontSize: '0.8rem', fontWeight: '700',
            color: countryColor, display: 'inline-block', marginBottom: '16px'
          }}>
            📍 {photoScene}
          </div>

          {/* Characters */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '16px', position: 'relative', zIndex: 2 }}>
            {/* Mascot */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div style={{
                width: '90px', height: '90px', borderRadius: '50%',
                background: countryColor, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '42px', border: '3px solid #fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                {countryFlag}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#475569', marginTop: '6px' }}>{mascotName}</span>
            </div>

            {/* Peace sign between */}
            <div style={{ fontSize: '28px', marginBottom: '30px' }}>✌️</div>

            {/* User */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div style={{
                width: '90px', height: '90px', borderRadius: '50%',
                background: '#e2e8f0', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '42px', border: '3px solid #fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                🧑‍✈️
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#475569', marginTop: '6px' }}>Sen</span>
            </div>
          </div>

          {/* Camera flash effect */}
          <div style={{ fontSize: '20px', marginTop: '12px', color: '#94a3b8' }}>📷 Çık!</div>
        </div>

        {/* Save Button */}
        {!saved ? (
          <button
            onClick={handleSave}
            style={{
              padding: '14px 32px', borderRadius: '14px', border: 'none',
              background: countryColor, color: '#fff', fontSize: '1rem',
              fontWeight: '700', cursor: 'pointer',
              boxShadow: `0 4px 14px ${countryColor}44`,
              transition: 'all 0.2s ease'
            }}
          >
            ❤️ Beğen & Kaydet
          </button>
        ) : (
          <div style={{
            background: '#fef2f2', border: '2px solid #fecaca', borderRadius: '14px',
            padding: '14px', color: '#dc2626', fontWeight: '700'
          }}>
            ❤️ Fotoğraf koleksiyonuna kaydedildi!
          </div>
        )}
      </div>
    </div>
  );
}

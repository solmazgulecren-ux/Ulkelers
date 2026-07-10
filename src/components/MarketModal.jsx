import React, { useState } from 'react';

export default function MarketModal({ countryKey, countryName, countryColor, marketItems, userEmail, onClose, onPurchase }) {
  const [purchasedIndex, setPurchasedIndex] = useState(null);

  const handleBuy = (item, index) => {
    setPurchasedIndex(index);
    const storageKey = `purchases_${userEmail}`;
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const newPurchase = { country: countryKey, item: `${item.icon} ${item.name}`, price: item.price, date: new Date().toLocaleDateString('tr-TR') };
    existing.push(newPurchase);
    localStorage.setItem(storageKey, JSON.stringify(existing));
    if (onPurchase) onPurchase(newPurchase);

    setTimeout(() => setPurchasedIndex(null), 1500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ color: countryColor, textAlign: 'center', marginBottom: '4px' }}>🛒 {countryName} Pazarı</h2>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '24px' }}>Meşhur lezzetlerden satın al, koleksiyonuna ekle!</p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px'
        }}>
          {marketItems.map((item, i) => (
            <div key={i} style={{
              background: purchasedIndex === i ? '#f0fdf4' : '#f8fafc',
              border: `2px solid ${purchasedIndex === i ? '#86efac' : '#e2e8f0'}`,
              borderRadius: '16px', padding: '16px',
              display: 'flex', alignItems: 'center', gap: '14px',
              transition: 'all 0.3s ease'
            }}>
              <span style={{ fontSize: '36px' }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '0.95rem' }}>{item.name}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>💰 {item.price} Altın</div>
              </div>
              <button
                onClick={() => handleBuy(item, i)}
                disabled={purchasedIndex === i}
                style={{
                  padding: '8px 14px', borderRadius: '10px', border: 'none',
                  background: purchasedIndex === i ? '#22c55e' : countryColor,
                  color: '#fff', fontWeight: '700', fontSize: '0.8rem',
                  cursor: purchasedIndex === i ? 'default' : 'pointer',
                  transition: 'all 0.2s ease', whiteSpace: 'nowrap'
                }}
              >
                {purchasedIndex === i ? '✅ Alındı!' : '🛒 Satın Al'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function MarketModal({ countryKey, countryName, countryColor, marketItems, userEmail, userGold, updateGold, onClose, onPurchase }) {
  const [purchasedIndex, setPurchasedIndex] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleBuy = (item, index) => {
    if (userGold < item.price) {
      setErrorMsg(`Bu ürünü almak için ${item.price - userGold} daha altına ihtiyacın var! Mini oyun oynayarak altın kazanabilirsin.`);
      return;
    }

    setPurchasedIndex(index);
    updateGold(-item.price, `Pazardan satın alındı: ${item.name}`);

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
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px', border: `4px solid ${countryColor}` }}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ color: countryColor, textAlign: 'center', marginBottom: '8px', fontSize: '32px' }}>🛒 {countryName} Pazarı</h2>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '28px', fontSize: '18px', fontWeight: '500' }}>Meşhur lezzetlerden satın al, koleksiyonuna ekle!</p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'
        }}>
          {marketItems.map((item, i) => (
            <div key={i} 
                 className={`market-card ${purchasedIndex === i ? 'animate-celebrate' : ''}`}
                 style={{
                   background: purchasedIndex === i ? '#f0fdf4' : '#ffffff',
                   border: `3px solid ${purchasedIndex === i ? '#4ade80' : '#e2e8f0'}`,
                   borderRadius: '24px', padding: '16px',
                   display: 'flex', alignItems: 'center', gap: '14px',
                   transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                   cursor: 'pointer',
                   boxShadow: purchasedIndex === i ? '0 8px 16px rgba(74,222,128,0.2)' : '0 4px 12px rgba(0,0,0,0.03)',
                   transform: purchasedIndex === i ? 'scale(1.05)' : 'scale(1)'
            }}>
              <div style={{ 
                fontSize: '48px', 
                background: purchasedIndex === i ? '#dcfce7' : '#f8fafc',
                borderRadius: '50%',
                width: '70px', height: '70px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                transition: 'all 0.3s ease'
              }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '800', color: '#1e293b', fontSize: '1.1rem', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ color: '#d97706', fontSize: '0.9rem', fontWeight: '700' }}>💰 {item.price} Altın</div>
              </div>
              <button
                onClick={() => handleBuy(item, i)}
                disabled={purchasedIndex === i}
                style={{
                  padding: '10px 16px', borderRadius: '14px', border: 'none',
                  background: purchasedIndex === i ? '#22c55e' : countryColor,
                  color: '#fff', fontWeight: '800', fontSize: '0.9rem',
                  cursor: purchasedIndex === i ? 'default' : 'pointer',
                  transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                  boxShadow: `0 4px 10px ${purchasedIndex === i ? '#22c55e' : countryColor}66`
                }}
              >
                {purchasedIndex === i ? '✅ Alındı!' : '🛒 Al'}
              </button>
            </div>
          ))}
        </div>
        
        <style>{`
          .market-card:hover {
            transform: translateY(-5px);
            border-color: ${countryColor};
            box-shadow: 0 10px 20px ${countryColor}33;
          }
          .market-card:hover div:first-child {
            transform: scale(1.1) rotate(5deg);
          }
        `}</style>
      </div>

      {errorMsg && (
        <div className="modal-backdrop" style={{ zIndex: 1100 }} onClick={() => setErrorMsg(null)}>
          <div className="modal-content" style={{ maxWidth: '400px', textAlign: 'center', color: '#f8fafc' }} onClick={e => e.stopPropagation()}>
            <h2>⚠️ Yetersiz Altın</h2>
            <p style={{ marginTop: '10px' }}>{errorMsg}</p>
            <button 
              onClick={() => setErrorMsg(null)}
              style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#3b82f6', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
            >Tamam</button>
          </div>
        </div>
      )}
    </div>
  );
}

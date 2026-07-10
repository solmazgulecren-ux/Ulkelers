import React, { useState } from 'react';

export default function SpinWheelModal({ countryKey, countryName, countryColor, prizes, userEmail, onClose, onWin }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState(null);

  const segmentAngle = 360 / prizes.length;

  const handleSpin = () => {
    if (spinning) return;
    setWonPrize(null);
    setSpinning(true);

    const extraSpins = 360 * (5 + Math.floor(Math.random() * 3));
    const randomAngle = Math.random() * 360;
    const totalRotation = rotation + extraSpins + randomAngle;
    setRotation(totalRotation);

    setTimeout(() => {
      const normalizedAngle = totalRotation % 360;
      const winIndex = Math.floor(((360 - normalizedAngle + segmentAngle / 2) % 360) / segmentAngle) % prizes.length;
      const prize = prizes[winIndex];
      setWonPrize(prize);
      setSpinning(false);

      // Save to localStorage
      const storageKey = `gifts_${userEmail}`;
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
      const newGift = { country: countryKey, item: `${prize.icon} ${prize.name}`, date: new Date().toLocaleDateString('tr-TR') };
      existing.push(newGift);
      localStorage.setItem(storageKey, JSON.stringify(existing));
      if (onWin) onWin(newGift);
    }, 4000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', textAlign: 'center' }}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ color: countryColor, marginBottom: '8px' }}>🎡 Çark Çevir Hediye Kazan!</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>{countryName} çarkını çevir ve meşhur bir hediye kazan!</p>

        {/* Wheel */}
        <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto 20px' }}>
          {/* Pointer */}
          <div style={{
            position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '28px', zIndex: 10, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}>▼</div>

          {/* Wheel SVG */}
          <svg
            width="300" height="300" viewBox="0 0 300 300"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
            }}
          >
            {prizes.map((prize, i) => {
              const startAngle = i * segmentAngle;
              const endAngle = startAngle + segmentAngle;
              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;
              const x1 = 150 + 140 * Math.cos(startRad);
              const y1 = 150 + 140 * Math.sin(startRad);
              const x2 = 150 + 140 * Math.cos(endRad);
              const y2 = 150 + 140 * Math.sin(endRad);
              const largeArc = segmentAngle > 180 ? 1 : 0;
              const midAngle = ((startAngle + endAngle) / 2) * Math.PI / 180;
              const textX = 150 + 90 * Math.cos(midAngle);
              const textY = 150 + 90 * Math.sin(midAngle);
              const colors = ['#fbbf24', '#fb923c', '#f87171', '#a78bfa', '#60a5fa', '#34d399'];

              return (
                <g key={i}>
                  <path
                    d={`M150,150 L${x1},${y1} A140,140 0 ${largeArc},1 ${x2},${y2} Z`}
                    fill={colors[i % colors.length]}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x={textX} y={textY}
                    textAnchor="middle" dominantBaseline="central"
                    fontSize="24"
                    transform={`rotate(${(startAngle + endAngle) / 2}, ${textX}, ${textY})`}
                  >
                    {prize.icon}
                  </text>
                </g>
              );
            })}
            <circle cx="150" cy="150" r="22" fill="#1e293b" />
            <circle cx="150" cy="150" r="18" fill="#fff" />
          </svg>
        </div>

        {/* Spin Button */}
        {!wonPrize && (
          <button
            onClick={handleSpin}
            disabled={spinning}
            style={{
              padding: '14px 36px', borderRadius: '16px', border: 'none',
              background: spinning ? '#94a3b8' : countryColor, color: '#fff',
              fontSize: '1.1rem', fontWeight: '700', cursor: spinning ? 'not-allowed' : 'pointer',
              boxShadow: `0 4px 14px ${countryColor}44`, transition: 'all 0.2s ease'
            }}
          >
            {spinning ? '🎡 Çark Dönüyor...' : '🎡 Çarkı Çevir!'}
          </button>
        )}

        {/* Won Prize */}
        {wonPrize && (
          <div style={{
            background: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '16px',
            padding: '20px', marginTop: '10px'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>{wonPrize.icon}</div>
            <h3 style={{ color: '#166534', margin: '0 0 4px' }}>Tebrikler! 🎉</h3>
            <p style={{ color: '#15803d', margin: 0, fontWeight: '600' }}>
              <strong>{wonPrize.name}</strong> kazandın! Koleksiyonuna eklendi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

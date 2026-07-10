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
    const randomPrizeIndex = Math.floor(Math.random() * prizes.length);
    
    // SVG 0 derece saat 3 yönündedir. Okumuz ise saat 12 yönünde (yani 270 derece).
    // Kazanılan dilimin orta açısını hesaplayıp, o açıyı tam olarak 270 dereceye (okun altına) getirecek dönüşü buluyoruz.
    const startAngle = randomPrizeIndex * segmentAngle;
    const endAngle = startAngle + segmentAngle;
    const midAngle = (startAngle + endAngle) / 2;
    
    // Okun tam üstüne gelmesi için gereken rotasyon
    const targetRotation = extraSpins + (270 - midAngle);
    
    setRotation(targetRotation);

    setTimeout(() => {
      const prize = prizes[randomPrizeIndex];
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
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', textAlign: 'center', border: `4px solid ${countryColor}` }}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ color: countryColor, marginBottom: '8px', fontSize: '32px' }}>🎡 Çark Çevir Hediye Kazan!</h2>
        <p style={{ color: '#64748b', marginBottom: '20px', fontSize: '18px', fontWeight: '500' }}>{countryName} çarkını çevir ve meşhur bir hediye kazan!</p>

        {/* Wheel */}
        <div style={{ position: 'relative', width: '320px', height: '320px', margin: '0 auto 20px' }}>
          {/* Pointer */}
          <div style={{
            position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '36px', zIndex: 10, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))'
          }}>👇</div>

          {/* Wheel SVG */}
          <svg
            width="320" height="320" viewBox="0 0 320 320"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
            }}
          >
            {/* Outer decorative rim */}
            <circle cx="160" cy="160" r="155" fill="#f8fafc" stroke={countryColor} strokeWidth="10" strokeDasharray="20 10" />
            
            {prizes.map((prize, i) => {
              const startAngle = i * segmentAngle;
              const endAngle = startAngle + segmentAngle;
              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;
              const x1 = 160 + 145 * Math.cos(startRad);
              const y1 = 160 + 145 * Math.sin(startRad);
              const x2 = 160 + 145 * Math.cos(endRad);
              const y2 = 160 + 145 * Math.sin(endRad);
              const largeArc = segmentAngle > 180 ? 1 : 0;
              const midAngle = ((startAngle + endAngle) / 2) * Math.PI / 180;
              const textX = 160 + 95 * Math.cos(midAngle);
              const textY = 160 + 95 * Math.sin(midAngle);
              const colors = ['#fbbf24', '#fb923c', '#f87171', '#a78bfa', '#60a5fa', '#34d399'];

              return (
                <g key={i}>
                  <path
                    d={`M160,160 L${x1},${y1} A145,145 0 ${largeArc},1 ${x2},${y2} Z`}
                    fill={colors[i % colors.length]}
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  {/* Decorative dots inside segment */}
                  <circle cx={160 + 130 * Math.cos(midAngle)} cy={160 + 130 * Math.sin(midAngle)} r="4" fill="rgba(255,255,255,0.6)" />
                  
                  <text
                    x={textX} y={textY}
                    textAnchor="middle" dominantBaseline="central"
                    fontSize="32"
                    transform={`rotate(${(startAngle + endAngle) / 2}, ${textX}, ${textY})`}
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                  >
                    {prize.icon}
                  </text>
                </g>
              );
            })}
            
            {/* Center piece */}
            <circle cx="160" cy="160" r="32" fill={countryColor} stroke="#ffffff" strokeWidth="6" />
            <text x="160" y="160" textAnchor="middle" dominantBaseline="central" fontSize="24" fill="#ffffff">⭐</text>
          </svg>
        </div>

        {/* Spin Button */}
        {!wonPrize && (
          <button
            onClick={handleSpin}
            disabled={spinning}
            className={spinning ? "" : "animate-float"}
            style={{
              padding: '16px 42px', borderRadius: '24px', border: 'none',
              background: spinning ? '#94a3b8' : countryColor, color: '#fff',
              fontSize: '1.25rem', fontWeight: '800', cursor: spinning ? 'not-allowed' : 'pointer',
              boxShadow: `0 8px 24px ${countryColor}66`, transition: 'all 0.2s ease',
              borderBottom: spinning ? 'none' : '4px solid rgba(0,0,0,0.2)'
            }}
          >
            {spinning ? '🎡 Çark Dönüyor...' : '🎡 Çarkı Çevir!'}
          </button>
        )}

        {/* Won Prize */}
        {wonPrize && (
          <div style={{
            background: '#f0fdf4', border: '3px dashed #4ade80', borderRadius: '24px',
            padding: '24px', marginTop: '10px', animation: 'bounce-celebrate 0.6s ease'
          }}>
            <div className="animate-celebrate" style={{ fontSize: '64px', marginBottom: '12px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>
              {wonPrize.icon}
            </div>
            <h3 style={{ color: '#16a34a', margin: '0 0 8px', fontSize: '28px', fontWeight: '900' }}>Tebrikler! 🎉</h3>
            <p style={{ color: '#15803d', margin: 0, fontWeight: '700', fontSize: '18px' }}>
              <strong style={{ color: countryColor }}>{wonPrize.name}</strong> kazandın! Koleksiyonuna eklendi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

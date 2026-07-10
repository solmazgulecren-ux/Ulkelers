import React, { useState, useEffect } from 'react';

export default function CollectionScreen({ userEmail }) {
  const [gifts, setGifts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [notes, setNotes] = useState({});
  const [editingNote, setEditingNote] = useState(null);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    setGifts(JSON.parse(localStorage.getItem(`gifts_${userEmail}`) || '[]'));
    setPurchases(JSON.parse(localStorage.getItem(`purchases_${userEmail}`) || '[]'));
    setPhotos(JSON.parse(localStorage.getItem(`photos_${userEmail}`) || '[]'));
    setNotes(JSON.parse(localStorage.getItem(`notes_${userEmail}`) || '{}'));
  }, [userEmail]);

  const handleSaveNote = (countryKey) => {
    const updated = { ...notes, [countryKey]: noteText };
    setNotes(updated);
    localStorage.setItem(`notes_${userEmail}`, JSON.stringify(updated));
    setEditingNote(null);
    setNoteText('');
  };

  // Group items by country
  const allCountries = new Set([
    ...gifts.map(g => g.country),
    ...purchases.map(p => p.country),
    ...photos.map(p => p.country),
    ...Object.keys(notes).filter(k => notes[k])
  ]);

  const COUNTRY_INFO = {
    turkey: { name: 'Türkiye', flag: '🇹🇷', mascot: 'Türk Maslahat' },
    spain: { name: 'İspanya', flag: '🇪🇸', mascot: 'İspanyol Dansçı' },
    italy: { name: 'İtalya', flag: '🇮🇹', mascot: 'İtalyan Şef' },
    russia: { name: 'Rusya', flag: '🇷🇺', mascot: 'Misha (Rus Ayısı)' },
    colombia: { name: 'Kolombiya', flag: '🇨🇴', mascot: 'Kolombiya Kahvecisi' },
    india: { name: 'Hindistan', flag: '🇮🇳', mascot: 'Hindistan Fili' },
    egypt: { name: 'Mısır', flag: '🇪🇬', mascot: 'Mısır Firavunu' },
    norway: { name: 'Norveç', flag: '🇳🇴', mascot: 'Norveç Vikinki' },
    mexico: { name: 'Meksika', flag: '🇲🇽', mascot: 'Meksikalı Amigo' },
    brazil: { name: 'Brezilya', flag: '🇧🇷', mascot: 'Brezilyalı Sambacı' },
    germany: { name: 'Almanya', flag: '🇩🇪', mascot: 'Alman Hans' },
    china: { name: 'Çin', flag: '🇨🇳', mascot: 'Çin Pandası' },
  };

  if (allCountries.size === 0) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '72px', marginBottom: '20px' }}>🎒</div>
        <h2 style={{ color: '#1e293b', margin: '0 0 8px' }}>Koleksiyonun Henüz Boş</h2>
        <p style={{ color: '#64748b', maxWidth: '400px' }}>
          Ülkeleri keşfet, çark çevir, pazardan alışveriş yap ve fotoğraf çekin! Kazandığın her şey burada görünecek.
        </p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, padding: '30px 40px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
      <h2 style={{ color: '#1e293b', marginBottom: '24px', textAlign: 'center' }}>🎒 Koleksiyonum</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {[...allCountries].map(countryKey => {
          const info = COUNTRY_INFO[countryKey] || { name: countryKey, flag: '🌍', mascot: '' };
          const countryGifts = gifts.filter(g => g.country === countryKey);
          const countryPurchases = purchases.filter(p => p.country === countryKey);
          const countryPhoto = photos.find(p => p.country === countryKey);
          const countryNote = notes[countryKey] || '';

          return (
            <div key={countryKey} style={{
              background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0',
              padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}>
              {/* Country Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
                <span style={{ fontSize: '36px' }}>{info.flag}</span>
                <div>
                  <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.3rem' }}>{info.name}</h3>
                  <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Maskot: {info.mascot}</span>
                </div>
              </div>

              {/* Gifts */}
              {countryGifts.length > 0 && (
                <div style={{ marginBottom: '14px' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#d97706', fontSize: '0.95rem' }}>🎡 Çarktan Kazanılanlar</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {countryGifts.map((g, i) => (
                      <span key={i} style={{
                        background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px',
                        padding: '6px 12px', fontSize: '0.85rem', fontWeight: '600', color: '#92400e'
                      }}>
                        {g.item} <span style={{ color: '#d4a00a', fontSize: '0.7rem' }}>({g.date})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Purchases */}
              {countryPurchases.length > 0 && (
                <div style={{ marginBottom: '14px' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#2563eb', fontSize: '0.95rem' }}>🛒 Pazardan Satın Alınanlar</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {countryPurchases.map((p, i) => (
                      <span key={i} style={{
                        background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px',
                        padding: '6px 12px', fontSize: '0.85rem', fontWeight: '600', color: '#1e40af'
                      }}>
                        {p.item} <span style={{ color: '#3b82f6', fontSize: '0.7rem' }}>({p.date})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Photo */}
              {countryPhoto && (
                <div style={{
                  marginBottom: '14px', background: '#fef2f2', border: '1px solid #fecaca',
                  borderRadius: '14px', padding: '14px', display: 'flex', alignItems: 'center', gap: '14px'
                }}>
                  <span style={{ fontSize: '28px' }}>📸</span>
                  <div>
                    <div style={{ fontWeight: '700', color: '#dc2626', fontSize: '0.9rem' }}>
                      ❤️ {countryPhoto.scene} - Fotoğraf Çekildi!
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{countryPhoto.date}</div>
                  </div>
                </div>
              )}

              {/* Note Section */}
              <div style={{ marginTop: '10px' }}>
                <h4 style={{ margin: '0 0 8px', color: '#475569', fontSize: '0.9rem' }}>📝 Deneyim Notlarım</h4>
                {editingNote === countryKey ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <textarea
                      value={noteText}
                      onChange={e => setNoteText(e.target.value)}
                      placeholder="Bu ülkeyle ilgili deneyimlerini yaz..."
                      style={{
                        width: '100%', minHeight: '80px', borderRadius: '12px',
                        border: '2px solid #e2e8f0', padding: '12px', fontSize: '0.9rem',
                        resize: 'vertical', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => handleSaveNote(countryKey)}
                        style={{
                          padding: '8px 18px', borderRadius: '10px', border: 'none',
                          background: '#22c55e', color: '#fff', fontWeight: '700',
                          cursor: 'pointer', fontSize: '0.85rem'
                        }}
                      >
                        💾 Kaydet
                      </button>
                      <button
                        onClick={() => { setEditingNote(null); setNoteText(''); }}
                        style={{
                          padding: '8px 18px', borderRadius: '10px', border: '1px solid #e2e8f0',
                          background: '#fff', color: '#64748b', fontWeight: '700',
                          cursor: 'pointer', fontSize: '0.85rem'
                        }}
                      >
                        İptal
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {countryNote ? (
                      <div style={{
                        background: '#f8fafc', borderRadius: '12px', padding: '12px',
                        border: '1px solid #e2e8f0', color: '#334155', fontSize: '0.9rem',
                        lineHeight: '1.5', marginBottom: '8px', whiteSpace: 'pre-wrap'
                      }}>
                        {countryNote}
                      </div>
                    ) : null}
                    <button
                      onClick={() => { setEditingNote(countryKey); setNoteText(countryNote); }}
                      style={{
                        padding: '6px 14px', borderRadius: '8px', border: '1px dashed #cbd5e1',
                        background: '#fff', color: '#64748b', fontWeight: '600',
                        cursor: 'pointer', fontSize: '0.8rem'
                      }}
                    >
                      {countryNote ? '✏️ Notu Düzenle' : '➕ Not Ekle'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

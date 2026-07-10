import React, { useState, useEffect } from 'react';

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

const NEW_MASCOTS = ['japan', 'france', 'uk', 'usa', 'greece', 'bosnia'];
export default function CollectionScreen({ userEmail }) {
  const [gifts, setGifts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [notes, setNotes] = useState({});
  const [editingNote, setEditingNote] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Görüntülenecek fotoğraf

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

  const handleDeleteGift = (countryKey, index) => {
    const countryGifts = gifts.filter(g => g.country === countryKey);
    const itemToDelete = countryGifts[index];
    const updated = gifts.filter(g => g !== itemToDelete);
    setGifts(updated);
    localStorage.setItem(`gifts_${userEmail}`, JSON.stringify(updated));
  };

  const handleDeletePurchase = (countryKey, index) => {
    const countryPurchases = purchases.filter(p => p.country === countryKey);
    const itemToDelete = countryPurchases[index];
    const updated = purchases.filter(p => p !== itemToDelete);
    setPurchases(updated);
    localStorage.setItem(`purchases_${userEmail}`, JSON.stringify(updated));
  };

  const handleDeletePhoto = (countryKey) => {
    const updated = photos.filter(p => p.country !== countryKey);
    setPhotos(updated);
    localStorage.setItem(`photos_${userEmail}`, JSON.stringify(updated));
  };

  const allCountries = new Set([
    ...gifts.map(g => g.country),
    ...purchases.map(p => p.country),
    ...photos.map(p => p.country),
    ...Object.keys(notes).filter(k => notes[k])
  ]);

  const COUNTRY_INFO = {
    turkey: { name: 'Türkiye', flag: '🇹🇷', mascot: 'Türk Maslahat', color: '#DC2626' },
    spain: { name: 'İspanya', flag: '🇪🇸', mascot: 'İspanyol Dansçı', color: '#EC4899' },
    italy: { name: 'İtalya', flag: '🇮🇹', mascot: 'İtalyan Şef', color: '#10B981' },
    russia: { name: 'Rusya', flag: '🇷🇺', mascot: 'Misha', color: '#3B82F6' },
    colombia: { name: 'Kolombiya', flag: '🇨🇴', mascot: 'Kolombiya Kahvecisi', color: '#ca8a04' },
    india: { name: 'Hindistan', flag: '🇮🇳', mascot: 'Hindistan Fili', color: '#F97316' },
    egypt: { name: 'Mısır', flag: '🇪🇬', mascot: 'Mısır Firavunu', color: '#EAB308' },
    norway: { name: 'Norveç', flag: '🇳🇴', mascot: 'Norveç Vikinki', color: '#4F46E5' },
    mexico: { name: 'Meksika', flag: '🇲🇽', mascot: 'Meksikalı Amigo', color: '#059669' },
    brazil: { name: 'Brezilya', flag: '🇧🇷', mascot: 'Brezilyalı Sambacı', color: '#009b3a' },
    germany: { name: 'Almanya', flag: '🇩🇪', mascot: 'Alman Hans', color: '#CA8A04' },
    china: { name: 'Çin', flag: '🇨🇳', mascot: 'Çin Pandası', color: '#EF4444' },
    japan: { name: 'Japonya', flag: '🇯🇵', mascot: 'Samuray Kedisi', color: '#EF4444' },
    france: { name: 'Fransa', flag: '🇫🇷', mascot: 'Ressam Kurbağa', color: '#2563EB' },
    uk: { name: 'İngiltere', flag: '🇬🇧', mascot: 'Kraliyet Askeri', color: '#1D4ED8' },
    usa: { name: 'Amerika', flag: '🇺🇸', mascot: 'Kartal Sam', color: '#B91C1C' },
    greece: { name: 'Yunanistan', flag: '🇬🇷', mascot: 'Zeus Heykeli', color: '#0284C7' },
    bosnia: { name: 'Bosna Hersek', flag: '🇧🇦', mascot: 'Boşnak Gezgini', color: '#2563EB' },
  };

  if (allCountries.size === 0) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
        <div className="animate-float" style={{ fontSize: '96px', marginBottom: '20px' }}>🎒</div>
        <h2 style={{ color: '#1e293b', margin: '0 0 8px', fontSize: '32px' }}>Koleksiyonun Henüz Boş</h2>
        <p style={{ color: '#64748b', maxWidth: '400px', fontSize: '18px' }}>
          Ülkeleri keşfet, çark çevir, pazardan alışveriş yap ve fotoğraf çekin! Kazandığın her şey burada görünecek.
        </p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, padding: '30px 40px', maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
      {/* Dekoratif arka plan elemanları (Köşelerde Maskotlar) */}
      <div className="animate-float" style={{ position: 'absolute', top: '10px', left: '10px', width: '80px', opacity: 0.5, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
        <img src={MASCOT_IMAGES.china} alt="Çin Pandası" style={{ width: '100%' }} />
      </div>
      <div className="animate-float-delayed" style={{ position: 'absolute', top: '20px', right: '20px', width: '90px', opacity: 0.5, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
        <img src={MASCOT_IMAGES.egypt} alt="Mısır Firavunu" style={{ width: '100%' }} />
      </div>
      <div className="animate-float" style={{ position: 'absolute', bottom: '60px', left: '20px', width: '85px', opacity: 0.5, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
        <img src={MASCOT_IMAGES.mexico} alt="Meksikalı Amigo" style={{ width: '100%' }} />
      </div>
      <div className="animate-float-delayed" style={{ position: 'absolute', bottom: '80px', right: '30px', width: '75px', opacity: 0.5, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
        <img src={MASCOT_IMAGES.italy} alt="İtalyan Şef" style={{ width: '100%' }} />
      </div>
      
      {/* Diğer küçük süslemeler */}
      <div className="animate-float" style={{ position: 'absolute', top: '40%', left: '5%', fontSize: '32px', opacity: 0.6 }}>✈️</div>
      <div className="animate-float-delayed" style={{ position: 'absolute', top: '60%', right: '5%', fontSize: '36px', opacity: 0.6 }}>🌟</div>

      <h2 style={{ color: '#1e293b', marginBottom: '32px', textAlign: 'center', fontSize: '36px', fontWeight: '900', textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>🎒 Koleksiyonum</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '24px' }}>
        {[...allCountries].map(countryKey => {
          const info = COUNTRY_INFO[countryKey] || { name: countryKey, flag: '🌍', mascot: '', color: '#94a3b8' };
          const countryGifts = gifts.filter(g => g.country === countryKey);
          const countryPurchases = purchases.filter(p => p.country === countryKey);
          const countryPhoto = photos.find(p => p.country === countryKey);
          const countryNote = notes[countryKey] || '';

          return (
            <div key={countryKey} style={{
              background: '#fff', borderRadius: '24px', border: `3px solid ${info.color}40`,
              padding: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
              position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column'
            }}>
              {/* Arka plan süslemesi */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px',
                background: `radial-gradient(circle, ${info.color}22 0%, transparent 70%)`, zIndex: 0
              }}></div>

              {/* Country Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', borderBottom: '2px dashed #f1f5f9', paddingBottom: '12px', zIndex: 1 }}>
                <span style={{ fontSize: '42px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>{info.flag}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, color: info.color, fontSize: '1.4rem', fontWeight: '800' }}>{info.name}</h3>
                </div>
                
                {/* Maskot Sağ Köşede */}
                <div className="animate-float" style={{
                  width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {MASCOT_IMAGES[countryKey] && (
                    <img src={MASCOT_IMAGES[countryKey]} alt={info.mascot} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))', mixBlendMode: NEW_MASCOTS.includes(countryKey) ? 'multiply' : 'normal' }} />
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div style={{ zIndex: 1, flex: 1 }}>
                {/* Gifts */}
                {countryGifts.length > 0 && (
                  <div style={{ marginBottom: '12px' }}>
                    <h4 style={{ margin: '0 0 6px', color: '#d97706', fontSize: '0.9rem', fontWeight: '700' }}>🎡 Kazanılanlar</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {countryGifts.map((g, i) => (
                        <div key={i} style={{
                          background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px',
                          padding: '4px 8px 4px 10px', fontSize: '0.8rem', fontWeight: '700', color: '#92400e',
                          display: 'flex', alignItems: 'center', gap: '6px'
                        }}>
                          <span>{g.item} <span style={{ color: '#d4a00a', fontSize: '0.7rem' }}>({g.date})</span></span>
                          <button onClick={() => handleDeleteGift(countryKey, i)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '12px', padding: '0 2px', opacity: 0.6 }}>❌</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Purchases */}
                {countryPurchases.length > 0 && (
                  <div style={{ marginBottom: '12px' }}>
                    <h4 style={{ margin: '0 0 6px', color: '#2563eb', fontSize: '0.9rem', fontWeight: '700' }}>🛒 Alınanlar</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {countryPurchases.map((p, i) => (
                        <div key={i} style={{
                          background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px',
                          padding: '4px 8px 4px 10px', fontSize: '0.8rem', fontWeight: '700', color: '#1e40af',
                          display: 'flex', alignItems: 'center', gap: '6px'
                        }}>
                          <span>{p.item} <span style={{ color: '#3b82f6', fontSize: '0.7rem' }}>({p.date})</span></span>
                          <button onClick={() => handleDeletePurchase(countryKey, i)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '12px', padding: '0 2px', opacity: 0.6 }}>❌</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photo */}
                {countryPhoto && (
                  <div style={{
                    marginBottom: '12px', background: '#fef2f2', border: '2px dashed #fecaca',
                    borderRadius: '16px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '12px',
                    cursor: 'pointer', transition: 'all 0.2s ease', position: 'relative'
                  }}
                  className="photo-card-hover"
                  onClick={() => setSelectedPhoto(countryPhoto)}
                  >
                    <span style={{ fontSize: '28px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}>📸</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '800', color: '#dc2626', fontSize: '0.9rem' }}>
                        ❤️ {countryPhoto.scene} 
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: '600' }}>Hatıra Fotoğrafı - {countryPhoto.date}</div>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); handleDeletePhoto(countryKey); }} style={{ background: '#fee2e2', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '6px', opacity: 0.8 }}>❌</button>
                  </div>
                )}

                {/* Note Section */}
                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  {editingNote === countryKey ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <textarea
                        value={noteText}
                        onChange={e => setNoteText(e.target.value)}
                        placeholder="Bu ülkeyle ilgili komik anılarını yaz..."
                        style={{
                          width: '100%', minHeight: '60px', borderRadius: '12px',
                          border: `2px solid ${info.color}80`, padding: '10px', fontSize: '0.85rem',
                          resize: 'vertical', outline: 'none', boxSizing: 'border-box',
                          fontFamily: 'inherit', fontWeight: '500'
                        }}
                      />
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => handleSaveNote(countryKey)}
                          style={{
                            padding: '6px 14px', borderRadius: '10px', border: 'none',
                            background: info.color, color: '#fff', fontWeight: '800',
                            cursor: 'pointer', fontSize: '0.8rem'
                          }}
                        >
                          💾 Kaydet
                        </button>
                        <button
                          onClick={() => { setEditingNote(null); setNoteText(''); }}
                          style={{
                            padding: '6px 14px', borderRadius: '10px', border: '2px solid #e2e8f0',
                            background: '#fff', color: '#64748b', fontWeight: '800',
                            cursor: 'pointer', fontSize: '0.8rem'
                          }}
                        >
                          İptal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                      <div style={{ flex: 1 }}>
                        {countryNote ? (
                          <div style={{
                            background: '#f8fafc', borderLeft: `4px solid ${info.color}`, borderRadius: '0 8px 8px 0', padding: '8px 12px',
                            color: '#334155', fontSize: '0.85rem', fontWeight: '500',
                            lineHeight: '1.4', whiteSpace: 'pre-wrap', fontStyle: 'italic'
                          }}>
                            "{countryNote}"
                          </div>
                        ) : (
                          <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>Henüz not eklenmedi...</span>
                        )}
                      </div>
                      <button
                        onClick={() => { setEditingNote(countryKey); setNoteText(countryNote); }}
                        style={{
                          padding: '6px 12px', borderRadius: '12px', border: 'none',
                          background: '#f1f5f9', color: '#475569', fontWeight: '800',
                          cursor: 'pointer', fontSize: '0.8rem', whiteSpace: 'nowrap'
                        }}
                      >
                        {countryNote ? '✏️' : '➕ Not'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== PHOTO VIEWER MODAL ===== */}
      {selectedPhoto && (
        <div className="modal-backdrop" onClick={() => setSelectedPhoto(null)} style={{ zIndex: 10000, background: 'rgba(15, 23, 42, 0.9)' }}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', padding: 0, overflow: 'hidden', border: '8px solid #fff', borderRadius: '4px', background: '#fff' }}>
            <button className="modal-close-btn" onClick={() => setSelectedPhoto(null)} style={{ zIndex: 10, background: '#ef4444', color: '#fff', border: 'none', padding: '8px', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', top: '10px', right: '10px' }}>&times;</button>
            
            <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
              <img src={`/images/${selectedPhoto.country}.jpg`} alt="Arka Plan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.1)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '180px', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.4))' }}>
                <img src={MASCOT_IMAGES[selectedPhoto.country]} alt="Maskot" style={{ width: '100%', mixBlendMode: NEW_MASCOTS.includes(selectedPhoto.country) ? 'multiply' : 'normal' }} />
              </div>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ color: '#1e293b', fontSize: '24px', fontWeight: '900', margin: '0 0 8px' }}>📸 {selectedPhoto.scene}</h3>
              <p style={{ color: '#64748b', margin: 0, fontWeight: '600' }}>{selectedPhoto.countryName} • {selectedPhoto.date}</p>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .photo-card-hover:hover {
          background: #fecaca !important;
          border-color: #ef4444 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
        }
      `}</style>
    </div>
  );
}

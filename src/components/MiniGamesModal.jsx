import React, { useState, useEffect } from 'react';

const WORD_QUESTIONS_POOL = [
  // İngilizce
  { question: "İngilizce 'Merhaba' hangisidir?", options: ["Hello", "Hola", "Bonjour", "Ciao"], answer: "Hello" },
  { question: "İngilizce 'Teşekkür Ederim' hangisidir?", options: ["Gracias", "Thank you", "Danke", "Merci"], answer: "Thank you" },
  { question: "İngilizce 'Güle Güle' hangisidir?", options: ["Adios", "Goodbye", "Arrivederci", "Ciao"], answer: "Goodbye" },
  { question: "İngilizce 'Lütfen' hangisidir?", options: ["Please", "Por favor", "S'il vous plaît", "Bitte"], answer: "Please" },
  { question: "İngilizce 'Evet' hangisidir?", options: ["Ja", "Si", "Yes", "Oui"], answer: "Yes" },
  // İspanyolca
  { question: "İspanyolca 'Merhaba' hangisidir?", options: ["Hello", "Hola", "Salut", "Ciao"], answer: "Hola" },
  { question: "İspanyolca 'Teşekkürler' hangisidir?", options: ["Merci", "Gracias", "Danke", "Grazie"], answer: "Gracias" },
  { question: "İspanyolca 'Lütfen' hangisidir?", options: ["Please", "Bitte", "Por favor", "Per favore"], answer: "Por favor" },
  { question: "İspanyolca 'Evet' hangisidir?", options: ["Si", "Ja", "Da", "Oui"], answer: "Si" },
  { question: "İspanyolca 'Güle Güle' hangisidir?", options: ["Adios", "Tschüss", "Arrivederci", "Au revoir"], answer: "Adios" },
  // İtalyanca
  { question: "İtalyanca 'Merhaba' hangisidir?", options: ["Ciao", "Hola", "Hello", "Salut"], answer: "Ciao" },
  { question: "İtalyanca 'Teşekkürler' hangisidir?", options: ["Grazie", "Gracias", "Merci", "Danke"], answer: "Grazie" },
  { question: "İtalyanca 'Lütfen' hangisidir?", options: ["Per favore", "Bitte", "Please", "Por favor"], answer: "Per favore" },
  { question: "İtalyanca 'Güle Güle' hangisidir?", options: ["Au revoir", "Goodbye", "Arrivederci", "Adios"], answer: "Arrivederci" },
  // Fransızca
  { question: "Fransızca 'Merhaba' hangisidir?", options: ["Bonjour", "Hola", "Hello", "Ciao"], answer: "Bonjour" },
  { question: "Fransızca 'Teşekkürler' hangisidir?", options: ["Merci", "Gracias", "Danke", "Grazie"], answer: "Merci" },
  { question: "Fransızca 'Evet' hangisidir?", options: ["Si", "Ja", "Da", "Oui"], answer: "Oui" },
  { question: "Fransızca 'Lütfen' hangisidir?", options: ["S'il vous plaît", "Bitte", "Por favor", "Please"], answer: "S'il vous plaît" },
  // Almanca
  { question: "Almanca 'Günaydın' hangisidir?", options: ["Guten Morgen", "Buenos Dias", "Bonjour", "Buongiorno"], answer: "Guten Morgen" },
  { question: "Almanca 'Teşekkürler' hangisidir?", options: ["Danke", "Gracias", "Merci", "Grazie"], answer: "Danke" },
  { question: "Almanca 'Lütfen' hangisidir?", options: ["Bitte", "Please", "Por favor", "Per favore"], answer: "Bitte" },
  { question: "Almanca 'Evet' hangisidir?", options: ["Ja", "Si", "Yes", "Oui"], answer: "Ja" },
  // Rusça
  { question: "Rusça 'Merhaba' hangisidir?", options: ["Privet", "Hola", "Ciao", "Salut"], answer: "Privet" },
  { question: "Rusça 'Teşekkürler' hangisidir?", options: ["Spasibo", "Danke", "Merci", "Gracias"], answer: "Spasibo" },
  { question: "Rusça 'Evet' hangisidir?", options: ["Da", "Si", "Ja", "Oui"], answer: "Da" },
  { question: "Rusça 'Güle Güle' hangisidir?", options: ["Poka", "Adios", "Tschüss", "Arrivederci"], answer: "Poka" }
];

const CULTURE_QUESTIONS_POOL = [
  { question: "🍕 Pizza hangi ülkenin meşhur yemeğidir?", options: ["İtalya", "Fransa", "İspanya", "Türkiye"], answer: "İtalya" },
  { question: "🌮 Taco hangi ülkeye aittir?", options: ["Brezilya", "Meksika", "İspanya", "Kolombiya"], answer: "Meksika" },
  { question: "🐼 Panda hangi ülkenin maskotudur?", options: ["Japonya", "Çin", "Hindistan", "Tayland"], answer: "Çin" },
  { question: "🗼 Eyfel Kulesi nerede bulunur?", options: ["Almanya", "İngiltere", "Fransa", "İtalya"], answer: "Fransa" },
  { question: "🐪 Piramitler hangi ülkededir?", options: ["Mısır", "Fas", "Cezayir", "Suudi Arabistan"], answer: "Mısır" },
  { question: "🍣 Sushi hangi ülkenin geleneksel yemeğidir?", options: ["Çin", "Japonya", "Kore", "Vietnam"], answer: "Japonya" },
  { question: "🪆 Matruşka bebekleri hangi ülkenin simgesidir?", options: ["Ukrayna", "Rusya", "Polonya", "Macaristan"], answer: "Rusya" },
  { question: "🦘 Kanguru hangi ülkenin sembolüdür?", options: ["Yeni Zelanda", "Güney Afrika", "Avustralya", "Brezilya"], answer: "Avustralya" },
  { question: "☕ Kahvesi ile ünlü olan, başkenti Bogota olan ülke?", options: ["Brezilya", "Kolombiya", "Etiyopya", "Meksika"], answer: "Kolombiya" },
  { question: "🏰 Neuschwanstein Şatosu hangi ülkededir?", options: ["Almanya", "Avusturya", "İsviçre", "Fransa"], answer: "Almanya" },
  { question: "💃 Flamenko dansı hangi ülkeye aittir?", options: ["Arjantin", "Meksika", "İspanya", "Brezilya"], answer: "İspanya" },
  { question: "🎭 Rio Karnavalı hangi ülkede yapılır?", options: ["İspanya", "Kolombiya", "Arjantin", "Brezilya"], answer: "Brezilya" },
  { question: "🐘 Taj Mahal hangi ülkededir?", options: ["Pakistan", "Hindistan", "Bangladeş", "Sri Lanka"], answer: "Hindistan" },
  { question: "☕ Çayı ve simidi ile ünlü olan ülke neresidir?", options: ["Türkiye", "İngiltere", "Hindistan", "Çin"], answer: "Türkiye" },
  { question: "🌌 Kuzey Işıklarını en iyi izleyebileceğiniz fiyortlar ülkesi?", options: ["İsveç", "Norveç", "Finlandiya", "İzlanda"], answer: "Norveç" },
  { question: "🥙 Döner ve İskender Kebap nerenin yemeğidir?", options: ["Yunanistan", "Türkiye", "Mısır", "Lübnan"], answer: "Türkiye" },
  { question: "🐂 Boğa güreşleri hangi ülkeyle özdeşleşmiştir?", options: ["İtalya", "Arjantin", "İspanya", "Meksika"], answer: "İspanya" },
  { question: "🥐 Kruvasan hangi ülkenin meşhur kahvaltılığıdır?", options: ["İtalya", "Avusturya", "Belçika", "Fransa"], answer: "Fransa" },
  { question: "🧱 Büyük Duvar (Çin Seddi) nerededir?", options: ["Japonya", "Moğolistan", "Çin", "Kore"], answer: "Çin" },
  { question: "⚽ Dünyada en çok Dünya Kupası kazanan ülke hangisidir?", options: ["Almanya", "Arjantin", "İtalya", "Brezilya"], answer: "Brezilya" }
];

const MEMORY_CATEGORIES = {
  flags: [
    { type: 'turkey', icon: <img src="https://flagcdn.com/w80/tr.png" alt="TR" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'italy', icon: <img src="https://flagcdn.com/w80/it.png" alt="IT" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'spain', icon: <img src="https://flagcdn.com/w80/es.png" alt="ES" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'russia', icon: <img src="https://flagcdn.com/w80/ru.png" alt="RU" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'china', icon: <img src="https://flagcdn.com/w80/cn.png" alt="CN" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'brazil', icon: <img src="https://flagcdn.com/w80/br.png" alt="BR" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'japan', icon: <img src="https://flagcdn.com/w80/jp.png" alt="JP" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'france', icon: <img src="https://flagcdn.com/w80/fr.png" alt="FR" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'uk', icon: <img src="https://flagcdn.com/w80/gb.png" alt="GB" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'usa', icon: <img src="https://flagcdn.com/w80/us.png" alt="US" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'greece', icon: <img src="https://flagcdn.com/w80/gr.png" alt="GR" style={{width: '60px', borderRadius: '4px'}}/> },
    { type: 'bosnia', icon: <img src="https://flagcdn.com/w80/ba.png" alt="BA" style={{width: '60px', borderRadius: '4px'}}/> }
  ],
  animals: [
    { type: 'panda', icon: '🐼' }, { type: 'bear', icon: '🐻' },
    { type: 'elephant', icon: '🐘' },
    { type: 'dog_akita', icon: '🐕' },
    { type: 'rooster', icon: '🐓' },
    { type: 'lion', icon: '🦁' },
    { type: 'eagle', icon: '🦅' },
    { type: 'owl', icon: '🦉' },
    { type: 'wolf', icon: '🐺' }, { type: 'camel', icon: '🐪' },
    { type: 'kangaroo', icon: '🦘' }, { type: 'bull', icon: '🐂' }
  ],
  foods: [
    { type: 'taco', icon: '🌮' }, { type: 'pizza', icon: '🍕' },
    { type: 'sushi', icon: '🍣' }, { type: 'kebab', icon: '🥙' },
    { type: 'croissant', icon: '🥐' }, { type: 'burger', icon: '🍔' }
  ]
};

const getRandomQuestions = (pool, count) => {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function MiniGamesModal({ onClose, updateGold }) {
  const [activeGame, setActiveGame] = useState(null); // 'memoryCategory', 'memory', 'word', 'culture'

  // Genel Can (Lives) Sistemi
  const [lives, setLives] = useState(5);

  // Hafıza Oyunu State'leri
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [memoryWon, setMemoryWon] = useState(false);

  // Kelime & Kültür Oyunu Ortak State'leri
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizWon, setQuizWon] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Kategori Seçimi Başlatma
  const openMemoryCategorySelection = () => {
    setActiveGame('memoryCategory');
  };

  const startMemoryGame = (categoryKey) => {
    setActiveGame('memory');
    setFlipped([]);
    setSolved([]);
    setMemoryWon(false);
    
    // Aynı desteden 2 kopya oluştur
    const baseCards = MEMORY_CATEGORIES[categoryKey];
    const deck = [...baseCards, ...baseCards];
    // Karıştır ve ID ver
    const shuffled = deck.sort(() => Math.random() - 0.5).map((card, i) => ({ ...card, id: i }));
    setCards(shuffled);
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const match = cards[newFlipped[0]].type === cards[newFlipped[1]].type;
      if (match) {
        const newSolved = [...solved, ...newFlipped];
        setSolved(newSolved);
        setFlipped([]);
        if (newSolved.length === cards.length) {
          setTimeout(() => {
            setMemoryWon(true);
            updateGold(300, 'Hafıza Oyunu Kazanımı'); // Kazanınca 300 altın
          }, 500);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  // Quiz Oyununu (Word veya Culture) Başlat
  const startQuizGame = (type) => {
    setActiveGame(type); // 'word' veya 'culture'
    setQuizIndex(0);
    setQuizScore(0);
    setQuizWon(false);
    setLives(5);
    setSelectedOption(null);
    setCorrectOption(null);
    
    const pool = type === 'word' ? WORD_QUESTIONS_POOL : CULTURE_QUESTIONS_POOL;
    const qCount = type === 'word' ? 10 : 10; // 10 Soru
    
    // Soruların cevap şıklarını da karıştırıyoruz
    const selectedQ = getRandomQuestions(pool, qCount).map(q => ({
      ...q,
      options: [...q.options].sort(() => 0.5 - Math.random())
    }));
    
    setQuizQuestions(selectedQ);
  };

  const handleQuizAnswer = (option) => {
    if (isAnimating || lives <= 0) return;
    setIsAnimating(true);
    
    const currentQ = quizQuestions[quizIndex];
    const isCorrect = option === currentQ.answer;
    
    setSelectedOption(option);
    setCorrectOption(currentQ.answer);

    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    } else {
      setLives(prev => prev - 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setCorrectOption(null);
      setIsAnimating(false);

      if (lives - (isCorrect ? 0 : 1) <= 0) {
        // Can bitti, oyun biter
        endQuizGame(isCorrect ? quizScore + 1 : quizScore);
      } else if (quizIndex + 1 < quizQuestions.length) {
        setQuizIndex(prev => prev + 1);
      } else {
        // Soru bitti, oyun biter
        endQuizGame(isCorrect ? quizScore + 1 : quizScore);
      }
    }, 1500);
  };

  const endQuizGame = (finalScore) => {
    setQuizWon(true);
    const totalReward = finalScore * 50;
    updateGold(totalReward, 'Bilgi Yarışması Kazanımı');
  };

  const renderLives = () => {
    return (
      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '16px' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ fontSize: '24px', opacity: i < lives ? 1 : 0.3 }}>❤️</span>
        ))}
      </div>
    );
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 10000, background: 'rgba(15,23,42,0.9)' }}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', border: '4px solid #f59e0b', borderRadius: '24px' }}>
        <button className="modal-close-btn" onClick={onClose} style={{ zIndex: 10 }}>&times;</button>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: '#d97706', fontSize: '32px', margin: '0 0 8px' }}>🎮 Altın Kazanma Merkezi</h2>
          <p style={{ color: '#64748b', fontSize: '18px', margin: 0 }}>Eğlenceli oyunlar oynayarak pazarda harcamak için altın kazan!</p>
        </div>

        {!activeGame && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div onClick={openMemoryCategorySelection} className="game-card" style={{ background: '#eff6ff', border: '3px solid #3b82f6', borderRadius: '20px', padding: '24px 16px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '56px', marginBottom: '12px' }}>🃏</div>
              <h3 style={{ color: '#1d4ed8', fontSize: '20px', margin: '0 0 8px' }}>Hafıza Kartları</h3>
              <p style={{ color: '#3b82f6', margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>Nesneleri eşleştir, <br/>💰 300 Altın kazan!</p>
            </div>
            
            <div onClick={() => startQuizGame('word')} className="game-card" style={{ background: '#fdf4ff', border: '3px solid #d946ef', borderRadius: '20px', padding: '24px 16px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '56px', marginBottom: '12px' }}>🗣️</div>
              <h3 style={{ color: '#a21caf', fontSize: '20px', margin: '0 0 8px' }}>Kelime Bulmaca</h3>
              <p style={{ color: '#d946ef', margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>Yabancı kelimeleri bil, <br/>💰 Doğru başı 50 Altın!</p>
            </div>

            <div onClick={() => startQuizGame('culture')} className="game-card" style={{ background: '#ecfdf5', border: '3px solid #10b981', borderRadius: '20px', padding: '24px 16px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '56px', marginBottom: '12px' }}>🧭</div>
              <h3 style={{ color: '#047857', fontSize: '20px', margin: '0 0 8px' }}>Kültür Avcısı</h3>
              <p style={{ color: '#10b981', margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>Neyin nerede olduğunu bul, <br/>💰 Her doğruya 50 Altın!</p>
            </div>
          </div>
        )}

        {/* HAFIZA KATEGORİ SEÇİMİ */}
        {activeGame === 'memoryCategory' && (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#1e293b', fontSize: '24px', marginBottom: '20px' }}>Bir Kategori Seç</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <button onClick={() => startMemoryGame('flags')} style={{ padding: '20px', background: '#fff', border: '3px solid #3b82f6', borderRadius: '16px', fontSize: '20px', fontWeight: '700', color: '#1d4ed8', cursor: 'pointer', transition: 'all 0.2s' }} className="game-card">🌍 Bayraklar</button>
              <button onClick={() => startMemoryGame('animals')} style={{ padding: '20px', background: '#fff', border: '3px solid #f59e0b', borderRadius: '16px', fontSize: '20px', fontWeight: '700', color: '#b45309', cursor: 'pointer', transition: 'all 0.2s' }} className="game-card">🐼 Hayvanlar</button>
              <button onClick={() => startMemoryGame('foods')} style={{ padding: '20px', background: '#fff', border: '3px solid #10b981', borderRadius: '16px', fontSize: '20px', fontWeight: '700', color: '#047857', cursor: 'pointer', transition: 'all 0.2s' }} className="game-card">🌮 Yemekler</button>
            </div>
            <button onClick={() => setActiveGame(null)} style={{ marginTop: '24px', padding: '10px 20px', background: '#e2e8f0', border: 'none', borderRadius: '12px', color: '#475569', fontWeight: '700', cursor: 'pointer' }}>Geri</button>
          </div>
        )}

        {/* HAFIZA OYUNU EKRANI */}
        {activeGame === 'memory' && (
          <div>
            {!memoryWon ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {cards.map((card, index) => {
                  const isFlipped = flipped.includes(index) || solved.includes(index);
                  return (
                    <div 
                      key={card.id} 
                      onClick={() => handleCardClick(index)}
                      style={{
                        height: '100px', background: isFlipped ? '#fff' : '#3b82f6',
                        border: `3px solid ${isFlipped ? '#e2e8f0' : '#2563eb'}`,
                        borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '48px', cursor: 'pointer',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transition: 'transform 0.4s ease, background 0.4s ease',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      <span style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none', opacity: isFlipped ? 1 : 0, transition: 'opacity 0.2s' }}>
                        {card.icon}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', background: '#f0fdf4', border: '3px dashed #4ade80', borderRadius: '20px' }}>
                <div style={{ fontSize: '72px', marginBottom: '16px', animation: 'bounce-celebrate 1s infinite' }}>🎉</div>
                <h3 style={{ color: '#16a34a', fontSize: '28px', margin: '0 0 12px' }}>Tebrikler!</h3>
                <p style={{ color: '#15803d', fontSize: '18px', fontWeight: '700' }}>Hafıza oyununu bitirdin ve 💰 300 Altın kazandın!</p>
                <button onClick={() => setActiveGame(null)} style={{ marginTop: '20px', padding: '12px 24px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: '800', cursor: 'pointer' }}>Ana Menüye Dön</button>
              </div>
            )}
          </div>
        )}

        {/* QUIZ (WORD VEYA CULTURE) OYUNU EKRANI */}
        {(activeGame === 'word' || activeGame === 'culture') && quizQuestions.length > 0 && (
          <div>
            {!quizWon ? (
              <div style={{ textAlign: 'center' }}>
                {renderLives()}
                <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '20px', border: '2px solid #e2e8f0', marginBottom: '24px' }}>
                  <span style={{ color: '#94a3b8', fontWeight: '700', fontSize: '16px' }}>Soru {quizIndex + 1} / {quizQuestions.length}</span>
                  <h3 style={{ color: '#1e293b', fontSize: '28px', marginTop: '12px' }}>{quizQuestions[quizIndex].question}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {quizQuestions[quizIndex].options.map((opt, i) => {
                    let btnColor = activeGame === 'word' ? '#d946ef' : '#10b981';
                    let btnBg = '#fff';
                    let btnTextColor = activeGame === 'word' ? '#a21caf' : '#047857';

                    // Animasyon aşamasındaysa renkleri güncelle
                    if (isAnimating) {
                      if (opt === correctOption) {
                        btnBg = '#22c55e'; // Yeşil (Doğru her zaman yeşil yanar)
                        btnTextColor = '#fff';
                        btnColor = '#16a34a';
                      } else if (opt === selectedOption && selectedOption !== correctOption) {
                        btnBg = '#ef4444'; // Kırmızı (Yanlış seçildiyse)
                        btnTextColor = '#fff';
                        btnColor = '#dc2626';
                      }
                    }

                    return (
                      <button 
                        key={i}
                        onClick={() => handleQuizAnswer(opt)}
                        disabled={isAnimating}
                        style={{
                          padding: '20px', background: btnBg, border: `3px solid ${btnColor}`, borderRadius: '16px',
                          fontSize: '20px', fontWeight: '700', color: btnTextColor, cursor: isAnimating ? 'default' : 'pointer',
                          transition: 'all 0.2s', boxShadow: `0 4px 10px ${btnColor}22`
                        }}
                        onMouseOver={e => { if (!isAnimating) { e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                        onMouseOut={e => { if (!isAnimating) { e.currentTarget.style.transform = 'translateY(0)'; } }}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', background: '#fdf4ff', border: `3px dashed ${activeGame === 'word' ? '#d946ef' : '#10b981'}`, borderRadius: '20px' }}>
                <div style={{ fontSize: '72px', marginBottom: '16px', animation: 'bounce-celebrate 1s infinite' }}>{lives > 0 ? '🧠' : '💔'}</div>
                <h3 style={{ color: activeGame === 'word' ? '#a21caf' : '#047857', fontSize: '28px', margin: '0 0 12px' }}>
                  {lives > 0 ? 'Harika İş Çıkardın!' : 'Canın Bitti!'}
                </h3>
                <p style={{ color: '#334155', fontSize: '18px', fontWeight: '700' }}>Toplam {quizScore} doğru cevap verdin.</p>
                <p style={{ color: '#d97706', fontSize: '22px', fontWeight: '800', marginTop: '12px' }}>💰 Toplam {quizScore * 50} Altın Kazandın!</p>
                <button onClick={() => setActiveGame(null)} style={{ marginTop: '20px', padding: '12px 24px', background: activeGame === 'word' ? '#d946ef' : '#10b981', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: '800', cursor: 'pointer' }}>Ana Menüye Dön</button>
              </div>
            )}
          </div>
        )}

      </div>
      <style>{`
        .game-card:hover { transform: scale(1.05) !important; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
}

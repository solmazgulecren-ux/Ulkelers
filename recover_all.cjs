const fs = require('fs');
const cp = require('child_process');

cp.execSync('git checkout src/components/Home.jsx');

let content = fs.readFileSync('src/components/Home.jsx', 'utf8');

// 1. Add missing countries
const missingCountries = `
  japan: {
    id: 'japan',
    name: "Japonya",
    capital: "Tokyo",
    language: "Japonca",
    population: "125 Milyon",
    landmark: "Fuji Dağı",
    funFact: "Japonya'da dörtten fazla mevsim olduğu söylenir; sadece ilkbaharda 72 mikro mevsim vardır!",
    flag: "🇯🇵",
    color: "#EF4444",
    mascotName: "Samuray Kedisi",
    interactiveActions: ["Sushi Ye 🍣", "Origami Yap 🪆", "Selam Ver 🙏"],
    image: '/images/japan.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Dünyaca ünlü Sushi, taze balık ve pirinçten yapılır. Ayrıca Ramen noodle çorbaları çok popülerdir.',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Fuji Dağı Japonya nın en ikonik simgesidir. Kyoto daki tarihi tapınaklar büyüleyicidir.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Hanami (Kiraz Çiçekleri Festivali), baharda sakura ağaçlarının çiçek açmasını kutlar.',
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&auto=format&fit=crop&q=80'
    }
  },
  france: {
    id: 'france',
    name: "Fransa",
    capital: "Paris",
    language: "Fransızca",
    population: "68 Milyon",
    landmark: "Eyfel Kulesi",
    funFact: "Fransa, dünyada en çok ziyaret edilen ülkedir.",
    flag: "🇫🇷",
    color: "#2563EB",
    mascotName: "Ressam Kurbağa",
    interactiveActions: ["Kruvasan Ye 🥐", "Resim Çiz 🎨", "Bonjour De 👋"],
    image: '/images/france.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Kruvasan, baget ekmeği ve peynir çeşitleri Fransız mutfağının temelini oluşturur.',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Paris teki Eyfel Kulesi ve Louvre Müzesi dünyanın en ünlü yapılarındandır.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e907611a125?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Bastille Günü (14 Temmuz), Fransız Devrimi ni büyük kutlamalarla anar.',
      image: 'https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&auto=format&fit=crop&q=80'
    }
  },
  uk: {
    id: 'uk',
    name: "İngiltere",
    capital: "Londra",
    language: "İngilizce",
    population: "67 Milyon",
    landmark: "Big Ben",
    funFact: "Londra'da 170'ten fazla müze bulunmaktadır.",
    flag: "🇬🇧",
    color: "#1D4ED8",
    mascotName: "Kraliyet Askeri",
    interactiveActions: ["Çay İç ☕", "Otobüse Bin 🚌", "Selam Ver 💂"],
    image: '/images/uk.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Fish and Chips (Balık ve patates kızartması) ile 5 çayı kültürü çok ünlüdür.',
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Big Ben, London Eye ve Stonehenge ülkenin en ünlü yerlerindendir.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Notting Hill Karnavalı, Avrupa nın en büyük sokak festivalidir.',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&auto=format&fit=crop&q=80'
    }
  },
  usa: {
    id: 'usa',
    name: "Amerika Birleşik Devletleri",
    capital: "Washington, D.C.",
    language: "İngilizce",
    population: "331 Milyon",
    landmark: "Özgürlük Heykeli",
    funFact: "ABD'de hiçbir resmi dil (federasyon düzeyinde) kabul edilmemiştir.",
    flag: "🇺🇸",
    color: "#B91C1C",
    mascotName: "Kartal Sam",
    interactiveActions: ["Hamburger Ye 🍔", "Basket At 🏀", "Fotoğraf Çek 📸"],
    image: '/images/usa.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Hamburger, hot dog ve elmalı turta klasik Amerikan lezzetleridir.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Özgürlük Heykeli, Büyük Kanyon ve Yellowstone Ulusal Parkı dünyaca ünlüdür.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Şükran Günü (Thanksgiving), tüm ailenin bir araya geldiği en büyük bayramdır.',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80'
    }
  },
  greece: {
    id: 'greece',
    name: "Yunanistan",
    capital: "Atina",
    language: "Yunanca",
    population: "10.4 Milyon",
    landmark: "Partenon",
    funFact: "Yunanistan'da 6000'den fazla ada vardır, ancak sadece 227'sinde yaşanmaktadır.",
    flag: "🇬🇷",
    color: "#0284C7",
    mascotName: "Zeus Heykeli",
    interactiveActions: ["Zeytin Ye 🫒", "Sirtaki Yap 🕺", "Yüz 🏊"],
    image: '/images/greece.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Zeytinyağlılar, Musakka ve Souvlaki Yunan mutfağının incileridir.',
      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Atina daki Akropolis ve Santorini nin mavi kubbeli beyaz evleri ikoniktir.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Apokries Karnavalı, ülke çapında geçit törenleri, rengarenk maskelerle kutlanır.',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=80'
    }
  },
  bosnia: {
    id: 'bosnia',
    name: "Bosna Hersek",
    capital: "Saraybosna",
    language: "Boşnakça",
    population: "3.2 Milyon",
    landmark: "Mostar Köprüsü, Başçarşı",
    funFact: "Saraybosna, Avrupa'da tam kapsamlı ilk elektrikli tramvay sistemine sahip şehirdir (1885).",
    flag: "🇧🇦",
    color: "#2563EB",
    mascotName: "Boşnak Gezgini",
    interactiveActions: ["Cevapi Ye 🧆", "Köprüden Atla 🌉", "Kahve İç ☕"],
    image: '/images/bosnia.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'İncecik açılmış hamuruyla meşhur Boşnak Böreği (Burek) ve pide içinde servis edilen Balkanların en ünlü köftesi Cevapi (Cevapcici) vazgeçilmezdir.',
      image: 'https://images.unsplash.com/photo-1627907572791-c990035043d9?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Neretva Nehri üzerindeki tarihi Mostar Köprüsü ve Saraybosna nın Osmanlı esintileri taşıyan kalbi Başçarşı büyüleyicidir.',
      image: 'https://images.unsplash.com/photo-1579294276707-8b0bb24467c6?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Saraybosna Film Festivali, Balkanların en büyük film festivali olup her yaz binlerce sinemaseveri ve ünlü yıldızı şehre çeker.',
      image: 'https://images.unsplash.com/photo-1579294276707-8b0bb24467c6?w=400&auto=format&fit=crop&q=80'
    }
  }
};`;

content = content.replace(/    festivals: \{\s*title: '🎉 Festivaller',\s*desc: 'Geleneksel Çin Yeni Yılı \(Bahar Festivali\) ejderha dansları, kırmızı fenerler ve havai fişeklerle kutlanır. Fener Festivali\\'nde ise sokaklar binlerce renkli kağıt fenerle aydınlanır.',\s*image: 'https:\/\/images.unsplash.com\/photo-1508849789987-4e5333c12b78\?w=400&auto=format&fit=crop&q=80'\s*\}\s*\}\s*\};/,
`    festivals: {
      title: '🎉 Festivaller',
      desc: 'Geleneksel Çin Yeni Yılı (Bahar Festivali) ejderha dansları, kırmızı fenerler ve havai fişeklerle kutlanır. Fener Festivali\\'nde ise sokaklar binlerce renkli kağıt fenerle aydınlanır.',
      image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?w=400&auto=format&fit=crop&q=80'
    }
  },` + missingCountries);

// 2. Add imports
content = content.replace("import './Home.css';", "import './Home.css';\nimport MiniGamesModal from './MiniGamesModal';");

// 3. Inject states into Home
const originalStates = `  const [score, setScore] = useState(0);
  const [showVisaAlert, setShowVisaAlert] = useState(false);

  // New interactive modal states
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);`;

const newStates = `  const [score, setScore] = useState(0);
  const [showVisaAlert, setShowVisaAlert] = useState(false);

  // New interactive modal states
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userGold, setUserGold] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ===== VİZE VE ALTIN VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====
  useEffect(() => {
    if (user && user.email) {
      const storedVisas = JSON.parse(localStorage.getItem(\`visas_\${user.email}\`) || '[]');
      setApprovedVisas(storedVisas);
      
      const storedVal = localStorage.getItem(\`gold_\${user.email}\`);
      const parsedGold = parseInt(storedVal, 10);
      setUserGold(isNaN(parsedGold) ? 500 : parsedGold);
    }
  }, [user]);

  // Altın güncelleme fonksiyonu
  const updateGold = (amount) => {
    setUserGold(prev => {
      const newGold = Math.max(0, prev + amount);
      if (user && user.email) {
        localStorage.setItem(\`gold_\${user.email}\`, newGold.toString());
      }
      return newGold;
    });
  };`;

content = content.replace(originalStates, newStates);

// Strip out the old useEffect entirely if it exists (the one that only loaded visas)
const oldUseEffect = `  // ===== VİZE VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====
  useEffect(() => {
    if (user && user.email) {
      const storedVisas = JSON.parse(localStorage.getItem(\`visas_\${user.email}\`) || '[]');
      setApprovedVisas(storedVisas);
    }
  }, [user]);`;
content = content.replace(oldUseEffect, '');

// 4. Inject MiniGames Button and Gold display into header right side
const oldRightSide = `<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>`;
const newRightSide = `<div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'nowrap', flexShrink: 0 }}>
          
          <button 
            onClick={() => setShowMiniGames(true)}
            style={{
              height: '44px',
              padding: '0 20px', 
              borderRadius: '12px', 
              border: 'none',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff', 
              fontSize: '0.95rem', 
              fontWeight: '800', 
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px'
            }}
          >
            🎮 Oyunlar & Altın Kazan
          </button>

          <div style={{ 
            height: '44px',
            boxSizing: 'border-box',
            background: '#fef3c7', 
            padding: '0 16px', 
            borderRadius: '12px', 
            border: '2px solid #fde68a', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontWeight: '800', 
            color: '#b45309' 
          }}>
            💰 {userGold} Altın
          </div>`;

content = content.replace(oldRightSide, newRightSide);

// Replace logout button to use the new modal instead of direct logout
content = content.replace(`onClick={onLogout}`, `onClick={() => setShowLogoutConfirm(true)}`);

// Fix header css wrap
content = content.replace(/className="home-header" style=\{\{\s*display: 'flex',\s*alignItems: 'center',\s*justifyContent: 'space-between',\s*background: '#ffffff',/g,
`className="home-header" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        gap: '16px',
        background: '#ffffff',`);

// 5. Inject Modals and Confirm Box before closing container
const modals = `      {showMiniGames && (
        <MiniGamesModal 
          onClose={() => setShowMiniGames(false)} 
          userGold={userGold}
          onUpdateGold={updateGold}
        />
      )}

      {showLogoutConfirm && (
        <div className="visa-modal-overlay">
          <div className="visa-modal-content" style={{ maxWidth: '400px', textAlign: 'center' }}>
            <h2>🚪 Çıkış Yap</h2>
            <p>Çıkış yapmak istediğinize emin misiniz?</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
              <button 
                onClick={onLogout}
                style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#ef4444', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
              >Evet, Çıkış Yap</button>
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer', fontWeight: 'bold' }}
              >İptal</button>
            </div>
          </div>
        </div>
      )}
    </div>`;

content = content.replace(/    <\/div>\s*$/, modals);

fs.writeFileSync('src/components/Home.jsx', content);
console.log('Successfully recovered all user features from scratch');

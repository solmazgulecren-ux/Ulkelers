const fs = require('fs');
let content = fs.readFileSync('src/components/Home.jsx', 'utf8');

// 1. Add Missing Countries
const missingCountries = "  },\n" +
"  japan: {\n" +
"    id: 'japan',\n" +
"    name: \"Japonya\",\n" +
"    capital: \"Tokyo\",\n" +
"    language: \"Japonca\",\n" +
"    population: \"125 Milyon\",\n" +
"    landmark: \"Fuji Dağı\",\n" +
"    funFact: \"Japonya'da dörtten fazla mevsim olduğu söylenir; sadece ilkbaharda 72 mikro mevsim vardır!\",\n" +
"    flag: \"🇯🇵\",\n" +
"    color: \"#EF4444\",\n" +
"    mascotName: \"Samuray Kedisi\",\n" +
"    interactiveActions: [\"Sushi Ye 🍣\", \"Origami Yap 🪆\", \"Selam Ver 🙏\"],\n" +
"    image: '/images/japan.jpg',\n" +
"    foods: {\n" +
"      title: '🍲 Yöresel Yemekler',\n" +
"      desc: 'Dünyaca ünlü Sushi, taze balık ve pirinçten yapılır. Ayrıca Ramen noodle çorbaları çok popülerdir.',\n" +
"      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    landmarks: {\n" +
"      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',\n" +
"      desc: 'Fuji Dağı Japonya nın en ikonik simgesidir. Kyoto daki tarihi tapınaklar büyüleyicidir.',\n" +
"      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    festivals: {\n" +
"      title: '🎉 Festivaller',\n" +
"      desc: 'Hanami (Kiraz Çiçekleri Festivali), baharda sakura ağaçlarının çiçek açmasını kutlar.',\n" +
"      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&auto=format&fit=crop&q=80'\n" +
"    }\n" +
"  },\n" +
"  france: {\n" +
"    id: 'france',\n" +
"    name: \"Fransa\",\n" +
"    capital: \"Paris\",\n" +
"    language: \"Fransızca\",\n" +
"    population: \"68 Milyon\",\n" +
"    landmark: \"Eyfel Kulesi\",\n" +
"    funFact: \"Fransa, dünyada en çok ziyaret edilen ülkedir.\",\n" +
"    flag: \"🇫🇷\",\n" +
"    color: \"#2563EB\",\n" +
"    mascotName: \"Ressam Kurbağa\",\n" +
"    interactiveActions: [\"Kruvasan Ye 🥐\", \"Resim Çiz 🎨\", \"Bonjour De 👋\"],\n" +
"    image: '/images/france.jpg',\n" +
"    foods: {\n" +
"      title: '🍲 Yöresel Yemekler',\n" +
"      desc: 'Kruvasan, baget ekmeği ve peynir çeşitleri Fransız mutfağının temelini oluşturur.',\n" +
"      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    landmarks: {\n" +
"      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',\n" +
"      desc: 'Paris teki Eyfel Kulesi ve Louvre Müzesi dünyanın en ünlü yapılarındandır.',\n" +
"      image: 'https://images.unsplash.com/photo-1502602898657-3e907611a125?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    festivals: {\n" +
"      title: '🎉 Festivaller',\n" +
"      desc: 'Bastille Günü (14 Temmuz), Fransız Devrimi ni büyük kutlamalarla anar.',\n" +
"      image: 'https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&auto=format&fit=crop&q=80'\n" +
"    }\n" +
"  },\n" +
"  uk: {\n" +
"    id: 'uk',\n" +
"    name: \"İngiltere\",\n" +
"    capital: \"Londra\",\n" +
"    language: \"İngilizce\",\n" +
"    population: \"67 Milyon\",\n" +
"    landmark: \"Big Ben\",\n" +
"    funFact: \"Londra'da 170'ten fazla müze bulunmaktadır.\",\n" +
"    flag: \"🇬🇧\",\n" +
"    color: \"#1D4ED8\",\n" +
"    mascotName: \"Kraliyet Askeri\",\n" +
"    interactiveActions: [\"Çay İç ☕\", \"Otobüse Bin 🚌\", \"Selam Ver 💂\"],\n" +
"    image: '/images/uk.jpg',\n" +
"    foods: {\n" +
"      title: '🍲 Yöresel Yemekler',\n" +
"      desc: 'Fish and Chips (Balık ve patates kızartması) ile 5 çayı kültürü çok ünlüdür.',\n" +
"      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    landmarks: {\n" +
"      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',\n" +
"      desc: 'Big Ben, London Eye ve Stonehenge ülkenin en ünlü yerlerindendir.',\n" +
"      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    festivals: {\n" +
"      title: '🎉 Festivaller',\n" +
"      desc: 'Notting Hill Karnavalı, Avrupa nın en büyük sokak festivalidir.',\n" +
"      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&auto=format&fit=crop&q=80'\n" +
"    }\n" +
"  },\n" +
"  usa: {\n" +
"    id: 'usa',\n" +
"    name: \"Amerika Birleşik Devletleri\",\n" +
"    capital: \"Washington, D.C.\",\n" +
"    language: \"İngilizce\",\n" +
"    population: \"331 Milyon\",\n" +
"    landmark: \"Özgürlük Heykeli\",\n" +
"    funFact: \"ABD'de hiçbir resmi dil (federasyon düzeyinde) kabul edilmemiştir.\",\n" +
"    flag: \"🇺🇸\",\n" +
"    color: \"#B91C1C\",\n" +
"    mascotName: \"Kartal Sam\",\n" +
"    interactiveActions: [\"Hamburger Ye 🍔\", \"Basket At 🏀\", \"Fotoğraf Çek 📸\"],\n" +
"    image: '/images/usa.jpg',\n" +
"    foods: {\n" +
"      title: '🍲 Yöresel Yemekler',\n" +
"      desc: 'Hamburger, hot dog ve elmalı turta klasik Amerikan lezzetleridir.',\n" +
"      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    landmarks: {\n" +
"      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',\n" +
"      desc: 'Özgürlük Heykeli, Büyük Kanyon ve Yellowstone Ulusal Parkı dünyaca ünlüdür.',\n" +
"      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    festivals: {\n" +
"      title: '🎉 Festivaller',\n" +
"      desc: 'Şükran Günü (Thanksgiving), tüm ailenin bir araya geldiği en büyük bayramdır.',\n" +
"      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80'\n" +
"    }\n" +
"  },\n" +
"  greece: {\n" +
"    id: 'greece',\n" +
"    name: \"Yunanistan\",\n" +
"    capital: \"Atina\",\n" +
"    language: \"Yunanca\",\n" +
"    population: \"10.4 Milyon\",\n" +
"    landmark: \"Partenon\",\n" +
"    funFact: \"Yunanistan'da 6000'den fazla ada vardır, ancak sadece 227'sinde yaşanmaktadır.\",\n" +
"    flag: \"🇬🇷\",\n" +
"    color: \"#0284C7\",\n" +
"    mascotName: \"Zeus Heykeli\",\n" +
"    interactiveActions: [\"Zeytin Ye 🫒\", \"Sirtaki Yap 🕺\", \"Yüz 🏊\"],\n" +
"    image: '/images/greece.jpg',\n" +
"    foods: {\n" +
"      title: '🍲 Yöresel Yemekler',\n" +
"      desc: 'Zeytinyağlılar, Musakka ve Souvlaki Yunan mutfağının incileridir.',\n" +
"      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    landmarks: {\n" +
"      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',\n" +
"      desc: 'Atina daki Akropolis ve Santorini nin mavi kubbeli beyaz evleri ikoniktir.',\n" +
"      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    festivals: {\n" +
"      title: '🎉 Festivaller',\n" +
"      desc: 'Apokries Karnavalı, ülke çapında geçit törenleri, rengarenk maskelerle kutlanır.',\n" +
"      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=80'\n" +
"    }\n" +
"  },\n" +
"  bosnia: {\n" +
"    id: 'bosnia',\n" +
"    name: \"Bosna Hersek\",\n" +
"    capital: \"Saraybosna\",\n" +
"    language: \"Boşnakça\",\n" +
"    population: \"3.2 Milyon\",\n" +
"    landmark: \"Mostar Köprüsü, Başçarşı\",\n" +
"    funFact: \"Saraybosna, Avrupa'da tam kapsamlı ilk elektrikli tramvay sistemine sahip şehirdir (1885).\",\n" +
"    flag: \"🇧🇦\",\n" +
"    color: \"#2563EB\",\n" +
"    mascotName: \"Boşnak Gezgini\",\n" +
"    interactiveActions: [\"Cevapi Ye 🧆\", \"Köprüden Atla 🌉\", \"Kahve İç ☕\"],\n" +
"    image: '/images/bosnia.jpg',\n" +
"    foods: {\n" +
"      title: '🍲 Yöresel Yemekler',\n" +
"      desc: 'İncecik açılmış hamuruyla meşhur Boşnak Böreği (Burek) ve pide içinde servis edilen Balkanların en ünlü köftesi Cevapi (Cevapcici) vazgeçilmezdir.',\n" +
"      image: 'https://images.unsplash.com/photo-1627907572791-c990035043d9?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    landmarks: {\n" +
"      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',\n" +
"      desc: 'Neretva Nehri üzerindeki tarihi Mostar Köprüsü ve Saraybosna nın Osmanlı esintileri taşıyan kalbi Başçarşı büyüleyicidir.',\n" +
"      image: 'https://images.unsplash.com/photo-1579294276707-8b0bb24467c6?w=400&auto=format&fit=crop&q=80'\n" +
"    },\n" +
"    festivals: {\n" +
"      title: '🎉 Festivaller',\n" +
"      desc: 'Saraybosna Film Festivali, Balkanların en büyük film festivali olup her yaz binlerce sinemaseveri ve ünlü yıldızı şehre çeker.',\n" +
"      image: 'https://images.unsplash.com/photo-1579294276707-8b0bb24467c6?w=400&auto=format&fit=crop&q=80'\n" +
"    }\n" +
"  }\n" +
"};";

// In Home.jsx, the end of COUNTRY_PROFILES looks like:
//     festivals: { ... }
//   }
// };
// We will replace "};\n\nconst Home = ({ user, onLogout }) => {" with the missingCountries + "};\n\nconst Home..."

let p = content.indexOf("};\n\nconst Home = ({ user, onLogout }) => {");
if (p !== -1) {
  content = content.substring(0, p) + missingCountries + "\n\nconst Home = ({ user, onLogout }) => {" + content.substring(p + 39);
} else {
  p = content.indexOf("};\r\n\r\nconst Home = ({ user, onLogout }) => {");
  if (p !== -1) {
    content = content.substring(0, p) + missingCountries + "\r\n\r\nconst Home = ({ user, onLogout }) => {" + content.substring(p + 41);
  }
}

// 2. Add imports
if (!content.includes('import MiniGamesModal')) {
  let imp = "import './Home.css';";
  let impP = content.indexOf(imp);
  if (impP !== -1) {
    content = content.substring(0, impP) + "import './Home.css';\nimport MiniGamesModal from './MiniGamesModal';\nimport MarketModal from './MarketModal';\nimport SpinWheelModal from './SpinWheelModal';\n" + content.substring(impP + imp.length);
  }
}

// 3. Add states
const stateLine = "  const [showPhoto, setShowPhoto] = useState(false);";
const stateIndex = content.indexOf(stateLine);
if (stateIndex !== -1) {
  const injection = "\n  const [showMiniGames, setShowMiniGames] = useState(false);\n  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);\n  const [userGold, setUserGold] = useState(0);\n";
  content = content.substring(0, stateIndex + stateLine.length) + injection + content.substring(stateIndex + stateLine.length);
}

// 4. Replace useEffect
const useEff = "  // ===== VİZE VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====\n  useEffect(() => {\n    if (user && user.email) {\n      const storedVisas = JSON.parse(localStorage.getItem(`visas_${user.email}`) || '[]');\n      setApprovedVisas(storedVisas);\n    }\n  }, [user]);";
let useEffP = content.indexOf(useEff);
if (useEffP === -1) {
    // try with \r\n
    const useEffRN = "  // ===== VİZE VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====\r\n  useEffect(() => {\r\n    if (user && user.email) {\r\n      const storedVisas = JSON.parse(localStorage.getItem(`visas_${user.email}`) || '[]');\r\n      setApprovedVisas(storedVisas);\r\n    }\r\n  }, [user]);";
    useEffP = content.indexOf(useEffRN);
    if(useEffP !== -1) {
        content = content.substring(0, useEffP) + "  // ===== VİZE VE ALTIN VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====\r\n  useEffect(() => {\r\n    if (user && user.email) {\r\n      const storedVisas = JSON.parse(localStorage.getItem(`visas_${user.email}`) || '[]');\r\n      setApprovedVisas(storedVisas);\r\n      const storedVal = localStorage.getItem(`gold_${user.email}`);\r\n      const parsedGold = parseInt(storedVal, 10);\r\n      setUserGold(isNaN(parsedGold) ? 500 : parsedGold);\r\n    }\r\n  }, [user]);\r\n\r\n  const updateGold = (amount) => {\r\n    setUserGold(prev => {\r\n      const newGold = Math.max(0, prev + amount);\r\n      if (user && user.email) {\r\n        localStorage.setItem(`gold_${user.email}`, newGold.toString());\r\n      }\r\n      return newGold;\r\n    });\r\n  };" + content.substring(useEffP + useEffRN.length);
    }
} else {
    content = content.substring(0, useEffP) + "  // ===== VİZE VE ALTIN VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====\n  useEffect(() => {\n    if (user && user.email) {\n      const storedVisas = JSON.parse(localStorage.getItem(`visas_${user.email}`) || '[]');\n      setApprovedVisas(storedVisas);\n      const storedVal = localStorage.getItem(`gold_${user.email}`);\n      const parsedGold = parseInt(storedVal, 10);\n      setUserGold(isNaN(parsedGold) ? 500 : parsedGold);\n    }\n  }, [user]);\n\n  const updateGold = (amount) => {\n    setUserGold(prev => {\n      const newGold = Math.max(0, prev + amount);\n      if (user && user.email) {\n        localStorage.setItem(`gold_${user.email}`, newGold.toString());\n      }\n      return newGold;\n    });\n  };" + content.substring(useEffP + useEff.length);
}

// 5. Replace right side UI
const rightSideHeader = "{/* Sağ Taraf: Hoş Geldiniz Mesajı ve Çıkış Butonu */}";
const rshIndex = content.indexOf(rightSideHeader);
if (rshIndex !== -1) {
  const endHeader = "</header>";
  const ehIndex = content.indexOf(endHeader, rshIndex);
  if (ehIndex !== -1) {
    const newRightSide = "{/* Sağ Taraf: Hoş Geldiniz Mesajı ve Çıkış Butonu */}\n" +
"        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'nowrap', flexShrink: 0 }}>\n" +
"          \n" +
"          <button \n" +
"            onClick={() => setShowMiniGames(true)}\n" +
"            style={{\n" +
"              height: '44px',\n" +
"              padding: '0 20px', \n" +
"              borderRadius: '12px', \n" +
"              border: 'none',\n" +
"              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',\n" +
"              color: '#ffffff', \n" +
"              fontSize: '0.95rem', \n" +
"              fontWeight: '800', \n" +
"              cursor: 'pointer',\n" +
"              boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)', \n" +
"              display: 'flex', \n" +
"              alignItems: 'center', \n" +
"              gap: '6px'\n" +
"            }}\n" +
"          >\n" +
"            🎮 Oyunlar & Altın Kazan\n" +
"          </button>\n" +
"\n" +
"          <div style={{ \n" +
"            height: '44px',\n" +
"            boxSizing: 'border-box',\n" +
"            background: '#fef3c7', \n" +
"            padding: '0 16px', \n" +
"            borderRadius: '12px', \n" +
"            border: '2px solid #fde68a', \n" +
"            display: 'flex', \n" +
"            alignItems: 'center', \n" +
"            gap: '6px', \n" +
"            fontWeight: '800', \n" +
"            color: '#b45309' \n" +
"          }}>\n" +
"            💰 {userGold} Altın\n" +
"          </div>\n" +
"\n" +
"          <span className=\"user-welcome\" style={{ color: '#475569', fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', height: '44px' }}>\n" +
"            Gezgin: <strong style={{ color: '#1e293b', marginLeft: '4px' }}>{user?.firstName || 'Kaşif'}</strong> 👋\n" +
"          </span>\n" +
"\n" +
"          <button \n" +
"            className=\"logout-btn\" \n" +
"            onClick={() => setShowLogoutConfirm(true)}\n" +
"            style={{\n" +
"              height: '44px',\n" +
"              padding: '0 16px',\n" +
"              borderRadius: '12px',\n" +
"              border: '1px solid #fee2e2',\n" +
"              background: '#fef2f2',\n" +
"              color: '#ef4444',\n" +
"              fontSize: '0.9rem',\n" +
"              fontWeight: '700',\n" +
"              cursor: 'pointer',\n" +
"              transition: 'all 0.2s ease',\n" +
"              display: 'flex',\n" +
"              alignItems: 'center',\n" +
"              gap: '6px'\n" +
"            }}\n" +
"          >\n" +
"            🚪 Çıkış Yap\n" +
"          </button>\n" +
"        </div>\n      ";
    content = content.substring(0, rshIndex) + newRightSide + content.substring(ehIndex);
  }
}

// 6. Modals at the end
const modals = "      {showMiniGames && (\n" +
"        <MiniGamesModal \n" +
"          onClose={() => setShowMiniGames(false)} \n" +
"          userGold={userGold}\n" +
"          onUpdateGold={updateGold}\n" +
"        />\n" +
"      )}\n" +
"\n" +
"      {showLogoutConfirm && (\n" +
"        <div className=\"visa-modal-overlay\">\n" +
"          <div className=\"visa-modal-content\" style={{ maxWidth: '400px', textAlign: 'center' }}>\n" +
"            <h2>🚪 Çıkış Yap</h2>\n" +
"            <p>Çıkış yapmak istediğinize emin misiniz?</p>\n" +
"            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>\n" +
"              <button \n" +
"                onClick={onLogout}\n" +
"                style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#ef4444', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}\n" +
"              >Evet, Çıkış Yap</button>\n" +
"              <button \n" +
"                onClick={() => setShowLogoutConfirm(false)}\n" +
"                style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer', fontWeight: 'bold' }}\n" +
"              >İptal</button>\n" +
"            </div>\n" +
"          </div>\n" +
"        </div>\n" +
"      )}\n" +
"    </div>";

const endDiv = "    </div>\n  );\n};\n\nexport default Home;\n";
const endDivRN = "    </div>\r\n  );\r\n};\r\n\r\nexport default Home;\r\n";

if (content.endsWith(endDiv)) {
  content = content.substring(0, content.length - endDiv.length) + modals + "\n  );\n};\n\nexport default Home;\n";
} else if (content.endsWith(endDivRN)) {
  content = content.substring(0, content.length - endDivRN.length) + modals + "\r\n  );\r\n};\r\n\r\nexport default Home;\r\n";
} else {
  const lastDiv = content.lastIndexOf("</div>");
  if (lastDiv !== -1) {
     content = content.substring(0, lastDiv) + modals + content.substring(lastDiv + 6);
  }
}

fs.writeFileSync('src/components/Home.jsx', content);
console.log("Successfully ran direct string replacement patch!");

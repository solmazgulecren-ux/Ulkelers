const fs = require('fs');

let content = fs.readFileSync('src/components/Home.jsx', 'utf8');

// The botched replace wiped out everything from showVisaAlert down to if (!approvedVisas.includes(key)) {
// Let's replace the botched section with the correct states.

// Find the section that currently looks like:
// const [score, setScore] = useState(0);
//       setCurrentQuestionIndex(0);

const botchedSection = `  const [score, setScore] = useState(0);
      setCurrentQuestionIndex(0);`;

const correctSection = `  const [score, setScore] = useState(0);
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
  };

  // ===== ÜLKE TIKLANDIĞINDA AÇILMA / VİZE SINAVI TETİKLEME =====
  const openCountry = (key) => {
    // EĞER KULLANICININ VİZESİ YOKSA, DOĞRUDAN O ÜLKENİN SINAVINI AÇ! (Böylece vize kısmı kaybolmaz)
    if (!approvedVisas.includes(key)) {
      setVisaSelectedCountry(key);
      setCurrentQuestionIndex(0);`;

content = content.replace(botchedSection, correctSection);

fs.writeFileSync('src/components/Home.jsx', content);
console.log('Fixed states in Home.jsx');

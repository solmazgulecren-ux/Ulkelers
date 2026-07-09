import React, { useState, useEffect } from 'react';
import { visaQuestions } from '../data/visaQuestions';

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
  germany: germanyImg
};

const COUNTRY_PROFILES = {
  russia: {
    name: "Rusya",
    capital: "Moskova",
    language: "Rusça",
    population: "144 Milyon",
    landmark: "Kızıl Meydan & Kremlin Sarayı",
    funFact: "Sibirya, Rusya topraklarının yaklaşık %77'sini oluşturur. Ayrıca dünyadaki ormanlık alanların %20'si Rusya sınırları içerisindedir!",
    flag: "🇷🇺",
    color: "#0039a6",
    mascotName: "Misha (Rus Ayısı)",
    interactiveActions: ["Samovarı Ateşle ☕", "Ayı Dansı Yap 🐻", "Bal Ye 🍯"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#0039a6" opacity="0.15" />
        <circle cx="50" cy="50" r="14" fill="#8b5a2b" />
        <circle cx="50" cy="50" r="8" fill="#fda4af" />
        <circle cx="110" cy="50" r="14" fill="#8b5a2b" />
        <circle cx="110" cy="50" r="8" fill="#fda4af" />
        <circle cx="80" cy="80" r="42" fill="#a0522d" />
        <ellipse cx="80" cy="92" rx="16" ry="12" fill="#ffedd5" />
        <polygon points="74,86 86,86 80,94" fill="#1e293b" />
        <circle cx="68" cy="78" r="9" fill="#ffffff" />
        <circle cx="68" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="78" r="9" fill="#ffffff" />
        <circle cx="92" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <path d="M 72,94 Q 80,102 88,94" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        <g transform="translate(100, 75) scale(0.65)">
          <rect x="0" y="10" width="30" height="40" rx="5" fill="#f59e0b" />
          <rect x="5" y="0" width="20" height="10" fill="#d97706" />
          <circle cx="15" cy="25" r="5" fill="#ef4444" />
        </g>
      </svg>
    )
  },
  turkey: {
    name: "Türkiye",
    capital: "Ankara",
    language: "Türkçe",
    population: "85 Milyon",
    landmark: "Ayasofya Camii, Kapadokya & Efes",
    funFact: "Kişi başına dünyada en çok çay tüketen ülke Türkiye'dir! Ayrıca lale çiçeğinin anavatanı Hollanda değil, Osmanlı döneminde Türkiye'dir.",
    flag: "🇹🇷",
    color: "#e30a17",
    mascotName: "Türk Maslahat",
    interactiveActions: ["Çay Doldur ☕", "Simit Dağıt 🥯", "Ney Üfle 🎶"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#e30a17" opacity="0.15" />
        <path d="M 50,55 Q 80,20 110,55 Z" fill="#b91c1c" />
        <line x1="80" y1="20" x2="80" y2="12" stroke="#1e293b" strokeWidth="3" />
        <circle cx="80" cy="12" r="3" fill="#1e293b" />
        <circle cx="80" cy="80" r="40" fill="#fbcfe8" />
        <path d="M 55,62 Q 80,68 105,62" fill="none" stroke="#1e293b" strokeWidth="4" />
        <path d="M 62,88 Q 80,105 98,88" fill="none" stroke="#b91c1c" strokeWidth="5" />
        <circle cx="68" cy="78" r="9" fill="#ffffff" />
        <circle cx="68" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="78" r="9" fill="#ffffff" />
        <circle cx="92" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <g transform="translate(25, 90) scale(0.7)">
          <path d="M 5,5 Q 0,15 5,30 Q 15,35 25,30 Q 30,15 25,5 Z" fill="#ef4444" />
        </g>
      </svg>
    )
  },
  colombia: {
    name: "Kolombiya",
    capital: "Bogota",
    language: "İspanyolca",
    population: "51 Milyon",
    landmark: "Cartagena Tarihi Şehri & Kahve Bölgesi",
    funFact: "Kolombiya, dünyadaki zümrüt üretiminin yaklaşık %70-90'ına sahiptir ve orkide türlerinin çeşitliliğinde dünya birincisidir!",
    flag: "🇨🇴",
    color: "#ca8a04",
    mascotName: "Kolombiya Kahvecisi",
    interactiveActions: ["Kahve Demle ☕", "Papağanla Konuş 🦜", "Salsa Dansı 💃"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#ca8a04" opacity="0.15" />
        <ellipse cx="80" cy="45" rx="55" ry="12" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <path d="M 45,45 Q 80,15 115,45 Z" fill="#ca8a04" />
        <circle cx="80" cy="80" r="38" fill="#fed7aa" />
        <circle cx="68" cy="78" r="9" fill="#ffffff" />
        <circle cx="68" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="78" r="9" fill="#ffffff" />
        <circle cx="92" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <path d="M 72,94 Q 80,102 88,94" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        <g transform="translate(115, 65) scale(0.65)">
          <rect x="0" y="5" width="20" height="35" rx="10" fill="#ef4444" />
          <circle cx="8" cy="12" r="3" fill="#1e293b" />
          <polygon points="12,10 18,14 12,18" fill="#fbbf24" />
        </g>
      </svg>
    )
  },
  china: {
    name: "Çin",
    capital: "Pekin",
    language: "Çince (Mandarin)",
    population: "1.4 Milyar",
    landmark: "Çin Seddi, Yasak Şehir & Terrakotta Ordusu",
    funFact: "Tarihteki en eski kağıt para, barut, pusula ve matbaa Çin'de icat edilmiştir. Ayrıca tüm dünyadaki dev pandalar Çin'e aittir ve kiralanır!",
    flag: "🇨🇳",
    color: "#de2110",
    mascotName: "Çin Pandası",
    interactiveActions: ["Yelpaze Salla 🎐", "Bambu Ye 🎋", "Kung Fu Duruşu 🐼"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#de2110" opacity="0.15" />
        <circle cx="52" cy="52" r="14" fill="#1e293b" />
        <circle cx="108" cy="52" r="14" fill="#1e293b" />
        <circle cx="80" cy="80" r="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="66" cy="78" rx="10" ry="14" fill="#1e293b" transform="rotate(-15 66 78)" />
        <ellipse cx="94" cy="78" rx="10" ry="14" fill="#1e293b" transform="rotate(15 94 78)" />
        <ellipse cx="80" cy="94" rx="8" ry="6" fill="#f1f5f9" />
        <polygon points="77,91 83,91 80,95" fill="#1e293b" />
        <circle cx="66" cy="78" r="4" fill="#ffffff" style={{ transform: pupilTransform }} />
        <circle cx="94" cy="78" r="4" fill="#ffffff" style={{ transform: pupilTransform }} />
        <path d="M 72,94 Q 80,102 88,94" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  india: {
    name: "Hindistan",
    capital: "Yeni Delhi",
    language: "Hintçe & İngilizce",
    population: "1.4 Milyar",
    landmark: "Tac Mahal, Ganj Nehri & Jaipur Sarayı",
    funFact: "Satranç oyunu Hindistan'da (Chaturanga adıyla) icat edilmiştir. Ayrıca dünyanın en büyük film endüstrisi olan Bollywood da buradadır!",
    flag: "🇮🇳",
    color: "#ff9933",
    mascotName: "Hindistan Fili",
    interactiveActions: ["Hortumla Su Püskürt 💧", "Dans Et 💃", "Baharat Kokla 🌶️"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#ff9933" opacity="0.15" />
        <ellipse cx="40" cy="80" rx="25" ry="30" fill="#94a3b8" />
        <ellipse cx="40" cy="80" rx="15" ry="20" fill="#fda4af" />
        <ellipse cx="120" cy="80" rx="25" ry="30" fill="#94a3b8" />
        <ellipse cx="120" cy="80" rx="15" ry="20" fill="#fda4af" />
        <circle cx="80" cy="80" r="38" fill="#64748b" />
        <path d="M 80,90 Q 80,120 95,115" fill="none" stroke="#64748b" strokeWidth="16" strokeLinecap="round" />
        <polygon points="80,45 85,55 80,65 75,55" fill="#fbbf24" />
        <circle cx="68" cy="78" r="7" fill="#ffffff" />
        <circle cx="68" cy="78" r="3.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="78" r="7" fill="#ffffff" />
        <circle cx="92" cy="78" r="3.5" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  egypt: {
    name: "Mısır",
    capital: "Kahire",
    language: "Arapça",
    population: "110 Milyon",
    landmark: "Giza Piramitleri, Büyük Sfenks & Luksor",
    funFact: "Giza Piramidi, Antik Dünyanın Yedi Harikası'ndan günümüze kadar ayakta kalmayı başaran tek yapıdır. Mısırlılar ayrıca takvimi keşfetmişlerdir!",
    flag: "🇪🇬",
    color: "#c09300",
    mascotName: "Mısır Firavunu",
    interactiveActions: ["Piramit Gizemini Çöz ⏳", "Hiyeroglif Yaz ✍️", "Altın Parıldat ✨"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#c09300" opacity="0.15" />
        <path d="M 36,80 Q 25,40 80,30 Q 135,40 124,80 L 115,115 L 45,115 Z" fill="#1d4ed8" />
        <path d="M 45,45 Q 80,38 115,45" fill="none" stroke="#fbbf24" strokeWidth="6" />
        <circle cx="80" cy="82" r="34" fill="#f59e0b" />
        <rect x="76" y="112" width="8" height="20" fill="#1e293b" rx="2" />
        <circle cx="68" cy="78" r="9" fill="#ffffff" />
        <circle cx="68" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="78" r="9" fill="#ffffff" />
        <circle cx="92" cy="78" r="4.5" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  norway: {
    name: "Norveç",
    capital: "Oslo",
    language: "Norveççe",
    population: "5.5 Milyon",
    landmark: "Geirangerfjord, Lofoten & Kuzey Işıkları",
    funFact: "Norveç, kış olimpiyat oyunlarında bugüne kadar en çok madalya kazanan ülkedir. Ayrıca somon suşisini Japonya'ya 1980'lerde ihraç eden Norveç'tir!",
    flag: "🇳🇴",
    color: "#00205b",
    mascotName: "Norveç Vikinki",
    interactiveActions: ["Balık Yakala 🐟", "Balta Savur 🪓", "Kuzey Işıklarını İzle 🌌"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#00205b" opacity="0.15" />
        <path d="M 52,42 Q 35,30 30,42 Q 40,48 52,42 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        <path d="M 108,42 Q 125,30 130,42 Q 120,48 108,42 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        <path d="M 45,85 Q 80,135 115,85 Z" fill="#d97706" />
        <path d="M 46,55 Q 80,30 114,55 Z" fill="#64748b" />
        <circle cx="80" cy="74" r="32" fill="#ffedd5" />
        <circle cx="68" cy="74" r="8" fill="#ffffff" />
        <circle cx="68" cy="74" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="74" r="8" fill="#ffffff" />
        <circle cx="92" cy="74" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  italy: {
    name: "İtalya",
    capital: "Roma",
    language: "İtalyanca",
    population: "59 Milyon",
    landmark: "Kolezyum, Venedik Kanalları & Pisa Kulesi",
    funFact: "İtalya'da 1500'den fazla farklı makarna türü ve dünyada en çok UNESCO Miras Alanı bulunmaktadır (toplamda 58 adet)!",
    flag: "🇮🇹",
    color: "#009246",
    mascotName: "İtalyan Şef",
    interactiveActions: ["Pizza Hamuru Çevir 🍕", "Spagetti Pişir 🍝", "Şarkı Söyle 🎵"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#009246" opacity="0.15" />
        <path d="M 52,50 C 45,30 70,20 80,35 C 90,20 115,30 108,50 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="58" y="48" width="44" height="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <circle cx="80" cy="84" r="34" fill="#ffdbca" />
        <circle cx="68" cy="80" r="8" fill="#ffffff" />
        <circle cx="68" cy="80" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="80" r="8" fill="#ffffff" />
        <circle cx="92" cy="80" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  spain: {
    name: "İspanya",
    capital: "Madrid",
    language: "İspanyolca",
    population: "47 Milyon",
    landmark: "Sagrada Familia, Alhambra Sarayı & Park Güell",
    funFact: "İspanya dünyadaki zeytinyağı üretiminin %45'ini tek başına karşılar. Ayrıca dünyaca ünlü 'La Tomatina' (Domates Festivali) her yıl burada yapılır!",
    flag: "🇪🇸",
    color: "#f1bf00",
    mascotName: "İspanyol Dansçı",
    interactiveActions: ["Kastanyet Çal 💃", "Yelpaze Salla 🪭", "Flamenko Yap 🎵"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#f1bf00" opacity="0.15" />
        <circle cx="80" cy="74" r="35" fill="#1e293b" />
        <circle cx="54" cy="52" r="8" fill="#dc2626" />
        <circle cx="80" cy="80" r="30" fill="#fddfcf" />
        <circle cx="72" cy="78" r="7" fill="#ffffff" />
        <circle cx="72" cy="78" r="3.5" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="88" cy="78" r="7" fill="#ffffff" />
        <circle cx="88" cy="78" r="3.5" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  mexico: {
    name: "Meksika",
    capital: "Mexico City",
    language: "İspanyolca",
    population: "128 Milyon",
    landmark: "Chichen Itza Piramidi, Teotihuacan",
    funFact: "Çikolata, mısır, domates ve acı biber dünyaya ilk olarak Meksika'dan yayılmıştır. Chichen Itza piramidi ise Dünyanın Yeni Yedi Harikası'ndan biridir!",
    flag: "🇲🇽",
    color: "#006847",
    mascotName: "Meksikalı Amigo",
    interactiveActions: ["Taco Hazırla 🌮", "Marakas Çal 🪘", "Sombreroyu Düzelt 🤠"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#006847" opacity="0.15" />
        <ellipse cx="80" cy="52" rx="56" ry="14" fill="#eab308" stroke="#15803d" strokeWidth="3" />
        <path d="M 52,50 Q 80,15 108,50 Z" fill="#15803d" />
        <circle cx="80" cy="85" r="32" fill="#fdba74" />
        <circle cx="68" cy="82" r="8" fill="#ffffff" />
        <circle cx="68" cy="82" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="82" r="8" fill="#ffffff" />
        <circle cx="92" cy="82" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  brazil: {
    name: "Brezilya",
    capital: "Brasilia",
    language: "Portekizce",
    population: "214 Milyon",
    landmark: "Kurtarıcı İsa Heykeli, Amazon Yağmur Ormanları",
    funFact: "Brezilya dünyada kahve üretiminde 150 yılı aşkın süredir liderdir. Ayrıca dünyadaki hayvan ve bitki türlerinin %10'undan fazlası Amazon'da yaşar!",
    flag: "🇧🇷",
    color: "#009b3a",
    mascotName: "Brezilyalı Sambacı",
    interactiveActions: ["Top Sektir ⚽", "Samba Yap 💃", "Karnaval Şarkısı 🎵"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#009b3a" opacity="0.15" />
        <path d="M 55,50 Q 30,0 60,40" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
        <path d="M 80,45 Q 80,-10 80,40" fill="none" stroke="#eab308" strokeWidth="9" strokeLinecap="round" />
        <path d="M 105,50 Q 130,0 100,40" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
        <circle cx="80" cy="85" r="32" fill="#b45309" />
        <circle cx="68" cy="82" r="8" fill="#ffffff" />
        <circle cx="68" cy="82" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="82" r="8" fill="#ffffff" />
        <circle cx="92" cy="82" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  },
  germany: {
    name: "Almanya",
    capital: "Berlin",
    language: "Almanca",
    population: "83 Milyon",
    landmark: "Brandenburg Kapısı, Neuschwanstein Şatosu",
    funFact: "Almanya'da 300'den fazla ekmek çeşidi ve 1500'den fazla sosis çeşidi bulunur. Otoyolların (Autobahn) %65'inde hız sınırı yoktur!",
    flag: "🇩🇪",
    color: "#ffcc00",
    mascotName: "Alman Hans",
    interactiveActions: ["Pretzel Isır 🥨", "Bardak Kaldır 🍺", "Yürüyüşe Çık 🥾"],
    mascotSvg: (pupilTransform) => (
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle cx="80" cy="80" r="55" fill="#ffcc00" opacity="0.15" />
        <path d="M 50,54 C 50,30 110,30 110,54 Z" fill="#15803d" />
        <rect x="52" y="50" width="56" height="6" fill="#ef4444" rx="2" />
        <circle cx="80" cy="84" r="33" fill="#fed7aa" />
        <circle cx="68" cy="82" r="8" fill="#ffffff" />
        <circle cx="68" cy="82" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
        <circle cx="92" cy="82" r="8" fill="#ffffff" />
        <circle cx="92" cy="82" r="4" fill="#1e293b" style={{ transform: pupilTransform }} />
      </svg>
    )
  }
};

export default function HomeScreen({ user, onLogout }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const [mascotMood, setMascotMood] = useState('Mutlu! 😊');
  const [extraClass, setExtraClass] = useState('');
  const [pupilShift, setPupilShift] = useState('translate(0, 0)');

  // Visa states
  const [approvedVisas, setApprovedVisas] = useState([]);
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(false);
  const [visaStep, setVisaStep] = useState('select'); // 'select' | 'quiz' | 'result'
  const [visaSelectedCountry, setVisaSelectedCountry] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showVisaAlert, setShowVisaAlert] = useState(false);

  // Load visas from persistent storage
  useEffect(() => {
    if (user && user.email) {
      const storedVisas = JSON.parse(localStorage.getItem(`visas_${user.email}`) || '[]');
      setApprovedVisas(storedVisas);
    }
  }, [user]);

  // Mouse tracking to move large mascot eyes inside modal
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 8 - 4;
    const y = ((e.clientY - rect.top) / rect.height) * 8 - 4;
    setPupilShift(`translate(${x}px, ${y}px)`);
  };

  const openCountry = (key) => {
    if (!approvedVisas.includes(key)) {
      setShowVisaAlert(true);
      setTimeout(() => setShowVisaAlert(false), 3000);
      return;
    }
    setSelectedKey(key);
    setMascotMood('Mutlu! 😊');
    setExtraClass('');
    setPupilShift('translate(0, 0)');
  };

  const closeCountry = () => {
    setSelectedKey(null);
  };

  const handleActionClick = (actionName) => {
    setExtraClass('animate-celebrate');
    setMascotMood(`Harika! ${actionName} tetiklendi! 🚀`);
    setTimeout(() => {
      setExtraClass('');
    }, 1200);
  };

  // Visa functions
  const handleStartQuiz = (countryKey) => {
    setVisaSelectedCountry(countryKey);
    setCurrentQuestionIndex(0);
    setScore(0);
    setVisaStep('quiz');
  };

  const handleAnswer = (optionIndex) => {
    const questions = visaQuestions[visaSelectedCountry];
    if (optionIndex === questions[currentQuestionIndex].answer) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setVisaStep('result');
    }
  };

  const handleFinishVisaProcess = (passed) => {
    if (passed) {
      const newVisas = [...approvedVisas, visaSelectedCountry];
      setApprovedVisas(newVisas);
      if (user && user.email) {
        localStorage.setItem(`visas_${user.email}`, JSON.stringify(newVisas));
      }
    }
    setVisaStep('select');
  };

  const selectedCountry = selectedKey ? COUNTRY_PROFILES[selectedKey] : null;

  return (
    <div className="home-container">
      {/* Top Navbar */}
      <header className="home-header">
        <div className="header-brand">
          <span className="brand-logo">🌍</span>
          <h1 className="brand-title">Dünya Rehberi</h1>
        </div>
        <div className="header-user-info">
          <button className="visa-btn" onClick={() => { setIsVisaModalOpen(true); setVisaStep('select'); }}>🛂 Vize Al ve Gez</button>
          <span className="user-welcome">Hoş geldin, <strong>{user?.firstName || 'Kaşif'} {user?.lastName || ''}</strong>! 👋</span>
          <button className="logout-btn" onClick={onLogout}>Güvenli Çıkış</button>
        </div>
      </header>

      {/* Hero Welcome banner */}
      <section className="home-hero">
        <h2>Dünyayı Keşfetmeye Hazır Mısın?</h2>
        <p>Aşağıdaki renkli kartlardan bir ülkeyi seç, eğlenceli maskotlarımızın gizemlerini ve ülkelerin bilgilerini keşfet!</p>
      </section>

      {/* Main Grid */}
      <main className="home-main">
        <div className="country-grid">
          {Object.entries(COUNTRY_PROFILES).map(([key, data]) => (
            <div
              key={key}
              className="country-card"
              style={{ '--accent-color': data.color }}
              onClick={() => openCountry(key)}
            >
              <div className="country-card-header">
                <span className="country-card-flag">{data.flag}</span>
                <h3 className="country-card-name">{data.name}</h3>
              </div>
              <div className="country-card-preview" style={{ width: '110px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${data.color}22 0%, ${data.color}80 100%)`,
                  zIndex: 1
                }} />
                <img 
                  src={MASCOT_IMAGES[key]} 
                  alt={data.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, position: 'relative', filter: !approvedVisas.includes(key) ? 'grayscale(80%)' : 'none' }} 
                />
                {!approvedVisas.includes(key) && (
                  <div style={{ position: 'absolute', zIndex: 3, fontSize: '40px', background: 'rgba(255,255,255,0.7)', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    🔒
                  </div>
                )}
              </div>
              <div className="country-card-footer">
                {approvedVisas.includes(key) ? (
                  <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✅ Vize Onaylandı</span>
                ) : (
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🚫 Vize Yok</span>
                )}
                <span className="explore-tag">Detayları Gör →</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Visa Alert Toast */}
      {showVisaAlert && (
        <div className="visa-alert-toast">
          Bu ülkeye giriş yapmak için vize almanız gerekmektedir. Üstteki "Vize Al ve Gez" butonunu kullanın.
        </div>
      )}

      {/* Visa Application Modal */}
      {isVisaModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsVisaModalOpen(false)}>
          <div className="modal-content visa-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsVisaModalOpen(false)}>&times;</button>
            
            {visaStep === 'select' && (
              <div className="visa-step-select">
                <h2>🌍 Vize Başvurusu</h2>
                <p>Hangi ülke için vize almak istiyorsunuz? (Sadece vizesi olmayan ülkeler listelenir)</p>
                <div className="visa-country-grid">
                  {Object.entries(COUNTRY_PROFILES).filter(([k]) => !approvedVisas.includes(k)).map(([k, d]) => (
                    <button key={k} className="visa-country-btn" onClick={() => handleStartQuiz(k)}>
                      <span style={{ fontSize: '24px' }}>{d.flag}</span>
                      <span>{d.name}</span>
                    </button>
                  ))}
                  {Object.keys(COUNTRY_PROFILES).filter(k => !approvedVisas.includes(k)).length === 0 && (
                    <p style={{ gridColumn: '1 / -1', fontWeight: 'bold', color: '#16a34a' }}>Tebrikler! Tüm ülkelerin vizesini aldınız.</p>
                  )}
                </div>
              </div>
            )}

            {visaStep === 'quiz' && visaSelectedCountry && (
              <div className="visa-step-quiz">
                <h2>{COUNTRY_PROFILES[visaSelectedCountry].flag} {COUNTRY_PROFILES[visaSelectedCountry].name} Vize Sınavı</h2>
                <div className="quiz-progress">Soru {currentQuestionIndex + 1} / 5</div>
                <h3 className="quiz-question">{visaQuestions[visaSelectedCountry][currentQuestionIndex].question}</h3>
                <div className="quiz-options">
                  {visaQuestions[visaSelectedCountry][currentQuestionIndex].options.map((opt, idx) => (
                    <button key={idx} className="quiz-option-btn" onClick={() => handleAnswer(idx)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {visaStep === 'result' && (
              <div className="visa-step-result">
                <h2>Sınav Sonucu</h2>
                <div className="score-display" style={{ fontSize: '18px', margin: '10px 0' }}>Doğru Sayısı: <strong>{score} / 5</strong></div>
                {score >= 3 ? (
                  <div className="result-success">
                    <span className="result-icon">🎉</span>
                    <h3>Tebrikler!</h3>
                    <p>{COUNTRY_PROFILES[visaSelectedCountry].name} vizesi onaylandı!</p>
                    <button className="visa-action-btn success" onClick={() => handleFinishVisaProcess(true)}>Harika!</button>
                  </div>
                ) : (
                  <div className="result-fail">
                    <span className="result-icon">❌</span>
                    <h3>Maalesef...</h3>
                    <p>Vize başvurunuz reddedildi. En az 3 doğru yapmalısınız.</p>
                    <button className="visa-action-btn" onClick={() => handleFinishVisaProcess(false)}>Tekrar Dene</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Country Details Modal */}
      {selectedCountry && (
        <div className="modal-backdrop" onClick={closeCountry}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} onMouseMove={handleMouseMove}>
            <button className="modal-close-btn" onClick={closeCountry}>&times;</button>
            
            <div className="modal-body-split">
              {/* Left detail info */}
              <div className="modal-details-pane">
                <div className="modal-country-header">
                  <span className="modal-flag">{selectedCountry.flag}</span>
                  <h2>{selectedCountry.name}</h2>
                </div>
                
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td><strong>Başkent:</strong></td>
                      <td>{selectedCountry.capital}</td>
                    </tr>
                    <tr>
                      <td><strong>Resmi Dil:</strong></td>
                      <td>{selectedCountry.language}</td>
                    </tr>
                    <tr>
                      <td><strong>Nüfus:</strong></td>
                      <td>{selectedCountry.population}</td>
                    </tr>
                    <tr>
                      <td><strong>Gezilecek Yerler:</strong></td>
                      <td>{selectedCountry.landmark}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="fun-fact-section">
                  <h4>💡 İlginç Bilgi:</h4>
                  <p>{selectedCountry.funFact}</p>
                </div>
              </div>

              {/* Right interactive mascot representation */}
              <div className="modal-mascot-pane">
                <h3>{selectedCountry.mascotName}</h3>
                <div className={`modal-mascot-visual ${extraClass}`} style={{ width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${selectedCountry.color}22 0%, ${selectedCountry.color}80 100%)`,
                    zIndex: 1
                  }} />
                  <img 
                    src={MASCOT_IMAGES[selectedKey]} 
                    alt={selectedCountry.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, position: 'relative' }} 
                  />
                </div>

                <div className="mascot-mood-badge">
                  Durum: <strong>{mascotMood}</strong>
                </div>

                <div className="interactive-widget">
                  <p className="widget-title">Maskotla Etkileşime Geç!</p>
                  <div className="widget-buttons">
                    {selectedCountry.interactiveActions.map((action, i) => (
                      <button
                        key={i}
                        className="widget-action-btn"
                        onClick={() => handleActionClick(action)}
                        style={{ background: selectedCountry.color }}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .home-container {
          min-height: 100vh;
          background: var(--bg-gradient-home);
          display: flex;
          flex-direction: column;
          font-family: var(--primary-font);
        }

        .home-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 16px 40px;
          border-bottom: 2px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-logo {
          font-size: 28px;
        }

        .brand-title {
          font-size: 24px;
          margin: 0;
          color: #1e293b;
          font-weight: 700;
        }

        .header-user-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .user-welcome {
          font-size: 15px;
          color: #475569;
        }

        .logout-btn {
          font-family: var(--primary-font);
          font-size: 14px;
          font-weight: 600;
          color: #ef4444;
          background: #fef2f2;
          border: 1px solid #fee2e2;
          padding: 8px 16px;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .logout-btn:hover {
          background: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
        }

        .home-hero {
          text-align: center;
          padding: 40px 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .home-hero h2 {
          font-size: 32px;
          color: #1e293b;
          margin: 0 0 10px 0;
        }

        .home-hero p {
          font-size: 16px;
          color: #64748b;
        }

        .home-main {
          flex: 1;
          padding: 0 40px 40px;
          display: flex;
          justify-content: center;
        }

        .country-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1200px;
        }

        @media (max-width: 1024px) {
          .country-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .home-header {
            padding: 16px 20px;
          }
          .home-main {
            padding: 0 20px 20px;
          }
        }

        @media (max-width: 768px) {
          .country-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .country-grid {
            grid-template-columns: 1fr;
          }
        }

        .country-card {
          background: #ffffff;
          border: 3px solid transparent;
          border-radius: var(--border-radius-lg);
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 20px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .country-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-color);
          box-shadow: 0 16px 32px rgba(0,0,0,0.06);
        }

        .country-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          margin-bottom: 12px;
        }

        .country-card-flag {
          font-size: 24px;
        }

        .country-card-name {
          font-size: 18px;
          margin: 0;
          color: #1e293b;
        }

        .country-card-preview {
          margin: 15px 0;
        }

        .country-card-footer {
          display: flex;
          justify-content: space-between;
          width: 100%;
          font-size: 13px;
          color: #64748b;
          border-top: 1px dashed #e2e8f0;
          padding-top: 12px;
          margin-top: auto;
        }

        .explore-tag {
          color: var(--accent-color);
          font-weight: 600;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--border-radius-lg);
          max-width: 800px;
          width: 100%;
          padding: 32px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          position: relative;
          border: 1px solid rgba(255,255,255,0.4);
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          color: #64748b;
          cursor: pointer;
          line-height: 1;
        }

        .modal-close-btn:hover {
          color: #1e293b;
        }

        .modal-body-split {
          display: flex;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .modal-body-split {
            flex-direction: column;
          }
          .modal-content {
            padding: 20px;
            max-height: 90vh;
            overflow-y: auto;
          }
        }

        .modal-details-pane {
          flex: 1.2;
          text-align: left;
        }

        .modal-country-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .modal-flag {
          font-size: 38px;
        }

        .modal-country-header h2 {
          font-size: 28px;
          margin: 0;
          color: #0f172a;
        }

        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .info-table td {
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 15px;
        }

        /* Visa Features */
        .visa-btn {
          font-family: var(--primary-font);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: #2563eb;
          padding: 8px 16px;
          border: none;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
        }
        .visa-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .visa-alert-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #ef4444;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
          z-index: 9999;
          animation: slide-down 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes slide-down {
          0% { top: -50px; opacity: 0; }
          100% { top: 20px; opacity: 1; }
        }

        .visa-modal {
          max-width: 600px;
          text-align: center;
        }
        .visa-country-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 20px;
        }
        .visa-country-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px;
          font-family: var(--primary-font);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .visa-country-btn:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
        }
        .visa-step-quiz .quiz-progress {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 10px;
        }
        .visa-step-quiz .quiz-question {
          font-size: 20px;
          color: #0f172a;
          margin-bottom: 24px;
        }
        .visa-step-quiz .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .quiz-option-btn {
          background: #ffffff;
          border: 2px solid #cbd5e1;
          border-radius: 8px;
          padding: 14px;
          font-family: var(--primary-font);
          font-size: 16px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .quiz-option-btn:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
        }
        .visa-step-result .result-icon {
          font-size: 64px;
          display: block;
          margin: 20px 0;
        }
        .visa-action-btn {
          font-family: var(--primary-font);
          font-size: 16px;
          font-weight: 600;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: #ffffff;
          background: #64748b;
          margin-top: 20px;
          transition: all 0.2s ease;
        }
        .visa-action-btn:hover {
          transform: translateY(-1px);
        }
        .visa-action-btn.success {
          background: #16a34a;
        }
        .visa-action-btn.success:hover {
          background: #15803d;
        }


        .fun-fact-section {
          background: #f0fdf4;
          border-left: 4px solid #22c55e;
          padding: 16px;
          border-radius: var(--border-radius-md);
        }

        .fun-fact-section h4 {
          margin: 0 0 6px 0;
          color: #15803d;
          font-size: 15px;
        }

        .fun-fact-section p {
          font-size: 14px;
          color: #166534;
          line-height: 1.5;
        }

        .modal-mascot-pane {
          flex: 0.8;
          background: #f8fafc;
          border-radius: var(--border-radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }

        .modal-mascot-pane h3 {
          margin: 0 0 16px;
          font-size: 18px;
          color: #1e293b;
        }

        .modal-mascot-visual {
          cursor: crosshair;
          transition: transform 0.2s ease;
        }

        .mascot-mood-badge {
          margin-top: 12px;
          background: #e2e8f0;
          color: #334155;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .interactive-widget {
          margin-top: 24px;
          width: 100%;
        }

        .widget-title {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 10px;
        }

        .widget-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .widget-action-btn {
          font-family: var(--primary-font);
          color: #ffffff;
          border: none;
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          font-weight: 600;
        }

        .widget-action-btn:hover {
          filter: brightness(0.9);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}

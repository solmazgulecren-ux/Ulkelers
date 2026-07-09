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


// Speech bubbles content
const MASCOT_DETAILS = {
  russia: { name: "Rusya Ayısı", greeting: "Привет! Ben Misha. Samovar çayım sıcacık! 🇷🇺🐻", color: "#0039a6", flag: "🇷🇺" },
  turkey: { name: "Türk Maslahat", greeting: "Merhaba! Bir bardak tavşan kanı çay ve simit alır mısın? 🇹🇷☕", color: "#e30a17", flag: "🇹🇷" },
  colombia: { name: "Kolombiya Kahvecisi", greeting: "¡Hola! Dünyanın en iyi kahvesi burada yetişir! 🇨🇴🦜", color: "#fcd116", flag: "🇨🇴" },
  china: { name: "Çin Pandası", greeting: "你好 (Nǐ hǎo)! Yelpazemle serinletirim, bambu yerim! 🇨🇳🐼", color: "#de2110", flag: "🇨🇳" },
  india: { name: "Hindistan Fili", greeting: "नमस्ते (Namaste)! Bilgeliğin ve barışın sembolüyüm! 🇮🇳🐘", color: "#ff9933", flag: "🇮🇳" },
  egypt: { name: "Mısır Firavunu", greeting: "أهلاً (Ahlan)! Piramitlerin sırrını çözmeye hazır mısın? 🇪🇬👑", color: "#c09300", flag: "🇪🇬" },
  norway: { name: "Norveç Vikinki", greeting: "Hallo! Baltam keskin, balığım taze, gemim hazır! 🇳🇴🪓", color: "#00205b", flag: "🇳🇴" },
  italy: { name: "İtalyan Şef", greeting: "Ciao! Mamma mia! Dünyanın en lezzetli pizzası fırında! 🇮🇹🍕", color: "#009246", flag: "🇮🇹" },
  spain: { name: "İspanyol Dansçı", greeting: "¡Hola! Flamenko ritmiyle hayatı dansa dönüştürün! 🇪🇸💃", color: "#f1bf00", flag: "🇪🇸" },
  mexico: { name: "Meksikalı Amigo", greeting: "¡Ay Caramba! Taco yiyelim, marakas çalalım! 🇲🇽🌮", color: "#006847", flag: "🇲🇽" },
  brazil: { name: "Brezilyalı Sambacı", greeting: "Olá! Futbol, dans ve karnaval ruhu damarlarımızda! 🇧🇷⚽", color: "#009b3a", flag: "🇧🇷" },
  germany: { name: "Alman Hans", greeting: "Hallo! Çıtır pretzel ve buz gibi içecekle keyif yapalım! 🇩🇪🥨", color: "#ffcc00", flag: "🇩🇪" }
};

export default function MascotGrid({
  isTyping,
  isPasswordFocused,
  isPasswordVisible,
  celebrationState,
  onMascotClick,
  mousePos
}) {
  const [activeBubble, setActiveBubble] = useState(null);
  const [clickedMascots, setClickedMascots] = useState({});
  const [fightActive, setFightActive] = useState(false);

  // Sibling fight animations
  useEffect(() => {
    const interval = setInterval(() => {
      setFightActive(true);
      setTimeout(() => setFightActive(false), 2000);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleMascotInteraction = (key) => {
    setActiveBubble(key);
    setClickedMascots(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
    if (onMascotClick) {
      onMascotClick(key);
    }
    setTimeout(() => {
      setActiveBubble(current => current === key ? null : current);
    }, 4000);
  };

  const getPupilTransform = () => {
    if (isPasswordFocused) {
      if (!isPasswordVisible) {
        return "translate(0, 4px) scaleY(0.1)";
      } else {
        return "translate(6px, 1px) scale(1.6)";
      }
    }
    if (isTyping) {
      return "translate(5px, 2px)";
    }
    // Dynamic eye tracking following mouse cursor pointer
    if (mousePos) {
      return `translate(${mousePos.x}px, ${mousePos.y}px)`;
    }
    return "translate(0, 0)";
  };

  const getBodyStyle = (index) => {
    let transform = "";
    if (isTyping) {
      transform = "skewY(1deg) rotate(3deg) scale(1.02) translateX(4px)";
    } else if (isPasswordFocused && isPasswordVisible) {
      transform = "scale(1.05) translate(3px, -2px)";
    } else if (isPasswordFocused && !isPasswordVisible) {
      transform = "scale(0.95) translate(-4px, 2px)";
    }
    return {
      transform,
      transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    };
  };

  const getFightClass = (key) => {
    if (!fightActive) return "";
    if (key === 'russia') return 'animate-fight-left';
    if (key === 'turkey') return 'animate-fight-right';
    if (key === 'mexico') return 'animate-fight-left';
    if (key === 'germany') return 'animate-fight-right';
    return "";
  };

  return (
    <div className="mascot-grid-wrapper">
      <div className="mascot-grid">
        {Object.entries(MASCOT_DETAILS).map(([key, data], index) => {
          const isDancing = celebrationState;
          const fightClass = getFightClass(key);
          const isClicked = clickedMascots[key] || 0;

          return (
            <div
              key={key}
              className={`mascot-card ${isDancing ? 'animate-celebrate' : ''} ${fightClass}`}
              style={{
                '--accent-color': data.color,
                animationDelay: `${index * 0.05}s`
              }}
              onClick={() => handleMascotInteraction(key)}
            >
              {/* Floating Country Flag Badge */}
              <div className="country-flag-badge">
                {data.flag}
              </div>

              {/* Speech Bubble */}
              {activeBubble === key && (
                <div className="speech-bubble">
                  <div className="speech-bubble-text">{data.greeting}</div>
                  <div className="speech-bubble-arrow"></div>
                </div>
              )}

              {/* Mascot Vector Render */}
              <div className="mascot-svg-container" style={getBodyStyle(index)}>
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Backdrop circle with country color */}
                  <div style={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${data.color}22 0%, ${data.color}80 100%)`,
                    zIndex: 1
                  }} />
                  {/* Chibi mascot PNG */}
                  <img 
                    src={MASCOT_IMAGES[key]} 
                    alt={data.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      zIndex: 2,
                      position: 'relative'
                    }} 
                  />
                  {/* Sibling fight dust overlay */}
                  {fightActive && (key === 'russia' || key === 'turkey' || key === 'mexico' || key === 'germany') && (
                    <div className="clash-stars-container" style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
                      <svg viewBox="0 0 160 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                        <g className="clash-stars" opacity="0.8">
                          <polygon points="40,25 43,33 51,33 45,38 47,46 40,41 33,46 35,38 29,33 37,33" fill="#fbbf24" />
                          <polygon points="120,35 122,40 128,40 123,43 125,49 120,45 115,49 117,43 112,40 118,40" fill="#fbbf24" />
                        </g>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Extra Fun Interactivity indicators */}
              <div className="click-indicator">
                <span>{isClicked > 0 ? `Tıklandı! x${isClicked}` : "Dokun bana!"}</span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .mascot-grid-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .mascot-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 820px;
        }

        @media (max-width: 1024px) {
          .mascot-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 580px) {
          .mascot-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        .mascot-card {
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: none;
          overflow: visible;
        }

        .mascot-card:hover {
          transform: translateY(-6px) scale(1.08);
          background: transparent;
          box-shadow: none;
        }

        .country-flag-badge {
          position: absolute;
          top: -2px;
          right: 12px;
          font-size: 18px;
          background: #ffffff;
          border-radius: 4px;
          padding: 1px 3px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mascot-svg-container {
          width: 100%;
          aspect-ratio: 1;
          max-height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mascot-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .click-indicator {
          font-size: 10px;
          color: var(--color-text-muted);
          margin-top: 6px;
          background: rgba(0,0,0,0.03);
          padding: 1px 6px;
          border-radius: 10px;
          transition: all 0.2s ease;
        }
        
        .mascot-card:hover .click-indicator {
          background: var(--accent-color);
          color: #ffffff;
        }

        .speech-bubble {
          position: absolute;
          bottom: 105%;
          left: 50%;
          transform: translate(-50%, -10px);
          background: #1e293b;
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 12px;
          line-height: 1.4;
          width: 170px;
          text-align: center;
          z-index: 50;
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
          animation: pop-bubble 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          pointer-events: none;
        }

        .speech-bubble-arrow {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px 8px 0 8px;
          border-style: solid;
          border-color: #1e293b transparent transparent transparent;
        }

        .clash-stars polygon {
          transform-origin: center;
          animation: star-glow 1s infinite alternate;
        }
        @keyframes star-glow {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0.5; }
          100% { transform: scale(1.3) rotate(35deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

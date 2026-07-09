import React, { useState } from 'react';
import MascotGrid from './MascotGrid';

export default function RegisterScreen({ onNavigate }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // States for mascot animations
  const [isTyping, setIsTyping] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [celebrationState, setCelebrationState] = useState(false);
  const [rocketState, setRocketState] = useState('idle'); // 'idle' | 'launched'
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const handleFocus = (field) => {
    if (field === 'password' || field === 'passwordConfirm') {
      setIsPasswordFocused(true);
    } else {
      setIsPasswordFocused(false);
      setIsTyping(true);
    }
  };

  const handleBlur = () => {
    setIsPasswordFocused(false);
    setIsTyping(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      setErrorMsg('Lütfen tüm alanları doldurun.');
      return;
    }

    if (password !== passwordConfirm) {
      setErrorMsg('Şifreler uyuşmuyor!');
      return;
    }

    if (password.length < 4) {
      setErrorMsg('Şifre en az 4 karakter olmalıdır.');
      return;
    }

    // Check if user already exists
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = savedUsers.some((u) => u.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
      setErrorMsg('Bu e-posta adresi zaten kayıtlı!');
      return;
    }

    // Success flow - Trigger dictator rocket launch & character celebration!
    setCelebrationState(true);
    setRocketState('launched');

    // Save user after animation finishes, then redirect
    setTimeout(() => {
      const newUser = {
        firstName,
        lastName,
        email,
        password
      };
      savedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(savedUsers));

      // Reset states
      setCelebrationState(false);
      setRocketState('idle');
      
      // Navigate to login
      onNavigate('login');
    }, 2800);
  };

  return (
    <div className="split-layout register-layout">
      {/* Flying Rocket Anim Overlay */}
      {rocketState === 'launched' && (
        <div className="rocket-launch-overlay">
          <div className="rocket-flight-path">
            {/* The Rocket */}
            <svg viewBox="0 0 100 150" className="flying-rocket-svg">
              {/* Rocket Flame */}
              <path d="M 50,110 C 35,130 50,150 50,150 C 50,150 65,130 50,110 Z" fill="#f59e0b">
                <animate attributeName="d" values="M 50,110 C 35,130 50,150 50,150 C 50,150 65,130 50,110 Z; M 50,110 C 40,140 50,160 50,160 C 50,160 60,140 50,110 Z" dur="0.1s" repeatCount="indefinite" />
              </path>
              <path d="M 50,110 C 42,125 50,140 50,140 C 50,140 58,125 50,110 Z" fill="#ef4444" />
              {/* Body */}
              <path d="M 30,50 C 30,20 50,0 50,0 C 50,0 70,20 70,50 L 70,110 L 30,110 Z" fill="#cbd5e1" />
              {/* Rocket Fins */}
              <path d="M 30,90 L 10,110 L 30,110 Z" fill="#ef4444" />
              <path d="M 70,90 L 90,110 L 70,110 Z" fill="#ef4444" />
              {/* Window */}
              <circle cx="50" cy="50" r="10" fill="#38bdf8" stroke="#1e293b" strokeWidth="3" />
              <path d="M 45,45 Q 50,55 55,45" fill="none" stroke="#ffffff" strokeWidth="2" />
              {/* Red Tip */}
              <path d="M 40,25 C 40,15 50,0 50,0 C 50,0 60,15 60,25 Z" fill="#ef4444" />
            </svg>
            <div className="smoke-cloud smoke-1"></div>
            <div className="smoke-cloud smoke-2"></div>
            <div className="smoke-cloud smoke-3"></div>
            <h2 className="success-banner-txt">Başarıyla Kayıt Olundu! 🎉</h2>
          </div>
        </div>
      )}

      {/* Left panel containing dynamic mascots */}
      <div className="left-panel register-left-panel">
        <div className="decorations">
          <h2 className="left-panel-title">Bizimle Keşfet! 🌟</h2>
          <p className="left-panel-subtitle">Hemen kayıt ol ve tüm eğlenceli animasyonları anasayfada aç!</p>
        </div>

        <MascotGrid
          isTyping={isTyping}
          isPasswordFocused={isPasswordFocused}
          isPasswordVisible={isPasswordVisible}
          celebrationState={celebrationState}
        />
      </div>

      {/* Right panel containing register form & dictator mascot in corner */}
      <div className="right-panel register-right-panel">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Kayıt Ol</h1>
            <p className="auth-subtitle">Yeni bir dünya macerasına katılın</p>
          </div>

          {errorMsg && <div className="error-banner">{errorMsg}</div>}

          <form onSubmit={handleRegisterSubmit} className="auth-form">
            <div className="name-row">
              <div className="input-group">
                <label htmlFor="reg-name">Ad</label>
                <input
                  id="reg-name"
                  type="text"
                  placeholder="Ahmet"
                  value={firstName}
                  onChange={handleInputChange(setFirstName)}
                  onFocus={() => handleFocus('first')}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="reg-surname">Soyad</label>
                <input
                  id="reg-surname"
                  type="text"
                  placeholder="Yılmaz"
                  value={lastName}
                  onChange={handleInputChange(setLastName)}
                  onFocus={() => handleFocus('last')}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="reg-email">E-posta</label>
              <input
                id="reg-email"
                type="email"
                placeholder="ahmet@mail.com"
                value={email}
                onChange={handleInputChange(setEmail)}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="reg-password">Şifre</label>
              <div className="password-input-wrapper">
                <input
                  id="reg-password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={handleInputChange(setPassword)}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="reg-password-confirm">Şifre Tekrar</label>
              <div className="password-input-wrapper">
                <input
                  id="reg-password-confirm"
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={passwordConfirm}
                  onChange={handleInputChange(setPasswordConfirm)}
                  onFocus={() => handleFocus('passwordConfirm')}
                  onBlur={handleBlur}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  title={isPasswordVisible ? "Şifreyi Gizle" : "Şifreyi Göster"}
                >
                  {isPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={rocketState === 'launched'}>
              {rocketState === 'launched' ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
            </button>
          </form>

          <div className="auth-footer">
            <span>Zaten bir hesabınız var mı?</span>
            <button className="link-btn" onClick={() => onNavigate('login')}>
              Giriş Yap
            </button>
          </div>
        </div>

        {/* Dictator Mascot in the corner */}
        <div className={`dictator-mascot-container ${rocketState === 'launched' ? 'rocket-launched-state' : ''}`}>
          <div className="dictator-speech">Füzemi fırlatırım ha! 🚀</div>
          <svg viewBox="0 0 140 140" className="dictator-svg">
            {/* Flat top black haircut */}
            <path d="M 30,45 C 30,15 110,15 110,45 L 115,55 L 25,55 Z" fill="#111827" />
            <rect x="25" y="32" width="90" height="15" fill="#111827" rx="3" />
            
            {/* Head / Ears */}
            <circle cx="28" cy="70" r="10" fill="#fbcfe8" />
            <circle cx="112" cy="70" r="10" fill="#fbcfe8" />
            <circle cx="70" cy="75" r="44" fill="#fbcfe8" />

            {/* Suit jacket */}
            <path d="M 26,115 C 26,95 114,95 114,115 L 120,150 L 20,150 Z" fill="#374151" />
            {/* Collar details */}
            <polygon points="50,110 70,126 90,110 70,150" fill="#1e293b" />
            <circle cx="60" cy="132" r="3" fill="#fbbf24" />
            <circle cx="80" cy="132" r="3" fill="#fbbf24" />
            <circle cx="70" cy="142" r="3" fill="#fbbf24" />
            {/* Red lapel pin */}
            <polygon points="38,118 42,124 36,124" fill="#ef4444" />

            {/* Eyes */}
            <circle cx="55" cy="70" r="6" fill="#1e293b" />
            <circle cx="85" cy="70" r="6" fill="#1e293b" />
            <path d="M 48,60 Q 55,56 62,60" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <path d="M 78,60 Q 85,56 92,60" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" />

            {/* Cheerful/Mischievous mouth */}
            <path d="M 58,86 Q 70,102 82,86 C 82,86 70,92 58,86 Z" fill="#ef4444" stroke="#111827" strokeWidth="2" />
            <ellipse cx="70" cy="85" rx="14" ry="4" fill="#ffffff" />

            {/* Hand holding plate of sushi (right hand, viewer's left) */}
            <g className="dictator-sushi-plate">
              {/* Hand */}
              <circle cx="22" cy="102" r="9" fill="#fbcfe8" stroke="#1e293b" strokeWidth="2" />
              {/* Plate */}
              <ellipse cx="18" cy="98" rx="18" ry="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
              {/* Maki Rolls */}
              <rect x="6" y="86" width="10" height="10" rx="1" fill="#111827" />
              <circle cx="11" cy="91" r="3.5" fill="#ffffff" />
              <circle cx="11" cy="91" r="1.5" fill="#ea580c" />
              
              <rect x="18" y="88" width="10" height="8" rx="1" fill="#111827" />
              <circle cx="23" cy="92" r="2.8" fill="#ffffff" />
              <circle cx="23" cy="92" r="1" fill="#ea580c" />
              
              {/* Small Flag */}
              <line x1="28" y1="92" x2="28" y2="70" stroke="#111827" strokeWidth="1.5" />
              <rect x="28" y="70" width="15" height="10" fill="#1d4ed8" />
              <rect x="28" y="72" width="15" height="6" fill="#ffffff" />
              <rect x="28" y="73" width="15" height="4" fill="#ef4444" />
              <circle cx="34" cy="75" r="2" fill="#ffffff" />
              <polygon points="34,74 34.5,75 35.5,75 34.7,75.5 35,76.5 34,76 33,76.5 33.3,75.5 32.5,75 33.5,75" fill="#ef4444" />
            </g>

            {/* Hand holding rocket (if rocket not launched) */}
            {rocketState !== 'launched' && (
              <g className="dictator-rocket-hand">
                {/* Hand */}
                <circle cx="118" cy="102" r="9" fill="#fbcfe8" stroke="#1e293b" strokeWidth="2" />
                {/* Small Rocket */}
                <g transform="translate(112, 60) scale(0.4) rotate(15)">
                  <path d="M 10,35 C 10,15 20,0 20,0 C 20,0 30,15 30,35 L 30,70 L 10,70 Z" fill="#cbd5e1" stroke="#1e293b" strokeWidth="3" />
                  <path d="M 10,60 L 0,72 L 10,72 Z" fill="#ef4444" />
                  <path d="M 30,60 L 40,72 L 30,72 Z" fill="#ef4444" />
                  <circle cx="20" cy="30" r="5" fill="#38bdf8" />
                  <path d="M 18,50 Q 20,54 22,50" fill="none" stroke="#1e293b" strokeWidth="2" />
                  <path d="M 15,18 C 15,10 20,0 20,0 C 20,0 25,10 25,18 Z" fill="#ef4444" />
                </g>
              </g>
            )}
          </svg>
        </div>
      </div>

      <style>{`
        .register-layout {
          position: relative;
        }

        .name-row {
          display: flex;
          gap: 16px;
        }

        .name-row .input-group {
          flex: 1;
        }

        .register-left-panel {
          background: var(--bg-gradient-register);
        }

        .register-right-panel {
          position: relative;
          padding-bottom: 120px; /* Space for dictator mascot */
        }

        /* Dictator Mascot styling */
        .dictator-mascot-container {
          position: absolute;
          bottom: 10px;
          right: 20px;
          width: 140px;
          height: 140px;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .dictator-mascot-container:hover {
          transform: scale(1.1) rotate(-3deg);
        }

        .dictator-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .dictator-speech {
          position: absolute;
          bottom: 100%;
          right: 20px;
          background: #ef4444;
          color: #ffffff;
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 10px;
          white-space: nowrap;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          opacity: 0;
          transform: translateY(5px);
          transition: all 0.3s ease;
        }

        .dictator-mascot-container:hover .dictator-speech {
          opacity: 1;
          transform: translateY(0);
        }

        /* Rocket Launch Animation Overlay */
        .rocket-launch-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(8px);
        }

        .rocket-flight-path {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .flying-rocket-svg {
          width: 180px;
          height: 270px;
          animation: rocket-launch-fly 2.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
          z-index: 100;
        }

        .success-banner-txt {
          color: #ffffff;
          font-size: 42px;
          font-family: var(--primary-font);
          font-weight: 700;
          text-align: center;
          margin-top: 40px;
          opacity: 0;
          transform: translateY(20px);
          animation: fade-up-txt 0.8s 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        @keyframes fade-up-txt {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .smoke-cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          filter: blur(12px);
          pointer-events: none;
        }

        .smoke-1 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 40%;
          animation: smoke-drift 3s infinite alternate;
        }

        .smoke-2 {
          width: 250px;
          height: 250px;
          bottom: 10%;
          left: 30%;
          animation: smoke-drift 4s infinite alternate-reverse;
        }

        .smoke-3 {
          width: 180px;
          height: 180px;
          bottom: 15%;
          right: 35%;
          animation: smoke-drift 2.5s infinite alternate;
        }

        @keyframes smoke-drift {
          0% { transform: scale(1) translate(0, 0); opacity: 0.1; }
          100% { transform: scale(1.4) translate(30px, -20px); opacity: 0.4; }
        }

        .rocket-launched-state {
          animation: shake-launch 0.5s ease infinite alternate;
        }

        @keyframes shake-launch {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          100% { transform: translate(-2px, -1px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import MascotGrid from './MascotGrid';
import kimJongUnImg from '../assets/mascots/kim_jong_un_chibi.png';

export default function AuthScreen({ onLoginSuccess }) {
  // Login Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoginPasswordVisible, setIsLoginPasswordVisible] = useState(false);
  const [viewMode, setViewMode] = useState('login'); // 'login' | 'register'

  // Register Form States
  const [regName, setRegName] = useState('');
  const [regSurname, setRegSurname] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('');
  const [isRegPasswordVisible, setIsRegPasswordVisible] = useState(false);

  // Common Mascot States
  const [isTyping, setIsTyping] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [celebrationState, setCelebrationState] = useState(false);
  const [rocketState, setRocketState] = useState('idle'); // 'idle' | 'launched'
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Mouse position for eye tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Calculate normalized offset from center of window (-5px to 5px range)
    const x = (e.clientX / window.innerWidth) * 10 - 5;
    const y = (e.clientY / window.innerHeight) * 10 - 5;
    setMousePos({ x, y });
  };

  // Handle focus changes to trigger eye tracking/leaning
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const handleFocus = (field) => {
    if (field === 'loginPassword') {
      setIsPasswordFocused(true);
      setIsPasswordVisible(isLoginPasswordVisible);
    } else if (field === 'regPassword' || field === 'regPasswordConfirm') {
      setIsPasswordFocused(true);
      setIsPasswordVisible(isRegPasswordVisible);
    } else {
      setIsPasswordFocused(false);
      setIsTyping(true);
    }
  };

  const handleBlur = () => {
    setIsPasswordFocused(false);
    setIsTyping(false);
  };

  const togglePasswordVisibility = (type) => {
    if (type === 'login') {
      const next = !isLoginPasswordVisible;
      setIsLoginPasswordVisible(next);
      if (isPasswordFocused) {
        setIsPasswordVisible(next);
      }
    } else {
      const next = !isRegPasswordVisible;
      setIsRegPasswordVisible(next);
      if (isPasswordFocused) {
        setIsPasswordVisible(next);
      }
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!loginEmail || !loginPassword) {
      setErrorMsg('Lütfen kullanıcı adı ve şifrenizi girin.');
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = savedUsers.find(
      (u) => u.email.toLowerCase() === loginEmail.toLowerCase() && u.password === loginPassword
    );

    if (matchedUser) {
      setCelebrationState(true);
      setTimeout(() => {
        setCelebrationState(false);
        onLoginSuccess(matchedUser);
      }, 1500);
    } else {
      setErrorMsg('Hatalı kullanıcı adı veya şifre!');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!regName || !regSurname || !regEmail || !regPassword || !regPasswordConfirm) {
      setErrorMsg('Lütfen tüm kayıt alanlarını doldurun.');
      return;
    }

    if (regPassword !== regPasswordConfirm) {
      setErrorMsg('Kayıt şifreleri uyuşmuyor!');
      return;
    }

    if (regPassword.length < 4) {
      setErrorMsg('Şifre en az 4 karakter olmalıdır.');
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = savedUsers.some((u) => u.email.toLowerCase() === regEmail.toLowerCase());

    if (userExists) {
      setErrorMsg('Bu mail adresi zaten kayıtlı!');
      return;
    }

    // Trigger celebration & dictator rocket flight
    setCelebrationState(true);
    setRocketState('launched');

    setTimeout(() => {
      const newUser = {
        firstName: regName,
        lastName: regSurname,
        email: regEmail,
        password: regPassword
      };
      savedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(savedUsers));

      setRegName('');
      setRegSurname('');
      setRegEmail('');
      setRegPassword('');
      setRegPasswordConfirm('');
      setViewMode('login');
      setCelebrationState(false);
      setRocketState('idle');
      setSuccessMsg('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
    }, 2800);
  };

  return (
    <div className="auth-screen-layout" onMouseMove={handleMouseMove}>
      {/* Flying Rocket Anim Overlay on Register Success */}
      {rocketState === 'launched' && (
        <div className="rocket-launch-overlay">
          <div className="rocket-flight-path">
            <svg viewBox="0 0 100 150" className="flying-rocket-svg">
              <path d="M 50,110 C 35,130 50,150 50,150 C 50,150 65,130 50,110 Z" fill="#f59e0b">
                <animate attributeName="d" values="M 50,110 C 35,130 50,150 50,150 C 50,150 65,130 50,110 Z; M 50,110 C 40,140 50,160 50,160 C 50,160 60,140 50,110 Z" dur="0.1s" repeatCount="indefinite" />
              </path>
              <path d="M 50,110 C 42,125 50,140 50,140 C 50,140 58,125 50,110 Z" fill="#ef4444" />
              <path d="M 30,50 C 30,20 50,0 50,0 C 50,0 70,20 70,50 L 70,110 L 30,110 Z" fill="#cbd5e1" stroke="#1e293b" strokeWidth="2" />
              <path d="M 30,90 L 10,110 L 30,110 Z" fill="#ef4444" />
              <path d="M 70,90 L 90,110 L 70,110 Z" fill="#ef4444" />
              <circle cx="50" cy="50" r="10" fill="#38bdf8" stroke="#1e293b" strokeWidth="3" />
              <path d="M 45,45 Q 50,55 55,45" fill="none" stroke="#ffffff" strokeWidth="2" />
              <path d="M 40,25 C 40,15 50,0 50,0 C 50,0 60,15 60,25 Z" fill="#ef4444" />
            </svg>
            <div className="smoke-cloud smoke-1"></div>
            <div className="smoke-cloud smoke-2"></div>
            <div className="smoke-cloud smoke-3"></div>
            <h2 className="success-banner-txt">Başarıyla Kayıt Olundu! 🚀</h2>
          </div>
        </div>
      )}

      {/* Main Title at the Top */}
      <h1 className="main-app-title">Dünyayı Keşfet: Giriş ve Kayıt</h1>

      {/* Dynamic Status Messages */}
      {errorMsg && <div className="status-banner error-banner">{errorMsg}</div>}
      {successMsg && <div className="status-banner success-banner">{successMsg}</div>}

      <div className="unified-auth-grid">
        
        {/* Left Column: Giriş Yap Form Card */}
        <div className="auth-column-card">
          <h2 className="card-title">Giriş Yap</h2>
          <form onSubmit={handleLoginSubmit} className="auth-form-body">
            <div className="form-input-group">
              <label>Kullanıcı Adı</label>
              <input
                type="email"
                placeholder="ornek@mail.com"
                value={loginEmail}
                onChange={handleInputChange(setLoginEmail)}
                onFocus={() => handleFocus('loginEmail')}
                onBlur={handleBlur}
                required
              />
            </div>
            
            <div className="form-input-group">
              <label>Şifre</label>
              <div className="password-field-container">
                <input
                  type={isLoginPasswordVisible ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={handleInputChange(setLoginPassword)}
                  onFocus={() => handleFocus('loginPassword')}
                  onBlur={handleBlur}
                  required
                />
                <button
                  type="button"
                  className="pwd-toggle-btn"
                  onClick={() => togglePasswordVisibility('login')}
                >
                  {isLoginPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="card-submit-btn">Giriş</button>
          </form>
          <div className="auth-toggle-link">
            Hesabınız mı yok? <span className="toggle-span" onClick={() => setViewMode('register')}>Hemen kayıt olun</span>
          </div>
        </div>

        {/* Center Column: 12 Mascots on the World Map */}
        <div className="mascot-center-column">
          <MascotGrid
            isTyping={isTyping}
            isPasswordFocused={isPasswordFocused}
            isPasswordVisible={isPasswordVisible}
            celebrationState={celebrationState}
            mousePos={mousePos}
          />
        </div>

        {/* Right Column: Kayıt Ol Form Card with overlapping Dictator Mascot */}
        <div className={`auth-column-card register-card-wrapper ${viewMode === 'login' ? 'mode-mascot-only' : 'mode-register-form'}`}>
          <h2 className="card-title">Kayıt Ol</h2>
          <form onSubmit={handleRegisterSubmit} className="auth-form-body">
            <div className="form-input-group">
              <label>Kayıt</label>
              <input
                type="text"
                placeholder="Adınız"
                value={regName}
                onChange={handleInputChange(setRegName)}
                onFocus={() => handleFocus('regName')}
                onBlur={handleBlur}
                required
              />
            </div>
            
            <div className="form-input-group">
              <label>Soyad</label>
              <input
                type="text"
                placeholder="Soyadınız"
                value={regSurname}
                onChange={handleInputChange(setRegSurname)}
                onFocus={() => handleFocus('regSurname')}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="form-input-group">
              <label>Kayıt Mail</label>
              <input
                type="email"
                placeholder="ornek@mail.com"
                value={regEmail}
                onChange={handleInputChange(setRegEmail)}
                onFocus={() => handleFocus('regEmail')}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="form-input-group">
              <label>Şifre</label>
              <input
                type={isRegPasswordVisible ? 'text' : 'password'}
                placeholder="••••••••"
                value={regPassword}
                onChange={handleInputChange(setRegPassword)}
                onFocus={() => handleFocus('regPassword')}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="form-input-group">
              <label>Şifre Tekrar</label>
              <div className="password-field-container">
                <input
                  type={isRegPasswordVisible ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={regPasswordConfirm}
                  onChange={handleInputChange(setRegPasswordConfirm)}
                  onFocus={() => handleFocus('regPasswordConfirm')}
                  onBlur={handleBlur}
                  required
                />
                <button
                  type="button"
                  className="pwd-toggle-btn"
                  onClick={() => togglePasswordVisibility('reg')}
                >
                  {isRegPasswordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="card-submit-btn" disabled={rocketState === 'launched'}>
              {rocketState === 'launched' ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
            </button>
          </form>
          <div className="auth-toggle-link">
            Zaten hesabınız var mı? <span className="toggle-span" onClick={() => setViewMode('login')}>Giriş yapın</span>
          </div>

          {/* Dictator Mascot standing at the right bottom, overlapping card */}
          <div className={`dictator-mascot-unified ${rocketState === 'launched' ? 'rocket-launched-state' : ''} ${viewMode === 'login' ? 'dictator-giant' : 'dictator-small'}`}>
            <div className="dictator-speech-bubble">Kuzey Kore füzemi fırlatırım ha! 🚀</div>
            <div className="dictator-label">Kuzey Kore</div>
            <div className="dictator-img-container" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={kimJongUnImg} 
                alt="Kim Jong-un" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .auth-screen-layout {
          min-height: 100vh;
          width: 100%;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-image: radial-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 0), radial-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 0);
          background-size: 24px 24px;
          background-position: 0 0, 12px 12px;
          box-sizing: border-box;
        }

        .main-app-title {
          font-family: var(--primary-font);
          font-size: 42px;
          color: #1e3a8a;
          margin: 0 0 30px 0;
          text-align: center;
          font-weight: 700;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
        }

        .unified-auth-grid {
          display: flex;
          width: 100%;
          max-width: 1400px;
          gap: 20px;
          align-items: flex-start;
          justify-content: center;
        }

        @media (max-width: 1200px) {
          .unified-auth-grid {
            flex-direction: column;
            align-items: center;
          }
          .auth-column-card {
            width: 100%;
            max-width: 480px;
          }
        }

        .auth-column-card {
          flex: 1;
          max-width: 320px;
          background: #ffffff;
          border-radius: var(--border-radius-lg);
          padding: 24px;
          box-shadow: var(--card-shadow);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .register-card-wrapper {
          position: relative;
          padding-bottom: 90px; /* Space for dictator mascot overlapping */
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .register-card-wrapper.mode-mascot-only {
          background: transparent;
          box-shadow: none;
          border-color: transparent;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 0;
          min-height: 520px;
        }

        .register-card-wrapper.mode-mascot-only .card-title,
        .register-card-wrapper.mode-mascot-only .auth-form-body,
        .register-card-wrapper.mode-mascot-only .auth-toggle-link {
          opacity: 0;
          pointer-events: none;
          height: 0;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .register-card-wrapper.mode-register-form .card-title,
        .register-card-wrapper.mode-register-form .auth-form-body,
        .register-card-wrapper.mode-register-form .auth-toggle-link {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.5s ease;
        }

        .auth-toggle-link {
          margin-top: 16px;
          font-size: 13px;
          color: #64748b;
          text-align: center;
        }

        .auth-toggle-link .toggle-span {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .auth-toggle-link .toggle-span:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 20px 0;
          text-align: left;
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-input-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .form-input-group label {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
        }

        .form-input-group input {
          font-family: var(--primary-font);
          font-size: 14px;
          padding: 10px 14px;
          border: 2px solid #e2e8f0;
          border-radius: var(--border-radius-md);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .form-input-group input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .password-field-container {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .pwd-toggle-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 4px;
        }

        .pwd-toggle-btn:hover {
          color: #1e293b;
          background: #f1f5f9;
        }

        .card-submit-btn {
          font-family: var(--primary-font);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: #2563eb;
          padding: 12px;
          border: none;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
          margin-top: 6px;
        }

        .card-submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .mascot-center-column {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 520px;
        }

        /* Dictator Mascot Placement */
        .dictator-mascot-unified {
          z-index: 100;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dictator-mascot-unified.dictator-giant {
          position: relative;
          bottom: 0;
          right: auto;
          width: 500px;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          margin: 0 auto;
          animation: dictator-float 3.5s ease-in-out infinite;
        }

        .dictator-mascot-unified.dictator-giant .dictator-img-container {
          width: 100%;
          height: 85%;
        }

        .dictator-mascot-unified.dictator-giant .dictator-speech-bubble {
          opacity: 1;
          transform: translateY(0);
          position: absolute;
          bottom: 92%;
          right: 50%;
          transform: translateX(50%);
          background: #ef4444;
          color: #ffffff;
          font-size: 16px;
          padding: 8px 16px;
          border-radius: 12px;
          white-space: nowrap;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          pointer-events: auto;
          animation: bubble-pulse 2s infinite alternate;
        }

        .dictator-mascot-unified.dictator-giant .dictator-label {
          position: static;
          transform: none;
          font-size: 14px;
          padding: 3px 12px;
          border-radius: 12px;
          margin-top: 8px;
        }

        .dictator-mascot-unified.dictator-small {
          position: absolute;
          bottom: -45px;
          right: -10px;
          width: 130px;
          height: 130px;
        }

        .dictator-mascot-unified.dictator-small .dictator-img-container {
          width: 130px;
          height: 130px;
        }

        .dictator-mascot-unified.dictator-small:hover {
          transform: scale(1.08) rotate(-2deg);
        }

        @keyframes dictator-float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes bubble-pulse {
          0% { transform: translateX(50%) scale(1); }
          100% { transform: translateX(50%) scale(1.05); }
        }

        .dictator-label {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #1e293b;
          color: #ffffff;
          font-size: 11px;
          padding: 1px 6px;
          border-radius: 10px;
          font-weight: 600;
        }

        .dictator-speech-bubble {
          position: absolute;
          bottom: 100%;
          right: 10px;
          background: #ef4444;
          color: #ffffff;
          font-size: 10px;
          padding: 3px 6px;
          border-radius: 8px;
          white-space: nowrap;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          opacity: 0;
          transform: translateY(5px);
          transition: all 0.2s ease;
          pointer-events: none;
        }

        .dictator-mascot-unified:hover .dictator-speech-bubble {
          opacity: 1;
          transform: translateY(0);
        }

        /* Status Banners */
        .status-banner {
          max-width: 500px;
          width: 100%;
          padding: 12px;
          border-radius: var(--border-radius-md);
          font-size: 14px;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 600;
        }

        .error-banner {
          background: #fef2f2;
          border: 1px solid #fee2e2;
          color: #ef4444;
        }

        .success-banner {
          background: #f0fdf4;
          border: 1px solid #dcfce7;
          color: #16a34a;
        }

        /* Rocket Launch Animation Overlay */
        .rocket-launch-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          backdrop-filter: blur(10px);
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
          animation: rocket-launch-fly-face 2.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
          z-index: 100000;
        }

        @keyframes rocket-launch-fly-face {
          0% {
            transform: translate(400px, 300px) scale(0.3) rotate(15deg);
            opacity: 1;
          }
          30% {
            transform: translate(200px, 150px) scale(1) rotate(-10deg);
            opacity: 1;
          }
          60% {
            transform: translate(-100px, -50px) scale(3) rotate(-30deg);
            opacity: 0.95;
          }
          100% {
            transform: translate(0, 0) scale(18) rotate(-45deg);
            opacity: 0;
          }
        }

        .success-banner-txt {
          color: #ffffff;
          font-size: 42px;
          font-weight: 700;
          text-align: center;
          margin-top: 40px;
          opacity: 0;
          transform: translateY(20px);
          animation: fade-up-txt 0.8s 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .smoke-cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          filter: blur(16px);
          pointer-events: none;
        }

        .smoke-1 {
          width: 160px;
          height: 160px;
          bottom: 25%;
          left: 45%;
          animation: smoke-drift 3s infinite alternate;
        }

        .smoke-2 {
          width: 260px;
          height: 260px;
          bottom: 12%;
          left: 35%;
          animation: smoke-drift 4s infinite alternate-reverse;
        }

        .smoke-3 {
          width: 190px;
          height: 190px;
          bottom: 18%;
          right: 40%;
          animation: smoke-drift 2.5s infinite alternate;
        }

        @keyframes smoke-drift {
          0% { transform: scale(1) translate(0, 0); opacity: 0.15; }
          100% { transform: scale(1.5) translate(40px, -30px); opacity: 0.5; }
        }

        .rocket-launched-state {
          animation: shake-launch 0.15s ease infinite alternate;
        }

        @keyframes shake-launch {
          0% { transform: translate(2px, 2px) rotate(0deg); }
          100% { transform: translate(-3px, -2px) rotate(1.5deg); }
        }
      `}</style>
    </div>
  );
}

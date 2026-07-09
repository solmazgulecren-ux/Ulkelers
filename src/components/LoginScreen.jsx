import React, { useState } from 'react';
import MascotGrid from './MascotGrid';

export default function LoginScreen({ onNavigate, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // Track input focus states for mascot reactions
  const [isTyping, setIsTyping] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [celebrationState, setCelebrationState] = useState(false);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const handleFocus = (field) => {
    if (field === 'password') {
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Lütfen e-posta ve şifrenizi girin.');
      return;
    }

    // Retrieve accounts from localStorage
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = savedUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (matchedUser) {
      // Trigger short celebration animation
      setCelebrationState(true);
      setTimeout(() => {
        setCelebrationState(false);
        onLoginSuccess(matchedUser);
      }, 1500);
    } else {
      setErrorMsg('Hatalı e-posta adresi veya şifre!');
    }
  };

  return (
    <div className="split-layout">
      {/* Left panel containing dynamic mascots */}
      <div className="left-panel">
        <div className="decorations">
          <h2 className="left-panel-title">Dünyayı Keşfet! 🌍</h2>
          <p className="left-panel-subtitle">Maskotlarımız seninle seyahat etmek için sabırsızlanıyor!</p>
        </div>
        
        <MascotGrid
          isTyping={isTyping}
          isPasswordFocused={isPasswordFocused}
          isPasswordVisible={isPasswordVisible}
          celebrationState={celebrationState}
        />
      </div>

      {/* Right panel containing login form */}
      <div className="right-panel">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Giriş Yap</h1>
            <p className="auth-subtitle">Karakterlerimizin dünyasına adım atın</p>
          </div>

          {errorMsg && <div className="error-banner">{errorMsg}</div>}

          <form onSubmit={handleLoginSubmit} className="auth-form">
            <div className="input-group">
              <label htmlFor="login-email">E-posta</label>
              <input
                id="login-email"
                type="email"
                placeholder="ornek@mail.com"
                value={email}
                onChange={handleInputChange(setEmail)}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="login-password">Şifre</label>
              <div className="password-input-wrapper">
                <input
                  id="login-password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={handleInputChange(setPassword)}
                  onFocus={() => handleFocus('password')}
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
                    /* Open Eye SVG */
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    /* Closed Eye SVG */
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              {celebrationState ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>

          <div className="auth-footer">
            <span>Henüz bir hesabınız yok mu?</span>
            <button className="link-btn" onClick={() => onNavigate('register')}>
              Hemen Kayıt Olun
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .split-layout {
          display: flex;
          min-height: 100vh;
          width: 100%;
        }

        .left-panel {
          flex: 1.2;
          background: var(--bg-gradient-login);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          border-right: 1px solid rgba(0,0,0,0.05);
          position: relative;
        }

        .decorations {
          text-align: center;
          margin-bottom: 20px;
          max-width: 500px;
        }

        .left-panel-title {
          font-size: 32px;
          margin: 0;
          color: #1e293b;
          font-weight: 700;
        }

        .left-panel-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 5px 0 0;
        }

        .right-panel {
          flex: 0.8;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          box-shadow: -10px 0 30px rgba(0,0,0,0.02);
        }

        @media (max-width: 1024px) {
          .split-layout {
            flex-direction: column;
          }
          .left-panel, .right-panel {
            flex: none;
            width: 100%;
          }
          .right-panel {
            padding: 40px 20px;
          }
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
        }

        .auth-header {
          margin-bottom: 30px;
          text-align: left;
        }

        .auth-title {
          font-size: 38px;
          margin: 0 0 6px 0;
          color: #0f172a;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .auth-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }

        .error-banner {
          background: #fef2f2;
          border: 1px solid #fee2e2;
          color: #ef4444;
          padding: 12px;
          border-radius: var(--border-radius-md);
          font-size: 13px;
          margin-bottom: 20px;
          text-align: left;
          font-weight: 500;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .input-group label {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .input-group input {
          font-family: var(--secondary-font);
          font-size: 15px;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: var(--border-radius-md);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .input-group input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .password-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .password-toggle-btn {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .password-toggle-btn:hover {
          color: #1e293b;
          background: #f1f5f9;
        }

        .submit-btn {
          font-family: var(--primary-font);
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          background: #2563eb;
          padding: 14px;
          border: none;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .auth-footer {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          color: #64748b;
        }

        .link-btn {
          font-family: var(--primary-font);
          background: none;
          border: none;
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-size: 14px;
        }

        .link-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
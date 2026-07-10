// src/App.jsx
import React, { useState, useEffect } from 'react';
import AuthScreen from './components/AuthScreen';
import HomeScreen from './components/Home';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // İlk sekme açılışı (yeni oturum) ile sayfa yenilemeyi ayırt etme
  useEffect(() => {
    const isRefresh = sessionStorage.getItem('session_active');
    
    if (!isRefresh) {
      // Yeni sekme veya ilk açılış: Kullanıcıyı her zaman giriş ekranına at
      localStorage.removeItem('currentUser');
      sessionStorage.setItem('session_active', 'true');
    } else {
      // Sadece sayfa yenilendi: Eğer kullanıcı giriş yapmışsa geri yükle
      const session = localStorage.getItem('currentUser');
      if (session) {
        try {
          const user = JSON.parse(session);
          setLoggedInUser(user);
        } catch (err) {
          localStorage.removeItem('currentUser');
        }
      }
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('currentUser');
  };

  useEffect(() => {
    if (!loggedInUser) {
      document.documentElement.style.background = 'var(--bg-gradient-login)';
    } else {
      document.documentElement.style.background = 'var(--bg-gradient-home)';
    }
  }, [loggedInUser]);

  return (
    <div className="app-viewport">
      {!loggedInUser ? (
        <AuthScreen onLoginSuccess={handleLoginSuccess} />
      ) : (
        <HomeScreen user={loggedInUser} onLogout={handleLogout} />
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import AuthScreen from './components/AuthScreen';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Restore session on mount
  useEffect(() => {
    const session = localStorage.getItem('currentUser');
    if (session) {
      try {
        const user = JSON.parse(session);
        setLoggedInUser(user);
      } catch (err) {
        localStorage.removeItem('currentUser');
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

  // Adjust app-wide background class depending on active screen
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

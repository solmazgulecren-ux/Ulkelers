// src/components/HomeScreen.jsx
import React from 'react';
import Home from './Home'; // Tek nokta (.) yaptık çünkü aynı klasördeler

export default function HomeScreen({ user, onLogout }) {
  return (
    <Home 
      user={user} 
      onLogout={onLogout} 
    />
  );
}






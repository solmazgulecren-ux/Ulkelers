const fs = require('fs');

let content = fs.readFileSync('src/components/Home.jsx', 'utf8');

content = content.replace(
  /const updateGold = \(amount\) => \{[\s\S]*?return newGold;\n    \}\);\n  \};/,
  `const updateGold = (amount, reason = "Bilinmeyen") => {
    setUserGold(prev => {
      const newGold = Math.max(0, prev + amount);
      if (user && user.email) {
        localStorage.setItem(\`gold_\${user.email}\`, newGold.toString());
        const historyKey = \`gold_history_\${user.email}\`;
        const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
        history.push({ id: Date.now().toString(), date: new Date().toLocaleString('tr-TR'), amount, reason, balanceAfter: newGold });
        localStorage.setItem(historyKey, JSON.stringify(history));
      }
      return newGold;
    });
  };`
);

content = content.replace(
  /<MarketModal[\s\S]*?userEmail=\{user\?\.email\}[\s\S]*?onClose=\{.*?setShowMarket\(false\)\}[\s\S]*?\/>/,
  `<MarketModal
          countryKey={selectedKey}
          countryName={COUNTRY_PROFILES[selectedKey].name}
          countryColor={COUNTRY_PROFILES[selectedKey].color}
          marketItems={COUNTRY_ITEMS[selectedKey].marketItems}
          userEmail={user?.email}
          userGold={userGold}
          updateGold={updateGold}
          onClose={() => setShowMarket(false)}
        />`
);

content = content.replace(
  /<MiniGamesModal[\s\S]*?onClose=\{.*?setShowMiniGames\(false\)\}[\s\S]*?userGold=\{userGold\}[\s\S]*?onUpdateGold=\{updateGold\}[\s\S]*?\/>/,
  `<MiniGamesModal 
          onClose={() => setShowMiniGames(false)} 
          userGold={userGold}
          updateGold={updateGold}
        />`
);

content = content.replace(
  /style=\{\{ maxWidth: '400px', textAlign: 'center' \}\}/,
  `style={{ maxWidth: '400px', textAlign: 'center', color: '#f8fafc' }}`
);

content = content.replace(
  /style=\{\{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer', fontWeight: 'bold' \}\}/,
  `style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#1e293b', cursor: 'pointer', fontWeight: 'bold' }}`
);

fs.writeFileSync('src/components/Home.jsx', content);

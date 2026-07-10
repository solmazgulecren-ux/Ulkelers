const fs = require('fs');
const cp = require('child_process');

// 1. Revert Home.jsx to fix all the mess
cp.execSync('git checkout src/components/Home.jsx');

// 2. Read Home.jsx
let content = fs.readFileSync('src/components/Home.jsx', 'utf8');

// 3. Add Bosnia profile to COUNTRY_PROFILES
const bosniaProfile = `  },
  bosnia: {
    id: 'bosnia',
    name: "Bosna Hersek",
    capital: "Saraybosna",
    language: "Boşnakça",
    population: "3.2 Milyon",
    landmark: "Mostar Köprüsü, Başçarşı",
    funFact: "Saraybosna, Avrupa'da tam kapsamlı ilk elektrikli tramvay sistemine sahip şehirdir (1885).",
    flag: "🇧🇦",
    color: "#2563EB",
    mascotName: "Boşnak Gezgini",
    interactiveActions: ["Cevapi Ye 🧆", "Köprüden Atla 🌉", "Kahve İç ☕"],
    image: '/images/bosnia.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'İncecik açılmış hamuruyla meşhur Boşnak Böreği (Burek) ve pide içinde servis edilen Balkanların en ünlü köftesi Cevapi (Cevapcici) vazgeçilmezdir.',
      image: 'https://images.unsplash.com/photo-1627907572791-c990035043d9?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Neretva Nehri üzerindeki tarihi Mostar Köprüsü ve Saraybosna nın Osmanlı esintileri taşıyan kalbi Başçarşı büyüleyicidir.',
      image: 'https://images.unsplash.com/photo-1579294276707-8b0bb24467c6?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Saraybosna Film Festivali, Balkanların en büyük film festivali olup her yaz binlerce sinemaseveri ve ünlü yıldızı şehre çeker.',
      image: 'https://images.unsplash.com/photo-1579294276707-8b0bb24467c6?w=400&auto=format&fit=crop&q=80'
    }
  }
};`;

content = content.replace(/    festivals: \{\s*title: '🎉 Festivaller',\s*desc: 'Apokries Karnavalı[\s\S]*?\}\s*\}\s*\}/, bosniaProfile);

// 4. Update Header CSS to nowrap
// We replace flexWrap: 'wrap' with flexWrap: 'nowrap' for header elements
content = content.replace(/className="home-header" style=\{\{\s*display: 'flex',\s*alignItems: 'center',\s*justifyContent: 'space-between',\s*flexWrap: 'wrap',/g,
`className="home-header" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexWrap: 'nowrap',
        overflowX: 'auto',
        whiteSpace: 'nowrap',`);

content = content.replace(/<div style=\{\{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' \}\}>/g,
`<div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'nowrap', flexShrink: 0 }}>`);

content = content.replace(/<div style=\{\{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' \}\}>/g,
`<div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'nowrap', flexShrink: 0 }}>`);

fs.writeFileSync('src/components/Home.jsx', content);
console.log('Home.jsx successfully patched!');

const fs = require('fs');
let content = fs.readFileSync('src/components/Home.jsx', 'utf8');

content = content.replace("import MarketModal from './MarketModal';\nimport SpinWheelModal from './SpinWheelModal';\n", "");
content = content.replace("import MarketModal from './MarketModal';\r\nimport SpinWheelModal from './SpinWheelModal';\r\n", "");

fs.writeFileSync('src/components/Home.jsx', content);
console.log('Fixed dupes');

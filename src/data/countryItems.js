// src/data/countryItems.js
// Her ülkenin çark ödülleri ve pazar ürünleri

export const COUNTRY_ITEMS = {
  turkey: {
    wheelPrizes: [
      { name: 'Türk Çayı', icon: '☕' },
      { name: 'Simit', icon: '🥯' },
      { name: 'Baklava', icon: '🍯' },
      { name: 'Nazar Boncuğu', icon: '🧿' },
      { name: 'Türk Lokumu', icon: '🍬' },
      { name: 'Kilim', icon: '🧶' },
    ],
    marketItems: [
      { name: 'Kebap Tabağı', icon: '🍖', price: 25 },
      { name: 'Türk Kahvesi Seti', icon: '☕', price: 40 },
      { name: 'Lahmacun', icon: '🫓', price: 15 },
      { name: 'Pide', icon: '🥖', price: 20 },
      { name: 'Ayran', icon: '🥛', price: 5 },
      { name: 'Dondurma', icon: '🍦', price: 10 },
    ],
    photoBg: '🕌',
    photoScene: 'Kapadokya Balonları'
  },
  spain: {
    wheelPrizes: [
      { name: 'Paella', icon: '🥘' },
      { name: 'Flamenko Yelpazesi', icon: '🪭' },
      { name: 'Sangria', icon: '🍷' },
      { name: 'Kastanyet', icon: '🪇' },
      { name: 'Zeytinyağı', icon: '🫒' },
      { name: 'Churros', icon: '🍩' },
    ],
    marketItems: [
      { name: 'Tapas Tabağı', icon: '🍢', price: 20 },
      { name: 'Gazpacho', icon: '🥣', price: 15 },
      { name: 'Jamon', icon: '🥓', price: 35 },
      { name: 'Tortilla', icon: '🥚', price: 18 },
      { name: 'Patatas Bravas', icon: '🍟', price: 12 },
      { name: 'Crema Catalana', icon: '🍮', price: 14 },
    ],
    photoBg: '💃',
    photoScene: 'Sagrada Familia'
  },
  italy: {
    wheelPrizes: [
      { name: 'Pizza', icon: '🍕' },
      { name: 'Gelato', icon: '🍨' },
      { name: 'Espresso', icon: '☕' },
      { name: 'Pasta', icon: '🍝' },
      { name: 'Tiramisu', icon: '🍰' },
      { name: 'Gondol', icon: '🛶' },
    ],
    marketItems: [
      { name: 'Margherita Pizza', icon: '🍕', price: 22 },
      { name: 'Spagetti Carbonara', icon: '🍝', price: 28 },
      { name: 'Bruschetta', icon: '🥖', price: 12 },
      { name: 'Risotto', icon: '🍚', price: 25 },
      { name: 'Panna Cotta', icon: '🍮', price: 15 },
      { name: 'Cappuccino', icon: '☕', price: 8 },
    ],
    photoBg: '🏛️',
    photoScene: 'Kolezyum Önü'
  },
  russia: {
    wheelPrizes: [
      { name: 'Matruşka', icon: '🪆' },
      { name: 'Borscht', icon: '🥣' },
      { name: 'Samovar Çay', icon: '☕' },
      { name: 'Bal Kavanozu', icon: '🍯' },
      { name: 'Ushanka Şapka', icon: '🧢' },
      { name: 'Votka Şişesi', icon: '🍶' },
    ],
    marketItems: [
      { name: 'Borscht', icon: '🥣', price: 18 },
      { name: 'Pelmeni', icon: '🥟', price: 20 },
      { name: 'Blini', icon: '🥞', price: 14 },
      { name: 'Pirozhki', icon: '🥐', price: 10 },
      { name: 'Beef Stroganoff', icon: '🍖', price: 30 },
      { name: 'Medovik Pasta', icon: '🍰', price: 16 },
    ],
    photoBg: '🏰',
    photoScene: 'Kızıl Meydan'
  },
  colombia: {
    wheelPrizes: [
      { name: 'Kahve Çekirdeği', icon: '☕' },
      { name: 'Zümrüt Taş', icon: '💎' },
      { name: 'Arepa', icon: '🫓' },
      { name: 'Sombrero Vueltiao', icon: '👒' },
      { name: 'Orkide', icon: '🌸' },
      { name: 'Panela', icon: '🧱' },
    ],
    marketItems: [
      { name: 'Kolombiya Kahvesi', icon: '☕', price: 15 },
      { name: 'Bandeja Paisa', icon: '🍛', price: 28 },
      { name: 'Empanada', icon: '🥟', price: 8 },
      { name: 'Ajiaco Çorbası', icon: '🥣', price: 16 },
      { name: 'Patacon', icon: '🍌', price: 10 },
      { name: 'Buñuelo', icon: '🧆', price: 6 },
    ],
    photoBg: '🌴',
    photoScene: 'Cartagena Sokakları'
  },
  india: {
    wheelPrizes: [
      { name: 'Köri Baharatı', icon: '🌶️' },
      { name: 'Çay Masala', icon: '🍵' },
      { name: 'Sari Kumaş', icon: '🧣' },
      { name: 'Mango', icon: '🥭' },
      { name: 'Henna', icon: '✋' },
      { name: 'Fil Heykeli', icon: '🐘' },
    ],
    marketItems: [
      { name: 'Butter Chicken', icon: '🍗', price: 24 },
      { name: 'Biryani', icon: '🍚', price: 22 },
      { name: 'Samosa', icon: '🥟', price: 8 },
      { name: 'Naan Ekmeği', icon: '🫓', price: 6 },
      { name: 'Gulab Jamun', icon: '🍩', price: 10 },
      { name: 'Lassi', icon: '🥛', price: 7 },
    ],
    photoBg: '🕌',
    photoScene: 'Tac Mahal'
  },
  egypt: {
    wheelPrizes: [
      { name: 'Firavun Maskesi', icon: '👑' },
      { name: 'Papirüs', icon: '📜' },
      { name: 'Skarab Böceği', icon: '🪲' },
      { name: 'Humus', icon: '🥣' },
      { name: 'Ankh', icon: '☥' },
      { name: 'Piramit Minyatür', icon: '🔺' },
    ],
    marketItems: [
      { name: 'Koshari', icon: '🍜', price: 12 },
      { name: 'Falafel', icon: '🧆', price: 8 },
      { name: 'Ful Medames', icon: '🫘', price: 10 },
      { name: 'Basbusa', icon: '🍰', price: 14 },
      { name: 'Hibiskus Çayı', icon: '🍵', price: 6 },
      { name: 'Kunefe', icon: '🧁', price: 16 },
    ],
    photoBg: '🏜️',
    photoScene: 'Piramitler Önü'
  },
  norway: {
    wheelPrizes: [
      { name: 'Viking Baltası', icon: '🪓' },
      { name: 'Somon Balığı', icon: '🐟' },
      { name: 'Viking Miğferi', icon: '⛑️' },
      { name: 'Kuzey Işığı', icon: '🌌' },
      { name: 'Waffle', icon: '🧇' },
      { name: 'Troll Figürü', icon: '👹' },
    ],
    marketItems: [
      { name: 'Gravlaks', icon: '🐟', price: 30 },
      { name: 'Norveç Wafflesi', icon: '🧇', price: 12 },
      { name: 'Brunost Peyniri', icon: '🧀', price: 18 },
      { name: 'Kjøttkaker', icon: '🍖', price: 22 },
      { name: 'Lefse', icon: '🫓', price: 10 },
      { name: 'Cloudberry Reçeli', icon: '🍓', price: 16 },
    ],
    photoBg: '🏔️',
    photoScene: 'Fjordlar'
  },
  mexico: {
    wheelPrizes: [
      { name: 'Taco', icon: '🌮' },
      { name: 'Sombrero', icon: '🤠' },
      { name: 'Marakas', icon: '🪘' },
      { name: 'Guacamole', icon: '🥑' },
      { name: 'Kaktüs', icon: '🌵' },
      { name: 'Piñata', icon: '🪅' },
    ],
    marketItems: [
      { name: 'Burrito', icon: '🌯', price: 18 },
      { name: 'Nachos', icon: '🧀', price: 14 },
      { name: 'Enchilada', icon: '🫔', price: 20 },
      { name: 'Churros', icon: '🍩', price: 8 },
      { name: 'Elote', icon: '🌽', price: 6 },
      { name: 'Horchata', icon: '🥛', price: 7 },
    ],
    photoBg: '🏛️',
    photoScene: 'Chichen Itza'
  },
  brazil: {
    wheelPrizes: [
      { name: 'Futbol Topu', icon: '⚽' },
      { name: 'Karnaval Maskesi', icon: '🎭' },
      { name: 'Açaí Kasesi', icon: '🫐' },
      { name: 'Kahve Çekirdeği', icon: '☕' },
      { name: 'Papağan', icon: '🦜' },
      { name: 'Havaianas', icon: '🩴' },
    ],
    marketItems: [
      { name: 'Feijoada', icon: '🍲', price: 24 },
      { name: 'Pão de Queijo', icon: '🧀', price: 8 },
      { name: 'Coxinha', icon: '🍗', price: 10 },
      { name: 'Brigadeiro', icon: '🍫', price: 6 },
      { name: 'Açaí Bowl', icon: '🫐', price: 16 },
      { name: 'Caipirinha', icon: '🍹', price: 14 },
    ],
    photoBg: '🌴',
    photoScene: 'Kurtarıcı İsa Heykeli'
  },
  germany: {
    wheelPrizes: [
      { name: 'Pretzel', icon: '🥨' },
      { name: 'Bira Bardağı', icon: '🍺' },
      { name: 'Sosis', icon: '🌭' },
      { name: 'Kukuduvar Saati', icon: '🕰️' },
      { name: 'Lebkuchen', icon: '🍪' },
      { name: 'Lederhosen', icon: '👖' },
    ],
    marketItems: [
      { name: 'Bratwurst', icon: '🌭', price: 12 },
      { name: 'Schnitzel', icon: '🍖', price: 22 },
      { name: 'Sauerkraut', icon: '🥬', price: 8 },
      { name: 'Kartoffelsalat', icon: '🥗', price: 10 },
      { name: 'Apfelstrudel', icon: '🥧', price: 14 },
      { name: 'Glühwein', icon: '🍷', price: 10 },
    ],
    photoBg: '🏰',
    photoScene: 'Neuschwanstein Şatosu'
  },
  china: {
    wheelPrizes: [
      { name: 'Ejderha Figürü', icon: '🐉' },
      { name: 'Dim Sum', icon: '🥟' },
      { name: 'Çin Feneri', icon: '🏮' },
      { name: 'Yelpaze', icon: '🪭' },
      { name: 'Panda Peluş', icon: '🐼' },
      { name: 'Yeşim Taşı', icon: '💚' },
    ],
    marketItems: [
      { name: 'Pekin Ördeği', icon: '🦆', price: 35 },
      { name: 'Kung Pao Tavuk', icon: '🍗', price: 22 },
      { name: 'Baozi', icon: '🥟', price: 10 },
      { name: 'Ay Pastası', icon: '🥮', price: 12 },
      { name: 'Yeşil Çay', icon: '🍵', price: 8 },
      { name: 'Mapo Tofu', icon: '🍲', price: 18 },
    ],
    photoBg: '🏯',
    photoScene: 'Çin Seddi'
  }
};

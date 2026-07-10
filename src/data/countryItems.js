// src/data/countryItems.js
// Her ülkenin çark ödülleri ve pazar ürünleri

export const COUNTRY_ITEMS = {
  turkey: {
    wheelPrizes: [
      { name: 'Türk Çayı', icon: '☕✨' },
      { name: 'Simit', icon: '🥯😋' },
      { name: 'Baklava', icon: '🍯🌟' },
      { name: 'Nazar Boncuğu', icon: '🧿💙' },
      { name: 'Türk Lokumu', icon: '🍬🎀' },
      { name: 'Kilim', icon: '🧶🎨' },
    ],
    marketItems: [
      { name: 'Kebap Tabağı', icon: '🍖🔥', price: 500 },
      { name: 'Türk Kahvesi Seti', icon: '☕💫', price: 800 },
      { name: 'Lahmacun', icon: '🫓🍋', price: 300 },
      { name: 'Pide', icon: '🥖🧀', price: 400 },
      { name: 'Ayran', icon: '🥛🧊', price: 100 },
      { name: 'Dondurma', icon: '🍦🤤', price: 200 },
    ],
    photoBg: '🕌',
    photoScene: 'Kapadokya Balonları'
  },
  spain: {
    wheelPrizes: [
      { name: 'Paella', icon: '🥘🦐' },
      { name: 'Flamenko Yelpazesi', icon: '🪭💃' },
      { name: 'Sangria', icon: '🍷🍊' },
      { name: 'Kastanyet', icon: '🪇🎶' },
      { name: 'Zeytinyağı', icon: '🫒✨' },
      { name: 'Churros', icon: '🍩🍫' },
    ],
    marketItems: [
      { name: 'Tapas Tabağı', icon: '🍢😋', price: 400 },
      { name: 'Gazpacho', icon: '🥣🍅', price: 300 },
      { name: 'Jamon', icon: '🥓🥖', price: 700 },
      { name: 'Tortilla', icon: '🥚🥔', price: 360 },
      { name: 'Patatas Bravas', icon: '🍟🌶️', price: 240 },
      { name: 'Crema Catalana', icon: '🍮🔥', price: 280 },
    ],
    photoBg: '💃',
    photoScene: 'Sagrada Familia'
  },
  italy: {
    wheelPrizes: [
      { name: 'Pizza', icon: '🍕🤌' },
      { name: 'Gelato', icon: '🍨🍓' },
      { name: 'Espresso', icon: '☕💨' },
      { name: 'Pasta', icon: '🍝🧀' },
      { name: 'Tiramisu', icon: '🍰🍫' },
      { name: 'Gondol', icon: '🛶💦' },
    ],
    marketItems: [
      { name: 'Margherita Pizza', icon: '🍕🍅', price: 440 },
      { name: 'Spagetti Carbonara', icon: '🍝🥓', price: 560 },
      { name: 'Bruschetta', icon: '🥖🧄', price: 240 },
      { name: 'Risotto', icon: '🍚🍄', price: 500 },
      { name: 'Panna Cotta', icon: '🍮🍒', price: 300 },
      { name: 'Cappuccino', icon: '☕☁️', price: 160 },
    ],
    photoBg: '🏛️',
    photoScene: 'Kolezyum Önü'
  },
  russia: {
    wheelPrizes: [
      { name: 'Matruşka', icon: '🪆❤️' },
      { name: 'Borscht', icon: '🥣🥄' },
      { name: 'Samovar Çay', icon: '☕🔥' },
      { name: 'Bal Kavanozu', icon: '🍯🐻' },
      { name: 'Ushanka Şapka', icon: '🧢❄️' },
      { name: 'Votka Şişesi', icon: '🍶🧊' },
    ],
    marketItems: [
      { name: 'Borscht', icon: '🥣🥩', price: 360 },
      { name: 'Pelmeni', icon: '🥟😋', price: 400 },
      { name: 'Blini', icon: '🥞🍓', price: 280 },
      { name: 'Pirozhki', icon: '🥐🧅', price: 200 },
      { name: 'Beef Stroganoff', icon: '🍖🍄', price: 600 },
      { name: 'Medovik Pasta', icon: '🍰🍯', price: 320 },
    ],
    photoBg: '🏰',
    photoScene: 'Kızıl Meydan'
  },
  colombia: {
    wheelPrizes: [
      { name: 'Kahve Çekirdeği', icon: '☕🌱' },
      { name: 'Zümrüt Taş', icon: '💎✨' },
      { name: 'Arepa', icon: '🫓🧀' },
      { name: 'Sombrero Vueltiao', icon: '👒🎶' },
      { name: 'Orkide', icon: '🌸🌺' },
      { name: 'Panela', icon: '🧱🍬' },
    ],
    marketItems: [
      { name: 'Kolombiya Kahvesi', icon: '☕💫', price: 300 },
      { name: 'Bandeja Paisa', icon: '🍛🥑', price: 560 },
      { name: 'Empanada', icon: '🥟🔥', price: 160 },
      { name: 'Ajiaco Çorbası', icon: '🥣🌽', price: 320 },
      { name: 'Patacon', icon: '🍌🧂', price: 200 },
      { name: 'Buñuelo', icon: '🧆🧀', price: 120 },
    ],
    photoBg: '🌴',
    photoScene: 'Cartagena Sokakları'
  },
  india: {
    wheelPrizes: [
      { name: 'Köri Baharatı', icon: '🌶️🔥' },
      { name: 'Çay Masala', icon: '🍵🫚' },
      { name: 'Sari Kumaş', icon: '🧣✨' },
      { name: 'Mango', icon: '🥭😋' },
      { name: 'Henna', icon: '✋🎨' },
      { name: 'Fil Heykeli', icon: '🐘🌸' },
    ],
    marketItems: [
      { name: 'Butter Chicken', icon: '🍗🍅', price: 480 },
      { name: 'Biryani', icon: '🍚🍛', price: 440 },
      { name: 'Samosa', icon: '🥟🥔', price: 160 },
      { name: 'Naan Ekmeği', icon: '🫓🧄', price: 120 },
      { name: 'Gulab Jamun', icon: '🍩🍯', price: 200 },
      { name: 'Lassi', icon: '🥛🥭', price: 140 },
    ],
    photoBg: '🕌',
    photoScene: 'Tac Mahal'
  },
  egypt: {
    wheelPrizes: [
      { name: 'Firavun Maskesi', icon: '👑✨' },
      { name: 'Papirüs', icon: '📜✒️' },
      { name: 'Skarab Böceği', icon: '🪲🏺' },
      { name: 'Humus', icon: '🥣🧄' },
      { name: 'Ankh', icon: '☥💫' },
      { name: 'Piramit Minyatür', icon: '🔺🏜️' },
    ],
    marketItems: [
      { name: 'Koshari', icon: '🍜🧅', price: 240 },
      { name: 'Falafel', icon: '🧆🌿', price: 160 },
      { name: 'Ful Medames', icon: '🫘🍋', price: 200 },
      { name: 'Basbusa', icon: '🍰🍯', price: 280 },
      { name: 'Hibiskus Çayı', icon: '🍵🌺', price: 120 },
      { name: 'Kunefe', icon: '🧁🧀', price: 320 },
    ],
    photoBg: '🏜️',
    photoScene: 'Piramitler Önü'
  },
  norway: {
    wheelPrizes: [
      { name: 'Viking Baltası', icon: '🪓🛡️' },
      { name: 'Somon Balığı', icon: '🐟🎣' },
      { name: 'Viking Miğferi', icon: '⛑️❄️' },
      { name: 'Kuzey Işığı', icon: '🌌✨' },
      { name: 'Waffle', icon: '🧇🍓' },
      { name: 'Troll Figürü', icon: '👹🌲' },
    ],
    marketItems: [
      { name: 'Gravlaks', icon: '🐟🍋', price: 600 },
      { name: 'Norveç Wafflesi', icon: '🧇🤎', price: 240 },
      { name: 'Brunost Peyniri', icon: '🧀🍯', price: 360 },
      { name: 'Kjøttkaker', icon: '🍖🍲', price: 440 },
      { name: 'Lefse', icon: '🫓🧈', price: 200 },
      { name: 'Cloudberry Reçeli', icon: '🍓🌟', price: 320 },
    ],
    photoBg: '🏔️',
    photoScene: 'Fjordlar'
  },
  mexico: {
    wheelPrizes: [
      { name: 'Taco', icon: '🌮🌶️' },
      { name: 'Sombrero', icon: '🤠🌵' },
      { name: 'Marakas', icon: '🪘🎶' },
      { name: 'Guacamole', icon: '🥑🍋' },
      { name: 'Kaktüs', icon: '🌵☀️' },
      { name: 'Piñata', icon: '🪅🍬' },
    ],
    marketItems: [
      { name: 'Burrito', icon: '🌯🌯', price: 360 },
      { name: 'Nachos', icon: '🧀🌶️', price: 280 },
      { name: 'Enchilada', icon: '🫔🍅', price: 400 },
      { name: 'Churros', icon: '🍩🍫', price: 160 },
      { name: 'Elote', icon: '🌽🧀', price: 120 },
      { name: 'Horchata', icon: '🥛🍚', price: 140 },
    ],
    photoBg: '🏛️',
    photoScene: 'Chichen Itza'
  },
  brazil: {
    wheelPrizes: [
      { name: 'Futbol Topu', icon: '⚽🥅' },
      { name: 'Karnaval Maskesi', icon: '🎭✨' },
      { name: 'Açaí Kasesi', icon: '🫐🍓' },
      { name: 'Kahve Çekirdeği', icon: '☕🌿' },
      { name: 'Papağan', icon: '🦜🌴' },
      { name: 'Havaianas', icon: '🩴🏖️' },
    ],
    marketItems: [
      { name: 'Feijoada', icon: '🍲🍖', price: 480 },
      { name: 'Pão de Queijo', icon: '🧀🥯', price: 160 },
      { name: 'Coxinha', icon: '🍗😋', price: 200 },
      { name: 'Brigadeiro', icon: '🍫✨', price: 120 },
      { name: 'Açaí Bowl', icon: '🫐🍌', price: 320 },
      { name: 'Caipirinha', icon: '🍹🍋', price: 280 },
    ],
    photoBg: '🌴',
    photoScene: 'Kurtarıcı İsa Heykeli'
  },
  germany: {
    wheelPrizes: [
      { name: 'Pretzel', icon: '🥨🧂' },
      { name: 'Bira Bardağı', icon: '🍺🍻' },
      { name: 'Sosis', icon: '🌭🥨' },
      { name: 'Kukuduvar Saati', icon: '🕰️🌲' },
      { name: 'Lebkuchen', icon: '🍪❤️' },
      { name: 'Lederhosen', icon: '👖🏔️' },
    ],
    marketItems: [
      { name: 'Bratwurst', icon: '🌭🍟', price: 240 },
      { name: 'Schnitzel', icon: '🍖🍋', price: 440 },
      { name: 'Sauerkraut', icon: '🥬🍲', price: 160 },
      { name: 'Kartoffelsalat', icon: '🥗🥔', price: 200 },
      { name: 'Apfelstrudel', icon: '🥧🍎', price: 280 },
      { name: 'Glühwein', icon: '🍷🍊', price: 200 },
    ],
    photoBg: '🏰',
    photoScene: 'Neuschwanstein Şatosu'
  },
  china: {
    wheelPrizes: [
      { name: 'Ejderha Figürü', icon: '🐉🔥' },
      { name: 'Dim Sum', icon: '🥟🥢' },
      { name: 'Çin Feneri', icon: '🏮✨' },
      { name: 'Yelpaze', icon: '🪭🌸' },
      { name: 'Panda Peluş', icon: '🐼🎋' },
      { name: 'Yeşim Taşı', icon: '💚💎' },
    ],
    marketItems: [
      { name: 'Pekin Ördeği', icon: '🦆🥞', price: 700 },
      { name: 'Kung Pao Tavuk', icon: '🍗🥜', price: 440 },
      { name: 'Baozi', icon: '🥟☁️', price: 200 },
      { name: 'Ay Pastası', icon: '🥮🍵', price: 240 },
      { name: 'Yeşil Çay', icon: '🍵🌿', price: 160 },
      { name: 'Mapo Tofu', icon: '🍲🌶️', price: 360 },
    ],
    photoBg: '🏯',
    photoScene: 'Çin Seddi'
  }
,
  japan: {
    wheelPrizes: [
      { name: 'Kılıç', icon: '🗡️🌸' },
      { name: 'Geyşa Yelpazesi', icon: '🪭👘' },
      { name: 'Bonsai', icon: '🪴🌲' },
      { name: 'Matcha', icon: '🍵🌿' },
      { name: 'Anime Figürü', icon: '🎎✨' },
      { name: 'Origami', icon: '🦢📄' },
    ],
    marketItems: [
      { name: 'Sushi Seti', icon: '🍣🥢', price: 400 },
      { name: 'Ramen', icon: '🍜🍥', price: 250 },
      { name: 'Tempura', icon: '🍤🤤', price: 300 },
      { name: 'Sake', icon: '🍶🌸', price: 200 },
      { name: 'Takoyaki', icon: '🧆🐙', price: 180 },
      { name: 'Mochi', icon: '🍡🍓', price: 150 },
    ],
    photoBg: '🌸',
    photoScene: 'Fuji Dağı'
  },
  france: {
    wheelPrizes: [
      { name: 'Bere', icon: '👒🎨' },
      { name: 'Parfüm', icon: '🧴✨' },
      { name: 'Mona Lisa Tablosu', icon: '🖼️🎭' },
      { name: 'Eyfel Minyatürü', icon: '🗼🌟' },
      { name: 'Makaron Kulesi', icon: '🧁🎀' },
      { name: 'Şarap Kadehi', icon: '🍷🍇' },
    ],
    marketItems: [
      { name: 'Kruvasan', icon: '🥐☕', price: 150 },
      { name: 'Makaron Tabağı', icon: '🧁🎨', price: 250 },
      { name: 'Ratatouille', icon: '🥗🍅', price: 300 },
      { name: 'Escargot', icon: '🐌🧄', price: 400 },
      { name: 'Fransız Peyniri', icon: '🧀🥖', price: 200 },
      { name: 'Baguette', icon: '🥖🧈', price: 100 },
    ],
    photoBg: '🗼',
    photoScene: 'Eyfel Kulesi Önü'
  },
  uk: {
    wheelPrizes: [
      { name: 'Kırmızı Otobüs', icon: '🚌💂' },
      { name: 'Şemsiye', icon: '☔🌧️' },
      { name: 'Çay Fincanı', icon: '☕👑' },
      { name: 'Ayıcık', icon: '🧸🎀' },
      { name: 'Kraliçe Tacı', icon: '👑✨' },
      { name: 'Big Ben Saati', icon: '🕰️🇬🇧' },
    ],
    marketItems: [
      { name: 'Fish and Chips', icon: '🐟🍟', price: 300 },
      { name: 'İngiliz Çayı', icon: '🫖🥛', price: 150 },
      { name: 'Scones', icon: '🥯🍓', price: 200 },
      { name: 'Biftek Wellington', icon: '🥩🥐', price: 500 },
      { name: 'Shepherd\'s Pie', icon: '🥧🍖', price: 350 },
      { name: 'İngiliz Kahvaltısı', icon: '🍳🥓', price: 400 },
    ],
    photoBg: '💂',
    photoScene: 'London Eye'
  },
  usa: {
    wheelPrizes: [
      { name: 'Özgürlük Heykeli', icon: '🗽✨' },
      { name: 'Amerikan Futbolu', icon: '🏈🦅' },
      { name: 'Hollywood Yıldızı', icon: '⭐🎬' },
      { name: 'Kovboy Şapkası', icon: '🤠🐎' },
      { name: 'Uzay Mekiği', icon: '🚀🌌' },
      { name: 'Klasik Araba', icon: '🚗🇺🇸' },
    ],
    marketItems: [
      { name: 'Cheeseburger', icon: '🍔🍟', price: 250 },
      { name: 'Hot Dog', icon: '🌭🤤', price: 150 },
      { name: 'Pankek', icon: '🥞🍁', price: 180 },
      { name: 'Donut', icon: '🍩☕', price: 120 },
      { name: 'Mac and Cheese', icon: '🧀🥣', price: 200 },
      { name: 'Barbekü Kaburga', icon: '🍖🔥', price: 450 },
    ],
    photoBg: '🗽',
    photoScene: 'Times Meydanı'
  },
  greece: {
    wheelPrizes: [
      { name: 'Zeytin Dalı', icon: '🌿🕊️' },
      { name: 'Antik Vazo', icon: '🏺🏛️' },
      { name: 'Mitotoji Heykeli', icon: '🗿🔱' },
      { name: 'Mavi Göz', icon: '🧿💙' },
      { name: 'Bouzouki', icon: '🪕🎶' },
      { name: 'Olimpiyat Meşalesi', icon: '🔥🏅' },
    ],
    marketItems: [
      { name: 'Gyros', icon: '🥙🍅', price: 200 },
      { name: 'Moussaka', icon: '🍆🥩', price: 350 },
      { name: 'Yunan Salatası', icon: '🥗🧀', price: 150 },
      { name: 'Souvlaki', icon: '🍢🍋', price: 250 },
      { name: 'Baklava (Yunan)', icon: '🍯🥜', price: 180 },
      { name: 'Frappe', icon: '🥤🧊', price: 100 },
    ],
    photoBg: '🏛️',
    photoScene: 'Santorini Evleri'
  },
  bosnia: {
    wheelPrizes: [
      { name: 'Boşnak Kahvesi', icon: '☕🫖' },
      { name: 'Stari Most Hatırası', icon: '🌉💜' },
      { name: 'El Yapımı Halı', icon: '🧶🎨' },
      { name: 'Filigran Takı', icon: '💍✨' },
      { name: 'Bosna Bayrağı', icon: '🇧🇦🏳️' },
      { name: 'Geleneksel Fes', icon: '🎩🟥' },
    ],
    marketItems: [
      { name: 'Cevapçiça Tabağı', icon: '🥩🧅', price: 250 },
      { name: 'Burek', icon: '🥐🥩', price: 180 },
      { name: 'Boşnak Kahvesi', icon: '☕🫖', price: 120 },
      { name: 'Baklava', icon: '🍯🥜', price: 200 },
      { name: 'Tufahija', icon: '🍎🍯', price: 160 },
      { name: 'Sirnica', icon: '🧀🥧', price: 140 },
    ],
    photoBg: '🌉',
    photoScene: 'Stari Most Köprüsü'
  }
}
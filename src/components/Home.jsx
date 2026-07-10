// src/components/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

// 1. 12 ÜLKENİN BAŞLIK BAZLI DETAYLI BİLGİ VE BİREBİR İLGİLİ KONU RESMİ LİSTESİ
const COUNTRIES_LIST = [
  {
    id: 'egypt',
    name: 'Mısır',
    flag: '🇪🇬',
    capital: 'Kahire',
    color: '#EAB308',
    image: '/images/egypt.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Mısır mutfağının baş tacı, pirinç, makarna, siyah mercimek, nohut ve çıtır soğanların zengin domates sosuyla harmanlandığı Koshari yemeğidir. Sokak lezzetlerinin vazgeçilmezi olan baharatlı Taameya (Mısır falafeli) da oldukça popülerdir.',
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Dünyanın en eski anıtsal yapılarından olan Giza Piramitleri ve Büyük Sfenks büyüleyicidir. Can damarı olan Nil Nehri turları ve Luksor\'daki açık hava tapınakları tarih meraklılarının gözdesidir.',
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Abu Simbel Güneş Festivali yılda iki kez düzenlenir. Güneş ışınlarının Abu Simbel Tapınağı\'nın en derin odasındaki Ramses heykeline vurduğu bu anlar müzik, halk dansları ve şenliklerle kutlanır.',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'china',
    name: 'Çin',
    flag: '🇨🇳',
    capital: 'Pekin',
    color: '#EF4444',
    image: '/images/china.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Özel fırınlarda nar gibi kızartılan, çıtır derisi ve incecik hamurla sarılarak sunulan Pekin Ördeği dünya çapında bir lezzettir. Ayrıca buharda pişen küçük hamur bohçaları olan Dim Sum çeşitleri çay eşliğinde tüketilir.',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Uzaydan bile görülebildiği söylenen tarihi savunma hattı Çin Seddi ve Pekin\'in kalbindeki görkemli Yasak Şehir en önemli tarihi noktalardır. Guilin\'in masalsı karstik dağları ise doğal bir cennettir.',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Geleneksel Çin Yeni Yılı (Bahar Festivali) ejderha dansları, kırmızı fenerler ve havai fişeklerle kutlanır. Fener Festivali\'nde ise sokaklar binlerce renkli kağıt fenerle aydınlanır.',
      image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'russia',
    name: 'Rusya',
    flag: '🇷🇺',
    capital: 'Moskova',
    color: '#3B82F6',
    image: '/images/russia.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Pancar kökü sayesinde kırmızı rengini alan, içine et ve ekşi krema eklenerek sıcak servis edilen meşhur Borç Çorbası kış aylarının vazgeçilmezidir. İnce Rus krepleri olan Blini de oldukça meşhurdur.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Renkli soğan kubbeleriyle masal kitaplarından fırlamış gibi duran Aziz Vasil Katedrali ve tarihi Kremlin Sarayı Moskova\'nın kalbidir. Dünyanın en derin tatlı su gölü olan Sibirya\'daki Baykal Gölü ise doğa harikasıdır.',
      image: 'https://images.unsplash.com/photo-1513326796272-4ab1a5908651?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Kışın bitişini ve baharın gelişini simgeleyen Maslenitsa Festivali krep ziyafetleri, danslar ve kardan kuklaların yakılması gibi eğlenceli ritüellerle coşkuyla kutlanır.',
      image: 'https://images.unsplash.com/photo-1614714154946-b3ebde5537ef?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'colombia',
    name: 'Kolombiya',
    flag: '🇨🇴',
    capital: 'Bogota',
    color: '#EAB308',
    image: '/images/colombia.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Kıyma, pilav, fasulye, muz kızartması, yumurta ve avokado içeren dev porsiyonlu Bandeja Paisa ulusal yemektir. Mısırdan yapılan sıcak arepa ekmekleri ise her öğünde tüketilir.',
      image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Renkli begonvilli sokakları ve tarihi surlarıyla Cartagena eski şehri büyüleyicidir. Dünyanın en uzun palmiye ağaçlarının yetiştiği yeşil Cocora Vadisi ise büyüleyici bir doğal güzelliktir.',
      image: 'https://images.unsplash.com/photo-1588598126744-ab36c4b260bb?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Medellin\'de düzenlenen Çiçek Festivali (Feria de las Flores), yerel halkın sırtlarında devasa çiçek aranjmanları taşıdığı rengarenk geçit törenleriyle ünlüdür.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'italy',
    name: 'İtalya',
    flag: '🇮🇹',
    capital: 'Roma',
    color: '#10B981',
    image: '/images/italy.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Odun ateşinde pişen ince hamurlu Napoli Pizzası ve taze yumurtalı sosla hazırlanan Spagetti Carbonara İtalyan mutfağının simgeleridir. Yemek sonrası taze İtalyan dondurması (Gelato) tercih edilir.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Roma İmparatorluğu\'nun dev arenası Kolezyum ve yan yatmasıyla ünlü tarihi Pisa Kulesi en meşhur yapılardır. Limon ağaçları ve renkli evleriyle Amalfi Kıyıları ise eşsiz bir doğa harikasıdır.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Venedik Karnavalı, yüzlerce yıllık el yapımı gizemli maskeler ve şık tarihi kostümlerle kanallar boyunca düzenlenen su geçitleri ve balolarla kutlanan büyüleyici bir şenliktir.',
      image: 'https://images.unsplash.com/photo-1520156557489-35e468307cca?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'spain',
    name: 'İspanya',
    flag: '🇪🇸',
    capital: 'Madrid',
    color: '#EC4899',
    image: '/images/spain.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Safranlı pirinç pilavının deniz ürünleri, tavuk ve sebzelerle geniş tavalarda pişirilmesiyle yapılan Paella en bilinen yemektir. Küçük porsiyonlar halinde sunulan mezeler olan Tapaslar da popülerdir.',
      image: 'https://images.unsplash.com/photo-1534080391025-a7f0e6765d70?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Antoni Gaudi\'nin bitmeyen şaheseri Sagrada Familia Katedrali ve Granada\'daki büyüleyici İslam sanatı eseri El Hamra Sarayı mimari şaheserlerdir. Endülüs\'ün zeytin bahçeleri doğaya renk katar.',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Bunol kasabasında yapılan dünyaca ünlü domates savaşı festivali La Tomatina, binlerce insanın sokaklarda tonlarca ezilmiş domatesi birbirine fırlattığı eğlenceli bir şenliktir.',
      image: 'https://images.unsplash.com/photo-1568231804918-0902c5f1fa6d?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'turkey',
    name: 'Türkiye',
    flag: '🇹🇷',
    capital: 'Ankara',
    color: '#DC2626',
    image: '/images/turkey.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Köz ateşinde pişirilen lokum gibi Adana ve İskender Kebapları ile incecik çıtır hamurlu Lahmacun Türk mutfağının incileridir. Şerbetli katmerli çıtır Antep Baklavası ise dünyaca ünlüdür.',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Rengarenk sıcak hava balonlarının süzüldüğü Kapadokya peri bacaları ve bembeyaz termal havuzlarıyla Pamukkale travertenleri eşsiz doğa harikalarıdır. Tarihi yarımadadaki Ayasofya ise mimari bir başyapıttır.',
      image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Konya\'da düzenlenen Şeb-i Arus (Mevlana\'yı Anma Törenleri), semazenlerin mistik müzik eşliğinde döndüğü, hoşgörü ve sevginin paylaşıldığı dünyaca ünlü manevi şenliktir.',
      image: 'https://images.unsplash.com/photo-1541944743827-e04aa6427c33?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'mexico',
    name: 'Meksika',
    flag: '🇲🇽',
    capital: 'Mexico City',
    color: '#059669',
    image: '/images/mexico.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Mısır unundan yapılan tortillanın içine et, peynir ve taze salsa sosu eklenerek hazırlanan Tacos sokak kültürünün merkezindedir. Avokado, domates ve limonla hazırlanan taze Guacamole sosu her yemeğe eşlik eder.',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Maya medeniyetinin matematiksel dehasını gösteren devasa Chichen Itza piramidi en önemli tarihi yapıdır. Tropikal Karayip sahillerine sahip Cancun ve yer altı su mağaraları (Cenoteler) doğa harikasıdır.',
      image: 'https://images.unsplash.com/photo-1512813583145-ac554ac82e54?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Ölüler Günü (Dia de los Muertos), ölen yakınların anısını yaşatmak için sokakların rengarenk kadife çiçekleri, şekerden kafatasları, mumlar ve eğlenceli iskelet makyajlarıyla karnaval havasında kutlandığı özel bir gündür.',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'india',
    name: 'Hindistan',
    flag: '🇮🇳',
    capital: 'Yeni Delhi',
    color: '#F97316',
    image: '/images/india.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Onlarca farklı taze baharatın pirinç ve tavukla harmanlanmasıyla pişirilen nefis Biryani pilavı Hint mutfağının temelidir. Taş fırında pişen tereyağlı sıcak Naan ekmeği ve acı köri sosları her sofrada bulunur.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Şah Cihan\'ın eşi için yaptırdığı aşkın beyaz mermerden sembolü görkemli Tac Mahal tapınağı en büyük mimari yapıdır. Ganj Nehri kıyısındaki tarihi tapınaklar ve ritüeller mistik bir atmosfer sunar.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Renklerin Festivali Holi, insanların sokaklarda birbirlerine renkli toz boyalar ve sular fırlattığı, müziğin ve baharın gelişinin büyük bir neşeyle kutlandığı dünyaca ünlü şenliktir.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'norway',
    name: 'Norveç',
    flag: '🇳🇴',
    capital: 'Oslo',
    color: '#4F46E5',
    image: '/images/norway.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Norveç\'in soğuk ve temiz sularından çıkan taze Somon Balığı ızgara veya tütsülenmiş olarak sofraları süsler. Lahana ve kuzu etinin saatlerce haşlanmasıyla yapılan geleneksel Fårikål ise kış yemeğidir.',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Sarp dağların arasından süzülen derin buzul gölleri olan Fiyortlar (özellikle Geirangerfjord) nefes kesicidir. Kış aylarında gökyüzünü yeşil ve mor renklere boyayan Kuzey Işıkları büyüleyici bir doğa şovudur.',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: '17 Mayıs Anayasa Günü, tüm halkın geleneksel kıyafetleri olan "Bunad" giyerek sokaklarda çocuk bandoları eşliğinde bayrak sallayıp geçit törenleri yaptığı en büyük ulusal bayramdır.',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'germany',
    name: 'Almanya',
    flag: '🇩🇪',
    capital: 'Berlin',
    color: '#CA8A04',
    image: '/images/germany.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Fırından yeni çıkmış, kaya tuzu taneleriyle süslenmiş içi yumuşacık dışı çıtır geleneksel Pretzel çörekleri her fırında bulunur. Köri soslu meşhur sosis Currywurst ise Berlin sokak lezzetidir.',
      image: 'https://images.unsplash.com/photo-1579631542720-3a87824ffd8e?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Bavyera Alpleri\'nde yer alan, Disney şatosuna ilham vermiş masalsı Neuschwanstein Şatosu ve Berlin\'deki tarihi Brandenburg Kapısı en popüler yerlerdir. Ren Nehri Vadisi üzüm bağlarıyla kaplıdır.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Münih\'te düzenlenen Oktoberfest, dünyanın en büyük halk şenliğidir. Geleneksel kıyafetler giymiş milyonlarca insan dev çadırlarda canlı müzikler, dev pretzel çörekleri ve eğlencelerle sonbaharı kutlar.',
      image: 'https://images.unsplash.com/photo-1566838217578-1903568a76d9?w=400&auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'brazil',
    name: 'Brezilya',
    flag: '🇧🇷',
    capital: 'Brasilia',
    color: '#009b3a',
    image: '/images/brazil.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Siyah fasulye, kurutulmuş et ve sosislerin kısık ateşte saatlerce pişirilmesiyle hazırlanan ve pilavla sunulan Feijoada ulusal yemektir. Peynirli çıtır sıcak ekmek topları (Pão de Queijo) en sevilen lezzetleridir.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Rio de Janeiro şehrini tepeden izleyen devasa Kurtarıcı İsa (Cristo Redentor) heykeli dünyanın yedi harikasından biridir. Yeryüzünün en büyük oksijen kaynağı Amazon Yağmur Ormanları ve nehir turları doğa harikasıdır.',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Dünyaca ünlü Rio Karnavalı, rengarenk tüylü kostümler giymiş dansçıların Sambadrome pistinde devasa geçit arabaları ve coşkulu bateri ritimleri eşliğinde dans ettiği dünyanın en büyük şenliğidir.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80'
    }
  }
];

export default function Home({ user, onLogout }) {
  const [theme, setTheme] = useState('light');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div style={styles.appContainer}>
      
      {/* Üst Menü Çubuğu */}
      <nav style={styles.navBar} className="glass shadow-premium">
        <div style={styles.navBrand} onClick={() => setSelectedCountry(null)}>
          <span style={styles.brandEmoji}>🌍</span>
          <span style={styles.brandText}>Kültür Gezgini</span>
        </div>

        <div style={styles.navLinks}>
          <button onClick={() => setSelectedCountry(null)} style={{ ...styles.navBtn, fontWeight: '800' }}>Ana Sayfa</button>
          
          {user ? (
            <div style={styles.userSection}>
              <span style={styles.usernameText}>🎒 Gezgin: <strong>{user.firstName || user}</strong></span>
              <button onClick={onLogout} style={styles.logoutBtn}>Çıkış Yap</button>
            </div>
          ) : (
            <span style={styles.usernameText}>🎒 Gezgin</span>
          )}

          <button onClick={toggleTheme} style={styles.themeToggleBtn}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* DETAY VEYA ANA GRID GÖRÜNÜMÜ */}
      {selectedCountry ? (
        
        /* DETAY BİLGİ PANELİ VE CİZGİ FİLM TARZI RESİM GÖSTERİMİ */
        <div style={{
          ...styles.detailsContainer,
          background: `linear-gradient(135deg, ${selectedCountry.color}15 0%, ${selectedCountry.color}05 100%)`
        }}>
          <div className="container" style={styles.detailsContent}>
            <button style={{ ...styles.backButton, borderColor: selectedCountry.color, color: selectedCountry.color }} onClick={() => setSelectedCountry(null)}>
              ← Ana Sayfaya Dön
            </button>

            <div style={styles.detailsLayoutGrid}>
              
              {/* Sol Sütun: Konular (Yemekler, Tarih/Doğa, Festivaller) */}
              <div style={styles.infoCardsColumn}>
                
                {/* Başlık Kartı */}
                <div style={{ ...styles.modalCountryHeader, borderBottom: `3px solid ${selectedCountry.color}` }}>
                  <span style={styles.detailsFlag}>{selectedCountry.flag}</span>
                  <div>
                    <h1 style={{ ...styles.detailsTitle, color: selectedCountry.color }}>{selectedCountry.name}</h1>
                    <p style={styles.detailsCapital}>Başkent: <strong>{selectedCountry.capital}</strong></p>
                  </div>
                </div>

                {/* 1. Başlık: Yöresel Yemekler */}
                <div style={styles.topicCard} className="glass shadow-premium">
                  <div style={{ ...styles.topicImageWrapper, borderColor: selectedCountry.color }}>
                    <img src={selectedCountry.foods.image} alt={selectedCountry.foods.title} style={styles.topicImage} />
                  </div>
                  <div style={styles.topicTextWrapper}>
                    <h3 style={{ ...styles.topicTitle, color: selectedCountry.color }}>{selectedCountry.foods.title}</h3>
                    <p style={styles.topicDesc}>{selectedCountry.foods.desc}</p>
                  </div>
                </div>

                {/* 2. Başlık: Tarihi Yerler ve Doğal Güzellikler */}
                <div style={styles.topicCard} className="glass shadow-premium">
                  <div style={{ ...styles.topicImageWrapper, borderColor: selectedCountry.color }}>
                    <img src={selectedCountry.landmarks.image} alt={selectedCountry.landmarks.title} style={styles.topicImage} />
                  </div>
                  <div style={styles.topicTextWrapper}>
                    <h3 style={{ ...styles.topicTitle, color: selectedCountry.color }}>{selectedCountry.landmarks.title}</h3>
                    <p style={styles.topicDesc}>{selectedCountry.landmarks.desc}</p>
                  </div>
                </div>

                {/* 3. Başlık: Festivaller */}
                <div style={styles.topicCard} className="glass shadow-premium">
                  <div style={{ ...styles.topicImageWrapper, borderColor: selectedCountry.color }}>
                    <img src={selectedCountry.festivals.image} alt={selectedCountry.festivals.title} style={styles.topicImage} />
                  </div>
                  <div style={styles.topicTextWrapper}>
                    <h3 style={{ ...styles.topicTitle, color: selectedCountry.color }}>{selectedCountry.festivals.title}</h3>
                    <p style={styles.topicDesc}>{selectedCountry.festivals.desc}</p>
                  </div>
                </div>

              </div>

              {/* Sağ Sütun: Çizgi Film Çizim Kartı (Çerçeveli) */}
              <div style={{ ...styles.stickyCharacterCard, borderColor: selectedCountry.color }} className="glass shadow-premium">
                <h4 style={styles.charTitle}>{selectedCountry.name} Kültür Kartı</h4>
                <div style={{ ...styles.mascotImageWrapper, borderColor: selectedCountry.color }}>
                  <img src={selectedCountry.image} alt={selectedCountry.name} style={styles.mascotImage} />
                </div>
                <span style={{ ...styles.characterBadge, backgroundColor: `${selectedCountry.color}20`, color: selectedCountry.color }}>
                  {selectedCountry.flag} Keşif Haritası
                </span>
              </div>

            </div>
          </div>
        </div>

      ) : (

        /* ANA SAYFA GRID GÖRÜNÜMÜ */
        <>
          <div style={styles.headerContainer}>
            <h1 style={styles.title}>Dünya Keşif Rehberi 🌍</h1>
            <p style={styles.subtitle}>Ülkelerin renkli dünyasını keşfet, pasaportuna yeni damgalar ekle!</p>
          </div>

          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerBadge}>Keşfedilmeyi Bekleyen Ülkeler</span>
            <div style={styles.dividerLine}></div>
          </div>

          <div className="container">
            <div className="country-grid">
              {COUNTRIES_LIST.map((country) => (
                <CountryCard 
                  key={country.id} 
                  country={country} 
                  onStampClick={setSelectedCountry}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Kart Bileşeni (Sağdan kayarak gelir)
function CountryCard({ country, onStampClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isStamped, setIsStamped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  const handleStamp = (e) => {
    e.stopPropagation();
    if (isStamped) return;
    setIsStamped(true);
    setTimeout(() => {
      onStampClick(country);
      setIsStamped(false);
    }, 700);
  };

  const cardStyle = {
    ...styles.card,
    borderColor: country.color,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
    transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <div 
      ref={cardRef}
      style={cardStyle}
      className="glass shadow-premium"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 15px 35px ${country.color}20, var(--card-shadow)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--card-shadow)';
      }}
      onClick={() => onStampClick(country)}
    >
      <div style={styles.imageContainer}>
        <img src={country.image} alt={country.name} style={styles.image} />
        <div style={styles.cutoutCurve}></div>
      </div>

      <div style={styles.cardContent}>
        <h2 style={{ ...styles.countryName, color: country.color }}>{country.name}</h2>
        <div style={styles.stampWrapper} onClick={handleStamp}>
          <div style={{ ...styles.stampCircle, borderColor: country.color, color: country.color }}>
            <span style={styles.stampText}>VİZE</span>
            <span style={styles.stampIcon}>🛂</span>
            <span style={styles.stampSubText}>ONAY</span>
            {isStamped && <div style={{ ...styles.inkSplash, backgroundColor: country.color }} />}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  appContainer: { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' },
  navBar: { padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 },
  navBrand: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' },
  brandEmoji: { fontSize: '1.8rem' },
  brandText: { fontSize: '1.4rem', fontWeight: '800' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '20px' },
  navBtn: { background: 'none', border: 'none', fontSize: '1rem', cursor: 'pointer' },
  themeToggleBtn: { fontSize: '1.4rem', background: 'none', border: 'none', cursor: 'pointer' },
  userSection: { display: 'flex', alignItems: 'center', gap: '12px' },
  usernameText: { fontSize: '0.95rem', fontWeight: '600' },
  logoutBtn: { padding: '6px 12px', borderRadius: '10px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', border: '1px solid #EF4444', fontSize: '0.85rem', fontWeight: '700', cursor: 'pointer' },
  
  headerContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '60px 0 20px 0', textAlign: 'center' },
  title: { fontSize: '2.8rem', fontWeight: '800', marginBottom: '12px' },
  subtitle: { fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', textAlign: 'center' },
  
  divider: { display: 'flex', alignItems: 'center', margin: '40px 0' },
  dividerLine: { flex: 1, height: '2px', backgroundColor: 'var(--border-color)' },
  dividerBadge: { padding: '8px 20px', borderRadius: '20px', border: '2px solid var(--border-color)', fontSize: '1rem', fontWeight: '800', margin: '0 16px' },
  
  card: { borderRadius: '32px', borderWidth: '4px', borderStyle: 'solid', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '420px', cursor: 'pointer', position: 'relative' },
  imageContainer: { height: '220px', position: 'relative', overflow: 'hidden' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  cutoutCurve: { position: 'absolute', bottom: '-1px', left: '0', right: '0', height: '35px', backgroundColor: 'var(--bg-glass)', borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' },
  cardContent: { padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', flex: 1 },
  countryName: { fontSize: '1.6rem', fontWeight: '700', textAlign: 'center' },
  stampWrapper: { position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  stampCircle: { width: '100%', height: '100%', borderRadius: '50%', border: '3px dashed', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4px', position: 'relative', overflow: 'hidden' },
  stampText: { fontSize: '0.65rem', fontWeight: '800' },
  stampSubText: { fontSize: '0.6rem', fontWeight: '800' },
  inkSplash: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: '50%', opacity: 0.2 },

  detailsContainer: { width: '100%', minHeight: '85vh', display: 'flex', flexDirection: 'column', padding: '40px 20px' },
  detailsContent: { maxWidth: '1100px', margin: '0 auto', width: '100%' },
  backButton: { padding: '10px 20px', borderRadius: '12px', background: 'var(--bg-glass)', border: '2px solid', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', marginBottom: '30px', alignSelf: 'flex-start' },
  
  detailsLayoutGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' },
  infoCardsColumn: { display: 'flex', flexDirection: 'column', gap: '24px' },
  
  modalCountryHeader: { display: 'flex', gap: '20px', alignItems: 'center', paddingBottom: '20px', marginBottom: '10px' },
  detailsFlag: { fontSize: '3.6rem' },
  detailsTitle: { fontSize: '2.5rem', fontWeight: '900', margin: 0 },
  detailsCapital: { fontSize: '1.25rem', margin: '6px 0 0 0' },
  
  // Tüm Yemek, Tarih, Festival Kartlarının Resim Çerçevesi Stilleri (Eşit boyutlu ve çerçeveli)
  topicCard: { borderRadius: '24px', display: 'flex', padding: '20px', gap: '20px', border: '2.5px solid var(--border-color)', alignItems: 'center', background: 'var(--bg-glass)' },
  topicImageWrapper: { width: '220px', minWidth: '220px', height: '145px', overflow: 'hidden', borderRadius: '16px', border: '3px solid', padding: '4px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  topicImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' },
  topicTextWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 },
  topicTitle: { fontSize: '1.35rem', fontWeight: '800', margin: '0 0 10px 0' },
  topicDesc: { fontSize: '1.05rem', lineHeight: '1.55', margin: 0, color: 'var(--text-primary)' }, // Metinler artık asla kesilmez, tam boyutta görünür!
  
  // Sağ taraftaki Çizgi Film İllüstrasyon Kartı Stilleri
  stickyCharacterCard: { position: 'sticky', top: '100px', borderRadius: '24px', border: '3.5px solid', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'var(--bg-glass)' },
  charTitle: { fontSize: '1.25rem', color: 'var(--text-primary)', margin: '0 0 16px 0', fontWeight: '800' },
  mascotImageWrapper: { width: '220px', height: '170px', borderRadius: '16px', border: '3.5px solid', padding: '4px', overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' },
  mascotImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' },
  characterBadge: { padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '800' }
};
// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { visaQuestions } from '../data/visaQuestions';
import { COUNTRY_ITEMS } from '../data/countryItems';
import FunStoriesScreen from './FunStoriesScreen';
import SpinWheelModal from './SpinWheelModal';
import MarketModal from './MarketModal';
import PhotoModal from './PhotoModal';
import MiniGamesModal from './MiniGamesModal';
import CollectionScreen from './CollectionScreen';
import './Home.css';

import japanMascot from '../assets/mascots/japan_chibi.png';
import franceMascot from '../assets/mascots/france_chibi.png';
import ukMascot from '../assets/mascots/uk_chibi.png';
import usaMascot from '../assets/mascots/usa_chibi.png';
import greeceMascot from '../assets/mascots/greece_chibi.png';
import bosniaMascot from '../assets/mascots/bosnia_chibi.png';
import turkeyMascot from '../assets/mascots/turkey_chibi.png';
import spainMascot from '../assets/mascots/spain_chibi.png';
import italyMascot from '../assets/mascots/italy_chibi.png';
import russiaRaw from '../assets/mascots/russia_chibi.png';
import egyptMascot from '../assets/mascots/egypt_chibi.png';
import brazilMascot from '../assets/mascots/brazil_chibi.png';
import norwayMascot from '../assets/mascots/norway_chibi.png';
import mexicoMascot from '../assets/mascots/mexico_chibi.png';
import colombiaMascot from '../assets/mascots/colombia_chibi.png';
import indiaMascot from '../assets/mascots/india_chibi.png';
import germanyMascot from '../assets/mascots/germany_chibi.png';
import chinaMascot from '../assets/mascots/china_chibi.png';

// ===== ÜLKE PROFİLLERİ =====
const COUNTRY_PROFILES = {
  turkey: {
    id: 'turkey',
    name: "Türkiye",
    capital: "Ankara",
    language: "Türkçe",
    population: "85 Milyon",
    landmark: "Ayasofya Camii, Kapadokya & Efes",
    funFact: "Kişi başına dünyada en çok çay tüketen ülke Türkiye'dir! Ayrıca lale çiçeğinin anavatanı Osmanlı döneminde Türkiye'dir.",
    flag: "🇹🇷",
    color: "#DC2626",
    mascotName: "Türk Maslahat",
    interactiveActions: ["Çay Doldur ☕", "Simit Dağıt 🥯", "Ney Üfle 🎶"],
    image: '/images/turkey.jpg',
    mascot: turkeyMascot,
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
  spain: {
    id: 'spain',
    name: "İspanya",
    capital: "Madrid",
    language: "İspanyolca",
    population: "47 Milyon",
    landmark: "Sagrada Familia, Alhambra Sarayı",
    funFact: "İspanya dünyadaki zeytinyağı üretiminin %45'ini karşılar. Ünlü 'La Tomatina' her yıl burada yapılır!",
    flag: "🇪🇸",
    color: "#EC4899",
    mascotName: "İspanyol Dansçı",
    interactiveActions: ["Kastanyet Çal 💃", "Yelpaze Salla 🪭", "Flamenko Yap 🎵"],
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
  italy: {
    id: 'italy',
    name: "İtalya",
    capital: "Roma",
    language: "İtalyanca",
    population: "59 Milyon",
    landmark: "Kolezyum, Venedik Kanalları & Pisa Kulesi",
    funFact: "İtalya'da 1500'den fazla makarna türü vardır! Dünyada en çok UNESCO Miras Alanı buradadır.",
    flag: "🇮🇹",
    color: "#10B981",
    mascotName: "İtalyan Şef",
    interactiveActions: ["Pizza Hamuru Çevir 🍕", "Spagetti Pişir 🍝", "Şarkı Söyle 🎵"],
    image: '/images/italy.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Odun ateşinde pişen ince hamurlu Napoli Pizzası ve taze yumurtalı sosla hazırlanan Spagetti Carbonara İtalyan mutfağının simgeleridir. Yemek sonrası taze İtalyan dondurması (Gelato) tercih edilir.',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop&q=80'
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
  russia: {
    id: 'russia',
    name: "Rusya",
    capital: "Moskova",
    language: "Rusça",
    population: "144 Milyon",
    landmark: "Kızıl Meydan & Kremlin Sarayı",
    funFact: "Sibirya, Rusya topraklarının %77'sini oluşturur. Dünyadaki ormanlık alanların %20'si Rusya'dadır.",
    flag: "🇷🇺",
    color: "#3B82F6",
    mascotName: "Misha (Rus Ayısı)",
    interactiveActions: ["Samovarı Ateşle ☕", "Ayı Dansı Yap 🐻", "Bal Ye 🍯"],
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
      desc: 'Kışın bitişini ve baharın gelişini simgeleyen Maslenitsa Festivali krep ziyafetleri, danslar ve kardan kuklaların yakılması gibi eğlenceli ritüellerle coşkuyla kutlanan bir şenliktir.',
      image: 'https://images.unsplash.com/photo-1614714154946-b3ebde5537ef?w=400&auto=format&fit=crop&q=80'
    }
  },
  egypt: {
    id: 'egypt',
    name: "Mısır",
    capital: "Kahire",
    language: "Arapça",
    population: "110 Milyon",
    landmark: "Giza Piramitleri, Büyük Sfenks",
    funFact: "Giza Piramidi, Antik Dünyanın Yedi Harikası'ndan ayakta kalan tek yapıdır.",
    flag: "🇪🇬",
    color: "#EAB308",
    mascotName: "Mısır Firavunu",
    interactiveActions: ["Piramit Gizemini Çöz ⏳", "Hiyeroglif Yaz ✍️", "Altın Parıldat ✨"],
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
  brazil: {
    id: 'brazil',
    name: "Brezilya",
    capital: "Brasilia",
    language: "Portekizce",
    population: "214 Milyon",
    landmark: "Kurtarıcı İsa Heykeli, Amazon Ormanları",
    funFact: "Brezilya 150 yılı aşkın süredir kahve üretiminde liderdir. Bitki çeşitliliğinde dünya lideridir.",
    flag: "🇧🇷",
    color: "#009b3a",
    mascotName: "Brezilyalı Sambacı",
    interactiveActions: ["Top Sektir ⚽", "Samba Yap 💃", "Karnaval Şarkısı 🎵"],
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
  },
  norway: {
    id: 'norway',
    name: "Norveç",
    capital: "Oslo",
    language: "Norveççe",
    population: "5.5 Milyon",
    landmark: "Geirangerfjord, Kuzey Işıkları",
    funFact: "Norveç, kış olimpiyatlarında en çok madalya kazanan ülkedir.",
    flag: "🇳🇴",
    color: "#4F46E5",
    mascotName: "Norveç Vikinki",
    interactiveActions: ["Balık Yakala 🐟", "Balta Savur 🪓", "Kuzey Işıklarını İzle 🌌"],
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
  mexico: {
    id: 'mexico',
    name: "Meksika",
    capital: "Mexico City",
    language: "İspanyolca",
    population: "128 Milyon",
    landmark: "Chichen Itza Piramidi, Teotihuacan",
    funFact: "Çikolata, mısır ve domates dünyaya Meksika'dan yayılmıştır.",
    flag: "🇲🇽",
    color: "#059669",
    mascotName: "Meksikalı Amigo",
    interactiveActions: ["Taco Hazırla 🌮", "Marakas Çal 🪘", "Sombreroyu Düzelt 🤠"],
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
  colombia: {
    id: 'colombia',
    name: "Kolombiya",
    capital: "Bogota",
    language: "İspanyolca",
    population: "51 Milyon",
    landmark: "Cartagena Tarihi Şehri & Kahve Bölgesi",
    funFact: "Kolombiya, dünya zümrüt üretiminin %70-90'ına sahiptir.",
    flag: "🇨🇴",
    color: "#ca8a04",
    mascotName: "Kolombiya Kahvecisi",
    interactiveActions: ["Kahve Demle ☕", "Papağanla Konuş 🦜", "Salsa Dansı 💃"],
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
  india: {
    id: 'india',
    name: "Hindistan",
    capital: "Yeni Delhi",
    language: "Hintçe & İngilizce",
    population: "1.4 Milyar",
    landmark: "Tac Mahal, Ganj Nehri & Jaipur Sarayı",
    funFact: "Satranç oyunu Hindistan'da icat edilmiştir.",
    flag: "🇮🇳",
    color: "#F97316",
    mascotName: "Hindistan Fili",
    interactiveActions: ["Hortumla Su Püskürt 💧", "Dans Et 💃", "Baharat Kokla 🌶️"],
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
  germany: {
    id: 'germany',
    name: "Almanya",
    capital: "Berlin",
    language: "Almanca",
    population: "83 Milyon",
    landmark: "Brandenburg Kapısı, Neuschwanstein Şatosu",
    funFact: "Almanya'da 300'den fazla ekmek çeşidi vardır.",
    flag: "🇩🇪",
    color: "#CA8A04",
    mascotName: "Alman Hans",
    interactiveActions: ["Pretzel Isır 🥨", "Bardak Kaldır 🍺", "Yürüyüşe Çık 🥾"],
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
  china: {
    id: 'china',
    name: 'Çin',
    capital: 'Pekin',
    language: 'Çince (Mandarin)',
    population: '1.4 Milyar',
    landmark: 'Çin Seddi, Yasak Şehir & Terrakotta Ordusu',
    funFact: 'Tarihteki en eski kağıt para, barut, pusula ve matbaa Çin\'de icat edilmiştir. Tüm dev pandalar Çin\'e aittir.',
    flag: '🇨🇳',
    color: '#EF4444',
    mascotName: 'Çin Pandası',
    interactiveActions: ['Yelpaze Salla 🎐', 'Bambu Ye 🎋', 'Kung Fu Duruşu 🐼'],
    image: '/images/china.jpg',
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Özel fırınlarda nar gibi kızartılan, çıtır derisi ve incecik hamurla sarılarak sunulan Pekin Ördeği dünya çapında bir lezzettir. Buharda pişen küçük Dim Sum çeşitleri çay eşliğinde tüketilir.',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏛️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Uzaydan bile görülebildiği söylenen tarihi savunma hattı Çin Seddi ve Pekin\'in kalbindeki Yasak Şehir en önemli tarihi noktalardır. Guilin\'in masalsı karstik dağları ise doğal bir cennettir.',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?w=400&auto=format&fit=crop&q=80'
    }
  },
  japan: {
    id: 'japan',
    name: "Japonya",
    capital: "Tokyo",
    language: "Japonca",
    population: "125 Milyon",
    landmark: "Fuji Dağı, Fushimi Inari Tapınağı",
    funFact: "Japonya'da 6.800'den fazla ada vardır! Japon mutfağında 'umami' (lezzetlilik) beşinci bir temel tat olarak kabul edilir.",
    flag: "🇯🇵",
    color: "#DC2626",
    mascotName: "Japon Ninja",
    interactiveActions: ["Origami Yap 📘", "Çay Seremonisi ☕", "Ninja Hamlesi 💈"],
    image: '/images/japan.jpg',
    mascot: japanMascot,
    foods: {
      title: '🍲 Yöresel Yemekler',
      desc: 'Taze balık ve pirinçle özenle hazırlanan Sushi ve Sashimi Japon mutfağının zirvesidir. Sıcak Ramen çorbası yumuşak yumurta ve karidesle servis edilir.',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏗️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Japonya\'nın sembolü Fuji Dağı ve binlerce turuncu kapı ile ünlü Fushimi Inari Tapınağı eşsiz güzellikler sunar. Tokyo\'nun nızıltılı Shibuya kavşağı ise modernliğin simgesidir.',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🌸 Festivaller',
      desc: 'Hanami (Kiraz Çiçeği Festivali) her yazın başında Japonların park ve sokaklarda pembe sakura ağaçlarının altında piknik yapmasıyla kutlanır. Tanabata yıldız festivali de efsanevidir.',
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&auto=format&fit=crop&q=80'
    }
  },
  france: {
    id: 'france',
    name: "Fransa",
    capital: "Paris",
    language: "Fransızca",
    population: "68 Milyon",
    landmark: "Eyfel Kulesi, Louvre Müzesi",
    funFact: "Fransa, yılda 90 milyondan fazla turistiyle dünyanın en çok ziyaret edilen ülkesidir! 400'den fazla peynir çeşidi üretilir.",
    flag: "🇫🇷",
    color: "#2563EB",
    mascotName: "Fransız Aşçı",
    interactiveActions: ["Baget Getir 🥖", "Şarap Aç 🍷", "Bere Tak 🧢"],
    image: '/images/france.jpg',
    mascot: franceMascot,
    foods: {
      title: '🥐 Yöresel Yemekler',
      desc: 'Kruvasan ve baget Fransız fırıncılığının sembolüdür. Kabuklu midye Moules-Frites ve soyuğa dayanmasıyla ünlü Coq au Vin ise Fransız mutfağının klasığidir.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏗️ Tarihi Yerler ve Doğal Güzellikler',
      desc: '1889\'da inşa edilen demir Eyfel Kulesi Paris\'in ve tüm Fransa\'nın simgesidir. Louvre Müzesi\'ndeki Mona Lisa her yıl milyonlarca ziyaretçi çeker. Fransız Rivierasi ise eşsiz kıyı güzelliğini sunar.',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Her yıl 14 Temmuz\'da kutlanan Bastille Günü havai fişekler ve askeri geçit töreniyle Fransa genelinde coşkuyla kutlanır. Cannes Film Festivali ise dünyaca ünlüdür.',
      image: 'https://images.unsplash.com/photo-1547581849-b98e8e2d8fdd?w=400&auto=format&fit=crop&q=80'
    }
  },
  uk: {
    id: 'uk',
    name: "Birleşik Krallık",
    capital: "Londra",
    language: "İngilizce",
    population: "67 Milyon",
    landmark: "Big Ben, Buckingham Sarayı",
    funFact: "İngiltere çay tüketiminde Avrupa birincisidir. Futbol (soccer) oyunu burada icat edilmiştir!",
    flag: "🇬🇧",
    color: "#1D4ED8",
    mascotName: "Kraliyet Muhafızı",
    interactiveActions: ["Çay Doldur ☕", "Nöbet Değiştir 💪", "Big Ben'i Çal 🔔"],
    image: '/images/uk.jpg',
    mascot: ukMascot,
    foods: {
      title: '🍳 Yöresel Yemekler',
      desc: 'Tam İngiliz kahvaltısı (Full English Breakfast) yumurta, sosis, pastırma ve fasulyeden oluşur. Balık ve patates kızartması (Fish & Chips) ise ülkenin en ikonik sokak lezzetidir.',
      image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏗️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Londra\'daki Big Ben saat kulesi, muhteşem Buckingham Sarayı ve gizemli Stonehenge antik taş çemberi en önemli simgelerdir. İskoçya\'nın yemyeşil highland dağları da büyüleyicidir.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Edinburgh Fringe Festivali, dünyanın en büyük sanat festivalidir. Notting Hill Karnavalı ise Avrupa\'nın en büyük açık hava festivali olarak her yıl Londra sokaklarda renkli bir karnaval sunar.',
      image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&auto=format&fit=crop&q=80'
    }
  },
  usa: {
    id: 'usa',
    name: "Amerika Birleşik Devletleri",
    capital: "Washington D.C.",
    language: "İngilizce",
    population: "330 Milyon",
    landmark: "Özgürlük Heykeli, Grand Canyon",
    funFact: "ABD, dünyada en fazla Oscar kazanan filmlerin ülkesidir. New York\'ta dünyanın en çok kullanılan metrolarından biri işletilmektedir!",
    flag: "🇺🇸",
    color: "#B45309",
    mascotName: "Amerikan Kahramanı",
    interactiveActions: ["Burger Ye 🍔", "Beyzbol At ⚾", "Kovboy Şapkası Tak 🤠"],
    image: '/images/usa.jpg',
    mascot: usaMascot,
    foods: {
      title: '🍔 Yöresel Yemekler',
      desc: 'Klasik Amerikan Hamburgeri dünyaya yayılmış bir lezzettir. BBQ (Barbekü) kültürü özellikle güneyden gelir ve özel soslarla yavaş yavaş pişirilen etlerle servis edilir.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏗️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'New York Limanı\'ndaki ihtişamlı Özgürlük Heykeli ve büyük Colorado Nehri\'nin milyonlarca yılda kazdığı Grand Canyon en önemli ABD simgeleridir.',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: '4 Temmuz Bağımsızlık Günü ABD\'nin en büyük ulusal kutlamasıdır. Coachella müzik festivali, New Orleans\'daki Mardi Gras ve Met Gala da dünyaca ünlü Amerikan etkinlikleridir.',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&auto=format&fit=crop&q=80'
    }
  },
  greece: {
    id: 'greece',
    name: "Yunanistan",
    capital: "Atina",
    language: "Yunanca",
    population: "10.7 Milyon",
    landmark: "Akropolis, Santorini",
    funFact: "Batı medeniyetinin temeli sayılan demokrasi ve felsefe Yunanistan\'da doğdu. Antik Olimpiyat Oyunları da burada başladı!",
    flag: "🇬🇷",
    color: "#0284C7",
    mascotName: "Yunan Filozofu",
    interactiveActions: ["Zeytin Ye 🫒", "Bouzouki Çal 🎸", "Felsefe Yap 🫡"],
    image: '/images/greece.jpg',
    mascot: greeceMascot,
    foods: {
      title: '🧆 Yöresel Yemekler',
      desc: 'Yufkadan yapılan kat kat börek Spanakopita (ıspanaklı börek), zeytinyağı, limon ve sarımsak soslu Souvlaki Yunan mutfağının vazgeçilmezleridir. Çok tathı Baklava ve tatlı dondurma Loukoumades çok sevilir.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏗️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Atina tepesindeki ihtişamla yükselen Parthenon tapınağı ve mavi kubbeli beyaz evleriyle büyüleyici Santorini adası Yunanistan\'nın iki eşsiz simgesidir.',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Yunanistan\'da Apokries (Karnaval) büyük maskeleri ve renkli geçit törenleriyle kutlanır. Panagia Festivali ise Ortodoks Hıristiyan geleneğiyle ada köylerinde binlerce insanı bir araya getirir.',
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&auto=format&fit=crop&q=80'
    }
  },
  bosnia: {
    id: 'bosnia',
    name: "Bosna Hersek",
    capital: "Saraybosna",
    language: "Boşnakça",
    population: "3.3 Milyon",
    landmark: "Eski Köprü (Stari Most), Saraybosna Çarşısı",
    funFact: "Mostar şehrindeki tarihi Stari Most köprüsü 1993\'te yıkıldıktan sonra geleneksel yöntemlerle yeniden inşa edildi. Boşnak kahvesi kendi özel servis geleneğiyle sunulur!",
    flag: "🇧🇦",
    color: "#7C3AED",
    mascotName: "Boşnak Kültür Elçisi",
    interactiveActions: ["Kahve Hazırla ☕", "Çarşıya Çık 🛍️", "Köprüden Atla 🎉"],
    image: '/images/bosnia.jpg',
    mascot: bosniaMascot,
    foods: {
      title: '🥙 Yöresel Yemekler',
      desc: 'Cevapçiça ince kıyma köftesiyle servis edilen Boşnak\'ın vazgeçilmezi olup yanında soğan ve taze ekmekle sunulur. Burek ise kıymalı veya peynirli kıvrım böreğidir.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=80'
    },
    landmarks: {
      title: '🏗️ Tarihi Yerler ve Doğal Güzellikler',
      desc: 'Yeşil Neretva Nehri üzerindeki tarihi Stari Most köprüsü ve Saraybosna\'nın Osmanlı döneminden kalma Baščaršija çarşısı en önemli kültürel zenginliklerdir.',
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&auto=format&fit=crop&q=80'
    },
    festivals: {
      title: '🎉 Festivaller',
      desc: 'Saraybosna Film Festivali, Balkanlardır en prestijli sinema etkinliklerinden biridir. Bascarsija Nights ise yazın eski çarşıda müzik, dans ve sanat performanslarıyla düzenlenen geleneksel bir şenliktir.',
      image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&auto=format&fit=crop&q=80'
    }
  }
};

const Home = ({ user, onLogout }) => {
  // ===== STATE'LER =====
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'stories' | 'collection'
  const [selectedKey, setSelectedKey] = useState(null);
  const [mascotMood, setMascotMood] = useState('Mutlu! 😊');
  const [extraClass, setExtraClass] = useState('');
  const [approvedVisas, setApprovedVisas] = useState([]);
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(false);
  const [visaStep, setVisaStep] = useState('select');
  const [visaSelectedCountry, setVisaSelectedCountry] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showVisaAlert, setShowVisaAlert] = useState(false);

  // New interactive modal states
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userGold, setUserGold] = useState(0);

  // ===== VİZE VE ALTIN VERİLERİNİ LOCALSTORAGE'DAN YÜKLE =====
  useEffect(() => {
    if (user && user.email) {
      const storedVisas = JSON.parse(localStorage.getItem(`visas_${user.email}`) || '[]');
      setApprovedVisas(storedVisas);
      const storedGold = localStorage.getItem(`gold_${user.email}`);
      if (storedGold) setUserGold(parseInt(storedGold, 10));
    }
  }, [user]);

  // ===== ÜLKE TIKLANDIĞINDA AÇILMA / VİZE SINAVI TETİKLEME =====
  const openCountry = (key) => {
    // EĞER KULLANICININ VİZESİ YOKSA, DOĞRUDAN O ÜLKENİN SINAVINI AÇ! (Böylece vize kısmı kaybolmaz)
    if (!approvedVisas.includes(key)) {
      setVisaSelectedCountry(key);
      setCurrentQuestionIndex(0);
      setScore(0);
      setVisaStep('quiz');
      setIsVisaModalOpen(true);
      return;
    }
    setSelectedKey(key);
    setMascotMood('Mutlu! 😊');
    setExtraClass('');
  };

  // ===== ÜLKE KAPAT =====
  const closeCountry = () => {
    setSelectedKey(null);
  };

  // ===== MASKOT ETKİLEŞİM =====
  const handleActionClick = (actionName) => {
    setExtraClass('animate-celebrate');
    setMascotMood(`Harika! ${actionName} tetiklendi! 🚀`);
    setTimeout(() => {
      setExtraClass('');
    }, 1200);
  };

  // ===== VİZE BAŞLAT =====
  const handleStartQuiz = (countryKey) => {
    setVisaSelectedCountry(countryKey);
    setCurrentQuestionIndex(0);
    setScore(0);
    setVisaStep('quiz');
  };

  // ===== VİZE CEVAP =====
  const handleAnswer = (optionIndex) => {
    const questions = visaQuestions[visaSelectedCountry];
    if (optionIndex === questions[currentQuestionIndex].answer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setVisaStep('result');
    }
  };

  // ===== VİZE SONUÇ =====
  const handleFinishVisaProcess = (passed) => {
    if (passed) {
      const newVisas = [...approvedVisas, visaSelectedCountry];
      setApprovedVisas(newVisas);
      if (user && user.email) {
        localStorage.setItem(`visas_${user.email}`, JSON.stringify(newVisas));
      }
    }
    setIsVisaModalOpen(false);
    setVisaStep('select');
  };

  const selectedCountry = selectedKey ? COUNTRY_PROFILES[selectedKey] : null;

  return (
    <div className="home-container" style={{ background: '#FAF7F2', color: '#1e293b' }}>

      <header className="home-header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#ffffff',
        padding: '16px 40px',
        borderBottom: '2px solid #e2e8f0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="header-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => { setActiveTab('explore'); setSelectedKey(null); }}>
          <span className="brand-logo" style={{ fontSize: '28px' }}>🌍</span>
          <h1 className="brand-title" style={{ fontSize: '22px', margin: 0, color: '#1e293b', fontWeight: 800 }}>Dünya Keşif Rehberi</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => { setActiveTab('explore'); setSelectedKey(null); }}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: activeTab === 'explore' ? '#2563eb' : '#e2e8f0',
              background: activeTab === 'explore' ? '#2563eb' : '#ffffff',
              color: activeTab === 'explore' ? '#ffffff' : '#475569',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🧭 Keşif Rehberi
          </button>

          <button
            onClick={() => { setActiveTab('stories'); setSelectedKey(null); }}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: activeTab === 'stories' ? '#22c55e' : '#e2e8f0',
              background: activeTab === 'stories' ? '#22c55e' : '#ffffff',
              color: activeTab === 'stories' ? '#ffffff' : '#475569',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🎭 Eğlenceli Hikayeler
          </button>

          <button
            className="visa-btn"
            onClick={() => { setIsVisaModalOpen(true); setVisaStep('select'); }}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              background: '#eab308',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🛂 Vize Sınavına Gir
          </button>

          <button
            onClick={() => { setActiveTab('collection'); setSelectedKey(null); }}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: activeTab === 'collection' ? '#a855f7' : '#e2e8f0',
              background: activeTab === 'collection' ? '#a855f7' : '#ffffff',
              color: activeTab === 'collection' ? '#ffffff' : '#475569',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🎒 Koleksiyonum
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span className="user-welcome" style={{ color: '#475569', fontSize: '0.95rem', fontWeight: '600' }}>
            Altın: <strong style={{ color: '#d97706' }}>{userGold} 💰</strong> | Gezgin: <strong style={{ color: '#1e293b' }}>{user?.firstName || 'Kaşif'}</strong> 👋
          </span>
          <button
            className="logout-btn"
            onClick={() => setShowLogoutConfirm(true)}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: '1px solid #fee2e2',
              background: '#fef2f2',
              color: '#ef4444',
              fontSize: '0.9rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            🚪 Çıkış Yap
          </button>
        </div>
      </header>

      <section className="home-hero">
        <h2 style={{ color: '#1e293b', fontWeight: '800' }}>Dünyayı Keşfetmeye Hazır Mısın?</h2>
        <p style={{ color: '#475569', fontWeight: '500' }}>Aşağıdaki renkli kartlardan bir ülkeyi seç, eğlenceli bilgilerini keşfet!</p>
      </section>

      {activeTab === 'explore' ? (
        <main className="home-main">
          <div className="country-grid">
            {Object.entries(COUNTRY_PROFILES).map(([key, data]) => {
              const isApproved = approvedVisas.includes(key);
              return (
                <div
                  key={key}
                  className="country-card"
                  style={{
                    '--accent-color': data.color,
                    ...styles.card,
                    borderColor: data.color
                  }}
                  onClick={() => openCountry(key)}
                >
                  <div style={styles.imageContainer}>
                    <img src={data.image} alt={data.name} style={styles.image} />
                    {!isApproved && (
                      <div style={styles.lockOverlay}>
                        <span style={{ fontSize: '48px' }}>🔒</span>
                      </div>
                    )}
                    <div style={styles.cutoutCurve}></div>
                  </div>

                  <div style={styles.cardContent}>
                    <h2 style={{ ...styles.countryName, color: data.color }}>{data.name}</h2>

                    <div style={styles.stampWrapper}>
                      <div style={{
                        ...styles.stampCircle,
                        borderColor: isApproved ? '#16a34a' : '#ef4444',
                        color: isApproved ? '#16a34a' : '#ef4444'
                      }}>
                        <span style={styles.stampText}>PASAPORT</span>
                        <span style={styles.stampIcon}>{isApproved ? "🛂" : "❌"}</span>
                        <span style={styles.stampSubText}>{isApproved ? "VİZE OK" : "VİZE YOK"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      ) : activeTab === 'stories' ? (
        <main className="home-main" style={{ background: '#FAF7F2' }}>
          <FunStoriesScreen />
        </main>
      ) : (
        <main className="home-main" style={{ background: '#FAF7F2' }}>
          <CollectionScreen userEmail={user?.email} />
        </main>
      )}

      {showVisaAlert && (
        <div className="visa-alert-toast">
          Bu ülkeye giriş yapmak için vize almanız gerekmektedir. Sınav başlatılıyor...
        </div>
      )}

      {isVisaModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsVisaModalOpen(false)}>
          <div className="modal-content visa-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsVisaModalOpen(false)}>&times;</button>

            {visaStep === 'select' && (
              <div className="visa-step-select">
                <h2>🌍 Vize Başvurusu</h2>
                <p>Hangi ülke için vize almak istiyorsunuz?</p>
                <div className="visa-country-grid">
                  {Object.entries(COUNTRY_PROFILES).filter(([k]) => !approvedVisas.includes(k)).map(([k, d]) => (
                    <button key={k} className="visa-country-btn" onClick={() => handleStartQuiz(k)}>
                      <span style={{ fontSize: '24px' }}>{d.flag}</span>
                      <span>{d.name}</span>
                    </button>
                  ))}
                  {Object.keys(COUNTRY_PROFILES).filter(k => !approvedVisas.includes(k)).length === 0 && (
                    <p style={{ gridColumn: '1 / -1', fontWeight: 'bold', color: '#16a34a' }}>Tebrikler! Tüm ülkelerin vizesini aldınız.</p>
                  )}
                </div>
              </div>
            )}

            {visaStep === 'quiz' && visaSelectedCountry && (
              <div className="visa-step-quiz">
                <h2>{COUNTRY_PROFILES[visaSelectedCountry].flag} {COUNTRY_PROFILES[visaSelectedCountry].name} Vize Sınavı</h2>
                <div className="quiz-progress">Soru {currentQuestionIndex + 1} / 5</div>
                <h3 className="quiz-question">{visaQuestions[visaSelectedCountry][currentQuestionIndex].question}</h3>
                <div className="quiz-options">
                  {visaQuestions[visaSelectedCountry][currentQuestionIndex].options.map((opt, idx) => (
                    <button key={idx} className="quiz-option-btn" onClick={() => handleAnswer(idx)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {visaStep === 'result' && (
              <div className="visa-step-result">
                <h2>Sınav Sonucu</h2>
                <div className="score-display">Doğru Sayısı: <strong>{score} / 5</strong></div>
                {score >= 3 ? (
                  <div className="result-success">
                    <span className="result-icon">🎉</span>
                    <h3>Tebrikler!</h3>
                    <p>{COUNTRY_PROFILES[visaSelectedCountry].name} vizesi onaylandı!</p>
                    <button className="visa-action-btn success" onClick={() => handleFinishVisaProcess(true)}>Harika!</button>
                  </div>
                ) : (
                  <div className="result-fail">
                    <span className="result-icon">❌</span>
                    <h3>Maalesef...</h3>
                    <p>Vize başvurunuz reddedildi. En az 3 doğru yapmalısınız.</p>
                    <button className="visa-action-btn" onClick={() => handleFinishVisaProcess(false)}>Tekrar Dene</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {selectedCountry && (
        <div className="modal-backdrop" onClick={closeCountry}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeCountry}>&times;</button>

            <div className="modal-body-split">
              <div style={styles.infoCardsColumn}>
                <div style={{ ...styles.modalCountryHeader, borderBottom: `3px solid ${selectedCountry.color}` }}>
                  <span style={styles.detailsFlag}>{selectedCountry.flag}</span>
                  <div>
                    <h1 style={{ ...styles.detailsTitle, color: selectedCountry.color }}>{selectedCountry.name}</h1>
                    <p style={styles.detailsCapital}>Başkent: <strong>{selectedCountry.capital}</strong></p>
                  </div>
                </div>

                <div style={styles.generalInfoCard} className="glass">
                  <table className="info-table">
                    <tbody>
                      <tr><td><strong>Resmi Dil:</strong></td><td>{selectedCountry.language}</td></tr>
                      <tr><td><strong>Nüfus:</strong></td><td>{selectedCountry.population}</td></tr>
                      <tr><td><strong>Gezilecek Yerler:</strong></td><td>{selectedCountry.landmark}</td></tr>
                    </tbody>
                  </table>
                  <div className="fun-fact-section" style={{ marginTop: '16px' }}>
                    <h4>💡 İlginç Bilgi:</h4>
                    <p>{selectedCountry.funFact}</p>
                  </div>
                </div>

                <div style={styles.topicCard} className="glass">
                  <div style={{ ...styles.topicImageWrapper, borderColor: selectedCountry.color }}>
                    <img src={selectedCountry.foods.image} alt={selectedCountry.foods.title} style={styles.topicImage} />
                  </div>
                  <div style={styles.topicTextWrapper}>
                    <h3 style={{ ...styles.topicTitle, color: selectedCountry.color }}>{selectedCountry.foods.title}</h3>
                    <p style={styles.topicDesc}>{selectedCountry.foods.desc}</p>
                  </div>
                </div>

                <div style={styles.topicCard} className="glass">
                  <div style={{ ...styles.topicImageWrapper, borderColor: selectedCountry.color }}>
                    <img src={selectedCountry.landmarks.image} alt={selectedCountry.landmarks.title} style={styles.topicImage} />
                  </div>
                  <div style={styles.topicTextWrapper}>
                    <h3 style={{ ...styles.topicTitle, color: selectedCountry.color }}>{selectedCountry.landmarks.title}</h3>
                    <p style={styles.topicDesc}>{selectedCountry.landmarks.desc}</p>
                  </div>
                </div>

                <div style={styles.topicCard} className="glass">
                  <div style={{ ...styles.topicImageWrapper, borderColor: selectedCountry.color }}>
                    <img src={selectedCountry.festivals.image} alt={selectedCountry.festivals.title} style={styles.topicImage} />
                  </div>
                  <div style={styles.topicTextWrapper}>
                    <h3 style={{ ...styles.topicTitle, color: selectedCountry.color }}>{selectedCountry.festivals.title}</h3>
                    <p style={styles.topicDesc}>{selectedCountry.festivals.desc}</p>
                  </div>
                </div>
              </div>

              <div style={{ ...styles.stickyCharacterCard, borderColor: selectedCountry.color }} className="glass">
                <h4 style={styles.charTitle}>{selectedCountry.name} Kültür Kartı</h4>
                <div style={{ ...styles.mascotImageWrapper, borderColor: selectedCountry.color }}>
                  <img src={selectedCountry.mascot || selectedCountry.image} alt={selectedCountry.name} style={styles.mascotImage} />
                </div>
                <div className="mascot-mood-badge" style={{ marginBottom: '16px' }}>
                  Durum: <strong>{mascotMood}</strong>
                </div>
                <div className="interactive-widget" style={{ width: '100%' }}>
                  <p className="widget-title" style={{ color: '#94a3b8' }}>Etkileşime Geç!</p>
                  <div className="widget-buttons">
                    <button className="widget-action-btn" onClick={() => setShowSpinWheel(true)} style={{ background: '#d97706' }}>🎡 Çark Çevir</button>
                    <button className="widget-action-btn" onClick={() => setShowMarket(true)} style={{ background: '#2563eb' }}>🛒 Pazar</button>
                    <button className="widget-action-btn" onClick={() => setShowPhoto(true)} style={{ background: '#dc2626' }}>📸 Fotoğraf</button>
                    <button className="widget-action-btn" onClick={() => setShowMiniGames(true)} style={{ background: '#16a34a' }}>🎮 Mini Oyunlar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSpinWheel && selectedKey && COUNTRY_ITEMS[selectedKey] && (
        <SpinWheelModal
          countryKey={selectedKey}
          countryName={COUNTRY_PROFILES[selectedKey].name}
          countryColor={COUNTRY_PROFILES[selectedKey].color}
          prizes={COUNTRY_ITEMS[selectedKey].wheelPrizes}
          userEmail={user?.email}
          updateGold={updateGold}
          onClose={() => setShowSpinWheel(false)}
        />
      )}

      {showMarket && selectedKey && COUNTRY_ITEMS[selectedKey] && (
        <MarketModal
          countryKey={selectedKey}
          countryName={COUNTRY_PROFILES[selectedKey].name}
          countryColor={COUNTRY_PROFILES[selectedKey].color}
          marketItems={COUNTRY_ITEMS[selectedKey].marketItems}
          userEmail={user?.email}
          userGold={userGold}
          updateGold={updateGold}
          onClose={() => setShowMarket(false)}
        />
      )}

      {showMiniGames && (
        <MiniGamesModal
          onClose={() => setShowMiniGames(false)}
          userGold={userGold}
          updateGold={updateGold}
        />
      )}

      {showPhoto && selectedKey && COUNTRY_ITEMS[selectedKey] && (
        <PhotoModal
          countryKey={selectedKey}
          countryName={COUNTRY_PROFILES[selectedKey].name}
          countryColor={COUNTRY_PROFILES[selectedKey].color}
          countryFlag={COUNTRY_PROFILES[selectedKey].flag}
          mascotName={COUNTRY_PROFILES[selectedKey].mascotName}
          photoBg={COUNTRY_ITEMS[selectedKey].photoBg}
          photoScene={COUNTRY_ITEMS[selectedKey].photoScene}
          userEmail={user?.email}
          onClose={() => setShowPhoto(false)}
        />
      )}

      {showLogoutConfirm && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ maxWidth: '400px', textAlign: 'center', color: '#f8fafc' }}>
            <h2>🚪 Çıkış Yap</h2>
            <p style={{ marginTop: '10px' }}>Çıkış yapmak istediğinize emin misiniz?</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
              <button
                onClick={onLogout}
                style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#ef4444', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
              >Evet, Çıkış Yap</button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#1e293b', cursor: 'pointer', fontWeight: 'bold' }}
              >İptal</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const styles = {
  card: {
    borderRadius: '45px',
    borderWidth: '4px',
    borderStyle: 'solid',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '425px',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    background: '#ffffff',
    padding: 0,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)'
  },
  imageContainer: { width: '100%', height: '240px', position: 'relative', overflow: 'hidden' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  lockOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15,23,42,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 },
  cutoutCurve: { position: 'absolute', bottom: '-1px', left: '0', right: '0', height: '30px', backgroundColor: '#ffffff', borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' },

  cardContent: { padding: '16px 12px 24px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%', boxSizing: 'border-box' },
  countryName: { fontSize: '1.5rem', fontWeight: '800', margin: '5px 0 10px 0', textAlign: 'center', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' },
  stampWrapper: { position: 'relative', width: '75px', height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto' },
  stampCircle: { width: '100%', height: '100%', borderRadius: '50%', border: '3px dashed', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4px', position: 'relative', boxSizing: 'border-box' },
  stampText: { fontSize: '0.62rem', fontWeight: '800' },
  stampIcon: { fontSize: '1.3rem', margin: '2px 0' },
  stampSubText: { fontSize: '0.55rem', fontWeight: '800' },

  // Detay Sayfası Stilleri
  detailsContainer: { width: '100%', minHeight: '85vh', display: 'flex', flexDirection: 'column', padding: '40px 20px', boxSizing: 'border-box' },
  detailsContent: { maxWidth: '1100px', margin: '0 auto', width: '100%' },
  backButton: { padding: '10px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '2px solid', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', marginBottom: '30px', transition: 'all 0.2s ease', color: '#fff' },

  detailsLayoutGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' },
  infoCardsColumn: { display: 'flex', flexDirection: 'column', gap: '24px' },

  modalCountryHeader: { display: 'flex', gap: '20px', alignItems: 'center', paddingBottom: '20px', marginBottom: '10px' },
  detailsFlag: { fontSize: '3.6rem' },
  detailsTitle: { fontSize: '2.5rem', fontWeight: '900', margin: 0, color: '#fff' },
  detailsCapital: { fontSize: '1.25rem', margin: '6px 0 0 0', color: '#94a3b8' },

  generalInfoCard: { borderRadius: '24px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)', background: '#1e293b' },

  topicCard: { borderRadius: '24px', display: 'flex', padding: '20px', gap: '20px', border: '1px solid rgba(255,255,255,0.08)', alignItems: 'center', background: '#1e293b' },
  topicImageWrapper: { width: '220px', minWidth: '220px', height: '145px', overflow: 'hidden', borderRadius: '16px', border: '3px solid', padding: '4px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  topicImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' },
  topicTextWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 },
  topicTitle: { fontSize: '1.35rem', fontWeight: '800', margin: '0 0 10px 0' },
  topicDesc: { fontSize: '1.05rem', lineHeight: '1.55', margin: 0, color: '#e2e8f0' },

  stickyCharacterCard: { position: 'sticky', top: '100px', borderRadius: '24px', border: '3.5px solid', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#1e293b' },
  charTitle: { fontSize: '1.25rem', color: '#fff', margin: '0 0 16px 0', fontWeight: '800' },
  mascotImageWrapper: { width: '220px', height: '170px', borderRadius: '16px', border: '3.5px solid', padding: '4px', overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' },
  mascotImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' },
  characterBadge: { padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '800' }
};

export default Home;
import React, { useState } from 'react';

import russiaImg from '../assets/mascots/russia_chibi.png';
import turkeyImg from '../assets/mascots/turkey_chibi.png';
import colombiaImg from '../assets/mascots/colombia_chibi.png';
import chinaImg from '../assets/mascots/china_chibi.png';
import indiaImg from '../assets/mascots/india_chibi.png';
import egyptImg from '../assets/mascots/egypt_chibi.png';
import norwayImg from '../assets/mascots/norway_chibi.png';
import italyImg from '../assets/mascots/italy_chibi.png';
import spainImg from '../assets/mascots/spain_chibi.png';
import mexicoImg from '../assets/mascots/mexico_chibi.png';
import brazilImg from '../assets/mascots/brazil_chibi.png';
import germanyImg from '../assets/mascots/germany_chibi.png';
import japanImg from '../assets/mascots/japan_chibi.png';
import franceImg from '../assets/mascots/france_chibi.png';
import ukImg from '../assets/mascots/uk_chibi.png';
import usaImg from '../assets/mascots/usa_chibi.png';
import greeceImg from '../assets/mascots/greece_chibi.png';
import bosniaImg from '../assets/mascots/bosnia_chibi.png';

const MASCOT_IMAGES = {
  russia: russiaImg,
  turkey: turkeyImg,
  colombia: colombiaImg,
  china: chinaImg,
  india: indiaImg,
  egypt: egyptImg,
  norway: norwayImg,
  italy: italyImg,
  spain: spainImg,
  mexico: mexicoImg,
  brazil: brazilImg,
  germany: germanyImg,
  japan: japanImg,
  france: franceImg,
  uk: ukImg,
  usa: usaImg,
  greece: greeceImg,
  bosnia: bosniaImg
};

const COUNTRY_PROFILES_MIN = {
  russia: { name: "Rusya", flag: "🇷🇺", mascotName: "Misha (Rus Ayısı)" },
  turkey: { name: "Türkiye", flag: "🇹🇷", mascotName: "Türk Maslahat" },
  colombia: { name: "Kolombiya", flag: "🇨🇴", mascotName: "Kolombiya Kahvecisi" },
  china: { name: "Çin", flag: "🇨🇳", mascotName: "Çin Pandası" },
  india: { name: "Hindistan", flag: "🇮🇳", mascotName: "Hindistan Fili" },
  egypt: { name: "Mısır", flag: "🇪🇬", mascotName: "Mısır Firavunu" },
  norway: { name: "Norveç", flag: "🇳🇴", mascotName: "Norveç Vikinki" },
  italy: { name: "İtalya", flag: "🇮🇹", mascotName: "İtalyan Şef" },
  spain: { name: "İspanya", flag: "🇪🇸", mascotName: "İspanyol Dansçı" },
  mexico: { name: "Meksika", flag: "🇲🇽", mascotName: "Meksikalı Amigo" },
  brazil: { name: "Brezilya", flag: "🇧🇷", mascotName: "Brezilyalı Sambacı" },
  germany: { name: "Almanya", flag: "🇩🇪", mascotName: "Alman Hans" },
  japan: { name: "Japonya", flag: "🇯🇵", mascotName: "Samuray Kedisi" },
  france: { name: "Fransa", flag: "🇫🇷", mascotName: "Ressam Kurbağa" },
  uk: { name: "İngiltere", flag: "🇬🇧", mascotName: "Kraliyet Askeri" },
  usa: { name: "Amerika", flag: "🇺🇸", mascotName: "Kartal Sam" },
  greece: { name: "Yunanistan", flag: "🇬🇷", mascotName: "Zeus Heykeli" },
  bosnia: { name: "Bosna Hersek", flag: "🇧🇦", mascotName: "Boşnak Gezgini" }
};

const FUN_STORIES = {
  russia: {
    mascotName: "Misha (Rus Ayısı)",
    story: "Misha (Rus Ayısı) bir gün o kadar çok bal yedi ki, Sibirya ormanlarında kış uykusuna yatmak yerine samovarda çay demleyip kutup ayılarıyla kardan adam yapmaya karar verdi. Kutup ayıları 'Misha, bu çay çok sıcak!' deyince, Sibirya soğuğunda çay saniyeler içinde dondurma oldu ve Rusya'nın ilk 'çay aromalı dondurması' icat edildi!",
    history: "Rusya, 9. yüzyılda kurulan Kiev Knezliği ile tarih sahnesine çıkmış, Moğol istilasından sonra Moskova Knezliği etrafında toplanarak yükselmiştir. Korkunç İvan ile Çarlık ilan edilmiş ve yüzyıllar boyu Sibirya'ya doğru genişleyerek bugünkü devasa coğrafyasına ulaşmıştır."
  },
  turkey: {
    mascotName: "Türk Maslahat",
    story: "Türk Maslahat, çay tiryakiliğini abartıp Kapadokya'da sıcak hava balonunun içine dev bir çaydanlık yerleştirdi. Balondan yükselen buharlar tüm bölgeyi earl grey kokuttu. Aşağıdaki turistler simitlerini havaya doğru fırlatıp çay buharıyla ıslatarak yemeye çalıştılar!",
    history: "Anadolu'nun kapıları 1071 Malazgirt Zaferi ile Türklere açılmıştır. Osmanlı İmparatorluğu'nun cihan şümul yükselişinin ardından, I. Dünya Savaşı sonrası Mustafa Kemal Atatürk önderliğinde başlatılan Kurtuluş Savaşı ile 1923 yılında Türkiye Cumhuriyeti kurulmuştur."
  },
  colombia: {
    mascotName: "Kolombiya Kahvecisi",
    story: "Kolombiya Kahvecisi papağanına salsa ritimleri öğretmeye çalışırken elindeki kahve çekirdeklerini yanlışlıkla dev bir zümrüt kazanına döktü. Papağan salsa yaparak çekirdekleri ezdi ve ortaya yeşil parlayan, içen herkesin salsa yapmaya başladığı efsanevi 'Zümrüt Kahvesi' çıktı!",
    history: "Kolombiya topraklarında İspanyol sömürgesinden önce gelişmiş yerli Chibcha medeniyeti bulunuyordu. 16. yüzyılda İspanyollar tarafından sömürgeleştirilen ülke, 1819 yılında efsanevi lider Simon Bolivar önderliğinde Boyaca Savaşı ile bağımsızlığını kazanmıştır."
  },
  china: {
    mascotName: "Çin Pandası",
    story: "Çin Pandası bambu yemekten sıkılıp kung-fu hareketleriyle yelpaze sallayarak serinlemeye çalışırken, rüzgarın şiddetinden Çin Seddi'nin üzerinden uçup Yasak Şehir'in bahçesine iniş yaptı. İmparator onu görünce 'Yeni kung-fu ustamız bu!' diyerek saraydaki tüm bambuları ona rezerve etti.",
    history: "Çin, binlerce yıllık hanedanlıklar tarihine sahiptir. Çin Seddi, kuzeydeki göçebe kavimlerin akınlarını durdurmak için yüzyıllar boyunca inşa edilmiştir. 1912'de son hanedanlık yıkılmış ve 1949'da modern Çin Halk Cumhuriyeti kurulmuştur."
  },
  india: {
    mascotName: "Hindistan Fili",
    story: "Hindistan Fili, hortumuyla nehir yerine yanlışlıkla köri sosu çekip havaya püskürttü. Yağan köri yağmuru yüzünden tüm Bollywood oyuncuları sarı renge boyandı. Yönetmen durumu o kadar beğendi ki, filmi 'Altın Köri Altında Aşk' adıyla müzikale çevirdi ve film gişe rekorları kırdı!",
    history: "Hindistan, antik Harappa ve İndus vadisi medeniyetlerine ev sahipliği yapmıştır. Asırlar boyu Babür İmparatorluğu gibi zengin devletlerin yönetiminde kaldıktan sonra İngiliz sömürgesi olmuş, 1947'de Mahatma Gandhi'nin pasif direniş hareketleriyle bağımsızlığını kazanmıştır."
  },
  egypt: {
    mascotName: "Mısır Firavunu",
    story: "Mısır Firavunu, piramidin gizli odasında hiyeroglif yazarken yanlışlıkla 'kumdan tablet' yerine 'altın çikolata tableti' kullandı. Tableti güneşte unutan firavunun yazıları eridi ve Mısır'ın ilk 'akışkan çikolatalı suflesi' piramit şeklini aldı!",
    history: "Antik Mısır, Nil Nehri'nin can verdiği topraklarda piramitleri inşa eden devasa bir medeniyetti. Büyük İskender, Romalılar ve son olarak Müslüman fatihler tarafından yönetilen ülke, yüzyıllar süren Osmanlı ve İngiliz etkisinden sonra modern cumhuriyetine kavuşmuştur."
  },
  norway: {
    mascotName: "Norveç Vikinki",
    story: "Norveç Vikinki, kuzey ışıklarının altında balta savurarak somon avlamaya çalışırken, baltasının sapı buz tuttu ve eline yapıştı. Sinirlenip somonu çiğ yemeye karar verdi ve 'Japonlara bunu sushi diye satalım' fikriyle somon suşisini icat etti!",
    history: "Norveç, Viking çağının (8-11. yy) merkezlerinden biriydi. Yüzyıllarca Danimarka ve İsveç ile birlik halinde (Kalmar Birliği) yönetildikten sonra, 1905 yılında referandumla barışçıl bir şekilde tamamen bağımsız bir krallık haline gelmiştir."
  },
  italy: {
    mascotName: "İtalyan Şef",
    story: "İtalyan Şef spagetti pişirirken makarnaları o kadar havaya fırlattı ki, makarnalar Pisa Kulesi'ne dolandı ve kuleyi düzeltmek yerine daha da eğri görünmesine sebep oldu. Şef panik yapıp 'Bu yeni bir sos mimarisi!' diyerek turistlere eğri tabakta spagetti servis etmeye başladı!",
    history: "İtalya, antik Roma İmparatorluğu'nun beşiğidir. Orta Çağ ve Rönesans döneminde Floransa, Venedik gibi bağımsız şehir devletlerine bölünen İtalya, 1861 yılında Garibaldi liderliğindeki birleşme hareketiyle (Risorgimento) tek bir krallık olmuştur."
  },
  spain: {
    mascotName: "İspanyol Dansçı",
    story: "İspanyol Dansçı flamenko yaparken kastanyetleri o kadar hızlı çaldı ki, çıkan sesle zeytin ağaçlarındaki tüm zeytinler kendiliğinden ezilerek sızma zeytinyağına dönüştü. Dansçı 'Yağmur gibi zeytinyağı yağıyor!' diyerek zeytinyağı havuzunda dansına devam etti!",
    history: "İspanya, Endülüs Emevileri'nin hüküm sürdüğü ve ardından Katolik Kralların (Isabella ve Ferdinand) ülkeyi birleştirdiği Reconquista süreciyle şekillenmiştir. 15. yüzyılda coğrafi keşiflerle küresel bir imparatorluk haline gelmiştir."
  },
  mexico: {
    mascotName: "Meksikalı Amigo",
    story: "Meksikalı Amigo sombrero şapkasının içine sakladığı tacoları marakas çalarken düşürdü. Tacolar havadayken acı biber sosuyla buluşup o kadar lezzetli oldu ki, amigo sevinçten çölün ortasında kaktüslerle kucaklaşıp 'Ayyyy caramba!' diye bağırdı.",
    history: "Meksika, Maya ve Aztek gibi gelişmiş antik imparatorlukların vatanıdır. 1521'de Hernan Cortes önderliğinde İspanyollar tarafından fethedilmiş, 300 yıllık sömürge döneminin ardından 1821'de bağımsızlığını ilan etmiştir."
  },
  brazil: {
    mascotName: "Brezilyalı Sambacı",
    story: "Brezilyalı Sambacı Amazon ormanlarında papağanlarla futbol maçı yaparken topu yanlışlıkla dev bir kahve çuvalına attı. Çuval patlayınca tüm orman kahve koktuktan sonra, jaguar kahve kokusundan o kadar enerjik oldu ki sambacıyla birlikte samba yapmaya başladı!",
    history: "Brezilya, 1500 yılında Portekizli kaşif Pedro Alvares Cabral tarafından keşfedilmiştir. Uzun yıllar Portekiz sömürgesi olarak kaldıktan sonra, 1822'de Portekiz Kralı'nın oğlu Don Pedro liderliğinde kansız bir şekilde bağımsızlığını kazanmıştır."
  },
  germany: {
    mascotName: "Alman Hans",
    story: "Alman Hans otoyolda hız sınırı olmayan yerde bisikletiyle giderken yanındaki pretzeli elinden düşürdü. Pretzel uçarak bir bira bardağının içine düştü ve pretzel aromalı bira kazara icat edildi. Hans bisikletini durdurup 'İşte bu tam bir Alman mühendisliği!' dedi.",
    history: "Almanya, Kutsal Roma Cermen İmparatorluğu ve ardından Prusya liderliğindeki prensliklerin birleşmesiyle 1871'de Otto von Bismarck önderliğinde Alman İmparatorluğu olarak kurulmuştur. İki dünya savaşından sonra bölünmüş, 1990'da Berlin Duvarı'nın yıkılmasıyla birleşmiştir."
  }
  ,
  japan: {
    mascotName: "Samuray Kedisi",
    story: "Samuray Kedisi kılıcıyla havada uçuşan yaprakları keserek antrenman yaparken, hızını alamayıp mutfaktaki sushi pirinçlerini ve yosunları havada doğradı. Parçalar yere inmeden havada kusursuz bir origami kulesine dönüştü. İmparator bunu görünce onu 'Kraliyet Sushi Sanatçısı' ilan etti!",
    history: "Japonya, binlerce yıllık imparatorluk geçmişine sahip izole bir ada ülkesiydi. 19. yüzyıldaki Meiji Restorasyonu ile dış dünyaya açılmış, teknoloji ve sanayide devasa atılımlar yaparak bugün dünyanın en büyük ekonomilerinden biri haline gelmiştir."
  },
  france: {
    mascotName: "Ressam Kurbağa",
    story: "Ressam Kurbağa sabah kahvaltısında kruvasanını yanlışlıkla paletindeki mavi boyaya batırdı ve yemeye çalışırken dudakları masmavi oldu! Panikleyip Eyfel Kulesi'ne tırmanmaya başladı. Parisliler bunun yeni bir moda olduğunu sanıp herkes mavi rujla gezmeye başladı.",
    history: "Fransa, antik Roma'nın Galya eyaleti olarak başladığı tarihini Orta Çağ'da güçlü bir krallık olarak sürdürmüştür. 1789 Fransız İhtilali ile tüm dünyaya eşitlik ve özgürlük fikirlerini yaymış, modern demokrasinin beşiği olmuştur."
  },
  uk: {
    mascotName: "Kraliyet Askeri",
    story: "Kraliyet Askeri nöbet tutarken yağan yağmurda çayını korumak için şemsiyesini ters çevirdi. Şemsiyenin içi dev bir çay fincanına dönüştü! Yoldan geçen kraliçe bu dev çaydanlık şemsiyesini o kadar beğendi ki, saraydaki herkese şemsiyeden çay içmeyi emretti.",
    history: "Birleşik Krallık (İngiltere), Magna Carta (1215) ile demokrasi adımlarını atan, Sanayi Devrimi'ni başlatan ülkedir. 'Üzerinde güneş batmayan imparatorluk' olarak bilinen tarihiyle modern dünyanın şekillenmesinde büyük rol oynamıştır."
  },
  usa: {
    mascotName: "Kartal Sam",
    story: "Kartal Sam gökyüzünde süzülürken aşağıda beyzbol oynayan çocukları gördü ve maça katılmak istedi. Top yerine yanlışlıkla dev bir hamburgeri pençeledi ve potaya doğru fırlattı! Hamburger tam isabetle çemberden geçti ve 'Fast-Food Basketbolu' sporu böylece doğmuş oldu.",
    history: "Amerika Birleşik Devletleri, 1776 yılında İngiltere'den bağımsızlığını ilan eden 13 koloninin birleşmesiyle kuruldu. Kısa sürede batıya doğru genişleyerek ve teknolojik ilerlemeler kaydederek bugünkü küresel süper güç konumuna geldi."
  },
  greece: {
    mascotName: "Zeus Heykeli",
    story: "Zeus Heykeli canlanıp olimpiyat meşalesiyle sirtaki yapmaya karar verdi. Dans ederken meşale zeytin ağacının dallarını tutuşturdu ve zeytinler sıcaktan kavrulup doğrudan zeytinyağı yağmuru olarak aşağı aktı! Yunan salatasının sırrı da böylece çözülmüş oldu.",
    history: "Yunanistan, demokrasinin, felsefenin (Sokrates, Platon) ve Olimpiyat Oyunlarının doğduğu antik medeniyettir. Yüzyıllarca Roma ve Osmanlı egemenliğinde kaldıktan sonra 1821'de bağımsızlık ateşini yakarak bugünkü modern devletini kurmuştur."
  },
  bosnia: {
    mascotName: "Boşnak Gezgini",
    story: "Boşnak Gezgini elinde dumanı tüten bir Boşnak böreğiyle Mostar Köprüsü'nde yürürken böreği nehre düşürdü! Böreği kurtarmak için efsanevi bir atlayış yaptı ve suya dalıp böreği tek lokmada yedi. O günden sonra Mostar'dan atlama yarışmaları börek kapmaca yarışına döndü!",
    history: "Bosna Hersek, Balkanların kalbinde Doğu ile Batı'nın buluşma noktasıdır. Yüzyıllarca Osmanlı yönetiminde kalarak eşsiz bir hoşgörü kültürü geliştirmiş, yakın tarihindeki zorluklara rağmen barışın ve küllerinden doğuşun simgesi olmuştur."
  }
};

export default function FunStoriesScreen() {
  const [selectedStoryCountry, setSelectedStoryCountry] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="stories-container">
      {!selectedStoryCountry ? (
        <div className="message-box-backdrop">
          <div className="message-box-content">
            <h2>🎭 Maskotlar ve Eğlenceli Hikayeler</h2>
            <p>Aşağıdaki sevimli ülke maskotlarından birine tıklayarak onun zenginlikleriyle dolu yaratıcı, komik hikayesini keşfedin!</p>
            <div className="mascot-selection-grid">
              {Object.entries(COUNTRY_PROFILES_MIN).map(([key, data]) => (
                <button key={key} className="mascot-selection-card" onClick={() => { setSelectedStoryCountry(key); setShowHistory(false); }}>
                  <div className="mascot-selection-avatar">
                    <img src={MASCOT_IMAGES[key]} alt={data.name} />
                  </div>
                  <span className="mascot-selection-name">{data.mascotName}</span>
                  <span className="mascot-selection-flag">{data.flag} {data.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="story-viewer-layout">
          <div className="story-viewer-header">
            <button className="back-to-mascots-btn" onClick={() => setSelectedStoryCountry(null)}>⬅️ Diğer Maskotlar</button>
            <h2>{COUNTRY_PROFILES_MIN[selectedStoryCountry].flag} {COUNTRY_PROFILES_MIN[selectedStoryCountry].name} - {COUNTRY_PROFILES_MIN[selectedStoryCountry].mascotName}</h2>
          </div>

          <div className="story-viewer-body">
            {/* Left Side: Mascot */}
            <div className="story-viewer-left">
              <div className="story-mascot-wrapper">
                <img src={MASCOT_IMAGES[selectedStoryCountry]} alt={COUNTRY_PROFILES_MIN[selectedStoryCountry].name} className="animate-float" />
                <div className="story-mascot-shadow"></div>
              </div>
            </div>

            {/* Right Side: Envelope Note */}
            <div className="story-viewer-right">
              <div className="envelope-note">
                <div className="envelope-note-paper">
                  <div className="letter-header">
                    <span className="letter-stamp">💌</span>
                    <h3>Sevgili Gezgin,</h3>
                  </div>
                  <p className="letter-story-text">
                    {FUN_STORIES[selectedStoryCountry].story}
                  </p>
                  <div className="letter-footer">
                    <span>Sevgilerle, {FUN_STORIES[selectedStoryCountry].mascotName} 🐾</span>
                  </div>
                </div>

                <button className="history-reveal-btn" onClick={() => setShowHistory(!showHistory)}>
                  {showHistory ? "📖 Tarihi Gizle" : "❓ Nasıl Kazanıldı?"}
                </button>

                {showHistory && (
                  <div className="history-card-box animate-float-delayed">
                    <h4>📜 Nasıl Kazanıldı?</h4>
                    <p>{FUN_STORIES[selectedStoryCountry].history}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .stories-container {
          flex: 1;
          padding: 20px 40px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .message-box-backdrop {
          width: 100%;
          max-width: 1000px;
          margin: 20px auto;
        }

        .message-box-content {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          border: 4px solid #bbf7d0;
        }

        .message-box-content h2 {
          color: #166534;
          margin-bottom: 8px;
        }

        .message-box-content p {
          color: #475569;
          margin-bottom: 24px;
        }

        .mascot-selection-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .mascot-selection-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .mascot-selection-card {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.2s ease;
        }

        .mascot-selection-card:hover {
          border-color: #22c55e;
          background: #f0fdf4;
          transform: scale(1.05);
        }

        .mascot-selection-avatar {
          width: 80px;
          height: 80px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mascot-selection-avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .mascot-selection-name {
          font-weight: bold;
          color: #1e293b;
          font-size: 14px;
          text-align: center;
        }

        .mascot-selection-flag {
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
        }

        .story-viewer-layout {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-viewer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px dashed #bbf7d0;
          padding-bottom: 16px;
        }

        .back-to-mascots-btn {
          background: #ffffff;
          border: 2px solid #cbd5e1;
          color: #475569;
          padding: 8px 16px;
          border-radius: 16px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .back-to-mascots-btn:hover {
          background: #f1f5f9;
          color: #1e293b;
          border-color: #94a3b8;
        }

        .story-viewer-header h2 {
          margin: 0;
          color: #1e293b;
        }

        .story-viewer-body {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
          .story-viewer-body {
            flex-direction: column;
            align-items: center;
          }
        }

        .story-viewer-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .story-mascot-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .story-mascot-wrapper img {
          width: 240px;
          height: 240px;
          object-fit: contain;
          z-index: 2;
        }

        .story-mascot-shadow {
          width: 160px;
          height: 20px;
          background: rgba(0,0,0,0.1);
          border-radius: 50%;
          margin-top: 10px;
          filter: blur(4px);
        }

        .story-viewer-right {
          flex: 1.5;
          width: 100%;
        }

        .envelope-note {
          background: #fefcf6;
          border: 1px solid #e2d9c2;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(68, 61, 46, 0.08);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .envelope-note-paper {
          background: #fffdf9;
          border-radius: 16px;
          padding: 24px;
          border: 1px dashed #e4d8bb;
          background-image: radial-gradient(#e5e0d2 1px, transparent 1px);
          background-size: 16px 16px;
        }

        .letter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1eae0;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .letter-header h3 {
          margin: 0;
          color: #855d29;
        }

        .letter-stamp {
          font-size: 28px;
        }

        .letter-story-text {
          font-size: 17px;
          line-height: 1.7;
          color: #4a3e2e;
          margin: 0 0 16px 0;
        }

        .letter-footer {
          text-align: right;
          font-style: italic;
          color: #855d29;
          font-weight: 600;
        }

        .history-reveal-btn {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: #d97706;
          border: none;
          padding: 12px 24px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: center;
          box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
        }

        .history-reveal-btn:hover {
          background: #b45309;
          transform: translateY(-1px);
        }

        .history-card-box {
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          border-radius: 16px;
          padding: 20px;
          margin-top: 10px;
        }

        .history-card-box h4 {
          margin: 0 0 8px 0;
          color: #1e3a8a;
          font-size: 16px;
        }

        .history-card-box p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #334155;
        }
      `}</style>
    </div>
  );
}

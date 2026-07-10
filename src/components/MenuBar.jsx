import React from 'react';

export default function MenuBar({ currentTab, setCurrentTab, user, onLogout, onOpenVisaModal }) {
  return (
    <>
      <header className="home-header">
        <div className="header-brand">
          <span className="brand-logo">🌍</span>
          <h1 className="brand-title">Dünya Rehberi</h1>
        </div>
        <div className="header-user-info">
          <button 
            className={`nav-tab-btn ${currentTab === 'explore' ? 'active' : ''}`} 
            onClick={() => setCurrentTab('explore')} 
            style={{ marginRight: '8px' }}
          >
            🧭 Keşfet
          </button>
          <button 
            className={`nav-tab-btn ${currentTab === 'stories' ? 'active' : ''}`} 
            onClick={() => setCurrentTab('stories')} 
            style={{ marginRight: '16px' }}
          >
            🎭 Eğlenceli Hikayeler
          </button>
          <button className="visa-btn" onClick={onOpenVisaModal}>
            办证 🛂 Vize Al ve Gez
          </button>
          <span className="user-welcome">
            Hoş geldin, <strong>{user?.firstName || 'Kaşif'} {user?.lastName || ''}</strong>! 👋
          </span>
          <button className="logout-btn" onClick={onLogout}>
            Güvenli Çıkış
          </button>
        </div>
      </header>

      <style>{`
        .home-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 16px 40px;
          border-bottom: 2px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-logo {
          font-size: 28px;
        }

        .brand-title {
          font-size: 24px;
          margin: 0;
          color: #1e293b;
          font-weight: 700;
        }

        .header-user-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .user-welcome {
          font-size: 15px;
          color: #475569;
        }

        .logout-btn {
          font-family: var(--primary-font);
          font-size: 14px;
          font-weight: 600;
          color: #ef4444;
          background: #fef2f2;
          border: 1px solid #fee2e2;
          padding: 8px 16px;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .logout-btn:hover {
          background: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
        }

        .visa-btn {
          font-family: var(--primary-font);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: #2563eb;
          padding: 8px 16px;
          border: none;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
        }
        .visa-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .nav-tab-btn {
          font-family: var(--primary-font);
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          padding: 8px 16px;
          border: none;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-tab-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }

        .nav-tab-btn.active {
          background: #22c55e;
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .home-header {
            padding: 16px 20px;
            flex-direction: column;
            gap: 12px;
          }
          .header-user-info {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}

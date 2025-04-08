const Header = () => (
    <header className="header">
      <div className="left-section">
        <input type="text" placeholder="Search..." className="search-box" />
        <span className="flag">🇮🇳</span>
      </div>
      <div className="center-section">
        <h1 className="logo">PlayShifu</h1>
      </div>
      <div className="right-section">
        <span className="icon">🛒</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );

export default Header
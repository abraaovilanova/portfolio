import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-bar">
      <a href="#" className="nav-bar-link">
        <h1 className="nav-bar-title">Abraão Vila Nova</h1>
      </a>
      <nav className="nav-bar-navegation">
        <ul className="nav-bar-list">
          <li><a className="nav-bar-link" href="#about">About</a></li>
          <li><a className="nav-bar-link" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

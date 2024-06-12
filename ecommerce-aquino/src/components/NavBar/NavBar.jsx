
import CartWidget from './CartWidget/CartWidget';
import './navbar.css';
import logo from "../../assets/logo.png"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-title">PORSCHE</div>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#models">Modelos</a></li>
        <li className="navbar-item"><a href="#advice">Asesoramiento y compra</a></li>
        <li className="navbar-item"><a href="#services">Servicios</a></li>
        <li className="navbar-item"><a href="#cardealership">Concesionarios</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};


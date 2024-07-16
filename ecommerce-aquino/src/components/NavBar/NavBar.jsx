import CartWidget from './CartWidget/CartWidget';
import './navbar.css';
import { Outlet, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src="https://res.cloudinary.com/dddnglecz/image/upload/v1719872267/logo_v8x2nv.svg" alt="Logo" className="navbar-logo" />
            <div className="navbar-title">PORSCHE</div>
          </Link>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">All</Link></li>
          <li className="navbar-item"><Link to="/category/sport">Sport</Link></li>
          <li className="navbar-item"><Link to="/category/electric">Electric</Link></li>
          <li className="navbar-item"><Link to="/category/sedan">Sedan</Link></li>
          <li className="navbar-item"><Link to="/category/SUV">SUV</Link></li>
        </ul>
        <CartWidget />
      </nav>
      <Outlet />
    </div>
  );
};


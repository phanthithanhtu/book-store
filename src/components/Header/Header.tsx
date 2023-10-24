import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router DOM
import './Header.scss';

export default function Header() {
  return (
    <nav className="header">
      <div className="header__wrap">
        <div className="collapse">
          <button className="navbar__collapse">
            <i className="bx bx-list-ul fs-40"></i>
          </button>
        </div>
        <div className="navbar">
          <ul className="navbar__list">
            <li className="text">
              <Link to="/home">Trang chủ</Link> {/* Use the Link component to navigate */}
            </li>
            <li className="text-bold">
              <Link to="/theloai">Thể loại</Link> {/* Use the Link component to navigate */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className="nav-bar-full">
        <ul>
          <li>
            <Link to="/" className="nav-black" className="nav-left">
              <h2 id="nav-brand">TINGYO CHANG</h2>
            </Link>
          </li>
          <li>
            <div className="contact-btn">
              <Link to="ContactMe.js" className="nav-right">
                <h3 className="nav-font-black">Contact Me</h3>
              </Link>
            </div>
          </li>
          <li>
            <Link to="Analytic.js" className="nav-black" className="nav-right">
              <h3 className="nav-font-black">Analytic</h3>
            </Link>
          </li>
          <li>
            <Link to="Creative.js" className="nav-black" className="nav-right">
              <h3 className="nav-font-black">Creative</h3>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-black" className="nav-right">
              <h3 className="nav-font-black">About</h3>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

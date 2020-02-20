import React, { Component } from 'react';
import '../styles/navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import arrow from '../assets/icons8-scroll-up-100.png';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={arrow}
            className="nav-logo"
            alt="Arrow"
            onClick={this.scrollToTop}
            style={{
              height: '30px',
              width: '30px',
            }}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Welcome"
                spy
                smooth
                offset={-48}
                duration={500}
              >
                Velkommen
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="Threatment"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Behandlingen
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="Facts"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Facts
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}

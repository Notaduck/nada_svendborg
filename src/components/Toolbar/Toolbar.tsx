import PropTypes from 'prop-types';
import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link, animateScroll as scroll } from 'react-scroll';
import arrow from '../../assets/icons8-scroll-up-100.png';

const Toolbar = ({ drawerClickHandler }) => {

  const sections: { title: string, to: string }[] = [
    {
      title: "Welcome",
      to: "Welcome",
    },
    {
      title: "Behandlingen",
      to: "Threatment"
    },
    {
      title: "Facts",
      to: "Facts"
    }, {
      title: "Find os",
      to: "FindUs"
    }
  ]

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (<header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_drawer">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
      <img
        src={arrow}
        className="nav-logo"
        alt="Arrow"
        onClick={scrollToTop}
        style={{
          height: '30px',
          width: '30px',
          cursor: 'pointer'
        }}
      />
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          {sections.map(section =>
            <li className="nav-item">
              <Link
                activeClass="active"
                to={section.to}
                spy
                smooth
                offset={-150}
                duration={500}
                key={section.to}
              >
                {section.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="spacer" />
    </nav>
  </header>
  )
};

Toolbar.propTypes = {
  drawerClickHandler: PropTypes.func,
};

export default Toolbar;

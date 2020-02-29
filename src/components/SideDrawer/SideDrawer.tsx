import React from 'react';
import { Link } from 'react-scroll';
import './SideDrawer.css';

interface Props {
  visible: boolean,
}

const sideDrawer: React.FC<Props> = ({ visible }) => {


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

  let drawerClassName = 'side-drawer';

  if (visible) {
    drawerClassName = 'side-drawer open';
  }

  return (
    <nav className={drawerClassName}>
      <ul>
        {sections.map(section =>
          <li className="nav-item" key={section.to}>
            <Link
              activeClass="active"
              to={section.to}
              spy
              smooth
              offset={-150}
              duration={500}
            >
              {section.title}
            </Link>
          </li>
        )}
      </ul>

    </nav>
  );
};

export default sideDrawer;

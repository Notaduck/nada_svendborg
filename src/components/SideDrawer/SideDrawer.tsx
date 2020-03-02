import React from 'react';
import { Link } from 'react-scroll';
import './SideDrawer.css';

interface Props {
  visible: boolean,
  sections: { id: string, title: string, tag: JSX.Element }[],
}

const sideDrawer: React.FC<Props> = ({ visible, sections }) => {


  // const sections: { title: string, to: string }[] = [
  //   {
  //     title: "Welcome",
  //     to: "Welcome",
  //   },
  //   {
  //     title: "Behandlingen",
  //     to: "Threatment"
  //   },
  //   {
  //     title: "Facts",
  //     to: "Facts"
  //   }, {
  //     title: "Find os",
  //     to: "FindUs"
  //   }
  // ]

  let drawerClassName = 'side-drawer';

  if (visible) {
    drawerClassName = 'side-drawer open';
  }

  return (
    <nav className={drawerClassName}>
      <ul>
        {sections.map(section =>
          <li className="nav-item" key={section.id}>
            <Link
              activeClass="active"
              to={section.id}
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

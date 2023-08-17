import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sydney Lim</h2>
        <p><a href="mailto:scqlim@gmail.com">scqlim@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sydney. I am pursuing my <a href="https://www.cs.ucsb.edu/">MSCS @ UCSB</a>, and
        graduated with a <a href="https://www.ce.ucsb.edu/">BSCE @ UCSB.</a>{' '}
        I&apos;m currently doing research in <a href="https://github.com/sydneylim/QuestPro_EyeTracking">eye tracking in AR/VR</a> in the <a href="https://ilab.cs.ucsb.edu/">Four Eyes Lab</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;

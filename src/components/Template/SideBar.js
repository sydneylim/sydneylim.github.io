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
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sydney. I am a Cloud Developer @ <a href="https://www.hpe.com/us/en/home.html">HPE</a>,
        developing <a href="https://morpheusdata.com/">Morpheus</a>, an automation platform that powers <a href="https://www.hpe.com/us/en/greenlake.html">HPE GreenLake hybrid cloud services</a>.
        Previously, I obtained my <a href="https://www.cs.ucsb.edu/">MSCS @ UCSB</a>, and <a href="https://www.ce.ucsb.edu/">BSCE @ UCSB.</a>{' '}
        My graduate research was focused on <a href="https://github.com/sydneylim/QuestPro_EyeTracking">eye tracking in AR/VR</a> in the <a href="https://ilab.cs.ucsb.edu/">Four Eyes Lab</a>.
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

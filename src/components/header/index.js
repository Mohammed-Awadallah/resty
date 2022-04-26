
import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <section className='header'>
      <header>
        <h1>RESTY</h1>
      </header>
      <nav className='navBar' >
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>History</a></li>
          <li><a href='https://github.com/Mohammed-Awadallah/resty'>Github Repo</a></li>
        </ul>
      </nav>
    </section>
  );
}
import React from 'react';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <ul>
        <li><a className={styles.active} href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Documentation</a></li>
      </ul>
    </nav>
    <section>
      <h1>The Rick And Morty Api</h1>
      <h2>Hey, did you ever want to hold a Terry fold?</h2>
    </section>
  </header>
);

export default Header; 

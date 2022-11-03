import React from 'react';
import './Header.css';
import headerImg from '../../assets/Star.png';

export default function Header() {
  return (
    <div>
      <header style={{ headerImg: `url(${headerImg})` }}>
        Zodiac Signs
      </header>
    </div>
  );
}


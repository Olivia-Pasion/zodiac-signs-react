import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacCard from '../Zodiacs/ZodiacCard.js';
import backgroundImage from '../../assets/starry-night-design.jpg';

export default function Main() {
  return (
    <div>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        {zodiac.map((sign) => (
          <ZodiacCard key={sign.name} {...sign} />
        ))}
      </main>
    </div>
  );
}


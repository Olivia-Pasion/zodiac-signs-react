import React from 'react';
import './ZodiacCard.css';

export default function Zodiac({ name, top, left, dates }) {
  return (
    <div className="zodiac" style={{ top, left }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiacs/${name}.jpg}`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  );
}

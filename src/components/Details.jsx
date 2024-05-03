import React from 'react';
import { properties } from './Card'; 
import { Card } from './Card';


export default function Details() {
 
  return (
    <div>
      <h2>Detalii proprietate</h2>
      {/* Afiseaza detalii despre proprietate */}
      {properties && (
        <Card
          title={properties.name}
          image={properties.imageUrl}
        />
      )}
    </div>
  );

}


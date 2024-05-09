import React from "react";
import { Card } from "../components/Card";
import { properties } from "../api/property";

export default function RentSection() {
  return (
    <section className="product-container">
      <div className="see-offers-container">
        <h2 className="see-offers-title">See our offers</h2>
      </div>
      <div className="product-section-container rent-section">
        {properties.slice(0, 5).map((property) => {
          return (
            <Card
              name={property.name}
              image={property.imageUrl}
              description={property.description}
              address={property.fullAddress}
              price={property.rentRange}
              id={property.id}
            />
          );
        })}
      </div>
    </section>
  );
}

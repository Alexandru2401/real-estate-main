import React, { useContext } from "react";
import { properties } from "../api/property";
import { Card } from "./Card";
import { FavouriteContext } from "../store/context";
import { useParams } from "react-router-dom";

export default function Details() {
  const { state } = useContext(FavouriteContext);
  const { id } = useParams();
  const foundProperty = properties.find(
    (property) => property.id === Number(id)
  );

  return (
    <div className="product-container">
      <div className="title-container">
        <h2 className="home-title">
          Property details:{" "}
          <span style={{ color: "#f7eedd" }}>{foundProperty.name}</span>
        </h2>
      </div>
      {/* Afiseaza detalii despre proprietate */}
      {!foundProperty ? (
        <p>Property not found</p>
      ) : (
        <div className="details-container rent-section">
          <Card
            key={foundProperty.id}
            id={foundProperty.id}
            title={foundProperty.name}
            image={foundProperty.imageUrl}
            bed={foundProperty.bedRange}
            description={foundProperty.description}
            address={foundProperty.fullAddress}
            price={foundProperty.rentRange}
          />
        </div>
      )}
    </div>
  );
}

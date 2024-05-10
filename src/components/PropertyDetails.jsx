import React, { useContext } from "react";
import { properties } from "../api/property";
import { PropertyCard } from "./PropertyCard";
import { FavouriteContext } from "../store/context";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
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
          <span style={{ color: "#2b3499" }}>{foundProperty.name}</span>
        </h2>
      </div>
      {/* Afiseaza detalii despre proprietate */}
      {!foundProperty ? (
        <p>Property not found</p>
      ) : (
        <div className="details-container rent-section">
          <PropertyCard
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

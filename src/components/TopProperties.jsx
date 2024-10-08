import React, { useContext } from "react";
import { PropertyCard } from "./PropertyCard";
import { properties } from "../api/property";
import { Link } from "react-router-dom";
import { addToFavourites } from "../store/action";
import { FavouriteContext } from "../store/context";

export function TopProperties() {
  const { dispatch } = useContext(FavouriteContext);
  function handleAddToFavourite(property) {
    const actionResult = addToFavourites(property);
    dispatch(actionResult);
  }

  return (
    <section className="product-container">
      <div className="see-offers-container">
        <h2 className="see-offers-title">See our offers</h2>
      </div>
      <div className="see-offers-container">
        <h2 className="home-title">
          <Link to={"/rentsection"}>Properties for rent</Link>
        </h2>
      </div>
      <div className="product-section-container">
        {properties.slice(0, 5).map((property) => {
          return (
            <PropertyCard
              key={property.id}
              id={property.id}
              name={property.name}
              image={property.imageUrl}
            >
              <button
                onClick={() => {
                  handleAddToFavourite({
                    id: property.id,
                    image: property.imageUrl,
                    name: property.name,
                    price: property.rentRange,
                  });
                }}
              >
                Adauga la favorite
              </button>
              {/* <Link to={`/property/${property.id}`}>
                <button>See details</button>
              </Link> */}
            </PropertyCard>
          );
        })}
      </div>
      <div className="see-offers-container">
        <h2 className="home-title">
          <Link to={"/buysection"}>Properties for buy</Link>
        </h2>
      </div>
      <div className="product-section-container">
        {properties.slice(5, 10).map((property) => {
          return (
            <PropertyCard
              key={property.id}
              name={property.name}
              image={property.imageUrl}
              id={property.id}
            />
          );
        })}
      </div>
    </section>
  );
}

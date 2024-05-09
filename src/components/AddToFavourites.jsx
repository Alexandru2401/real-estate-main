import React, { useContext } from "react";
import { FavouriteContext } from "../store/context";
import { removeFromFavourites } from "../store/action";
import { Link, useParams } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DeleteIcon from "@mui/icons-material/Delete";
export default function AddToFavourites() {
  const { id } = useParams();
  const { state, dispatch } = useContext(FavouriteContext);

  function handlePropertyRemove(propertyId) {
    const actionResult = removeFromFavourites(propertyId);
    dispatch(actionResult);
  }
  return (
    <div className="product-section-container favourite-container">
      {state.properties.length === 0 ? (
        <p className="home-title">No favourite products</p>
      ) : (
        state.properties.map((property) => {
          return (
            <div
              key={property.id}
              className="property-container favourite-container"
            >
              <img className="card-image" src={property.image} />
              <h2 className="card-title">{property.title}</h2>
              <button
                onClick={() => {
                  handlePropertyRemove(property.id);
                }}
                className="delete-button"
              >
                Delete
                <DeleteIcon style={{ fontSize: "25px" }} />
              </button>
              <Link to={`/property/${property.id}`}>
                <button className="rental-button">
                  See details
                  <CallMadeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "15px",
                      marginBottom: "-5px",
                    }}
                  />
                </button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

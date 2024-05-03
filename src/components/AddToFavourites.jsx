import React, { useContext } from "react";
import { FavouriteContext } from "../store/context";
import { removeFromFavourites } from "../store/action";

export default function AddToFavourites(){
    const {state, dispatch} = useContext(FavouriteContext);

    function handlePropertyRemove(propertyId){
        const actionResult = removeFromFavourites(propertyId);
        dispatch(actionResult);
    }

    return (
        <div className="product-section-container">
            {state.properties.length === 0 ? (
                <p>Nu sunt produse favorite</p>
            ) : (
               state.properties.map((property)=>{
                return (
                    <div key={property.id}>
                        <div>
                        <img src={property.imageUrl} />
                        <h2>{property.name}</h2>
                        </div>
                        <button onClick={()=>{handlePropertyRemove(property.id)}}>Sterge</button>
                    </div>
                )
               }) 
            )}
        </div>
    )


}
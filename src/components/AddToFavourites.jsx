import React, { useContext } from "react";
import { FavouriteContext } from "../store/context";
import { properties } from "./Card";

export default function AddToFavourites(){
    const {state} = useContext(FavouriteContext);
    const {properties} = state
console.log(state)
    return (
        <div>
           {properties.length === 0 ? (<p>Nu ai produse favorite</p>):
           (properties.map((property) =>{
            return (
                <div key={property.id}>
                    <h2>{property.name}</h2> 
                    <img src={property.imageUrl} /> 
                </div>
            )
           }))}
        </div>
    )
}

import React, { useContext } from "react";
import RentSection from "./RentSection";
import BuySection from "./BuySection";
import Details from "./Details";
import { Card } from "./Card";
import { properties } from "./Card";
import { Link} from "react-router-dom";
import { useState } from "react";
import { addToFavourites } from "../store/action";
import { FavouriteContext } from "../store/context";
export function ProductContainer() {

  const {dispatch} = useContext(FavouriteContext);

  // function handleAddToFavourite(property){
  //   const favoriteAction = addToFavourites(property);
  //   dispatch(favoriteAction);
  
  function handleAddToFavourite(properties) {
    const favoriteAction = addToFavourites(properties);
    dispatch(favoriteAction);
  }  


    return (
    <section className="product-container">
        <div className="see-offers-container">
        <h2 className="see-offers-title">See our offers</h2>
        </div>
        <div className="product-section-container">
        <h2>Properties for rent</h2>
        {properties.slice(0,5).map((property, index) =>{
        return (
        // <Link to={`/property/${property.id}`}>
        // <Card
        //    key={index}
        //    id={property.id}
        // title={property.name}
        // image={property.imageUrl}
        // onClick={handleCardClick}
        // />
        // </Link>)
        // })}
        // <Link to={"/RentSection"}><button>See Details</button></Link>
        <Card
        key={index}
        id={property.id}
        title={property.name}
        image={property.imageUrl}
      >
               <button onClick={()=>{
                handleAddToFavourite({
                  id: property.id,
                  image: property.imageUrl,
                  title: property.name, 
                })
               }}>Adauga la favorite</button>
          </Card>
    )})}
        <Link to={`/RentSection`}><button>See Details</button></Link>
        </div>
        <div className="product-section-container">
        <h2>Properties for buy</h2>
        {properties.slice(6,10).map((property) =>{
        return (<Card
        title={property.name}
        image={property.imageUrl}
        />)
        })}
         <Link to={"/BuySection"}><button>See Details</button></Link>
        </div>
    </section>
    )
}





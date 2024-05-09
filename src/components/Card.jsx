import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { addToFavourites } from "../store/action";
import { FavouriteContext } from "../store/context";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CallMadeIcon from '@mui/icons-material/CallMade';

export function Card(props) {
  
    const {name, image, id, price, address, description, bed , onClick} = props;
	const {dispatch} = useContext(FavouriteContext);

  function handleAddToFavourite(property){
    const favoriteAction = addToFavourites(property);
    dispatch(favoriteAction);
	alert("Property was added to favourite!")
  }

return (
    <div key={id} className="property-container">
        <h2 className="card-title">{name}</h2>
        <img className="card-image" src={image} />
		<div className="card-info-container">
		<p className="card-info">{bed}</p>
        <p className="card-description">{description}</p>
        <p className="card-info">{address}</p>
        <p className="card-info">{price}</p>
		</div>
		<div className="button-container">
			<button className="card-button" onClick={()=>{
                handleAddToFavourite({
					id: id,
					image: image,
					title: name 
				})}}>Add to favourites<FavoriteIcon style={{fontSize:"15px"}}/></button>
		 <Link to={`/property/${id}`}><button className="rental-button">See details<CallMadeIcon style={{fontSize:"20px", marginLeft:"15px", marginBottom:"-5px"}}/></button></Link>
		</div>
	</div>
)
}
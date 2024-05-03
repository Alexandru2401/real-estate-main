import React from "react";
import { Card } from "./Card";
import { properties } from "./Card";

export default function BuySection(){
    return (
        <section className="product-container">
        <div className="see-offers-container">
        <h2 className="see-offers-title">See our offers</h2>
        </div>
        <div className="product-section-container">
        {properties.slice(5,10).map((property) =>{
        return (<Card
        title={property.name}
        image={property.imageUrl}
        description = {property.description}
        address={property.fullAddress}
        price={(property.rentRange)*15}
        />)
        })}
        </div>
    </section>
    )
}
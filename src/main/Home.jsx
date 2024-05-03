import React from "react";
import RentSection from "../components/RentSection";
import BuySection from "../components/BuySection";
import { AboutUs } from "../components/AboutUs";
import { ProductContainer } from "../components/ProductContainer";
import { WhyTopRent } from "../components/WhyTopRent";

export default function Home(){
    return (
       <div className="section-container">
        <AboutUs/>
        <WhyTopRent/>
        <ProductContainer/>
       </div>
    )
}
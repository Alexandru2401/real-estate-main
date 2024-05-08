import React from "react";
import RentSection from "../pages/RentSection";
import BuySection from "../pages/BuySection";
import { AboutUs } from "../pages/AboutUs";
import { ProductContainer } from "../components/ProductContainer";
import { WhyTopRent } from "../pages/WhyTopRent";

export default function Home(){
    return (
       <div className="section-container">
        <AboutUs/>
        <WhyTopRent/>
        <ProductContainer/>
       </div>
    )
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import bgImg from "../assets/bgImg.jpg"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
   
    const [mobile, setMobile] = useState(false);
    return (
       <div className="bg-container" style={{backgroundImage: `url(${bgImg})` , backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>
         <nav className="navbar">
            <div className="img-container">
                <img src={logo} alt="logo" style={{width: "200px"}}/>
            </div>
            <ul className={mobile? "navbar-links-mobile" : "navbar-links"} onClick={()=>{
                setMobile(false)
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="RentSection">For rent</Link></li>
                <li><Link to="BuySection">For buy</Link></li>
                <li><Link to="AddToFavourites">Favorites</Link></li>
                <li><Link to="ContactUs">Contact us</Link></li>
            </ul>
            <button className="nav-btn" onClick={() =>{
                setMobile(!mobile)
            }}>
                {mobile?<FaTimes/> : <FaBars/>}
            </button>
        </nav>
    </div>
    )
}
import React from "react";
import { AboutUs } from "../pages/AboutUs";
import { TopProperties } from "../components/TopProperties";
import { WhyTopRent } from "../pages/WhyTopRent";

export default function Home() {
  return (
    <div className="section-container">
      <AboutUs />
      <WhyTopRent />
      <TopProperties />
    </div>
  );
}

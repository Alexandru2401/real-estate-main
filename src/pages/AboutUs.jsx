import React from "react";
import logo from "../assets/logo.png";

export function AboutUs() {
  return (
    <section className="about-section">
      {/* <div className="img-container">
        <img src={logo} alt="" />
      </div> */}
      <div className="content-container">
        <h2 className="about-title">About us</h2>
        <h3 className="about-second-title">A home for you and your family.</h3>
        <p className="about-us-description">
          Here you find the best conditions adapted to your needs, at affordable
          prices. Whether you want to rent or buy the house of your dreams, this
          is the right place to be.
        </p>
        <br />
        <p className="about-us-quote">
          <span style={{ color: "#008DDA" }}>TopRent</span> it's not about{" "}
          <span style={{ color: "ACE2E1" }}>housing</span>, it's about{" "}
          <span style={{ color: "#008DDA" }}>"HOME"</span>.
        </p>
      </div>
    </section>
  );
}

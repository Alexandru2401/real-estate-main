import React from "react";
import cloud from "../assets/cloud.png";
import shield from "../assets/shield.png";
import bars from "../assets/bars.png";

export function WhyTopRent() {
  return (
    <section className="why-top-rent">
      <div className="section-container">
        <h2 className="why-top-title">Why TopRent?</h2>
        <p className="quote-paragraph">
          <span style={{ color: "#008DDA" }}>TopRent</span> it's not about{" "}
          <span style={{ color: "ACE2E1" }}>housing</span>, it's about{" "}
          <span style={{ color: "#008DDA" }}>"HOME"</span>
        </p>
        <div className="card-container">
          <div className="card">
            <img src={cloud} alt="" class="icon" />
            <h3 className="about-second-title why-us">Eficient always</h3>
            <p className="about-us-description">
              TopRent contains a variety of ads, so that you can find your own
              home adapted to your needs.
            </p>
          </div>
          <div class="card">
            <img src={shield} alt="" class="icon" />
            <h3 className="about-second-title why-us">Verified</h3>
            <p className="about-us-description">
              We put safety first, so every ad is constantly checked by our
              team.
            </p>
          </div>
          <div class="card">
            <img src={bars} alt="" class="icon" />
            <h3 className="about-second-title why-us">Customer support</h3>
            <p className="about-us-description">
              The TopRent team is always there for you if you have any problems
              or questions during the rental process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

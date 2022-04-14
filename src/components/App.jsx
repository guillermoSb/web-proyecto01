import React from "react";
import NavBar from "./NavBar.jsx";

import Video from "../../assets/video.mp4";
import Reflection from "../../assets/reflection.webp";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
        <div className="hero">
          <div className="hero__background">
            <video autoPlay={true} loop={true} className="hero__video">
              <source src={Video} type="video/mp4" />
            </video>
            <img
              className="hero__reflection"
              src={Reflection}
              alt="Reflection of city"
            />
          </div>
          <div className="hero__title">
            <h1 className="heading-1 heading-1--hero">
              Let’s build a&nbsp;better tomorrow, together.
            </h1>
            <p className="text">
              Join the EarthFund community and help us decentralize the way we
              tackle humanity’s biggest problems.
            </p>
            <button className="button">Request early access</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;

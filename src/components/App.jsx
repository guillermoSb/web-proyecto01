import React from "react";
import NavBar from "./NavBar.jsx";

import Video from "../../assets/video.mp4";
import Reflection from "../../assets/reflection.webp";
import VideoCover from "../../assets/video-cover.webp";
import Image1 from "../../assets/image-1.webp";
import Image2 from "../../assets/image-2.webp";
import Image3 from "../../assets/image-3.webp";
import Image4 from "../../assets/image-4.webp";

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
            <button className="button container ">Request early access</button>
          </div>
        </div>
      </header>
      <section className="voice-section container">
        <h2 className="heading-2">
          Use your voice to make&nbsp;the world a better place.
        </h2>
        <div className="voice-section__video">
          <button className="button button--light button--video voice-section__button">
            <svg width="24" height="24" viewBox="0 0 24 24" class="">
              <path d="M17.604 9.414c1.972 1.16 1.972 4.012 0 5.172l-8.083 4.755C7.521 20.517 5 19.075 5 16.755V7.245c0-2.32 2.521-3.762 4.521-2.586l8.083 4.755z"></path>
            </svg>
            Watch our promo video
          </button>
          <img
            className="voice-section__cover"
            src={VideoCover}
            alt="Cover for the video."
          />
        </div>
        <div className="voice-section__dots">
          <div className="voice-section__dot voice-section__dot--1"></div>
          <div className="voice-section__dot voice-section__dot--2"></div>
          <div className="voice-section__dot voice-section__dot--3"></div>
          <div className="voice-section__dot voice-section__dot--4"></div>
          <div className="voice-section__dot voice-section__dot--5"></div>
          <div className="voice-section__dot voice-section__dot--6"></div>
        </div>
        <div className="voice-section__donations">
          <div className="voice-section__donation voice-section__donation--1">
            <img src={Image1} alt="Donation person" />
          </div>
          <div className="voice-section__donation voice-section__donation--2">
            <img src={Image2} alt="Donation person" />
          </div>
          <div className="voice-section__donation voice-section__donation--3">
            <img src={Image3} alt="Donation person" />
          </div>
          <div className="voice-section__donation voice-section__donation--4">
            <img src={Image4} alt="Donation person" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

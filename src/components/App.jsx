import React from "react";
import NavBar from "./NavBar.jsx";

import Video from "../../assets/video.mp4";
import Reflection from "../../assets/reflection.webp";
import VideoCover from "../../assets/video-cover.webp";
import Image1 from "../../assets/image-1.webp";
import Image2 from "../../assets/image-2.webp";
import Image3 from "../../assets/image-3.webp";
import Image4 from "../../assets/image-4.webp";

import Dif1 from "../../assets/dif-1.webp";
import Dif2 from "../../assets/dif-2.webp";
import Dif3 from "../../assets/dif-3.webp";
import Dif4 from "../../assets/dif-4.webp";
import Dif5 from "../../assets/dif-5.webp";
import Dif6 from "../../assets/dif-6.webp";

import Deepak from "../../assets/deepak.webp";

import Photo5 from "../../assets/photo-5.webp";
import Coint from "../../assets/cointelegraph.svg";
import Photo3 from "../../assets/photo-3.webp";
import Card from "./Card.jsx";

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
      <section className="difference-section container">
        <h2 className="heading-2">
          Everything you need to&nbsp;make a difference
        </h2>
        <p className="text">
          Join communities dedicated to causes you’re passionate about,
          crowdfund your world-changing treasury and vote for which projects get
          the money they need to make an impact.
        </p>
        <div className="difference-section__pictures">
          <img
            src={Dif1}
            className="difference-section__picture difference-section__picture--1"
            alt="App picture"
          />
          <img
            src={Dif2}
            className="difference-section__picture difference-section__picture--2"
            alt="App picture"
          />
          <img
            src={Dif3}
            className="difference-section__picture difference-section__picture--3"
            alt="App picture"
          />
          <img
            src={Dif4}
            className="difference-section__picture difference-section__picture--4"
            alt="App picture"
          />
          <img
            src={Dif5}
            className="difference-section__picture difference-section__picture--5"
            alt="App picture"
          />
          <img
            src={Dif6}
            className="difference-section__picture difference-section__picture--6"
            alt="App picture"
          />
        </div>
      </section>
      <section className="community-section">
        <h2 className="heading-2">
          “A community where you&nbsp;have a real, meaningful voice”
        </h2>
        <div className="community-section__deepak flex">
          <div className="flex align-center ">
            <img
              src={Deepak}
              alt="Deepak Chopra"
              className="community-section__deepak-picture"
            />
            <div className="community-section__deepak-info">
              <h3 className="heading-3">
                “I believe that each of us is a unique strand in the intricate
                web of life and here to make a contribution. That's why we chose
                to collaborate with EarthFund, a platform that gives everyone
                the ability to participate and have a voice in making a more
                sustainable, peaceful, healthier and joyful world.”
              </h3>
              <h4 className="heading-4">Deepak Chopra</h4>
              <p className="text text--grey text--small">
                Best-selling author and founder of the Mental Health and
                Wellbeing cause
              </p>
            </div>
          </div>
        </div>
        <div className="community-section__cards">
          <Card
            title={`“EarthFund DAO stood out from the crowd with an impressive team and even
        more impressive mission: harnessing the power of decentralized
        autonomous blockchain-powered enterprises to support DAO-selected
        projects that are poised to affect real change”`}
            footerTitle="Jon Najarian"
            footerSubtitle="CNBC anchor and EarthFund DAO advisor"
            img={Photo5}
          />
          <Card
            title={`“Buy buying the token and joining the EarthFund DAO, anybody in the world will have a vote on how the EarthFund treasury is used to fund planet-saving projects around the world.”`}
            footerTitle=""
            footerSubtitle=""
            img={Coint}
            variant={2}
          />
          <Card
            title={`“I couldn’t be more confident of the team I’ve joined. As COO of Red Bull, I learned the importance of having a really strong team of top-of-their-game professionals behind you, and Earth Fund is no different. From my first meeting with everyone, I could just tell they were a first-rate team.”`}
            footerTitle="Gary Smith"
            footerSubtitle="Former COO of Red Bull and EarthFund advisor"
            img={Photo3}
          />
        </div>
      </section>
    </>
  );
}

export default App;

import React, { useEffect, useRef } from "react";
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

import Patterns from "../../assets/patterns.svg";
import Chip from "../../assets/chip.svg";
import Earth from "../../assets/earth.svg";
import Star from "../../assets/star.svg";
import RewardImg1 from "../../assets/reward-img1.webp";
import RewardImg2 from "../../assets/reward-img2.webp";
import RewardImg3 from "../../assets/reward-img3.webp";

import Avatar1 from "../../assets/avatar-1.webp";
import Avatar2 from "../../assets/avatar-2.webp";
import Avatar3 from "../../assets/avatar-3.webp";
import Avatar4 from "../../assets/avatar-4.webp";
import Avatar5 from "../../assets/avatar-5.webp";
import Avatar6 from "../../assets/avatar-6.webp";

import Lines from "../../assets/lines.svg";
import Line from "../../assets/line.svg";
import Line2 from "../../assets/line-2.svg";
import Line3 from "../../assets/line-3.svg";
import Confetti from "../../assets/confetti.svg";

import Card from "./Card.jsx";
import RewardCard from "./RewardCard.jsx";

import BgDots from "../../assets/bg-dots.webp";
import Footer from "./Footer.jsx";

function App() {
  // Persons References
  const parallaxItems = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const fadeInFastItems = [useRef(null), useRef(null), useRef(null)];
  // Persons References
  useEffect(() => {
    const parallax = () => {
      parallaxItems.forEach((item) => {
        const y = window.innerHeight - item.current.getBoundingClientRect().top;
        const speed = item.current.attributes.speed
          ? item.current.attributes.speed.value
          : 0.1;
        if (y > 0) {
          item.current.style.transform = `translateY(${speed * y}px)`;
          if (!item.current.classList.contains("animate__fadeIn")) {
            item.current.classList.add(
              "animate__animated",
              "animate__fadeIn",
              "animate__slow"
            );
          }
        }
      });
    };

    const fadeInFast = () => {
      fadeInFastItems.forEach((item) => {
        const y = window.innerHeight - item.current.getBoundingClientRect().top;
        if (y > 0) {
          if (!item.current.classList.contains("animate__fadeIn")) {
            item.current.classList.add(
              "animate__animated",
              "animate__fadeIn",
              "animate__fast"
            );
          }
        }
      });
    };

    window.addEventListener("scroll", (e) => {
      parallax();
      fadeInFast();
    });
  }, []);
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
            <button
              className="button container animate__animated animate__fadeIn"
              onClick={() => {}}
            >
              Request early access
            </button>
          </div>
        </div>
      </header>

      <section className="voice-section container">
        <h2 className="heading-2">
          Use your voice to make&nbsp;the world a better place.
        </h2>
        <div className="voice-section__video">
          <button
            className="button button--light button--video voice-section__button"
            style={{
              zIndex: 1,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="">
              <path d="M17.604 9.414c1.972 1.16 1.972 4.012 0 5.172l-8.083 4.755C7.521 20.517 5 19.075 5 16.755V7.245c0-2.32 2.521-3.762 4.521-2.586l8.083 4.755z"></path>
            </svg>
            Watch our promo video
          </button>
          <img
            className="voice-section__cover"
            src={VideoCover}
            alt="Cover for the video."
            ref={fadeInFastItems[0]}
          />
        </div>
        <div className="voice-section__dots">
          <div
            className="voice-section__dot voice-section__dot--1"
            ref={parallaxItems[4]}
          />
          <div
            className="voice-section__dot voice-section__dot--2"
            ref={parallaxItems[5]}
          />
          <div
            className="voice-section__dot voice-section__dot--3"
            ref={parallaxItems[6]}
          />
          <div
            className="voice-section__dot voice-section__dot--4"
            ref={parallaxItems[7]}
            speed={0.15}
          />
          <div
            className="voice-section__dot voice-section__dot--5"
            ref={parallaxItems[8]}
            speed={0.1}
          />
          <div
            className="voice-section__dot voice-section__dot--6"
            ref={parallaxItems[9]}
          />
        </div>
        <div className="voice-section__donations">
          <div
            className="voice-section__donation voice-section__donation--1"
            ref={parallaxItems[0]}
            speed={0.1}
          >
            <img src={Image1} alt="Donation person" />
          </div>
          <div
            className="voice-section__donation voice-section__donation--2"
            ref={parallaxItems[1]}
            speed={0.2}
          >
            <img src={Image2} alt="Donation person" />
          </div>
          <div
            className="voice-section__donation voice-section__donation--3"
            ref={parallaxItems[2]}
            speed={0.2}
          >
            <img src={Image3} alt="Donation person" />
          </div>
          <div
            className="voice-section__donation voice-section__donation--4"
            ref={parallaxItems[3]}
          >
            <img src={Image4} alt="Donation person" />
          </div>
        </div>
      </section>

      <section className="difference-section container">
        <h2 className="heading-2">Everything you need to make a difference</h2>
        <p className="text">
          Join communities dedicated to causes you’re passionate about,
          crowdfund your world-changing treasury and vote for which projects get
          the money they need to maken&nbsp;an&nbsp;impact.
        </p>
        <div className="difference-section__pictures">
          <img
            src={Dif1}
            className="difference-section__picture difference-section__picture--1"
            alt="App picture"
            ref={fadeInFastItems[1]}
          />
          <img
            src={Dif2}
            className="difference-section__picture difference-section__picture--2"
            alt="App picture"
            ref={parallaxItems[10]}
            speed={0.05}
          />
          <img
            src={Dif3}
            className="difference-section__picture difference-section__picture--3"
            alt="App picture"
            ref={parallaxItems[11]}
            speed={0.05}
          />
          <img
            src={Dif4}
            className="difference-section__picture difference-section__picture--4"
            alt="App picture"
            ref={parallaxItems[12]}
            speed={0.07}
          />
          <img
            src={Dif5}
            className="difference-section__picture difference-section__picture--5"
            alt="App picture"
            ref={parallaxItems[13]}
            speed={0.02}
          />
          <img
            src={Dif6}
            className="difference-section__picture difference-section__picture--6"
            alt="App picture"
            ref={parallaxItems[14]}
            speed={0.05}
          />
        </div>
      </section>
      <section className="community-section">
        <h2 className="heading-2">
          “A community where you&nbsp;have a real, meaningful voice”
        </h2>
        <div className="community-section__deepak flex">
          <div className="flex align-center community-section__deepak-card">
            <img
              src={Deepak}
              alt="Deepak Chopra"
              ref={fadeInFastItems[2]}
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
        <button className="button container ">Request early access</button>
      </section>
      <section className="rewards-section">
        <header className="rewards-section__header">
          <h2 className="heading-2">
            Get rewarded for being part of the solution.
          </h2>
          <p className="text">
            Every time you vet, review or rate a cause, you do a little bit of
            good for the planet and humanity, so it’s only right that you get
            something back.
          </p>
          <img
            src={Patterns}
            className="rewards-section__pattern"
            alt="World Map"
          />
        </header>
        <div className="rewards-section__cards flex">
          <img
            src={Avatar1}
            ref={parallaxItems[15]}
            alt="Avatar"
            className="rewards-section__avatar rewards-section__avatar--1"
          />
          <img
            src={Avatar2}
            ref={parallaxItems[16]}
            alt="Avatar"
            className="rewards-section__avatar rewards-section__avatar--2"
          />
          <img
            src={Avatar3}
            ref={parallaxItems[17]}
            alt="Avatar"
            className="rewards-section__avatar rewards-section__avatar--3"
          />
          <img
            src={Avatar4}
            ref={parallaxItems[18]}
            alt="Avatar"
            className="rewards-section__avatar rewards-section__avatar--4"
          />
          <img
            src={Avatar5}
            ref={parallaxItems[19]}
            alt="Avatar"
            className="rewards-section__avatar rewards-section__avatar--5"
          />
          <img
            src={Avatar6}
            ref={parallaxItems[20]}
            alt="Avatar"
            className="rewards-section__avatar rewards-section__avatar--6"
          />
          <img
            src={Lines}
            alt="Confetti"
            className="rewards-section__prop rewards-section__prop--1"
          />
          <img
            src={Line2}
            alt="Confetti"
            className="rewards-section__prop rewards-section__prop--2"
          />
          <img
            src={Line3}
            alt="Confetti"
            className="rewards-section__prop rewards-section__prop--3"
          />
          <img
            src={Confetti}
            alt="Confetti"
            className="rewards-section__prop rewards-section__prop--4"
          />

          <img
            src={Line}
            alt="Line"
            className="rewards-section__prop rewards-section__prop--5"
          />
          <img
            src={Line}
            alt="Line"
            className="rewards-section__prop rewards-section__prop--6"
          />
          <RewardCard
            icon={Chip}
            title="Join EarthFund"
            text={
              "Getting involved is simple. Just sign up for an EarthFund account and find a community that strikes a chord with you."
            }
            image={RewardImg1}
            bg={1}
          />

          <RewardCard
            icon={Earth}
            title="Power real change"
            text={
              "Swap your 1Earth for governance tokens and vote which world-changing projects get the funding they need to make a difference."
            }
            image={RewardImg2}
            bg={2}
          />

          <RewardCard
            icon={Star}
            title="Earn rewards"
            text={
              "You’re getting involved and making a difference, so we think it’s only fair you get rewarded for that. The more you get involved in your cause, the more rewards you’ll earn."
            }
            image={RewardImg3}
            bg={3}
          />
        </div>
      </section>

      <section className="join-section">
        <div className="join-section__banner flex">
          <h2 className="join-section__title heading-2 heading-2--white">
            Join the community. Change the world.
          </h2>
          <div className="join-section__buttons">
            <div className="join-section__links">
              <div className="join-section__link">
                <svg width="24" height="24" viewBox="0 0 24 24" className="">
                  <path d="M9.825 10.068c-.334.027-.646.18-.873.427a1.34 1.34 0 0 0-.353.906c0 .336.126.659.353.905a1.34 1.34 0 0 0 .873.427c.168-.006.334-.046.487-.116s.29-.171.405-.294a1.26 1.26 0 0 0 .26-.427 1.28 1.28 0 0 0 .076-.494 1.27 1.27 0 0 0-1.227-1.332zm4.38 0a1.34 1.34 0 0 0-.771.17c-.234.133-.422.333-.54.575s-.16.513-.122.78.157.514.34.712a1.34 1.34 0 0 0 .682.397 1.33 1.33 0 0 0 .787-.057 1.34 1.34 0 0 0 .618-.491c.152-.222.233-.485.233-.754a1.28 1.28 0 0 0-.334-.921 1.27 1.27 0 0 0-.404-.295 1.28 1.28 0 0 0-.486-.117h-.003zM20.04 0H3.96c-.324.001-.645.065-.944.19a2.46 2.46 0 0 0-.799.537 2.48 2.48 0 0 0-.532.802c-.123.299-.186.621-.185.945v16.221a2.47 2.47 0 0 0 .717 1.747 2.46 2.46 0 0 0 .799.537 2.45 2.45 0 0 0 .944.19h13.608l-.636-2.22 1.536 1.425 1.452 1.344L22.5 24V2.475a2.47 2.47 0 0 0-.184-.945 2.47 2.47 0 0 0-.532-.802 2.47 2.47 0 0 0-.799-.537 2.45 2.45 0 0 0-.944-.19h0zm-4.632 15.675l-.792-.975c.87-.203 1.641-.708 2.175-1.425a6.89 6.89 0 0 1-1.38.708 7.9 7.9 0 0 1-1.74.516c-1.028.189-2.082.185-3.108-.012a10.13 10.13 0 0 1-1.764-.516 7.2 7.2 0 0 1-1.374-.711 3.73 3.73 0 0 0 2.1 1.416l-.804.996a4.35 4.35 0 0 1-3.66-1.824 16.07 16.07 0 0 1 1.725-6.996 5.93 5.93 0 0 1 3.375-1.26l.12.144a8.09 8.09 0 0 0-3.156 1.572l.708-.348a9.01 9.01 0 0 1 2.727-.756 1.16 1.16 0 0 1 .204-.024c.804-.105 1.618-.113 2.424-.024A9.78 9.78 0 0 1 16.8 7.308c-.877-.714-1.895-1.233-2.988-1.524l.168-.192a5.93 5.93 0 0 1 3.375 1.26 16.07 16.07 0 0 1 1.725 6.996 4.38 4.38 0 0 1-1.609 1.369 4.39 4.39 0 0 1-2.063.458z"></path>
                </svg>
              </div>
              <div className="join-section__link">
                <svg width="24" height="24" viewBox="0 0 24 24" className="">
                  <path d="M24 11.775a2.85 2.85 0 0 0-2.85-2.85c-.675 0-1.35.225-1.8.675-1.725-1.125-3.975-1.8-6.375-1.875L14.25 3.75l3.375.75c.075 1.275 1.125 2.25 2.4 2.25 1.35 0 2.4-1.05 2.4-2.4s-1.05-2.4-2.4-2.4c-.9 0-1.725.525-2.175 1.275l-3.975-.975a.67.67 0 0 0-.75.45L11.55 7.575c-2.55.075-5.025.75-6.9 1.875-.525-.375-1.125-.6-1.8-.6A2.85 2.85 0 0 0 0 11.7c0 .975.525 1.875 1.275 2.4 0 .225-.075.45-.075.675 0 2.025 1.125 3.825 3.225 5.175 2.025 1.35 4.65 2.025 7.5 2.025s5.475-.75 7.5-2.025c2.1-1.35 3.225-3.225 3.225-5.175 0-.225 0-.45-.075-.6.9-.45 1.425-1.35 1.425-2.4zm-3.975-8.55c.6 0 1.125.525 1.125 1.125s-.525 1.125-1.125 1.125S18.9 4.95 18.9 4.35s.525-1.125 1.125-1.125zm-13.2 10.35c0-.9.75-1.65 1.65-1.65s1.65.75 1.65 1.65-.75 1.65-1.65 1.65-1.65-.75-1.65-1.65zm9.15 4.8c-.825.825-2.1 1.275-3.975 1.275-1.8 0-3.075-.375-3.975-1.275-.225-.225-.225-.675 0-.9s.675-.225.9 0c.6.6 1.575.825 3 .825s2.4-.3 3-.825c.225-.225.675-.225.9 0 .375.225.375.6.15.9zm-.375-3.15c-.9 0-1.65-.75-1.65-1.65s.75-1.65 1.65-1.65 1.65.75 1.65 1.65-.75 1.65-1.65 1.65z"></path>
                </svg>
              </div>
              <div className="join-section__link">
                <svg width="24" height="24" viewBox="0 0 24 24" className="">
                  <path d="M24.075 4.325c-.9.375-1.8.675-2.85.75 1.05-.6 1.8-1.575 2.175-2.7-.975.6-2.025.975-3.15 1.2C19.35 2.6 18.075 2 16.725 2c-2.7 0-4.95 2.175-4.95 4.95 0 .375.075.75.15 1.125C7.8 7.85 4.2 5.9 1.725 2.9a4.72 4.72 0 0 0-.675 2.475c0 1.725.9 3.225 2.175 4.125-.825 0-1.575-.225-2.25-.6v.075c0 2.4 1.725 4.35 3.975 4.8-.45.075-.825.15-1.275.15-.3 0-.6 0-.9-.075.6 1.95 2.475 3.375 4.575 3.45-1.65 1.35-3.825 2.1-6.15 2.1-.375 0-.825 0-1.2-.075 2.25 1.35 4.875 2.175 7.65 2.175 9.075 0 14.025-7.5 14.025-14.025v-.6c.9-.75 1.725-1.575 2.4-2.55z"></path>
                </svg>
              </div>
              <div className="join-section__link">
                <svg width="24" height="24" viewBox="0 0 24 24" classNmae="">
                  <path d="M12 15.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0-3.291 5.7A3.8 3.8 0 0 0 12 15.8h0zM16.749.6h-9.5A6.66 6.66 0 0 0 .6 7.251v9.5A6.66 6.66 0 0 0 7.251 23.4h9.5a6.66 6.66 0 0 0 6.649-6.651v-9.5A6.66 6.66 0 0 0 16.749.6zM12 17.7A5.71 5.71 0 0 1 6.3 12 5.71 5.71 0 0 1 12 6.3a5.71 5.71 0 0 1 5.7 5.7 5.71 5.71 0 0 1-5.7 5.7zm6.65-11.4a.95.95 0 0 1 0-1.9.95.95 0 1 1 0 1.9z"></path>
                </svg>
              </div>
              <div className="join-section__link">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.602 2.034a1.8 1.8 0 0 0-.944.068S1.63 9.659.43 10.496c-.259.18-.346.284-.389.408-.208.595.439.858.439.858l5.42 1.766a.6.6 0 0 0 .274-.017l13.05-8.07c.101-.031.176 0 .16.075-.264.905-9.911 9.478-9.964 9.53a.2.2 0 0 0-.059.079c-.013.031-.018.064-.016.098l-.504 5.288s-.211 1.65 1.435 0c1.168-1.169 2.288-2.137 2.85-2.607 1.864 1.286 3.869 2.709 4.734 3.45a1.5 1.5 0 0 0 1.098.424c.825-.031 1.05-.934 1.05-.934s3.831-15.416 3.96-17.483c.012-.203.029-.332.031-.471.007-.161-.009-.322-.047-.478-.04-.179-.173-.324-.35-.378z"></path>
                </svg>
              </div>
              <div className="join-section__link">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9.347 23.25V13.5H6V9h3.347V5.857c0-3.423 2.167-5.107 5.221-5.107 1.463 0 2.72.109 3.086.158v3.577l-2.118.001c-1.661 0-2.036.789-2.036 1.947V9H18l-1.5 4.5h-3v9.75H9.347z"></path>
                </svg>
              </div>
            </div>

            <p className="join-section__text">
              Join 10K+ people working together to make the world a better
              place.
            </p>
          </div>
          <img src={BgDots} alt="Dots" className="join-section__bg" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;

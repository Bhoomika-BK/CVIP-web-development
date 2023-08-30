import React, { useEffect, useState } from "react";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Homecards from "./Homecards";
// import HomeDesc from "./HomeDesc";
// import Footer from "../components/Footer";
// import { db } from "../firebase";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div id="home">
        <div id="about__carousel">
          <Carousel
            autoPlay
            infinteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={3000}
          >
            <div>
              <img
                id="home__image"
                loading="lazy"
                src="https://www.haptik.ai/hubfs/[Blog]%20Chatbots%20in%20Education%20-%20Decoding%20the%20future%20of%20EdTech/AI-powered-Education-Chatbot-for-EdTech.png#keepProtocol"
                alt=""
              />
            </div>
            <div>
              <img
                id="home__image"
                loading="lazy"
                src="https://appdevelopmentcompanies.co/front_assets/img/blog/Edtech-Feature.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                id="home__image"
                loading="lazy"
                src="https://www.pngitem.com/pimgs/m/688-6883335_ai-in-edtech-hd-png-download.png"
                alt=""
              />
            </div>
            <div>
              <img
                id="home__image"
                loading="lazy"
                src="https://www.feedough.com/wp-content/uploads/2020/01/edtech-1-1200x669.png"
                alt=""
              />
            </div>
          </Carousel>
        </div>

        <div className="display__cards">
          <Homecards
            image={
              "https://tse2.mm.bing.net/th?id=OIP.ktUf8j-xhrW_MFqaZjoAOgHaEO&pid=Api&P=0&h=180"
            }
            name="learning"
          />
          <Homecards
            image={
              "https://tse3.mm.bing.net/th?id=OIP._-k0uHQZM5KHPFDWuRFT_wHaE8&pid=Api&P=0&h=180"
            }
            name="practice"
          />
          <Homecards
            image={
              "https://tse4.mm.bing.net/th?id=OIP.SUNepDfqrCaEv2S1IgYNAgHaEM&pid=Api&P=0&h=180"
            }
            name="Activity"
          />
          <Homecards
            image={
              "https://tse4.mm.bing.net/th?id=OIP.F4T4KA5S8Epx-Q0z0ST1dwHaE7&pid=Api&P=0&h=180"
            }
            name="Tests"
          />
          <Homecards
            image={
              "https://tse3.mm.bing.net/th?id=OIP.EVbqPESF1xt33ND64WLlEwHaEf&pid=Api&P=0&h=180"
            }
            name="Courses"
          />
          <Homecards
            image={
              "https://tse4.mm.bing.net/th?id=OIP.xe-zvUkiWM_Y7CsQQP0CAgHaE6&pid=Api&P=0&h=180"
            }
            name="Quiz"
          />
          <Homecards
            image={
              "https://tse2.mm.bing.net/th?id=OIP.-UR--ncWJ6AtKAxhQhCTLQHaDt&pid=Api&P=0&h=180"
            }
            name="Video lectures"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

import "./App.scss";
import logo from "./assets/logo.svg";
import home from "./assets/home.svg";
import arrow from "./assets/arrow.svg";
import starTopLeft from "./assets/star-top-left.svg";
import starBottomLeft from "./assets/star-bottom-left.svg";
import starTopRight from "./assets/star-top-right.svg";
import starBottomRight from "./assets/star-bottom-right.svg";
import {
  contactInfo,
  footerLinks,
  imageCarouselItems,
  imageGridItems,
  secondaryFooterLinks,
  stats,
  textCarouselDescriptions,
  textCarouselTitles,
} from "./data/data";
import { useState } from "react";
import addIcon from "./assets/add.svg";
import arielViewImg from "./assets/pexels-tomfisk-2806489.jpg";
import Socials from "./components/Socials";

function App() {
  const [activeTextCarouselItem, setActiveTextCarouselItem] =
    useState("organic-farm");
  const [inputValue, setInputValue] = useState("");

  const year = new Date()?.getFullYear();
  const textCarouselDescription = textCarouselDescriptions?.find(
    (item) => item.key === activeTextCarouselItem
  )?.description;

  const changeActiveTextCarouselItem = (key) => {
    setActiveTextCarouselItem(key);
  };

  const handleButtonClick = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <header>
            <div className="header-logo">
              <img src={logo} alt="Farmivo" />
              <span>Farmivo</span>
            </div>
            <nav>
              <a href="/">
                <img src={home} alt="home" />
                <span>Home</span>
              </a>
              <a href="/">About Us</a>
              <a href="/">Reviews</a>
              <a href="/">Products</a>
              <a href="/">Blog</a>
            </nav>
            <div className="header-buttons">
              <button>Sign in</button>
              <button>Sign up Free</button>
            </div>
          </header>
          <div style={{ marginTop: 80 }}></div>
          <div className="notification">
            <div></div>
            <span>Top Notch Webinar Platform</span>
          </div>
          <div style={{ marginTop: 24 }}></div>
          <h1 className="hero-heading">Bring Fresh Growth to Agriculture.</h1>
          <p className="hero-description">
            Experience the ultimate golfing journey with expert tips, premium
            gear, and professional insights.
          </p>
          <div style={{ marginTop: 24 }}></div>
          <button className="hero-cta-btn">
            <span>Get Started</span>
            <img src={arrow} role="presentation" />
          </button>
          <p className="hero-bottom-left">The Journey to a Perfection.</p>
          <p className="hero-bottom-right">Book a Free Driving Experience</p>
          <img
            src={starTopLeft}
            alt="star"
            role={"presentation"}
            className="star-top-left"
          />
          <img
            src={starBottomLeft}
            alt="star"
            role={"presentation"}
            className="star-bottom-left"
          />
          <img
            src={starTopRight}
            alt="star"
            role={"presentation"}
            className="star-top-right"
          />
          <img
            src={starBottomRight}
            alt="star"
            role={"presentation"}
            className="star-bottom-right"
          />
        </div>
      </div>
      <div className="stats">
        {stats?.map((each, i) => (
          <div key={i} className="stat-item">
            <h2>{each?.title}</h2>
            <p>{each?.description}</p>
            {i !== 3 && <div></div>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 110 }}></div>
      <div className="text-carousel">
        <div className="text-carousel-left">
          <h2>{year}</h2>
          <div>
            {textCarouselTitles?.map((each, i) => (
              <span
                key={i}
                style={{
                  fontWeight: activeTextCarouselItem === each?.key ? 700 : 500,
                }}
                role={"button"}
                onClick={() => changeActiveTextCarouselItem(each?.key)}
              >
                {each?.title}
              </span>
            ))}
          </div>
        </div>
        <p className="text-carousel-right">{textCarouselDescription}</p>
      </div>
      <div style={{ marginTop: 80 }}></div>
      <div className="image-carousel">
        {imageCarouselItems?.map((each, i) => (
          <div key={i} className="image-carousel-item">
            {each?.key === "organic-fertilizer" && (
              <div className="image-carousel-item-top">
                <p>
                  Get
                  <br />
                  Started Now
                </p>
                <img src={addIcon} alt="add" />
              </div>
            )}
            {each?.key === "bio-medicine-cultivation" && (
              <div style={{ marginTop: 60 }}></div>
            )}
            <img src={each?.image} alt={each?.title} />
            <div className="image-carousel-item-title">
              <span>0{i + 1}</span>
              <span>{each?.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 94 }}></div>
      <div className="full-width-img-section">
        <p>Collaborate and Learn from Industry Experts and Enthusiasts</p>
      </div>
      <div style={{ marginTop: 100 }}></div>
      <div className="text-section">
        <h2>Next-Gen Solutions For Optimal Crop Growth</h2>
        <p>
          We provide cutting-edge services to help farmers maximize crop yields.
          Our precision farming, crop monitoring, and automation solutions aim
          to revolutionize agriculture.
        </p>
      </div>
      <div style={{ marginTop: 80 }}></div>
      <div className="image-grid">
        {imageGridItems?.map((each, i) => (
          <div key={i}>
            <img
              src={each?.image}
              alt={each?.title}
              style={{ height: each?.imageHeight }}
            />
            <h3>{each?.title}</h3>
            <p>{each?.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 124 }}></div>
      <div className="pre-cta">
        <img src={arielViewImg} alt={"ariel view of farm"} />
        <p>
          Changing the Game in Farming with Sustainable Practices and
          CoolTechnologies, Shaping the Future of Agriculture
        </p>
      </div>
      <div style={{ marginTop: 152 }}></div>
      <div className="cta">
        <h2>Join the Agricultural Revolution Today!</h2>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Email address"
          />
          <button onClick={handleButtonClick}>
            <span>Subscribe</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0044 3.414L2.3974 12.021L0.983398 10.607L9.5894 2H2.0044V0H13.0044V11H11.0044V3.414Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div style={{ marginTop: 120 }}></div>
      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="Farmivo" />
              <span>Farmivo</span>
            </div>
            <p className="footer-brand-intro">
              We are custom home builder located in Dallas, TX servicing
              Highland Park, Farmivo & Preston Hollow!
            </p>
            <Socials />
            <div style={{ marginTop: 140 }}></div>
            <h2 className="footer-cta-title">Get In Touch</h2>
            <p className="footer-cta-desc">
              have questions or need assistance?
              <br />
              We&apos;re here to help!
            </p>
            <div class="subscribe-container">
              <input
                type="email"
                class="subscribe-input"
                placeholder="Enter your email"
              />
              <button class="subscribe-button">Subscribe</button>
            </div>
          </div>
          <div className="footer-right">
            <div className="page-links">
              {footerLinks?.map((section, i) => (
                <div key={i} className="page-link-section">
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 140 }}></div>
            <div className="contact-info">
              {contactInfo?.map((item, i) => (
                <div key={i}>
                  <h4>{item.title}</h4>
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-section-secondary">
          <p>&copy; Copyright {year}, All Rights Reserved</p>
          <div>
            {secondaryFooterLinks?.map((each, i) => (
              <a key={i} href="/">
                {each}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

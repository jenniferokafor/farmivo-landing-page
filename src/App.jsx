import { useRef, useState } from "react";

import logo from "./assets/logo.svg";
import home from "./assets/home.svg";
import arrow from "./assets/arrow.svg";
import PreCTA from "./components/PreCta";
import useInView from "./hooks/useInView";
import Socials from "./components/Socials";
import starTopLeft from "./assets/star-top-left.svg";
import starTopRight from "./assets/star-top-right.svg";
import ImageCarousel from "./components/ImageCarousel";
import useHeaderBgScroll from "./hooks/useHeaderBgScroll";
import starBottomLeft from "./assets/star-bottom-left.svg";
import starBottomRight from "./assets/star-bottom-right.svg";
import {
  contactInfo,
  footerLinks,
  imageGridItems,
  secondaryFooterLinks,
  stats,
  textCarouselDescriptions,
  textCarouselTitles,
} from "./data/data";

import "./App.scss";

function App() {
  const [activeTextCarouselItem, setActiveTextCarouselItem] =
    useState("organic-farm");
  const [inputValue, setInputValue] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const isScrolled = useHeaderBgScroll();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const statRef = useRef(null);

  const inView = useInView(statRef, { threshold: 0.5 });
  const leftInView = useInView(leftRef, { threshold: 0.5 });
  const rightInView = useInView(rightRef, { threshold: 0.5 });
  const leftTextInView = useInView(leftTextRef, { threshold: 0.5 });
  const rightTextInView = useInView(rightTextRef, { threshold: 0.5 });

  const year = new Date().getFullYear();
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
    <div className="home">
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header-logo">
          <img src={logo} alt="Farmivo" />
          <span>Farmivo</span>
        </div>
        <nav className="desktop-nav">
          <a href="/">
            <img src={home} alt="home" />
            <span>Home</span>
          </a>
          <a href="/">About Us</a>
          <a href="/">Reviews</a>
          <a href="/">Products</a>
          <a href="/">Blog</a>
        </nav>
        <div className="header-buttons desktop-buttons">
          <button>Sign in</button>
          <button>Sign up Free</button>
        </div>
        <button
          className="hamburger-icon"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      {isMobileNavOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-header">
            <div className="header-logo">
              <img src={logo} alt="Farmivo" />
              <span>Farmivo</span>
            </div>
            <button
              className="close-icon"
              onClick={() => setIsMobileNavOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="mobile-nav-links">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Reviews</a>
            <a href="/">Products</a>
            <a href="/">Blog</a>
          </nav>
          <div className="mobile-nav-buttons">
            <button>Sign in</button>
            <button>Sign up Free</button>
          </div>
        </div>
      )}
      <div className="hero">
        <div className="hero-container">
          <div style={{ paddingTop: 180 }}></div>
          <div className="notification">
            <div></div>
            <span>Empowering Modern Farmers</span>
          </div>
          <div style={{ marginTop: 8 }}></div>
          <h1 className="hero-heading">Cultivating a Greener Future</h1>
          <p className="hero-description">
            Discover cutting-edge farming solutions and sustainable practices
            that empower modern farmers.
          </p>
          <div style={{ marginTop: 24 }}></div>
          <button className="hero-cta-btn">
            <span>Get Started</span>
            <img src={arrow} role="presentation" />
          </button>
          <p
            ref={leftRef}
            className={`hero-bottom-left ${
              leftInView ? "animate-from-left" : ""
            }`}
          >
            The Journey to Better Agriculture.
          </p>
          <p
            ref={rightRef}
            className={`hero-bottom-right ${
              rightInView ? "animate-from-right" : ""
            }`}
          >
            Book a Free Farm Tour
          </p>
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
          <div
            key={i}
            ref={statRef}
            className={`stat-item ${inView ? "animate" : ""}`}
          >
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
      <ImageCarousel />
      <div style={{ marginTop: 94 }}></div>
      <div className="full-width-img-section">
        <p>Collaborate and Learn from Industry Experts and Enthusiasts</p>
      </div>
      <div style={{ marginTop: 100 }}></div>
      <div className="text-section">
        <h2
          ref={leftTextRef}
          className={`${leftTextInView ? "animate-from-left" : ""}`}
        >
          Next-Gen Solutions For Optimal Crop Growth
        </h2>
        <p
          ref={rightTextRef}
          className={`${rightTextInView ? "animate-from-right" : ""}`}
        >
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
      <PreCTA />
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
            <div className="subscribe-container">
              <input
                type="email"
                className="subscribe-input"
                placeholder="Enter your email"
              />
              <button className="subscribe-button">Subscribe</button>
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
    </div>
  );
}

export default App;

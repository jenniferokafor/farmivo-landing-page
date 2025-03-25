import React, { useRef } from "react";

import useInView from "../hooks/useInView";
import arielViewImg from "../assets/pexels-tomfisk-2806489.jpg";

function PreCTA() {
  const preCtaRef = useRef(null);
  const preCtaInView = useInView(preCtaRef, { threshold: 0.1 });

  return (
    <div
      ref={preCtaRef}
      className={`pre-cta ${preCtaInView ? "animate-precta" : ""}`}
    >
      <img loading="lazy" src={arielViewImg} alt="ariel view of farm" />
      <p>
        Changing the Game in Farming with Sustainable Practices and
        CoolTechnologies, Shaping the Future of Agriculture
      </p>
    </div>
  );
}

export default PreCTA;

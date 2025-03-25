import React, { createRef, useMemo } from "react";

import addIcon from "../assets/add.svg";
import useInView from "../hooks/useInView";
import { imageCarouselItems } from "../data/data";

function ImageCarousel() {
  const imageRefs = useMemo(
    () => imageCarouselItems.map(() => createRef()),
    [imageCarouselItems]
  );

  const imageInViewFlags = imageRefs.map((ref) =>
    useInView(ref, { threshold: 0.1 })
  );

  return (
    <div className="image-carousel">
      {imageCarouselItems.map((each, i) => (
        <div
          key={i}
          ref={imageRefs[i]}
          className={`image-carousel-item ${
            imageInViewFlags[i] ? "animate" : ""
          }`}
        >
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
  );
}

export default ImageCarousel;

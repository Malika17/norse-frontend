import React, { useState, useCallback } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import image1 from "../images/slider1.jpg";
import image2 from "../images/slider2.jpg";
import image3 from "../images/slider3.jpg";
import MemoizedImage from "../MemoizedImage"; // Import the memoized image component

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [image1, image2, image3];
  const totalSlides = data.length;

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const sliderStyle = {
    transform: `translateX(-${currentSlide * 100}vw)`,
  };

  return (
    <div className="slider">
      <div className="container" style={sliderStyle}>
        {data.map((img, index) => (
          <MemoizedImage key={index} src={img} alt={`slider-${index + 1}`} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;

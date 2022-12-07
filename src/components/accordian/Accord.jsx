import React, { useState } from "react";
import one from '../assets/one.jpeg'
import two from '../assets/two.jpeg'
import three from '../assets/three.jpeg'
import four from '../assets/four.jpeg'
import '../accordian/Accord.css'
const Accord = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([one, two, three, four])
  const scrollLeft = () => {
    if (selectedImage < allImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }
  const scrollRight = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }
  return (
    <div className="accordian">
      <div className="main-container">
        <img src={allImages[selectedImage]} />
        <div className="navigation-btn">
          <button className="arrow left" onClick={scrollLeft}>←</button>
          <button className="arrow right" onClick={scrollRight}>→</button>
        </div>
      </div>
    </div>

  );
};
export default Accord;

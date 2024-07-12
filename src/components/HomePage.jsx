// src/components/HomePage.js
import React, { useState } from 'react';
import CustomPage from './CustomPage';
import gsap from 'gsap';
import { useEffect } from 'react';

const HomePage = () => {
  const [showCustomPage, setShowCustomPage] = useState(false);

  const handleYesClick = () => {
    setShowCustomPage(true);
  };

  const handleNoClick = () => {
    gsap.set('.btn-no', { rotationX: 0 }); // Reset initial state if needed
    gsap.to('.btn-no', { rotationX: 360, duration: 1 });
  };



  useEffect(() => {
    gsap.to('.home-title',{opacity:1, delay:1.5, y:-50, duration:1})
    gsap.to('.btn',{opacity:1, delay:3, duration:3})
  })


  return (
    <div className="home-main-container">
      {!showCustomPage ? (
        <div className="home-content">
          <h1 className="home-title">Are you Lana?</h1>
          <div className="home-buttons-container">
          <button class="btn" onClick={handleYesClick}> YES
          </button>
          <button class="btn btn-no" onClick={handleNoClick}> NO
          </button>
          </div>
        </div>
      ) : (
        <CustomPage />
      )}
    </div>
  );
};

export default HomePage;

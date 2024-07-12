import React from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';

function CustomePage() {

  useEffect(() => {
    gsap.to('.container',{opacity:1, delay:1.5, y:20, duration:2})
    gsap.to('.text',{opacity:1, delay:3, y:-250, duration:1.5})
  })
  
  return (
    
    <div className='textt'>
      <h1 className='text'>With love from Bogdan</h1>
    <div class="container">
      <div class="glass">
        <div class="shine"></div>
      </div>
      <div class="thorns">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="leaves">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="petals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="deadPetals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
  </div>
  )
}

export default CustomePage

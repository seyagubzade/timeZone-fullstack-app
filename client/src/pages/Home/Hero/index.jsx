import React from 'react'
import "./styles.scss"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="row">
                <div className="col col-md-8 col-lg-8 hero-text">
                    <div className="t">
                        <h2>Select Your New Perfect Style</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tenetur temporibus nemo corrupti enim.</p>
                        <button className='btn hero-btn'>Shop Now</button>
                    </div>
                </div>
                <div className="col col-md-4 col-lg-4" >
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
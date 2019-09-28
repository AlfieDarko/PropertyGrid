import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import face1 from '../images/uiface/image-1.png'
import face2 from '../images/uiface/image-2.png'
import face3 from '../images/uiface/image-3.png'
import face4 from '../images/uiface/image-4.png'


const Header = () => {
    return (

              <div className="container-grid">
        <link href="https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap" rel="stylesheet"/>

        <div className="header__top-left">
          Collepsi Logo
        </div>

        <div className="header__top-right">
          <nav className="header__top-right--nav">

              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">How it works?</a>
              <a href="#">Projects</a>
              <a href="#">Contact Us</a>

          </nav>
        </div>

      <div className="header__main-left">

      </div>
      <div className="header__main-left-section">
        <span className="header__main-left-section--left xl-size"> &lt; </span> 
        <span className="header__main-left-section--right xl-size"> &gt; </span>
        <p className="header__main-left-section--paragraph xxxxl-size">
            An Ugly Myspace Profile Will <br></br> Sure Ruin Your Reputation
        </p>
        <button className="header__btn--main">
            Check More
        </button>

      </div>
      <div className="header__main-left-bottom"> 
        <div className="header__main-right--slide-counter">
          <span className="header__main-right--slide-counter-left">01</span><span className="header__main-right--slide-counter-right">/05</span>
        </div>
      </div>

      
      <div className="header__main-right--small-img">
          <span className="lg-size">
            <FaQuoteLeft color={'white'}/>
          </span>
          <p className="white-text md-size md-lh">
            Maybe you've heard these different marketing terms, 
            maybe you haven't. Either way, let me help to clarify
            the difference between them, because...
          </p>
          <div className="header__main-right--ui-icons">
            <span><img className="header__main-right--display-pic" src={face1} alt=""/></span>
            <span><img className="header__main-right--display-pic" src={face2} alt=""/></span>
            <span><img className="header__main-right--display-pic" src={face3} alt=""/></span>

            <span className="md-size">
              <FaStar color={'yellow'}/>
              <FaStar color={'yellow'}/>
              <FaStar color={'yellow'}/>
              <FaStar color={'yellow'}/>
              <FaStar color={'yellow'}/>

            </span>
          </div>
      </div>
      <div className="header__main-right"></div>
      </div> 

    )
}

export default Header

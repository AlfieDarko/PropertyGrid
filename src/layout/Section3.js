import React from "react";
import img1 from "../images/sec3img1.jpeg";
import img2 from "../images/sec3img2.jpg";
import img3 from "../images/sec3img3.jpg";

const Section3 = () => {
  return (
    <div className="container-grid white-bg padding-top-10">
      <div className="section3__top-header--left">
        <p cntllassName="xxxl-size">How it works?</p>
      </div>
      <div className="section3__top-header--right md-size">
        <p>
          Photographs are a way of preserving a moment in our lives for rest of
          our lives. Many of us have at least been tempted at the flashy...
        </p>
      </div>
      <div className="section3__mid-section-1">
        <div className="section3__mid-section-1--img-container">
          <img src={img1} alt="" />
        </div>
        <div className="section3__mid-section-1--text-container">
          <div className="flex-conainer">
            <div className="grid-container">
              <div className="div-number">01</div>
              <h3 className="mid-section--h3">Brainstorming with Us</h3>
              <p className="p__ white-text md-size md-lh">
                Philosphy is considered a science but it is difficult to say
                when one has to compare with an ordinary science, for example
                biology, or chemistry. This is a question that turns into a
                burning problem among the scientists and liguists all ove the
                world...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3__mid-section-2">
        <div className="section3__mid-section-2--img-container">
          <img src={img2} alt="" />
        </div>
        <div className="section3__mid-section-2--text-container">
          <div className="flex-container">
            <div className="grid-container">
              <div className="section3__mid-section-2--text-container__div-number">
                02
              </div>
              <h3 className="section3__mid-section-2--text-container__mid-section--h3">
                Set Timeline Project
              </h3>
              <p className="p__ white-text md-size md-lh">
                Philosphy is considered a science but it is difficult to say
                when one has to compare with an ordinary science, for example
                biology, or chemistry. This is a question that turns into a
                burning problem among the scientists and liguists all ove the
                world...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3__mid-section-3">
        <div className="section3__mid-section-3--img-container">
          <img src={img3} alt="" />
        </div>
        <div className="section3__mid-section-3--text-container">
          <div className="flex-container">
            <div className="grid-container">
              <div className="section3__mid-section-3--text-container__div-number">
                02
              </div>
              <h3 className="section3__mid-section-3--text-container__mid-section--h3">
                Execution and Dealing
              </h3>
              <p className="p__ white-text md-size md-lh">
                Philosphy is considered a science but it is difficult to say
                when one has to compare with an ordinary science, for example
                biology, or chemistry. This is a question that turns into a
                burning problem among the scientists and liguists all ove the
                world...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

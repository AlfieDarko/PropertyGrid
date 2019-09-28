import React from 'react'
import placeholder from '../images/placeholder-3.png'

const Section2 = () => {
  return (
      <div className="container-grid blue-bg padding-top-10">
        <div className="section2__top--header-text fontsize-5">
            <b>Offerings <br/> for you</b>
        </div>

        <p className="section2__top--header-paragraph white-text fontsize-2">
        Creativity can provide all that which is required to make your advertising 
        on attractive and effective one. Getting your product endorsed with an increase
        in its popularity figure has become quite easy these days with the availability of 
        several.
        </p>

        <div className="section2__middle-1">
          <div className="section2__middle-1--img" > 
            <img src={placeholder} alt=""/>
          </div>
          <h3 className="section2__middle--header white-text fontsize-5 reset-lh">
            Interior<br></br> Design
          </h3>
          <p className="offwhite-text md-size">
            Are you coonosidering buying a compatible inkjet cartridge for your printer? 
            There are many reputed companies like Canon, Epson, Dell and Lexmark that 
            provide the neccessary cartridges to replace the empty...
          </p>
        </div>

        <div className="section2__middle-2">
          <div className="section2__middle-2--img">
            <img src={placeholder} alt=""/>
          </div>
          <h3 className="section2__middle--header white-text fontsize-5 reset-lh">
            Build Property
          </h3>
          <p className="offwhite-text md-size">
            According to the research firm Frost & Sullivan, the estimated size of the North
            American used test and measurement equipment market was $446.4 million in 2004 and import 
            from "estimated to grow to $654.5 million";
          </p>
        </div>

        <div className="section2__middle-3">
          <div className="section2__middle-3--img">
          <img src={placeholder} alt=""/>
          </div>
          <h3 className="section2__middle--header white-text fontsize-5 reset-lh">
            Sketch Property
          </h3>
          <p className="offwhite-text md-size">
            Many conventional colleges and universities are now offering online DVD repair courses,
            which are the exact same as these taught on a traditional college campus, to distance
            learners. Online education is...
          </p>
        </div>

        <div className="section2__middle-4">
          <div className="section2__middle-4--img">
           <img src={placeholder} alt=""/>
          </div>
          <h3 className="section2__middle--header white-text fontsize-5 reset-lh">
            Project Planning
          </h3>
          <p className="offwhite-text md-size">
            Philosophy is considrered a science but it is difficult to say when one has to 
            compare with an ordinary science, for example biology, or chemistry. 
            This is a question that turns into a burning problem amongst ...
          </p>
        </div>
      </div>
  )
}

export default Section2

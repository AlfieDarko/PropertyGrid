import React from 'react'

const Section1 = () => {
    return (
        <div className="container-grid blue-bg">
            <div className="section1__left-header--top blue-bg lightblue-text">
                <div className="fontsize-3 margin-right-8">
                    <b>20</b> 
                    <br></br>
                    Land
                </div>
                <div className="vertical-line"></div>
                <div className="fontsize-3">
                    <b>100+</b> 
                    <br></br>
                    Expert
                </div>
            </div>
            <div className="section1__left-header--bottom blue-bg">
                <h2 className="white-text fontsize-5">The Quality<br/>We Provide</h2>
                <p className="section1__left-header--paragraph">
                    Photographs are a way of preserving a mooment in our lives for the rest of our lives.
                    Many of us have at least been tempted at the flash array of photo printers
                    which seemingly leap off the shelves at even the least.
                </p>
                <button className="section1__btn">
                    Check Our Service
                </button>

            </div>
            <div className="section1__right-header--top-small white-text fontsize-3">
                <b>50+</b>
                <br/>
                Parks
            </div>
            <div className="section1__right-header--middle-large"></div>
            <div className="section1__right-header--bottom-right white-text fontsize-3">
                <b>150</b> 
                <br></br>
                Vehicles
            </div>
        </div>
    )
}

export default Section1

import React from 'react';
// import image1 from "images/icons/apple-tv-logo.png"
import image1 from "../../assets/images/icons/apple-tv-logo.png"
import image3 from "../../assets/images/icons/watch-series5-logo.png"
import image2 from "../../assets/images/home/banker.png"
export default function SectionTwo() {
  return (
    <section className="fifth-highlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={image1} alt="Apple TV Logo" />
                </div>
              </div>

              <div className="tvshow-logo-wrapper">
                <img src={image2} alt="Banker TV Show" />
              </div>

              <div className="watch-more-wrapper">
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={image3} alt="Watch Series 5 Logo" />
                </div>
              </div>
              <div className="description-wrapper">
                With the Always-On Retina display.<br />
                You’ve never seen a watch like this.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li><a href="">Learn more</a></li>
                  <li><a href="">Buy</a></li>
                </ul> 
              </div>
            </div>
          </div>          
        </div>
      </div> 
    </section>
  );
}
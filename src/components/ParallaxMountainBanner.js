import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image1 from "../img/1.png";
import Image2 from "../img/2.png";
import Image3 from "../img/3.png";
import Image4 from "../img/4.png";
import Image5 from "../img/5.png";
import Image6 from "../img/6.png";
import Image7 from "../img/7.png";
import Image8 from "../img/8.png";
import Image9 from "../img/9.png";
import Image10 from "../img/10.png";
import Cloud1Left from "../img/4L.png";
import Cloud1Right from "../img/4R.png";
import Cloud2Left from "../img/5L.png";
import Cloud2Right from "../img/5R.png";
import Cloud3Left from "../img/6L.png";
import Cloud3Right from "../img/6R.png";

const ParallaxMountainBanner = ({ scrollPosition }) => {
  return (
    <ParallaxBanner style={{ aspectRatio: '2 / 1', width: "100vw" }}>
      <ParallaxBannerLayer image={Image10} speed={-15} />
      <ParallaxBannerLayer image={Image9} speed={-15} />
      <ParallaxBannerLayer image={Image8} speed={-15} />
      <ParallaxBannerLayer image={Image7} speed={-5} />
      <ParallaxBannerLayer speed={-15}>
        <div className="center inset">
          <h1 className="headline gray">Parallax Effect</h1>
        </div>
      </ParallaxBannerLayer>
      {/* <ParallaxBannerLayer image={Image6} speed={0} /> */}
      {/* <ParallaxBannerLayer image={Image5} speed={0} /> */}
      {/* <ParallaxBannerLayer image={Image4} speed={0} /> */}

      <ParallaxBannerLayer>
        <div style={{ transform: "translate(150px, 100px)", display: "flex", justifyContent: "space-between", width: "100%", float: "right" }}>
          <img
            style={{
              opacity: 0.95,
              display: "block",
              maxWidth: 550,
              maxHeight: 300,
              width: "auto",
              height: "auto",
              transform: `translate(-${scrollPosition * 0.09}px, 50px)`
            }}
            src={Cloud3Left}
          />
          <img 
            src={Cloud3Right} 
            style={{
              opacity: 0.95,
              display: "block",
              maxWidth: 650,
              maxHeight: 300,
              width: "auto",
              height: "auto",
              transform: `translateX(-${scrollPosition * 0.07}px)`
            }}
          />
        </div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div style={{ transform: "translate(-150px, 190px)", display: "flex", justifyContent: "space-between", width: "100%" }}>
          <img
            style={{
              opacity: 0.95,
              display: "block",
              maxWidth: 650,
              maxHeight: 300,
              width: "auto",
              height: "auto",
              transform: `translateX(${scrollPosition * 0.08}px)`

            }}
            src={Cloud2Left} />

          <img
            style={{
              opacity: 0.95,
              display: "block",
              maxWidth: 650,
              maxHeight: 300,
              width: "auto",
              height: "auto",
              transform: `translate(${scrollPosition * 0.2}px, -50px)`
            }}
            src={Cloud2Right} />
        </div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div style={{ transform: "translate(150px, 130px)", display: "flex", justifyContent: "space-between", width: "100%", float: "right" }}>

          <img style={{
            opacity: 0.95,
            display: "block",
            maxWidth: 450,
            maxHeight: 200,
            width: "auto",
            height: "auto",
            transform: `translate(-${scrollPosition * 0.4}px, 100px)`
          }} src={Cloud1Left} />

          <img style={{
            opacity: 0.95,
            display: "block",
            maxWidth: 650,
            maxHeight: 300,
            width: "auto",
            height: "auto",
            transform: `translateX(-${scrollPosition * 0.3}px)`
          }} src={Cloud1Right} />
        </div>
      </ParallaxBannerLayer>


      {/* <ParallaxBannerLayer className="cloud" image={Cloud1Right} />
      <ParallaxBannerLayer className="cloud" image={Cloud2Left} />
      <ParallaxBannerLayer className="cloud" image={Cloud2Right} />
      <ParallaxBannerLayer className="cloud" image={Cloud3Left} />
      <ParallaxBannerLayer className="cloud" image={Cloud3Right} /> */}


      {/* <ParallaxBannerLayer className="blur-background" /> */}
      <ParallaxBannerLayer image={Image3} speed={-15} />
      <ParallaxBannerLayer image={Image2} speed={-5} />
      <ParallaxBannerLayer image={Image1} speed={10} />
    </ParallaxBanner>
  )
}

export default ParallaxMountainBanner
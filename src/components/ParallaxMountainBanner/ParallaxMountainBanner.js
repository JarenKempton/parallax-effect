import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image1 from "../../img/1.png";
import Image2 from "../../img/2.png";
import Image3 from "../../img/3.png";
import Image7 from "../../img/7.png";
import Image8 from "../../img/8.png";
import Image9 from "../../img/9.png";
import Image10 from "../../img/10.png";

import ParallaxClouds from './ParallaxClouds';

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

      <ParallaxClouds scrollPosition={scrollPosition} />

      {/* <ParallaxBannerLayer className="blur-background" opacity={[-2, 1.5]} /> */}

      <ParallaxBannerLayer image={Image3} speed={-15} />
      <ParallaxBannerLayer image={Image2} speed={-5} />
      <ParallaxBannerLayer image={Image1} speed={10} />
    </ParallaxBanner>
  )
}

export default ParallaxMountainBanner
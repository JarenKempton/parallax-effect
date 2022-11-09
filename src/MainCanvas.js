import { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Mountains from "./img/placeholder-mtns.png";
import OtherMountains from "./img/placeholder-mtns-2.png";
import Trees from "./img/placeholder-trees.webp";
import Cloud from "./img/cloud.png"
import Image1 from "./img/1.png";
import Image2 from "./img/2.png";
import Image3 from "./img/3.png";
import Image4 from "./img/4.png";
import Image5 from "./img/5.png";
import Image6 from "./img/6.png";
import Image7 from "./img/7.png";
import Image8 from "./img/8.png";
import Image9 from "./img/9.png";
import Image10 from "./img/10.png";

import "./index.css";

const MainCanvas = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(Math.floor(position));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollPosition);

    return (
        <div>
            <div style={{height: 100, width: "100%", backgroundColor: "#B7E4E5"}}></div>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image={Image10} speed={-30} />
                <ParallaxBannerLayer image={Image9} speed={-25} />
                <ParallaxBannerLayer image={Image8} speed={-20} />
                <ParallaxBannerLayer image={Image7} speed={-15} />
                <ParallaxBannerLayer>
                    <div className="center inset" style={{transform: `translateX(${1200 - (scrollPosition * 5)}px)`}}>
                        <h1 className="headline gray">Parallax Effect</h1>
                    </div>
                </ParallaxBannerLayer>
                <ParallaxBannerLayer image={Image6} speed={0} />
                <ParallaxBannerLayer image={Image5} speed={0} />
                <ParallaxBannerLayer image={Image4} speed={0} />
                <ParallaxBannerLayer image={Image3} speed={-10} />
                <ParallaxBannerLayer image={Image2} speed={-5} />
                <ParallaxBannerLayer image={Image1} speed={10} />
            </ParallaxBanner>
            <div className="content-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Imperdiet massa tincidunt nunc pulvinar sapien et. Duis at tellus at urna condimentum mattis. Rhoncus est pellentesque elit ullamcorper dignissim. Tincidunt id aliquet risus feugiat in ante metus. Integer vitae justo eget magna fermentum iaculis. Arcu non odio euismod lacinia at quis risus sed vulputate. Cursus sit amet dictum sit amet.
                <br />
                <br />
                Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Ut diam quam nulla porttitor massa id neque. Gravida quis blandit turpis cursus in hac. Duis tristique sollicitudin nibh sit amet. Mauris vitae ultricies leo integer malesuada nunc vel. Posuere sollicitudin aliquam ultrices sagittis orci a. Tellus molestie nunc non blandit massa enim nec dui. Tortor at auctor urna nunc id. Consectetur a erat nam at lectus urna duis. Sem nulla pharetra diam sit amet. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.

            </div>
        </div>
    );
};

export default MainCanvas;
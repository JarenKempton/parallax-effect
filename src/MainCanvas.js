import { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Mountains from "./img/placeholder-mtns.png";
import OtherMountains from "./img/placeholder-mtns-2.png";
import Trees from "./img/placeholder-trees.webp";
import Cloud from "./img/cloud.png"
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
        <div style={{ marginTop: 100, paddingBottom: 1000 }}>

            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image={Mountains} speed={-20} />
                <ParallaxBannerLayer speed={-15}>
                    <div className="inset center">
                        <h1 className="headline white">Parallax Effect</h1>
                    </div>
                </ParallaxBannerLayer>
                <ParallaxBannerLayer image={Trees} speed={15} />
                <ParallaxBannerLayer>
                    <div style={{ display: "flex", justifyContent: "center", overflow: "visible", marginTop: 90 }}>
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", alignItems: "flex-start" }}>
                            <img src={Cloud} style={{ transform: `scale(1.5) translateX(-${scrollPosition * 0.1}px)`, marginTop: 95 }} />
                            <img src={Cloud} style={{ transform: `translateX(${scrollPosition * 0.5}px)` }} />
                        </div>
                    </div>
                </ParallaxBannerLayer>
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
import { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer, Parallax } from "react-scroll-parallax";
import { faker } from "@faker-js/faker";
import CardGallery from "./components/CardGallery";
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
import loop from "./helpers/loop";

const MainCanvas = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [imageURLs, setImageURLs] = useState([]);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(Math.floor(position));
    };
    useEffect(() => {
        const urlArray = fetchImages(32, 500, 300);
        setImageURLs([...urlArray]);
    }, [])

    const fetchImages = (qty, width, height) => {
        const urlArray = []
        loop(qty, () => {
            const url = faker.image.city(width, height, true);
            urlArray.push(url);
        });
        return urlArray;
    }
    console.log(imageURLs);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollPosition);

    return (
        <div>
            {/* <div style={{height: 100, width: "100%", backgroundColor: "#B7E4E5"}}></div> */}
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height: "130vh" }}>
                <ParallaxBannerLayer image={Image10} speed={-30} />
                <ParallaxBannerLayer image={Image9} speed={-25} />
                <ParallaxBannerLayer image={Image8} speed={-20} />
                <ParallaxBannerLayer image={Image7} speed={-15} />
                <ParallaxBannerLayer className="blur-background" opacity={[-0.9, 1]} style={{}} />
                <ParallaxBannerLayer>
                    <div className="center inset" style={{ transform: `translateX(${1400 - (scrollPosition * 8)}px)` }}>
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
                <h1 className="center" style={{ fontSize: 50, fontFamily: "sans-serif" }}>Gallery</h1>
                <CardGallery imageURLs={imageURLs} />
            </div>
        </div>
    );
};

export default MainCanvas;
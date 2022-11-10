import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import CardGallery from "./components/CardGallery";


import "./index.css";
import loop from "./helpers/loop";
import ParallaxMountainBanner from "./components/ParallaxMountainBanner";

const MainCanvas = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [imageURLs, setImageURLs] = useState([]);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(Math.floor(position));
    };
    useEffect(() => {
        setImageURLs([...fetchImages(32, 500, 300)]);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const fetchImages = (qty, width, height) => {
        const urlArray = []
        loop(qty, () => {
            const url = faker.image.nature(width, height, true);
            urlArray.push(url);
        });
        return urlArray;
    }

    return (
        <div>
            <div style={{ height: "100vh", display: "flex", alignItems: "flex-start" }}>
                <ParallaxMountainBanner scrollPosition={scrollPosition} />
            </div>
            <div className="content-body">
                <h1 className="center" style={{ fontSize: 50, fontFamily: "sans-serif" }}>
                    Portfolio
                </h1>
                <CardGallery imageURLs={imageURLs} />
            </div>
        </div>
    );
};

export default MainCanvas;
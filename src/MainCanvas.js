import { useEffect, useState } from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Mountains from "./img/placeholder-mtns.png";
import Trees from "./img/placeholder-trees.webp";
import Cloud from "./img/cloud.png"

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
        <div style={{ height: "200vh", backgroundColor: "red", marginTop: 300 }}>

            {/* <Parallax
                speed={-50}
                translateX={["400px", "-700px"]} 
                style={{ backgroundColor: "green", width: "fit-content", height: "fit-content" }}
            >
                <img style={{ transform: "scale(2)" }} src={Cloud} />
            </Parallax>

            <Parallax
                speed={-60}
                translateX={["350%", "590%"]}
                style={{ backgroundColor: "orange", width: "fit-content", height: "fit-content", right: "100%" }}
            >
                <img style={{ transform: "scale(1.5)" }} src={Cloud} />
            </Parallax> */}
            <div style={{display: "flex", justifyContent: "center"}}>

            <div style={{display: "flex", backgroundColor: "orange", height: 250, width: `${900 + (scrollPosition * 4.5)}px`, justifyContent: "space-between", alignItems: "flex-start" }}>
                <img src={Cloud} style={{transform: "scale(1.5)", marginTop: 95, backgroundColor: "aquamarine"}} />
                <img src={Cloud} style={{backgroundColor: "purple"}} />
            </div>
            </div>
        </div>
    );
};

export default MainCanvas;
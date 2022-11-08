import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Mountains from "./img/placeholder-mtns.png";
import Trees from "./img/placeholder-trees.webp";
import Cloud from "./img/cloud.png"

const MainCanvas = () => {
    return (
        <div style={{ height: "200vh", backgroundColor: "red", marginTop: 300 }}>

            <Parallax
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
            </Parallax>
        </div>
    );
};

export default MainCanvas;
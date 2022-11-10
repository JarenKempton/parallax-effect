import React from 'react'
import { ParallaxBannerLayer } from "react-scroll-parallax";
import Cloud1Left from "../img/4L.png";
import Cloud1Right from "../img/4R.png";
import Cloud2Left from "../img/5L.png";
import Cloud2Right from "../img/5R.png";
import Cloud3Left from "../img/6L.png";
import Cloud3Right from "../img/6R.png";

const ParallaxClouds = ({ scrollPosition }) => {
    const styles = {
        cloudsSmall: {
            opacity: 0.95,
            display: "block",
            maxWidth: 550,
            maxHeight: 200,
            width: "auto",
            height: "auto",
        },
        cloudsLarge: {
            opacity: 0.95,
            display: "block",
            maxWidth: 650,
            maxHeight: 300,
            width: "auto",
            height: "auto",
        },
        cloudsContainer: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        }
    }
    return (
        <>
            <ParallaxBannerLayer>
                <div
                    style={{
                        ...styles.cloudsContainer,
                        transform: "translate(150px, 100px)",
                        float: "right"
                    }}
                >
                    <img
                        style={{
                            ...styles.cloudsSmall,
                            transform: `translate(-${scrollPosition * 0.09}px, 50px)`
                        }}
                        src={Cloud3Left}
                    />
                    <img
                        src={Cloud3Right}
                        style={{
                            ...styles.cloudsLarge,
                            transform: `translateX(-${scrollPosition * 0.07}px)`
                        }}
                    />
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer>
                <div
                    style={{
                        ...styles.cloudsContainer,
                        transform: "translate(-150px, 190px)"
                    }}
                >
                    <img
                        style={{
                            ...styles.cloudsSmall,
                            transform: `translateX(${scrollPosition * 0.8}px)`

                        }}
                        src={Cloud2Left} />

                    <img
                        style={{
                            ...styles.cloudsLarge,
                            transform: `translate(${scrollPosition * 0.2}px, -50px)`
                        }}
                        src={Cloud2Right} />
                </div>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer>
                <div
                    style={{
                        ...styles.cloudsContainer,
                        transform: "translate(150px, 130px)",
                        float: "right"
                    }}
                >
                    <img style={{
                        ...styles.cloudsSmall,
                        transform: `translate(-${scrollPosition * 0.4}px, 50px)`
                    }} src={Cloud1Left} />

                    <img style={{
                        ...styles.cloudsLarge,
                        transform: `translateX(-${scrollPosition * 0.3}px)`
                    }} src={Cloud1Right} />
                </div>
            </ParallaxBannerLayer>
        </>
    )
}

export default ParallaxClouds
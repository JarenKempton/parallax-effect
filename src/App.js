import { useEffect, useState } from "react";
import CardGallery from "./components/CardGallery";
import "./index.css";
import ParallaxMountainBanner from "./components/ParallaxMountainBanner";
import fetchImages from "./helpers/fetchImages";

const App = () => {
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

export default App;
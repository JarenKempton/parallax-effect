import { ParallaxProvider } from 'react-scroll-parallax';
import MainCanvas from "./MainCanvas";

const App = () => {
  return (
    <ParallaxProvider>
      <MainCanvas />
    </ParallaxProvider>
  );
}

export default App;
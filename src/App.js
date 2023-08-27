import About from "./Components/About/About";
import BannerIntro from "./Components/BannerIntro/BannerIntro";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Partfolio from "./Components/Portfolio/Partfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import Popup from "./Components/Portfolio/Popup";
import { userContext } from "./Context/userContext";
import Design from "./Components/Design/Design";

function App() {
  const [isVideo, setIsVideo] = useState(false);
  const [URL, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadVideoHandler = (url) => {
    setIsVideo(!isVideo);
    setURL(url);
    console.log(URL);
  };

  const isLoadingHandler = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    isLoadingHandler();

    console.log(isLoading);
  }, []);

  return (
    <div className={`text-white`}>
      <userContext.Provider
        value={{ isVideo, setIsVideo, loadVideoHandler, URL }}
      >
        <Popup isVideo={isVideo} setIsVideo={setIsVideo} URL={URL}>
          <h3>My popup</h3>
        </Popup>
        <Navbar className="" />
        <BannerIntro />
        <div className={`${isLoading && "hidden"}`}>
          <div className="bg-image2 bg-cover -mt-1 scroll-smooth">
            <About />
            <Skills />
            <Partfolio loadVideoHandler={loadVideoHandler} />
            <Design />
          </div>
          <Footer />
        </div>
      </userContext.Provider>
    </div>
  );
}

export default App;

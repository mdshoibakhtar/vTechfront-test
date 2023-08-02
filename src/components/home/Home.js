import SliderPage from "../../pages/slider";
import SliderComp from "../slider/Slider";
import AboutUs from "./about/AboutUs";
import Banner from "./banner/Banner";
import OurClientele from "./clientele/OurClientele";
import OurProduct from "./ourProduct/OurProduct";
import Service from "./services/Service";

function Home() {
  return (
    <>
      <SliderPage />
      {/* <SliderComp /> */}
      <AboutUs />
      <Service />
      <OurProduct />
      <OurClientele />
    </>
  );
}
export default Home;

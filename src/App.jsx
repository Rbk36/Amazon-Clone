import "./App.css";
// import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselEffect from "./components/Carousel/CarouselEffect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import Landing from "./pages/Landing/Landing";
import LayOut from "./components/LayOut/LayOut";

function App() {
  return (
    <>
      {/* <Header /> */}
      <LayOut />
      <Landing />
    </>
  );
}

export default App;

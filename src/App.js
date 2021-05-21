import Slider from "react-slick";
import Header from "./components/header";
import Sliders from "./components/hero-slider";
// import Hero from "./components/hero";
import Home from "./components/home";
import Monthly from "./components/monthly";
import './index.scss';

function App() {
  return (
    <div className='App container'>
     <div className='app__header'>
     <Header/>
     <Home/>
     </div>
     <Sliders/>
     <Monthly/>
    </div>
  );
}

export default App;

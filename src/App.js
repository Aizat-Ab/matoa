import React from 'react';
import Footer from './components/footer';
import Header from "./components/header";
import Sliders from "./components/hero-slider";
import Hero from "./components/hero";
import Home from "./components/home";
import Instagram from './components/instagram';
import Invest from './components/invest';
import Monthly from "./components/monthly";
import Recent from './components/recent';
import SecondSection from './components/secondSection';
import Series from './components/series';
import TesSlider from './components/testimonial\'sSlider';
import Testimonials from './components/testimonials';
import './index.scss';

function App() { 
  return (
    <div className='App container'>
     <div className='app__header'>
     <Header/>
     <Home/>
     </div>
     <Sliders/>
     <SecondSection/>
    <div className='row'>
    <Monthly/>
    </div>
     <Recent/>
     <Series/>
     <TesSlider/>
     <Instagram/>
     <Invest/>
     <Footer/>
    </div>
  );
}

export default App;

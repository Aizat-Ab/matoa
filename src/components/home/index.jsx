import React from 'react';
import Sliders from '../hero-slider/index';
import Instagram from '../instagram';
import Invest from '../invest';
import Monthly from '../monthly';
import Recent from '../recent';
import SecondSection from '../secondSection';
import Series from '../series';
import TesSlider from '../testimonial\'sSlider';
import './index.scss';

const Home = () => {
    return (
        <div>
        <Sliders/>
        <SecondSection/>
        <Monthly/>
        <Recent/>
        <Series/>
        <TesSlider/>
        <Instagram/>
        <Invest/>
        </div>
    )
}

export default Home;

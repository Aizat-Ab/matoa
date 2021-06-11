import React from 'react';
import Header from '../header';
import Sliders from '../hero-slider/index';
import Instagram from '../instagram';
import Invest from '../invest';
import Monthly from '../monthly';
import Recent from '../recent';
import SecondSection from '../secondSection';
import Series from '../series';
import TesSlider from '../testimonial\'sSlider';
import './index.scss';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    
    return (
        <div>
        <div className='container'>
        <Header/>
        <Sliders/>
        <SecondSection/>
        <Monthly/>
        <Recent/>
        <Series/>
        <TesSlider/>
        <Instagram/>
        </div>
        <Invest/>
        </div>
        
    )
}

export default Home;

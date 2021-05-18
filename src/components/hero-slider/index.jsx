import React from 'react';
import Hero from '../hero';
import './index.scss';
//Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
//img
import watch1 from '../../assets/watch/watch1.png';
import watch from '../../assets/hero/watch.png';

const Sliders = () => {
    const settings = {
        dots: false,
        fade: false,
        infinte: true,
        speed: 500,
        slidesToShow:1,
        arrow: true,
        slidesToScroll:1,
        className:'slides'
    }
    return (
        <div>
            <Slider {...settings}>
            <Hero img={watch}/>
            <Hero img={watch1}/>
            <Hero img={watch}/>
            </Slider>
        </div>
    )
}

export default Sliders;

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
            <Hero 
            id = {1}
            text ='JACQUES LEMANS - This wood is chosen to represent the Sumatran Rhino skin which is designed with an overlap.'
            title='JACQUES LEMANS' 
            img={watch}
            price={12000}
            oldPrice={1500}/>
            <Hero 
            id = {2}
            text ='MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino skin which is designed with an overlap effect on its strap to represent'
            title='WAY KAMBAS MINI EBONY' 
            img={watch1}
            price={8000}
            oldPrice={10000}/>
            <Hero 
            id = {3}
            text ='PIERRE LANNIER - skin which is designed with an overlap effect on its strap to represent'
            title='PIERRE LANNIER' 
            img={watch}
            price= {9400}
            oldPrice={11000}
            />
            </Slider>
        </div>
    )
}

export default Sliders;

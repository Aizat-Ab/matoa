import React from 'react';
import Testimonials from '../testimonials';
//Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TesSlider = () => {
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
            <Testimonials
            text={'Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.'}
            name={'Gita Savitri'}
            job={'Content Creator/Influencer'}/>
            <Testimonials
            text={'Like any other Matoa products, KAILI is inspired by Indonesian heritage.'}
            name={'Gita Savitri'}
            job={'Content Creator/Influencer'}/>
            <Testimonials
            text={'Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material.'}
            name={'Gita Savitri'}
            job={'Content Creator/Influencer'}/>
            </Slider>
            
        </div>
    )
}

export default TesSlider

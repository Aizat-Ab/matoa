import React from 'react';
import './index.scss';
import testimonials1 from '../../assets/testimonials/testimonials.png'

const Testimonials = ({text,name,job}) => {
    return (
        <div className='testimonials row'>
            <div className='testimonials__left'>
                <img src={testimonials1} alt="" />
            </div>
            <div className='testimonials__right'>
                <p className='testimonials__title'>Testimonials</p>
                <p className='testimonials__text'>{text}</p>
                <p className='testimonials__name'>{name}</p>
                <p className='testimonials__job'>{job}</p>
            </div>
        </div>
    )
}

export default Testimonials;

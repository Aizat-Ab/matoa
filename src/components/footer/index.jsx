import React from 'react';
import './index.scss';
import footer__logo from '../../assets/footer/logo.png';
import facebook from '../../assets/footer/facebook.svg';
import instagram from '../../assets/footer/instagram.svg';
import twitter from '../../assets/footer/twitter.svg';
import youtube from '../../assets/footer/youtube.svg';

const Footer = () => {
    return (
        <div className='footer row'>
            <div className='footer__col1'>
                <img src={footer__logo} alt="" />
                <p className='footer__address'>Address</p>
                <p className='footer__text'>Store & Office
Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152</p>
                <p className='footer__hour'>Office Hour</p>
                <p className='footer__time'>Monday - Sunday
10.00 - 18.00</p>
            </div>
            <div className='footer__col2'>
                <p className='footer__title'>Get in touch</p>
                <div className='row'>
                <ul className='footer__ul'>
                    <li>Phone</li>
                    <li>Service Center</li>
                    <li>Customer
                        Service</li>
                </ul>
                <ul className='footer__number'>
                    <li>022-20277564</li>
                    <li>0811-233-8899</li>
                    <li>0811-235-9988</li>
                </ul>
                </div>
                <div className='footer__icon'>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={instagram} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                </div>
            </div>
            <div className='footer__col3'>
            <p className='footer__title'>Useful Link</p>
            <ul>
                <a href=""><li>Warranty & Complaints</li></a>
                <a href=""><li>Order & Shippin</li></a>
                <a href=""><li>Tracking Order</li></a>
                <a href=""><li> About Us</li></a>
                <a href=""><li> Repair </li></a>
                <a href=""><li>Terms</li></a>
                <a href=""><li>FAQ</li></a>
            </ul>
            </div>
            <div className='footer__col4'>
            <p className='footer__title'>Campaign</p>
            <ul>
                <a href=""><li>Mengenal Arti Cukup</li></a>
                <a href=""><li>Tell Your Difference</li></a>
                <a href=""><li>Waykambas</li></a>
                <a href=""><li>Rebrand</li></a>
                <a href=""><li>Gallery</li></a>
                <a href=""><li>Singo</li></a>
                <a href=""><li>Rakai</li></a>
            </ul>
            </div>
        </div>
    )
}

export default Footer;

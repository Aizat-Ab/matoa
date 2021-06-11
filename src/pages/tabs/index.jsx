import classNames from 'classnames';
import React from 'react';
import Way from '../Way';
import './index.scss';
import detail from '../../assets/detail.png';
//img 
import custom1 from '../../assets/custom1.png';
import custom2 from '../../assets/custom2.png';
import watch from '../../assets/way/image1.png';
import image1 from '../../assets/adjust/image1.png';
import image2 from '../../assets/adjust/image2.png';
import image11 from '../../assets/adjust/image11.png';
import image12 from '../../assets/adjust/image12.png';
import image13 from '../../assets/adjust/image13.png';
import image14 from '../../assets/adjust/image14.png';
import care1 from '../../assets/care/care1.png';
import care2 from '../../assets/care/care2.png';
import care3 from '../../assets/care/care3.png';
import care4 from '../../assets/care/care4.png';
import gallery1 from '../../assets/gallery/gallery1.png';
import gallery2 from '../../assets/gallery/gallery2.png';
import gallery3 from '../../assets/gallery/gallery3.png';
import Header from '../../components/header';

const Tabs = () => {
    const tabs = ['Detail','Warranty','Custom Engrave','How to Adjust','How to Care','Gallery'];
    const [tab, setTab] = React.useState(0);
    const [toggleState, settoggleState] = React.useState(0);
    const click = (i)=>{
        setTab(i);
        settoggleState(i);
    }
    
    return (
        <div className='tabs container'>
            <Header/>
            <Way
            id = {1}
            text ='JACQUES LEMANS - This wood is chosen to represent the Sumatran Rhino skin which is designed with an overlap.'
            title='JACQUES LEMANS' 
            img={watch}
            price={12000}
            oldPrice={1500}
            />
            <ul className='tabs__navWords'>
            {tabs.map((item,index)=>{
                return <li className={classNames({
                    active : index === tab
                })} onClick={()=>click(index)}>{item}</li>
            })}
            </ul>
            <hr />
            <div className={toggleState === 0 ? 'activeContent' : 'tabs__detail'}>
            <p className='tabs__name'>Material</p>
            <p className='tabs__text'>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</p>
            <p className='tabs__name'>Case</p>
            <p className='tabs__text'>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</p>
            <p className='tabs__name'>Movement</p>
            <p className='tabs__text'>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</p>
            <p className='tabs__name'>Dial</p>
            <p className='tabs__text'>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</p>
            <p className='tabs__name'>Hand</p>
            <p className='tabs__text'>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</p>
            <p className='tabs__name'>Important to Note</p>
            <p className='tabs__text'>Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</p>
            <img className='tabs__clock' src={detail} alt="" />
            </div>
            <div className={toggleState === 1 ? 'activeContent' : 'tabs__warranty'}>
            <p className='tabs__name'>Matoa Guarantee</p>
            <p className='tabs__text'>Thank you for choosing MATOA and joining us in experimenting with nature.</p>

            <p className='tabs__text'>Your MATOA watch has a warranty period of 1 year after purchase through the Website, Customer Service and Stockist. Here are some things you need to know about the one year warranty from MATOA:</p>
            <p className='tabs__text'>For a 1 year warranty only applies to the movement of the body and chain warranty is valid for 6 months</p>
            <p className='tabs__name'>Improper Use and Damage</p>
            <p className='tabs__text'>This warranty covers defects in material or workmanship. We will also repair damage to the watch due to personal errors such as broken body due to certain cases, exposure to excessive water, damage to the engine, etc. The warranty does not apply with respect to a product that has been disassembled or repaired by a different owner or person.</p>
            <p className='tabs__name'>Have a Valid Proof of Payment</p>
            <p className='tabs__text'>This guarantee is effective if you include a purchase receipt or warranty card. During the warranty period, you have the right to repair your watch free of charge.</p>
            <p className='tabs__text'>If you experience any problems with your watch, please visit the 'Service Center' on our website and fill out the form. We'll call you to confirm and tell you to follow the next instructions.</p>
            </div>
            <div className={toggleState === 2 ? 'activeContent' : 'tabs__custom'}>
            <p className='tabs__link'>https://www.youtube.com/watch?v=GpG_f9eSj4Q</p>
            <img src={custom1} alt="" />
            <p className='tabs__section'>How to choose text for engraving on a watch</p>
            <div className='tabs__item row'>
            <img src={custom2} alt="" />
            <div className='tabs__right'>
                <p>Engraving a watch is a great way to make a gift unique and add meaning to it with your chosen phrase, but only if you know what to write. It is often difficult to find the right words:</p>
                <p>Engraving a watch is a great way to make a gift unique and add meaning to it with your chosen phrase, but only if you know what to write. It is often difficult to find the right words:</p>
                <p>The choice of text for engraving on a gift watch depends on the occasion and personality of the recipient of the present: the same inscription will not work at the same time for a beloved man and a school teacher, for a grown-up son and a strict boss. It is important to consider:</p>
                <p>the age of the future owner of the watch;
character and sense of humor;
status and position in society;
the degree of closeness between you;
the attitude of a person to everything foreign, if you are going to make an inscription in a foreign language.</p>
            </div>
            </div>
            </div>
            <div className={toggleState === 3 ? 'activeContent' : 'tabs__adjust'}>
                <p>https://www.youtube.com/watch?v=I6UC6xZ3wpA&t=1s</p>
                <img src={watch} alt="" />
                <p>How to Adjust</p>
                <div className='row'>
                    <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    </div>
                    <div>
                         <p>Matoa is a masterpiece of Indonesia</p>
                         <p>A creation of youth, collaboration of art, creativity and technology which create an eco-friendly products. With 99% of local content, MATOA transforms wood into a revolutionary product that takes care the Earth. It’s us, being a human nature.</p>
                         <p>Time Setting</p>
                         <p>Pull the crown out
Turn the crown to set the hour and minute hands to the desired time
The small second will stop working when the crown pulled and it will     be working when the crown in normal position
Return the crown to beginning position</p>
                        <p>Adjusting The Watch Size</p>
                        <p>Push the pin out with a metallic pusher
Adjust your wood watch size
Return the pin to starting position</p>
                    </div>
                </div>
                <hr />
                <div>
                    <img src={image11} alt="" /> 
                    <img src={image12} alt="" /> 
                    <img src={image13} alt="" /> 
                    <img src={image14} alt="" /> 
                </div>
            </div>
            <div className={toggleState === 4 ? 'activeContent' : 'tabs__care'}>
                <p>https://www.youtube.com/watch?v=4YtPe9hXbmI</p>
                <img src={care1} alt="" />
                <div className='row'>
                    <p>HOW TO CARE</p> 
                    <div>
                        <p>EASY STEPS TO CARE FOR YOUR MATOA WATCH</p>
                        <p>Matoa is the pioneer brand of wooden watch in Indonesia which has been made not only to complement your appearance, but also has a functional value and authentic design for the holder. We know you want MATOA to be last as soon as you put it on your wrist. So here are a few steps to care for it.</p>
                    </div>
                </div>
                <div className='row'>
                    <img src={care2} alt="" /> 
                    <div>
                        <p>Unlike wooden furniture, MATOA doesn’t require any particular wood polish to emphasize the richness of brown woods. You can use olive oil (for massage) to clean your timepiece as seen on the video.</p>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p>WEAR YOUR MATOA AS OFTEN AS POSSIBLE</p>
                        <p>By wearing MATOA every day, you’ll make your own MATOA more comfortable to use. Plus the pattern and the wood on your MATOA will be more mature and have an exclusive look.</p>
                    </div>
                    <img src={care3} alt="" /> 
                </div>
                <div className='row'>
                <img src={care4} alt="" /> 
                    <div>
                        <p>MATOA IS SPLASH PROOF
WEAR YOUR MATOA AS OFTEN AS POSSIBLE</p>
                        <p>Do not use your MATOA while swimming or showering. But you shouldn’t be worried to wash your hand or get splashed with water as MATOA has splash proof technology.</p>
                    </div>
                    
                </div>
            </div>
            <div className={toggleState === 5 ? 'activeContent' : 'tabs__gallery'}>
                 <div className='row'>
                     <div>
                         <p>#MengenalArtiCukup</p>
                        <img src={gallery1} alt="" />
                        <img src={gallery2} alt="" />
                        <img src={gallery3} alt="" />
                     </div>
                     <div>
                        <p>We gathered people to share about what "enough" means to them & how they enjoy your life by living the word "enough". These are the stories submitted by them through our website or email. Thank you for your enthusiasm towards #MengenalArtiCukup campaign.</p>
                        <p>Dhea Sekar - 20, Yogyakarta
dheasekarm
p</p>
                        <p>We gathered people to share about what "enough" means to them & how they enjoy your life by living the word "enough". These are the stories submitted by them through our website or email. Thank you for your enthusiasm towards #MengenalArtiCukup campaign.</p>
                        <p>Ajeng - 25, Yogyakarta
ajeng_k_dewi</p>
                        <p>Bagi saya arti kata cukup adalah genap dan melengkapi. Cara saya untuk menikmati kata cukup iyalah dengan cara saya menutup mata dan bisa merasakan keindahan dunia tanpa harus melihatnya, seperti O2 yang dihirup, wangi bunga bermekaran, aroma nikmat masakan ibu, kicau burung di pagi hari, lembutnya tangan ibu, semua bisa saya rasakan dengan hati.</p>
                        <p>Louise Vania - 24, Surabaya
louisevania18</p>
                        <p>CUKUP. Tidak lebih, tidak kurang. Pas, tepat sesuai takaran. Bagi saya, Cukup itu saat saya dapat membuka mata di pagi hari, dan memulai hari dengan mensyukuri bahwa saya diberi kesempatan sekali lagi untuk hidup dari Sang Pencipta, mengetahui bahwa tugas saya di dunia masih belum selesai.....</p>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Tabs;

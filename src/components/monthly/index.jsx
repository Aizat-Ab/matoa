import React from 'react';
import './index.scss';
import Watch from '../watch';
import watch3 from '../../assets/monthly.png';
//img
import monthly1 from '../../assets/monthly/monthly1.png';
import monthly2 from '../../assets/monthly/monthly2.png';
import monthly3 from '../../assets/monthly/monthly3.png';
import monthly4 from '../../assets/monthly/monthly4.png';

const Monthly = () => {

    // const [watch, setWhatches] = React.useState([]);
    // React.useEffect(async()=>{
    //     const responce = await axios.get('http://localhost:3000/dataBase.json');
    //     setWhatches(responce.data.watches);
    //   },[]); 
  
    return (
        <div className='monthly'>
            <p className='monthly__section'>Monthly Deals</p>

        <div className='monthly__wrap'>
                <Watch 
                name={'Singo Maple'}
                imageUrl={monthly1}
                newPrice={1.264000} 
                oldPrice={1.500000}/>
                <Watch 
                name={'Singo Ebony'}
                imageUrl={monthly2}
                newPrice={1.500000} 
                oldPrice={1.500000}/>
                <Watch 
                name={'Rakai Ebony'}
                imageUrl={monthly3}
                newPrice={1.264000} 
                oldPrice={1.118000}/>
                <Watch 
                name={'Way Kambas Mini Maple'}
                imageUrl={monthly4}
                newPrice={1.264000} 
                oldPrice={1.024000}/>
        </div>
            
        </div>
    )
}

export default Monthly

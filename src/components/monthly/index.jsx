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
    // const state = useSelector(state => state.items)

    // const addMoviess = Object.keys(items).map((key) => {
    //     return items[key].items[0]
    // });

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
                id={34}
                name={'Singo Maple'}
                imageUrl={monthly1}
                price={1264} 
                oldPrice={1.500000}/>
                <Watch 
                id={56}
                name={'Singo Ebony'}
                imageUrl={monthly2}
                price={15} 
                oldPrice={1.500000}/>
                <Watch 
                id={78}
                name={'Rakai Ebony'}
                imageUrl={monthly3}
                price={12640} 
                oldPrice={1.118000}/>
                <Watch 
                id={98}
                name={'Way Kambas Mini Maple'}
                imageUrl={monthly4}
                price={1264} 
                oldPrice={1.024000}/>
        </div>
            
        </div>
    )
}

export default Monthly

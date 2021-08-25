import React from 'react';
import Watches from '../waches';
import './index.scss';
import axios from 'axios';
import {useSelector} from 'react-redux';

const Series = () => {
    
    const [watch, setWhatches] = React.useState([]);

    React.useEffect(async()=>{
        const responce = await axios.get('https://matoa.herokuapp.com/3008/watches');
        setWhatches(responce.data);
      },[]); 
      
    return (
        <div className='series'>
            <div className='series__title row'>
            <p className='series__text'>Maple Series</p>
            <p className='series__text'>Ebony Series</p>
            <p className='series__text'>Featured</p>
            </div>
            <div className='row'>
            {watch.map((obj)=>(
                    <Watches {...obj} id={obj.id}/>
                ))}
            </div>
        </div>
    )
}

export default Series;

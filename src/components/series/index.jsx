import React from 'react';
import Watches from '../waches';
import './index.scss';
import axios from 'axios';

const Series = () => {
    const [watch, setWhatches] = React.useState([]);
    React.useEffect(async()=>{
        const responce = await axios.get('http://localhost:3001/dataBase.json');
        setWhatches(responce.data.watches);
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
                    <Watches {...obj}/>
                ))}
            </div>
        </div>
    )
}

export default Series;

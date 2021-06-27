import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png';
import Page from '../../pages/page/index';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Hed = () => {
    const navWords = [
        {title: 'Watches'},
        {title: 'Eyewear'},
        {title: 'Accessories'},
        {title: 'News'}
    ]
    const [click, setClick] = React.useState(0);
    const setNavWords = (i) => {
      setClick(i);
    };
    return (
          <div className="header">
         <Link to="/"><img className="header__logo" src={logo} alt="" /></Link>
        <ul className="header__ul">
          {navWords.map((item, index) => {
            return (
              <li className={classnames({
                  header__active: index === click,
                })}
                onClick={() => setNavWords(index)}>
                {item.title}
              </li>
            );
          })}
        </ul>
        <Page/>
      </div>
     
    )
}

export default Hed

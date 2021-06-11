import React from "react";
import "./index.scss";
import logo from "../../assets/logo.png";
import classnames from "classnames";
import Cart from "../../pages/Cart";
import LogIn from "../../pages/logIn";
import Search from "../search";
import Page from "../../pages/page";
import { Link } from "react-router-dom";

const Header = () => {
  const navWords = ["Watches", "Eyewear", "Accessories", "News"];
  const [click, setClick] = React.useState(0);
  const setNavWords = (i) => {
    setClick(i);
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <ul className="header__ul">
        {navWords.map((item, index) => {
          return (
            <li className={classnames({
                header__active: index === click,
              })}
              onClick={() => setNavWords(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <Page />
    </div>
  );
};

export default Header;

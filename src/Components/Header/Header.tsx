import './Style.css';
import Char from './Char';
import { Chars } from './Chars';
import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
    <header className="header">
        <div className="header_section">
            <div className="header_item"><NavLink to="info" className="header_link">LOGO</NavLink></div>
        </div>
        <div className="header_section">
            <Char char={Chars[0]}/>
            <Char char={Chars[1]}/>
            <Char char={Chars[2]}/>
            <Char char={Chars[3]}/>
            <Char char={Chars[4]}/>
            <Char char={Chars[5]}/>
            <Char char={Chars[6]}/>
            <Char char={Chars[7]}/>
        </div>
        <div className="header_section">
            <div className="header_item"><NavLink to="call" className="header_link">Связаться</NavLink></div>
            <div className="header_item"><NavLink to="login" className="header_link">Вход</NavLink></div>
        </div>
    </header>
    ); 
  }
  
  export default Header;
  
import React from 'react';
import Cart from './Cart';
import Logo from '../img/sherlock-holmes-147255_640.png'

function Header(){
    return (
        <header className="header">
            <img src={ Logo } alt="Logo" className="logo"></img>
            <Cart />
        </header>
    )
}

export default Header
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

//Icons
import Menu from '../assets/menu.png';
import Search from '../assets/magnify.png';
import Cart from '../assets/cart.png'
import Search_m from '../assets/magnify_m.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="left-side">
                    <div className="menu" >
                        <img src={ Menu } alt="Menu" />
                    </div>

                    <div className="logo">
                        <Link to="/">
                            <img src="https://d2jtk41dy90ppp.cloudfront.net/statics/2.4.18/images/logo-garbarino.svg" alt="" width="150px" height="18px" />
                        </Link>
                    </div>
                </div>

                <div className="center-side">
                    <input type="text" id="search" placeholder="Busca productos, marcas, categorias..." />
                    <img src={ Search_m } alt="" />
                </div>

                <div className="right-side">
                    <div className="search">
                        <img src={ Search } alt="" />
                    </div>

                    <div>
                        <img src={ Cart } alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
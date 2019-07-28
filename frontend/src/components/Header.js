import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo.png';
import camera from '../assets/camera.svg';

export default function Header() {
    return (
        <header id="main-header" >
            < div className="header-content" >
                <Link to="/">
                    <img id="logo-main" src={logo} alt="Instazera" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar publicação" />
                </Link>
            </div>
        </header>
    );
}
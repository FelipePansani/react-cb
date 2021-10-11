import React, { useState, useEffect } from 'react';
import NavbarCSS from '../upperComponents/Navbar.module.css'
import searchIcon from '../images/Search_Icon.svg.png'
import NavPic from '../images/bg_nav_center.jpg'
import BCBLogo from '../images/logo_bc.png'

function Navbar() {

    return (
        <div className={NavbarCSS.navbarBody}>
            <div className={NavbarCSS.navbar}>
                <nav>
                    <a href="#">
                        <img className={NavbarCSS.logo} src={BCBLogo} alt="" />
                    </a>
                    <ul>
                        <div className={NavbarCSS.row}>
                            <a href="#"><p>Acesso à informação</p></a>
                            <a href="#"><p>Política monetária</p></a>
                            <a href="#"><p>Estabilidade financeira</p></a>

                            <button className={NavbarCSS.barsMenu}>
                                <div className={NavbarCSS.menuLine}></div>
                                <div className={NavbarCSS.menuLine}></div>
                                <div className={NavbarCSS.menuLine}></div>
                            </button>
                        </div>

                        <div className={NavbarCSS.row}>
                            <img className={NavbarCSS.shapeImg} src={NavPic} alt="" />
                        </div>

                        <div className={NavbarCSS.row}>
                            <a href="#"><p>Estatísticas</p></a>
                            <a href="#"><p>Cédulas e moedas</p> </a>
                            <a href="#"><p>Publicações e pesquisas</p></a>
                            <a href="#"> <img className={NavbarCSS.searchIcon} src={searchIcon} alt="" /> </a>

                            <div className={NavbarCSS.searchIconMenu}>
                                <img className={NavbarCSS.searchIcon} src={searchIcon} alt="" />
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
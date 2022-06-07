import BurgerMenu from '../BurgerMenu/BurgerMenu';
import React, { useState, useEffect } from "react"
export default function Navbar(){
    const [nav, setNav] = useState(false)
    const [menuActive, setMenuActive] = useState(false);
    const items =[
        {value:"Price List",href:'#pricelist'},
        {value:"Opening hours",href:'#openinghours'},
        {value:"About us",href:'#aboutus'},
        {value:"Contacts",href:'#contacts'}
    ];
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    return <nav className={nav ? "nav active" : "nav"}>
        <div className="site_navbar">
            <div className="site_title" id="title">
                <svg width="50px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--ci-primary-color, currentColor)"
                          d="M464,344.063c0-109.308-84.755-199.193-192-207.39V80H240v56.673c-107.245,8.2-192,98.082-192,207.39V377.17H464Zm-32,1.107H80v-1.107c0-97.046,78.953-176,176-176s176,78.953,176,176Z"
                          className="ci-primary"/>
                    <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, currentColor)"
                          className="ci-primary"/>
                </svg>
                <a>LeRestaurante</a>
            </div>
            <ul className="site-menu">
                <li>
                    <a href="#pricelist" className="">Price list</a>
                </li>
                <li>
                    <a href="#openinghours" className="">Opening hours</a>
                </li>
                <li>
                    <a href="#aboutus" className="">About us</a>
                </li>
                <li>
                    <a href="#contacts" className="">Contacts</a>
                </li>
            </ul>
        </div>
        <nav className="menu">
            <div className="site_title" id="title">
                <svg width="50px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--ci-primary-color, currentColor)"
                          d="M464,344.063c0-109.308-84.755-199.193-192-207.39V80H240v56.673c-107.245,8.2-192,98.082-192,207.39V377.17H464Zm-32,1.107H80v-1.107c0-97.046,78.953-176,176-176s176,78.953,176,176Z"
                          className="ci-primary"/>
                    <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, currentColor)"
                          className="ci-primary"/>
                </svg>
                <a>LeRestaurante</a>
            </div>
            <div className="burger-btn" onClick={()=> setMenuActive(!menuActive)}>
                <span className="burger-btn-1"/>
                <span className="burger-btn-2"/>
            </div>
        </nav>
        <BurgerMenu header={"Menu"} items={items} active={menuActive} setActive={setMenuActive}/>
    </nav>
}
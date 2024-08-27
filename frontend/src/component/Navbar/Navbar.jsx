import React, {useState} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {

    const [menu,setMenu] = useState("home")

    return (
        <div className='navbar'>
            <div className='content'>
                <div className='logo'>
                    <a href='/'><span className="material-symbols-outlined">ramen_dining</span><span>Umami House</span></a>
                </div>

                <ul className='navbar-menu'>
                    <Link to='/' onClick={() => {
                        setMenu('home')
                    }} className={menu === "home" ? "active" : ""}>回首頁</Link>
                    <Link  to='/menu-select' onClick={() => {
                        setMenu('menu')
                    }} className={menu === "menu" ? "active" : ""}>菜單介紹</Link >
                    <a href='#app-download' onClick={() => {
                        setMenu('mobile-app')
                    }} className={menu === "mobile-app" ? "active" : ""}>APP</a>
                    <a href='#footer' onClick={() => {
                        setMenu('contact us')
                    }} className={menu === "contact us" ? "active" : ""}>聯絡我們</a>
                </ul>

                <div className='navbar-right'>
                    <span className="material-symbols-outlined">search</span>
                    <div className='shopping-bag'>
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <div className='dot'></div>
                    </div>
                    <div className='nav-profile'>
                        <span className="material-symbols-outlined">person</span>
                        <ul className='nav-profile-dropdown'>
                            <li><span className="material-symbols-outlined">work</span><span>訂單</span></li>
                            <hr/>
                            <li><span className="material-symbols-outlined">logout</span><span>登出</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Navbar

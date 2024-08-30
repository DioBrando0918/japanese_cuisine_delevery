import React, {useContext, useEffect, useState} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";

const Navbar = () => {

    const {menu,setMenu,cartItems} = useContext(StoreContext);
    const [isPhoneMenu,setIsPhoneMenu] = useState(false);

    useEffect(() => {
        console.log(isPhoneMenu)
    }, [isPhoneMenu]);

    return (
        <div className='navbar'>
            <div className='content'>
                <div className='logo'>
                    <a href='/'><span className="material-symbols-outlined">ramen_dining</span><span>Umami House</span></a>
                </div>

                <ul className={isPhoneMenu?"navbar-menu phone":"navbar-menu"}>
                    <Link to='/' onClick={() => {
                        if (isPhoneMenu){
                            setIsPhoneMenu(false)
                        }
                        setMenu('home')
                    }} className={menu === "home" ? "active" : ""}>回首頁</Link>
                    <Link  to='/menu-introduce' onClick={() => {
                        if (isPhoneMenu){
                            setIsPhoneMenu(false)
                        }
                        setMenu('menu')
                    }} className={menu === "menu" ? "active" : ""}>菜單介紹</Link >
                    <a href='#app-download' onClick={() => {
                        if (isPhoneMenu){
                            setIsPhoneMenu(false)
                        }
                        setMenu('mobile-app')
                    }} className={menu === "mobile-app" ? "active" : ""}>APP</a>
                    <a href='#footer' onClick={() => {
                        if (isPhoneMenu){
                            setIsPhoneMenu(false)
                        }
                        setMenu('contact us')
                    }} className={menu === "contact us" ? "active" : ""}>聯絡我們</a>
                </ul>

                <div className='navbar-right'>
                    <span className="material-symbols-outlined">search</span>
                    <div className='shopping-bag'>
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <div
                            className={(Object.values(cartItems).every(value => value === 0) || Object.keys(cartItems).length === 0) ? "" : "dot"}></div>
                    </div>
                    <div className='nav-profile'>
                        <span className="material-symbols-outlined">person</span>
                        <ul className='nav-profile-dropdown'>
                            <li><span className="material-symbols-outlined">work</span><span>訂單</span></li>
                            <hr/>
                            <li><span className="material-symbols-outlined">logout</span><span>登出</span></li>
                        </ul>
                    </div>
                    <span onClick={() => {setIsPhoneMenu((prev) => (!prev))}} className="material-symbols-outlined hamburger">menu</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar

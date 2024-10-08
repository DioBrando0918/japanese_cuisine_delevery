import React, {useContext, useEffect, useState} from 'react'
import './Navbar.css'
import {Link,useNavigate} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
import button from "bootstrap/js/src/button.js";

const Navbar = ({showLogin,setShowLogin}) => {

    const {menu,setMenu,cartItems,setToken,token} = useContext(StoreContext);
    const [isPhoneMenu,setIsPhoneMenu] = useState(false);
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

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
                        <Link to={Object.values(cartItems).some(quantity=>quantity>0)?'/cart':'/empty-cart'}><span className="material-symbols-outlined">shopping_bag</span></Link>
                        <div
                            className={(Object.values(cartItems).every(value => value === 0) || Object.keys(cartItems).length === 0) ? "" : "dot"}></div>
                    </div>
                    {
                        token
                            ? <div className='nav-profile'>
                                <span className="material-symbols-outlined">person</span>
                                <ul className='nav-profile-dropdown'>
                                    <li><Link to='/orderHistory'><span
                                        className="material-symbols-outlined">work</span><span>訂單</span></Link></li>
                                    <hr/>
                                    <li onClick={logout}><span className="material-symbols-outlined">logout</span><span>登出</span></li>
                                </ul>
                            </div>
                            :<span onClick={()=>{setShowLogin(true)}} className="material-symbols-outlined">login</span>
                    }

                    <span onClick={() => {
                        setIsPhoneMenu((prev) => (!prev))
                    }} className="material-symbols-outlined hamburger">menu</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar

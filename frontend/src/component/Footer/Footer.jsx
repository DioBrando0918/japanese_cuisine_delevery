import React, {useContext} from 'react'
import './Footer.css'
import {Link} from "react-router-dom";
import {assets} from "../../assets/assets.js";
import {StoreContext} from "../../context/StoreContext.jsx";

const Footer = () => {

    const {menu,setMenu} = useContext(StoreContext);

    return (
        <div className='footer' id='footer'>
            <div className='head'>
                <Link to='/'><span className="material-symbols-outlined">ramen_dining</span>
                    <span>Umami House</span></Link>
            </div>

            <div className='body'>
                <ul className='link'>
                    <li><a href="/" onClick={()=>{setMenu('home')}}>回首頁</a></li>
                    <li><Link to="/menu-introduce" onClick={()=>{setMenu('menu')}}>菜單介紹</Link></li>
                    <li><a>訂購須知</a></li>
                    <li><a>隱私權政策</a></li>
                </ul>
                <hr/>
                <p>體驗頂級美食，享受舒適就餐環境，滿足您味蕾的極致享受。</p>
            </div>

            <div className='app'>
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.instergram_icon} alt=""/>
                <img src={assets.line_icon} alt=""/>
            </div>
        </div>
    )
}
export default Footer

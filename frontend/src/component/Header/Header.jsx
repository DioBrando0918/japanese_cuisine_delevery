import React, {useContext, useState} from 'react'
import './Header.css'
import { Carousel } from 'react-bootstrap';
import {StoreContext} from "../../context/StoreContext.jsx";
import {Link} from "react-router-dom";
const Header = () => {

    const {menu,setMenu} = useContext(StoreContext);

    return (
        <div className='header'>
            <div className="header-content">
                <h2>探索地道日本風味</h2>
                <div>
                    <p>立即來品嘗，感受正宗日本料理的獨特魅力，讓味蕾在這場美食盛宴中獲得最美好的滿足！</p>
                    <p>無論你喜愛哪一種日式料理，我們都將以最正宗的風味和最精緻的烹飪方式，帶給你無與倫比的美食體驗。</p>
                </div>
                <Link to="/menu-introduce" onClick={()=>{setMenu('menu')}}>
                    <button>查看菜單</button>
                </Link>
            </div>

            <Carousel interval={3000} indicators={false} className="image-carousel">
                <Carousel.Item>
                    <div className='carousel-background first-slide'></div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='carousel-background second-slide'></div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='carousel-background third-slide'></div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Header

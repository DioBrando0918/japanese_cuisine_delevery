import React from 'react'
import './EmptyCart.css'
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <div className='empty-cart-content'>
                <span className="material-symbols-outlined">shopping_bag</span>
                <h2>你的購物籃是空的</h2>
                <p>記得加入商品到你的購物籃</p>
                <Link to='/menu-introduce'>繼續選購</Link>
            </div>
        </div>
    )
}
export default EmptyCart

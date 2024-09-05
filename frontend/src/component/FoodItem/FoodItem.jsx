import React, {useContext, useEffect} from 'react'
import './FoodItem.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import {assets} from "../../assets/assets.js";

const FoodItem = ({_id,name,price,description,image}) => {

    const {url,cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <img className='food-img' src={url+"/images/"+image} alt=""/>
            <div className='food-item-content'>
                <h2 className='item-name'>{name}</h2>
                <p className='item-desc'>{description}</p>
                <div className='food-operate'>
                    {
                        !cartItems[_id]
                            ? <img className='add' onClick={() => {
                                addToCart(_id)
                            }} src={assets.add_icon_white} alt=""/>
                            : <div className='food-item-counter'>
                                <img onClick={() => {
                                    removeFromCart(_id)
                                }} src={assets.remove_icon_red} alt=""/>
                                <p>{cartItems[_id]}</p>
                                <img onClick={() => {
                                    addToCart(_id)
                                }} src={assets.add_icon_green} alt=""/>
                            </div>
                    }
                </div>
                <p className='item-price'>${price}</p>

            </div>
        </div>
    )
}
export default FoodItem

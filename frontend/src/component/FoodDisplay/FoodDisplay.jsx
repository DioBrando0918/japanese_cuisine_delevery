import React from 'react'
import './FoodDisplay.css'
import {food_list} from "../../assets/assets.js";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({category,setCategory}) => {
    return (
        <div className='food-display'>
            <div className='food-display-list'>
                {
                    food_list.map((item,index)=>{
                        if (category==="All" || category === item.category){
                            return(
                                <FoodItem key={index} _id = {item._id} name = {item.name} description={item.description} price={item.price} image = {item.image}></FoodItem>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default FoodDisplay

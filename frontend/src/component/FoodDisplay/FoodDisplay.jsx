import React, {useContext} from 'react'
import './FoodDisplay.css'
import FoodItem from "../FoodItem/FoodItem.jsx";
import {StoreContext} from "../../context/StoreContext.jsx";

const FoodDisplay = ({category,setCategory}) => {

    const {foodList} = useContext(StoreContext);

    return (
        <div className='food-display'>
            <div className='food-display-list'>
                {
                    foodList.map((item,index)=>{
                        if (category==="All" || category === item.category){
                            return(
                                <FoodItem key={index} _id = {item._id} name = {item.name} description={item.description} price={item.price} image = {`${item.image}`}></FoodItem>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default FoodDisplay

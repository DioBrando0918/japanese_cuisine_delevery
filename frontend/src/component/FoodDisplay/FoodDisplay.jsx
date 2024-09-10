import React, {useContext, useEffect} from 'react'
import './FoodDisplay.css'
import FoodItem from "../FoodItem/FoodItem.jsx";
import {StoreContext} from "../../context/StoreContext.jsx";

const FoodDisplay = ({category,setCategory}) => {

    const {foodList,cartItems} = useContext(StoreContext);

    const getTotalNumber = ()=>{
        let result = 0
        for (const key in cartItems) {
            result += cartItems[key];
        }
        return result
    }

    useEffect(() => {
        getTotalNumber()
    }, []);

    return (
        <div className='food-display'>
            <div className='food-display-list'>
                {
                    foodList.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItem key={index} _id={item._id} name={item.name} description={item.description}
                                          price={item.price} image={`${item.image}`}></FoodItem>
                            )
                        }
                    })
                }
            </div>
            <div className='sidebar'>
                <div className='shopping-bag-block'>
                    {
                        getTotalNumber() !== 0 ? <div className='number'>{getTotalNumber()}</div>:<></>
                    }
                    <span className="material-symbols-outlined">shopping_cart</span>
                </div>
            </div>
        </div>
    )
}
export default FoodDisplay

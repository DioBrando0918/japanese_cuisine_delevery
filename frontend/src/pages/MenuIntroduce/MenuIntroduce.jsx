import React, {useState} from 'react'
import './MenuIntroduce.css'
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay.jsx";
import MenuSelect from "../../component/MenuSelect/MenuSelect.jsx";

const MenuIntroduce = () => {

    const [category,setCategory] = useState("All");

    return (
        <div className='menu-introduce' id = 'menu-introduce'>
            <MenuSelect category={category} setCategory={setCategory}></MenuSelect>
            <FoodDisplay category={category} setCategory={setCategory}></FoodDisplay>
        </div>
    )
}
export default MenuIntroduce

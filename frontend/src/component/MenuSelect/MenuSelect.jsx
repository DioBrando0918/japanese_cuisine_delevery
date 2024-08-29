import React, {useState} from 'react'
import './MenuSelect.css'
import {assets, menu_list,} from "../../assets/assets.js";

const MenuSelect = ({category,setCategory}) => {
    return (
        <div className='menu-select' id = 'menu-selct'>
            <div className='menu-list'>
                {
                    menu_list.map((item,index)=>{
                        return(
                            <div className='menu-list-item' key={index}>
                                <img
                                    onClick={()=>{setCategory((prev)=>(prev === item.menu_name?"All":item.menu_name))}} src={item.menu_image}
                                    className={category===item.menu_name?"active":""}
                                    alt=""/>
                                <p onClick={()=>{setCategory((prev)=>(prev === item.menu_name?"All":item.menu_name))}}>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default MenuSelect

import React from 'react'
import './Sidebar.css'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <a href='/'><span className="material-symbols-outlined">ramen_dining</span><span>Umami House</span></a>
                <p>Admin Panel</p>
            </div>

            <div className='sidebar-items'>
                <Link className='sidebar-item' to='/'><span
                    className="material-symbols-outlined">add_circle</span><span>新增品項</span></Link>

                <Link className='sidebar-item' to='/list-item'><span
                    className="material-symbols-outlined">list_alt</span><span>品項列表</span></Link>

                <Link className='sidebar-item' to='/order-list'><span
                    className="material-symbols-outlined">order_approve</span><span>訂單列表</span></Link>
            </div>
        </div>
    )
}
export default Sidebar

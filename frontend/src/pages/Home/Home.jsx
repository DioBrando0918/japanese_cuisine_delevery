import React from 'react'
import './Home.css'
import Header from "../../component/Header/Header.jsx";
import MenuSelect from "../../component/MenuSelect/MenuSelect.jsx";
import RestaurantIntroduce from "../../component/RestaurantIntroduce/RestaurantIntroduce.jsx";
import AppDownload from "../../component/AppDownload/AppDownload.jsx";
const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <RestaurantIntroduce></RestaurantIntroduce>
            <AppDownload></AppDownload>
        </div>
    )
}
export default Home

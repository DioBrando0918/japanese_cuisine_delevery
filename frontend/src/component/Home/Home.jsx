import React from 'react'
import './Home.css'
import Header from "../Header/Header.jsx";
import MenuSelect from "../MenuSelect/MenuSelect.jsx";
import RestaurantIntroduce from "../RestaurantIntroduce/RestaurantIntroduce.jsx";
import AppDownload from "../AppDownload/AppDownload.jsx";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <RestaurantIntroduce></RestaurantIntroduce>
            <AppDownload></AppDownload>
        </div>
    )
}
export default Home

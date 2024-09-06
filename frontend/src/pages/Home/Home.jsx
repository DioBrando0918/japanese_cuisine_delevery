import React, {useEffect} from 'react'
import './Home.css'
import Header from "../../component/Header/Header.jsx";
import MenuSelect from "../../component/MenuSelect/MenuSelect.jsx";
import RestaurantIntroduce from "../../component/RestaurantIntroduce/RestaurantIntroduce.jsx";
import AppDownload from "../../component/AppDownload/AppDownload.jsx";
import {useSnackbar} from "notistack";
const Home = () => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (!localStorage.getItem('isSendMessage')){
            enqueueSnackbar('此網站為線上餐廳系統的展示專案，不代表實際餐廳或提供真實服務。僅用於展示目的。', { variant: 'info' });
            localStorage.setItem('isSendMessage', 'true');
        }
    }, []);

    return (
        <div className='home'>
            <Header></Header>
            <RestaurantIntroduce></RestaurantIntroduce>
            <AppDownload></AppDownload>
        </div>
    )
}
export default Home

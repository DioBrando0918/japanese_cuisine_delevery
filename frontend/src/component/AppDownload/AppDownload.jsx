import React from 'react'
import './AppDownload.css'
import {assets} from "../../assets/assets.js";

const AppDownload = () => {
    return (
        <div className='app-download' id = "app-download">
            <p>立即下載我們的<span>Umami House App</span>, 享受更多便利和優惠！</p>
            <ul className='app-feature'>
                <li>輕鬆預訂座位，節省等候時間。</li>
                <li>自動累積積分，享受會員專屬福利。</li>
                <li>獲取獨家優惠和促銷活動，盡享超值美食。</li>
            </ul>
            <div className='app-download-platform'>
                <img src={assets.play_store_img} alt=""/>
                <img src={assets.app_store_img} alt=""/>
            </div>
        </div>
    )
}
export default AppDownload

import React from 'react'
import './RestaurantIntroduce.css'
import {assets} from "../../assets/assets.js";

const RestaurantIntroduce = () => {
    return (

        <div className='restaurant-introduce'>
                <div className='description'>
                    <div className='title'>
                        <img src={assets.ink_img} alt=""/>
                        <h2>關於我們</h2>
                    </div>

                    <hr/>
                    <p>我們秉持傳統技藝，結合創新的烹飪方式，將最地道的日本風味帶給顧客。
                        力求每一口都能讓您感受到與眾不同的美食魅力，成就無與倫比的用餐體驗。</p>
                    <img src={assets.cooking_img} alt=""/>
                </div>

                <div className='description'>
                    <div className='title'>
                        <img src={assets.ink_img} alt=""/>
                        <h2>傳統日式小店氛圍</h2>
                    </div>
                    <hr/>
                    <p>您將被充滿昭和時代氣息的溫暖氛圍所包圍。無論是牆上的手寫菜單，還是木質的座椅，都在展現我們對於細節的用心，這裡彷彿讓您置身於日本街頭的一角，體驗最地道的日式用餐文化。</p>
                    <img src={assets.restaurant_img} alt=""/>
                </div>

                <div className='description'>
                    <div className='title'>
                        <img src={assets.ink_img} alt=""/>
                        <h2>嚴選新鮮食材</h2>
                    </div>
                    <hr/>
                    <p>我們對於食材的選擇從不妥協，所有食材皆經過精挑細選。每一種食材都展現出獨特的風味，
                        我們堅信優質的食材才能烹製出讓人難以忘懷的美味。在我們這裡，您將體驗到最純粹的味覺享受。</p>
                    <img src={assets.ingredient_img} alt=""/>
                </div>
        </div>
    )
}
export default RestaurantIntroduce

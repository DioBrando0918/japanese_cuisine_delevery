import React, {useContext} from 'react'
import './Cart.css'
import {StoreContext} from "../../context/StoreContext.jsx";

const Cart = () => {
    const {foodList,cartItems} = useContext(StoreContext)

    return (
        <div className='cart'>
            <div className='cart-title'>
                <h3>購物車</h3>
            </div>
            <div className='cart-info'>
                <table>
                    <thead>
                        <tr>
                            <th>商品照片</th>
                            <th>商品名稱</th>
                            <th>單件價格</th>
                            <th>數量</th>
                            <th>小計</th>
                            <th>動作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodList.map((item,index)=>{
                                if (cartItems[item._id]>0){
                                    return (
                                        <div className='cart-item'>

                                        </div>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default Cart

import React, {useContext, useEffect, useState} from 'react'
import './Cart.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import axios from "axios";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

const Cart = ({setShowLogin}) => {
    const {token,url,foodList,cartItems,deleteItem,removeFromCart,addToCart,setShippingInfo,address,setAddress} = useContext(StoreContext)
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setAddress((address)=>({...address,[name]:value}))
    }


    const getShippingInfo = (event)=>{
        event.preventDefault();
        if (!token){
            setShowLogin(true);
        }
        else{
            axios.post(`${url}/api/cart/shippingInfo`,{address},{headers:{token}}).then(response=>{
                setShippingInfo(response.data.shippingInfo);
                navigate('/order')
            }).catch(error=>{
                console.log(error.response.data.msg);
                if (error.response.status === 422){
                    enqueueSnackbar(`${error.response.data.msg}`, { variant: 'error' });
                }
                else{
                    enqueueSnackbar('獲取運費失敗', { variant: 'error' });
                }
            })
        }
    }

    return (
        <div className='cart'>
            {
                Object.values(cartItems).some(quantity=>quantity>0)
                    ? <div>
                        <h4>購物車</h4>
                        <div className='cart-info'>
                            <table className='cart-table'>
                                <thead className='table-title'>
                                <tr>
                                    <th className='photo-col Alignment'>商品照片</th>
                                    <th className='name-col Alignment'>商品名稱</th>
                                    <th className='unit-price-col Alignment'>單件價格</th>
                                    <th className='number-col Alignment'>數量</th>
                                    <th className='total-price-col Alignment'>小計</th>
                                    <th className='action-col Alignment'>動作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    foodList.map((item, index) => {
                                        if (cartItems[item._id] > 0) {
                                            return (
                                                <tr className='cart-items' key={item._id}>
                                                    <td className='cart-item Alignment'><img
                                                        src={`${url}/images/` + item.image} alt=""/>
                                                    </td>
                                                    <td className='cart-item Alignment'>{item.name}</td>
                                                    <td className='cart-item Alignment'>{item.price}</td>
                                                    <td className='cart-item number-block'>
                                                        <div className='number-operate'>
                                                            <span onClick={() => {
                                                                removeFromCart(item._id)
                                                            }} className="material-symbols-outlined">remove</span>
                                                            {cartItems[item._id]}
                                                            <span onClick={() => {
                                                                addToCart(item._id)
                                                            }} className="material-symbols-outlined">add</span>
                                                        </div>
                                                    </td>
                                                    <td className='cart-item Alignment'>{cartItems[item._id] * item.price}</td>
                                                    <td className='cart-item Alignment delete'><span onClick={() => {
                                                        deleteItem(item._id)
                                                    }} className="material-symbols-outlined">delete</span></td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className='address-order-info'>
                            <div>

                            </div>
                            <form onSubmit={getShippingInfo} className='address'>
                                <div className='address-item'>
                                    <p>縣/市</p>
                                    <select onChange={onChangeHandler} name="countryAndCity" value={address.countryAndCity}
                                            id="">
                                        <option value="南投縣">南投縣</option>
                                        <option value="台中市">台中市</option>
                                        <option value="彰化縣">彰化縣</option>
                                    </select>
                                </div>
                                <div className='address-item'>
                                    <p>地址</p>
                                    <input onChange={onChangeHandler} name='position' value={address.position} type="text"
                                           required/>
                                </div>
                                <div className='notice'>
                                    <span className="material-symbols-outlined">notifications</span>
                                    <p>以Umami House(南投縣草屯鎮中正路1062巷9弄22號)作為起點,僅配送15公里以內之地區。</p>
                                </div>
                                <div className='confirm'>
                                    <div></div>
                                    <button type='submit'>下一步</button>
                                </div>
                            </form>


                        </div>
                    </div>
                    : navigate('/empty-cart')
            }

        </div>
    )
}
export default Cart

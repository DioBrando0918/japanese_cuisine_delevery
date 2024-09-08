import React, {useContext} from 'react'
import './Order.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import axios from "axios";
import {useSnackbar} from "notistack";

const Order = () => {

    const {cartItems,foodList,url,shippingInfo,token,getTotalPrice,address} = useContext(StoreContext);
    const { enqueueSnackbar } = useSnackbar();

    const checkout = ()=>{
        let orderItems = [];
        foodList.map((item,index)=>{
            if (cartItems[item._id] > 0){
                let itemInfo = item;
                itemInfo['quantity'] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })

        let orderData = {
            address,
            shippingInfo,
            orderItems
        }

        axios.post(`${url}/api/order/placeOrder`,orderData,{headers:{token}}).then(response=>{

            const formHtml = response.data;

            const formContainer = document.createElement('div');
            formContainer.innerHTML = formHtml;

            document.body.appendChild(formContainer);

            formContainer.querySelector('form').submit();

        }).catch(error=>{
            console.log(error.response.data.msg);
            enqueueSnackbar('結帳失敗', { variant: 'error' });
        })
    }

    return (
        <div className='order'>
            <table className='order-table'>
                <thead>
                <tr>
                    <th className='photo-col '>商品照片</th>
                    <th className='name-col '>商品名稱</th>
                    <th className='number-col'>數量</th>
                    <th className='total-price-col '>小計</th>
                </tr>
                </thead>
                <tbody>
                    {
                        foodList.map((item, index) => {
                            if (cartItems[item._id] > 0) {
                                return(
                                    <tr key={item._id}>
                                        <td><img
                                            src={`${url}/images/` + item.image} alt=""/>
                                        </td>
                                        <td className='cart-item Alignment'>{item.name}</td>
                                        <td className='cart-item Alignment'>{cartItems[item._id]}</td>
                                        <td className='cart-item Alignment'>{cartItems[item._id] * item.price}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>

            <div className='order-info'>
                <div className='order-title'>
                    <h4>訂單資訊</h4>
                </div>
                <div className='order-body'>
                    <div className='multi-field'>
                        <p>預計花費時間:</p>
                        <p>{shippingInfo.duration}</p>
                    </div>

                    <div className='multi-field'>
                        <p>送餐地點:</p>
                        <p>{address.countryAndCity + address.position}</p>
                    </div>

                    <div className='multi-field'>
                        <p>運費:</p>
                        <p>${shippingInfo.price}</p>
                    </div>

                    <div className='multi-field'>
                        <p>小計:</p>
                        <p>${getTotalPrice()}</p>
                    </div>

                    <div className='multi-field'>
                        <div></div>
                        <button onClick={checkout}>前往結帳</button>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Order

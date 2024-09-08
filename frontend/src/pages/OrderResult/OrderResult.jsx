import React, {useContext, useEffect, useState} from 'react'
import "./OrderResult.css"
import {useSearchParams} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
import axios from "axios";
import {assets} from "../../assets/assets.js";
import success_img from "../../assets/success.png";

const OrderResult = () => {

    const [result,setResult] = useState("");
    const [data,setData] = useState({
        orderNo:"",
        create_time:"",
        totalPrice:""
    });
    const [searchParams,setSearchParams] = useSearchParams();
    const merchantTradeNo = searchParams.get("merchantTradeNo");
    const {url} = useContext(StoreContext);

    const getOrderResult = ()=>{
        const response = axios.post(`${url}/api/order/result`,{merchantTradeNo}).then(response=>{
            setResult("success");
            setData({
                orderNo:response.data.orderNo,
                create_time:response.data.create_time,
                totalPrice:response.data.totalPrice
            });
        }).catch(error=>{
            setResult("fail");
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getOrderResult();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='result'>
                {
                    result === ""?
                        <div className='spinner'></div>
                        :result === "success"
                            ? <div className='result-message'>
                                <img src={assets.success_img} alt=""/>
                                <h1 className='success'>Payment successful</h1>
                                <p className='title'>Your meal will arrive as soon as possible</p>
                                <div className="payment-detail">
                                    <div className="line-info">
                                        <p className='title'>Date</p>
                                        <p>{data.create_time}</p>
                                    </div>
                                    <div className="line-info">
                                        <p className='title'>Merchant Trade No</p>
                                        <p>{data.orderNo}</p>
                                    </div>
                                    <div className="line-info">
                                        <p className='title'>amount</p>
                                        <p>${data.totalPrice}</p>
                                    </div>
                                    <div className="line-info"></div>
                                </div>
                                <button className='continue'><a href="/">Continue</a></button>
                            </div>
                            :<div className='result-message'>
                                <img src={assets.fail} alt=""/>
                                <h1 className="fail">Payment fail</h1>
                                <p className="title">Please purchase again</p>
                                <button className='continue'><a href="/">Continue</a></button>
                            </div>
                }
            </div>
        </>

    )
}
export default OrderResult

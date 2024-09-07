import React, {useContext, useEffect, useState} from 'react'
import "./OrderResult.css"
import {useSearchParams} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
import axios from "axios";
import {assets} from "../../assets/assets.js";

const OrderResult = () => {

    const [result,setResult] = useState("");
    const [data,setData] = useState({});
    const [searchParams,setSearchParams] = useSearchParams();
    const merchantTradeNo = searchParams.get("merchantTradeNo");
    const {url} = useContext(StoreContext);

    const getOrderResult = async ()=>{
        const response = await axios.post(`${url}/api/order/result`,{merchantTradeNo});
        if (response.data.success){
            setResult("success");
            setData(response.data.data);
        }else{
            setResult("fail");
        }
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
                                <img src={assets.success} alt=""/>
                                <h1 className='success'>Payment successful</h1>
                                <p className='title'>Your meal will arrive as soon as possible</p>
                                <div className="payment-detail">
                                    <div className="line-info">
                                        <p className='title'>Date</p>
                                        <p>{data.date}</p>
                                    </div>
                                    <div className="line-info">
                                        <p className='title'>Merchant Trade No</p>
                                        <p>{data.merchantTradeNo}</p>
                                    </div>
                                    <div className="line-info">
                                        <p className='title'>amount</p>
                                        <p>${data.amount}</p>
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

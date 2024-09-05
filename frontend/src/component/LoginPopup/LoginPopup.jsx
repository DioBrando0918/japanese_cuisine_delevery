import React, {useContext, useEffect, useState} from 'react'
import './LoginPopup.css'
import {assets} from "../../assets/assets.js";
import {StoreContext} from "../../context/StoreContext.jsx";
import axios from "axios";
import {isPropWrapperFunction} from "eslint-plugin-react/lib/util/propWrapper.js";
import {useSnackbar} from "notistack";

const LoginPopup = ({setShowLogin}) => {
    const { enqueueSnackbar } = useSnackbar();
    const {url,setToken} = useContext(StoreContext);
    const [currState,setCurrState] = useState("登入");

    const [data,setData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        phoneNumber:""
    });

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({
            ...data,[name]:value
        }))
    }

    const onLogin = (event)=>{
        event.preventDefault();
        let newUrl = url;

        if (currState === '註冊'){
            if (data.password !== data.confirmPassword){
                enqueueSnackbar(`兩次輸入的密碼不相符。`, { variant: 'error' });
                return;
            }else{
                newUrl += '/api/user/register';
            }
        }else{
            newUrl += '/api/user/login';
        }
         axios.post(newUrl,data).then((response)=>{
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            enqueueSnackbar(`${response.data.msg}`, { variant: 'success' });
            setShowLogin(false);
        }).catch((error)=>{
             enqueueSnackbar(`操作失敗`, { variant: 'error' });
             console.log(error.response.data.msg);
        });
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>

                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <span onClick={()=>{setShowLogin(false)}} className="material-symbols-outlined">close</span>
                </div>

                <div className='login-popup-input'>
                <input type="email" onChange={onChangeHandler} value={data.email} name='email' placeholder='電子信箱' required/>
                    <div className='password-block'>
                        <input type="password" onChange={onChangeHandler} value={data.password} name='password' placeholder='密碼' required/>
                        <p className={(data.password !== '' && data.password.length < 8) ? "length-insufficient" : ''}>密碼長度不足，請輸入至少8個字符。</p>
                    </div>

                    {
                        currState === "註冊"
                            ? <div className='register-info'>
                                <input className={data.password !== data.confirmPassword?"error":""} type="password" onChange={onChangeHandler} value={data.confirmPassword} name='confirmPassword' placeholder='確認密碼' required/>
                                <div className='multi-field'>
                                    <input className='first-name' type="text" onChange={onChangeHandler} value={data.firstName} name='firstName' placeholder='姓' required/>
                                    <input className='last-name' type="text" onChange={onChangeHandler} value={data.lastName} name='lastName' placeholder='名字' required/>
                                </div>
                                <input type="text" onChange={onChangeHandler} value={data.phoneNumber} name='phoneNumber' placeholder='電話號碼' required/>
                            </div>
                            : <></>
                    }
                    <button type="submit">{currState === "註冊" ? "創建會員" : "登入"}</button>

                    <div className='login-popup-condition'>
                        {
                            currState === "註冊"
                                ? <p>已經有帳號?<span onClick={() => {setCurrState("登入")}}> 點擊登入</span></p>
                                : <p>創建新會員?<span onClick={() => {setCurrState("註冊")}}> 點擊註冊</span></p>
                        }
                    </div>

                </div>

            </form>
        </div>
    )
}
export default LoginPopup

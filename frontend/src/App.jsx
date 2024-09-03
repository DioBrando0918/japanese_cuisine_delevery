import React, {useState} from 'react'
import './App.css'
import Navbar from "./component/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Author from "./component/Author/Author.jsx";
import MenuSelect from "./component/MenuSelect/MenuSelect.jsx";
import MenuIntroduce from "./pages/MenuIntroduce/MenuIntroduce.jsx";
import LoginPopup from "./component/LoginPopup/LoginPopup.jsx";
import Cart from "./pages/Cart/Cart.jsx";


function App() {

    const [count, setCount] = useState(0)
    const [showLogin,setShowLogin] = useState(false);

    return (
        <>
            {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
            <Navbar showLogin= {showLogin} setShowLogin={setShowLogin}></Navbar>
            <div className='app'>

                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/menu-introduce' element={<MenuIntroduce/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                </Routes>
            </div>
            <Footer></Footer>
            <Author></Author>
        </>
    )
}

export default App

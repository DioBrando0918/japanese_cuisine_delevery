import { useState } from 'react'
import './App.css'
import Navbar from "./component/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import Header from "./component/Header/Header.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
          <Navbar></Navbar>
          <Header></Header>
          <Routes>
              <Route path = '/' element={<Home/>}></Route>
          </Routes>
      </div>
    </>
  )
}

export default App

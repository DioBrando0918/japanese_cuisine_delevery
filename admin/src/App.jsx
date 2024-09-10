import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import AddItem from "./pages/AddItem/AddItem.jsx";
import ListItem from "./pages/ListItem/ListItem.jsx";
import {ToastContainer} from "react-toastify";
import {SnackbarProvider} from "notistack";
import OrderList from "./pages/OrderList/OrderList.jsx";

function App() {
  const [count, setCount] = useState(0)
    const url = import.meta.env.VITE_API_URL;

  return (
      <>
          <SnackbarProvider maxSnack={3} anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
          }}>
          <div className='app'>
              <Sidebar></Sidebar>
              <Routes>
                  <Route path='/' element={<AddItem url = {url}/>}></Route>
                  <Route path='/list-item' element={<ListItem url = {url}/>}></Route>
                  <Route path='/order-list' element={<OrderList url = {url}/>}></Route>
              </Routes>
          </div>
          </SnackbarProvider>
      </>
  )
}

export default App

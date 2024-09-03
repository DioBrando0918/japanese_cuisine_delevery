import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
    const url = import.meta.env.VITE_API_URL;
    const [cartItems,setCartItems] = useState({});
    const [token,setToken] = useState("");
    const [menu, setMenu] = useState("home")
    const addToCart = async (itemId)=>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }

        if (token){
            await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));

        if (token){
            await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
        }
    }

    const loadCartData = async (token)=>{
        const response = await axios.post(`${url}/api/cart/get`,{},{headers:{token}})
        setCartItems(response.data.data.cartData);
    }

    const initialize = async ()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
    }


    useEffect( () => {
        initialize()
    }, []);

    const  contextValue  = {
        cartItems,
        setCartItems,
        menu,
        setMenu,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken
    }

    return (<StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
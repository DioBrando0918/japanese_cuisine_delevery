import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useSnackbar} from "notistack";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
    const { enqueueSnackbar } = useSnackbar();
    const url = import.meta.env.VITE_API_URL;
    const [cartItems,setCartItems] = useState({});
    const [token,setToken] = useState("");
    const [menu, setMenu] = useState("home")
    const addToCart =  (itemId)=>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }

        if (token){
            axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}}).then((response)=>{

            }).catch((error)=>{
                enqueueSnackbar('加入購物車失敗', { variant: 'error' });
                console.log(`${error.response.data.msg}`);
            })
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));

        if (token){
             axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}}).then(response=>{

             }).catch(error=>{
                 enqueueSnackbar('移除失敗', { variant: 'error' });
                 console.log(`${error.response.data.msg}`);
             })
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
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
    const [foodList,setFoodList] = useState([])
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

    const fetchFoodList =  ()=>{
        console.log('aa')
        axios.get(`${url}/api/food/list`).then((response)=>{
            setFoodList(response.data.foods)
        }).catch((error)=>{
            console.log(error.response.data.msg);
            enqueueSnackbar('獲取菜品資料失敗', { variant: 'error' });
        });
    }

    const loadCartData =  (token)=>{
        if (token){
            const response =  axios.post(`${url}/api/cart/get`,{},{headers:{token}}).then(response=>{
                setCartItems(response.data.cartData);
            }).catch(error=>{
                enqueueSnackbar('獲取購物車資料失敗', { variant: 'error' });
                console.log(`${error.response.data.msg}`);
            })
        }
    }

    const initialize = async ()=>{
        await fetchFoodList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            loadCartData(localStorage.getItem("token"));
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
        setToken,
        foodList
    }

    return (<StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
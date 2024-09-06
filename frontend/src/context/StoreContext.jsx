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
    const [shippingInfo,setShippingInfo] = useState({});
    const [address,setAddress] = useState({
        countryAndCity:"南投縣",
        position:""
    })

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

    const deleteItem = (itemId) =>{
        if (token){
            axios.post(`${url}/api/cart/delete`,{itemId},{headers:{token}}).then(response=>{
                setCartItems((prev)=>({...prev,[itemId]:0}));
            }).catch(error=>{
                enqueueSnackbar('刪除失敗', { variant: 'error' });
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
        axios.get(`${url}/api/food/list`).then((response)=>{
            setFoodList(response.data.foods)
        }).catch((error)=>{
            console.log(error.response.data.msg);
            enqueueSnackbar('獲取菜品資料失敗', { variant: 'error' });
        });
    }

    const getTotalPrice = ()=>{
        let result = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = foodList.find((food)=>(food._id===item));
                result += itemInfo.price * cartItems[item]
            }
        }
        return result;
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
        deleteItem,
        getTotalPrice,
        address,
        setAddress,
        url,
        token,
        setToken,
        foodList,
        shippingInfo,
        setShippingInfo
    }

    return (<StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
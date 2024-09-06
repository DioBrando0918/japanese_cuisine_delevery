import userModel from "../models/userModel.js";
import cartRouter from "../routers/cartRouter.js";
import axios from "axios";

const addToCart = async (req,res)=>{
    try{
        const user = await userModel.findById(req.body.userId);
        let cartData = user.cartData;
        if (!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({
            msg:"已加入購物車"
        })
    }catch (error){
        res.status(500).json({
            msg:`${error}`
        })
    }

}

const removeFromCart = async (req,res)=>{
    try{
        const user = await userModel.findById(req.body.userId);
        let cartData = user.cartData;

        if (cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({
            msg:"已從購物車移除"
        })
    }catch (error){
        res.status(500).json({
            msg:`${error}`
        })
    }
}

const deleteFromCart = async (req,res)=>{
    try{
        const user = await userModel.findById(req.body.userId);
        let cartData = user.cartData;

        cartData[req.body.itemId] = 0;
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({
            msg:'已從購物刪除'
        })
    }catch (error){
        res.status(500).json({
            msg:`${error}`
        })
    }
}

const getCart = async (req,res) =>{
    try{
        const user = await userModel.findById(req.body.userId);
        let cartData = user.cartData;

        res.status(200).json({
            msg:"取得購物車數據成功",
            cartData
        })
    }catch (error){
        res.status(500).json({
            msg:`${error}`
        })
    }
}

const getShippingInfo = async (req,res)=>{
    const apiKey = process.env.DISTANCE_MATRIX_API;
    const origin = process.env.STORE_LOCATION;
    const destination = req.body.address.countryAndCity+req.body.address.position;
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
            params: {
                origins: origin,
                destinations: destination,
                key: apiKey,
                units: 'metric'
            }
        });

        const totalMeters = response.data.rows[0].elements[0].distance.value;
        if (totalMeters < 15000){
            res.status(200).json({
                msg:'獲取成功',
                shippingInfo:{
                    price:(()=>{
                        let result = 0;
                        let pricePerKilometer = 7;

                        if (totalMeters<1000){
                            result = 0;
                        }else{
                            result =(Math.floor(totalMeters/1000) * pricePerKilometer)
                        }
                        return result
                    })(),
                    duration:response.data.rows[0].elements[0].duration.text
                }
            })
        }else{
            res.status(422).json({
                msg:"超出15公里的配送範圍"
            })
        }

    }catch (error){
        res.status(500).json({
            msg:`${error}`
        })
    }
}

export {
    addToCart,
    removeFromCart,
    getCart,
    deleteFromCart,
    getShippingInfo
}

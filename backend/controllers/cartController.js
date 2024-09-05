import userModel from "../models/userModel.js";
import cartRouter from "../routers/cartRouter.js";

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

export {
    addToCart,
    removeFromCart,
    getCart
}

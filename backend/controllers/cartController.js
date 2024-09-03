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
        res.json({
            code:200,
            msg:"已加入購物車",
            data:null
        })
    }catch (error){
        res.json({
            code:500,
            msg:`${error}`,
            data:null
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
        res.json({
            code:200,
            msg:"已從購物車移除",
            data:null
        })
    }catch (error){
        res.json({
            code:500,
            msg:`${error}`,
            data:null
        })
    }
}

const getCart = async (req,res) =>{
    try{
        const user = await userModel.findById(req.body.userId);
        let cartData = user.cartData;

        res.json({
            code:200,
            msg:"已從購物車移除",
            data: {cartData}
        })
    }catch (error){
        res.json({
            code:500,
            msg:`${error}`,
            data:null
        })
    }
}

export {
    addToCart,
    removeFromCart,
    getCart
}

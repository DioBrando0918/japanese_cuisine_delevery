import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req,res)=>{
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save();
        res.json({
            code:200,
            msg:"新增成功",
            data:null
        })
    }catch (error){
        console.log(error);
        res.json({
            code:500,
            msg:`${error}`,
            data:null
        })
    }
}

const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({
            code:200,
            msg:"查詢成功",
            data: {foods}
        })
    }catch (error){
        console.log(error);
        res.json({
            code:500,
            msg:`${error}`,
            data:null
        })
    }
}

const removeFood = async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body._id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        await foodModel.findByIdAndDelete(req.body._id);
        res.json({
            code:200,
            msg:"移除成功",
            data:null
        });
    }catch (error){
        console.log(error);
        res.json({
            code:500,
            msg:`${error}`,
            data:null
        });
    }
}

export {
    addFood,
    listFood,
    removeFood
}
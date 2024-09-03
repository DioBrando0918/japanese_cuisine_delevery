import mongoose from "mongoose";

export const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://usergreatstack:z20216705@cluster0.vgnplq7.mongodb.net/japanese_cuisine_delevery").then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log(err);
    });
}
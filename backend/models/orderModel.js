import mongoose from "mongoose";
import moment from "moment";

const orderSchema = new mongoose.Schema({
    orderNo:{type:String,required:true},
    paymentType:{type:String},
    userId:{type:String,required:true},
    merchandise:{type:Array,required:true},
    totalPrice:{type:Number,required:true},
    address:{type:String,required:true},
    status:{type:String,default:'Food processing'},
    createTime:{type:String,default:moment().format('yyyy-MM-DD HH:mm:ss').toString()},
    paymentTime:{type:String},
    payment:{type:Boolean,default:false}
});

const orderModel = mongoose.models.order || new mongoose.model('order',orderSchema);

export default orderModel;
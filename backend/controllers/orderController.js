import { v1 as uuidv1 } from 'uuid';
import moment from "moment";
import OrderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import ECPAY from "../ECPAY_Payment_node_js/lib/ecpay_payment.js"
import orderModel from "../models/orderModel.js";

const options = {
    "OperationMode": "Test", //Test or Production
    "MercProfile": {
        "MerchantID": "3002607",
        "HashKey": "pwFHCqoQZGmho4w6",
        "HashIV": "EkRm7iFT261dpevs"
    },
    "IgnorePayment": [],
    "IsProjectContractor": false
}


const placeOrder = async (req,res)=>{
    const uuid = uuidv1().replace(/-/g, '').slice(0, 20);
    const date = moment().format('YYYY/MM/DD HH:mm:ss').toString()
    let baseParam = {
        MerchantTradeNo: uuid,
        MerchantTradeDate: date,
        TotalAmount: '',
        TradeDesc: 'test',
        ItemName: '',
        ReturnURL: `${process.env.BACKEND_URL}/api/order/verify`,
        ClientBackURL: `${process.env.FRONTEND_URL}/orderResult?merchantTradeNo=${uuid}`
    }

    let totalPrice = 0;
    let merchandise = []
    req.body.orderItems.map((item)=>{
        totalPrice+=item.price*item.quantity;
        if (!baseParam.ItemName){
            baseParam.ItemName = item.name;
        }else{
            baseParam.ItemName += `#${item.name}`
        }
        merchandise.push(item.name)
    })
    baseParam.TotalAmount = String(totalPrice+req.body.shippingInfo.price);

    const create = new ECPAY(options)
    const htm = create.payment_client.aio_check_out_credit_onetime( baseParam)
    try{
        const newOrder = new OrderModel({
            orderNo:uuid,
            userId:req.body.userId,
            merchandise:merchandise,
            totalPrice:baseParam.TotalAmount,
            address:req.body.address.countryAndCity + req.body.address.position,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        res.status(200).send(htm);

    }catch (error){
        console.log(`${error}`);
        res.status(500).json({
            msg:`${error}`
        });
    }
}

const verifyOrder= async (req,res)=>{
    const data = req.body
    const {CheckMacValue} = data;
    delete data.CheckMacValue;

    const create = new ECPAY(options);
    const checkValue = create.payment_client.helper.gen_chk_mac_value(data);

    await orderModel.findOneAndUpdate({orderNo:data.MerchantTradeNo},{
        paymentType:data.PaymentType,
        paymentTime:data.PaymentDate,
    })

    if (checkValue === CheckMacValue){
        if (data.RtnCode === "1"){
            await orderModel.findOneAndUpdate({orderNo:data.MerchantTradeNo},{payment:true});
            res.send('1|OK');
        }else{
            await orderModel.findOneAndDelete({orderNo:data.MerchantTradeNo});
            res.send('0|FAIL');
        }
    }
}

const resultOrder = async (req,res)=>{
    const {merchantTradeNo} = req.body;
    const result = await orderModel.findOne({orderNo:merchantTradeNo});
    if (result.payment){
        res.status(200).json({
            msg:"支付成功",
            orderNo:result.orderNo,
            create_time:result.create_time,
            totalPrice:result.totalPrice
        })
    }else{
        res.status(500).json({
            msg:"支付失敗"
        })
    }
}

export {
    placeOrder,
    verifyOrder,
    resultOrder
}
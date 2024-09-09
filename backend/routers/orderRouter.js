import express from "express";
import {placeOrder, resultOrder, userOrders, verifyOrder} from "../controllers/orderController.js";
import certification from "../middleware/certification.js";

const orderRouter = express.Router();

orderRouter.post('/placeOrder',certification,placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.post('/result',resultOrder);
orderRouter.post('/userOrders',certification,userOrders);

export default orderRouter
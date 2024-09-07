import express from "express";
import {placeOrder} from "../controllers/orderController.js";
import certification from "../middleware/certification.js";

const orderRouter = express.Router();

orderRouter.post('/placeOrder',certification,placeOrder);

export default orderRouter
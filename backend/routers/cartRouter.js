import express from "express";
import certification from "../middleware/certification.js";
import {addToCart, getCart, removeFromCart} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post('/add',certification,addToCart);
cartRouter.post('/remove',certification,removeFromCart);
cartRouter.post('/get',certification,getCart);

export default cartRouter;
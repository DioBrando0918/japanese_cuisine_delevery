import express from "express";
import certification from "../middleware/certification.js";
import {
    addToCart,
    deleteFromCart,
    getCart,
    getShippingInfo,
    removeFromCart
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post('/add', certification, addToCart);
cartRouter.post('/remove', certification, removeFromCart);
cartRouter.post('/get', certification, getCart);
cartRouter.post('/delete', certification, deleteFromCart);
cartRouter.post('/shippingInfo', certification, getShippingInfo);


export default cartRouter;
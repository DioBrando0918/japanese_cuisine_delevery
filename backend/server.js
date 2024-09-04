import express from 'express';
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import 'dotenv/config';
import {connectDb} from "./config/db.js";
import userModel from "./models/userModel.js";
import userRouter from "./routers/userRouter.js";
import cartRouter from "./routers/cartRouter.js";
import foodRouter from "./routers/foodRouter.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/food',foodRouter);
app.use("/images",express.static('uploads'))

app.get('/',(req, res)=>{
    res.send("Server Working");
});
app.listen(port,'0.0.0.0',()=>{
    console.log(`server started on http://localhost:${port}`);
});

connectDb();


import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from 'validator';

const login = async (req,res)=>{
    const {email,password} =req.body;
    try{
        const user = await userModel.findOne({email});
        if (!user){
            return res.json({
                code:500,
                msg:"會員不存在",
                data:null
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            return res.json({
                code:500,
                msg:"密碼錯誤",
                data:null
            })
        }

        const token = createToken(user._id);
        res.json({
            code:200,
            msg:'登入成功',
            data:{
                token
            }
        })
    }catch (error){
        res.json({
            code:500,
            msg:`${error}`,
            data:null
        })
    }
}

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET)
}

const register = async (req,res)=>{
    const {email,password,firstName,lastName,phoneNumber} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({
                code:500,
                msg:'用戶已存在',
                data:null
            })
        }

        if (!validator.isEmail(email)){
            return res.json({
                code:500,
                msg:'請輸入有效電子信箱',
                data:null
            })
        }

        if (password.length < 8){
            return res.json({
                code:500,
                msg:"密碼長度不足，請輸入至少8個字符",
                data:null
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            email,
            password:hashedPassword,
            name:firstName+lastName,
            phoneNumber,
        });

        const user = newUser.save();
        res.json({
            code:200,
            msg:'註冊成功',
            data:{
                token:createToken(user._id)
            }
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
    login,
    register
}
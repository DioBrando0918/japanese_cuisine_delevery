import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from 'validator';

const login = async (req,res)=>{
    const {email,password} =req.body;
    try{
        const user = await userModel.findOne({email});
        if (!user){
            return res.status(404).json({
                msg:"會員不存在"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            return res.status(401).json({
                msg:"密碼錯誤"
            })
        }

        const token = createToken(user._id);
        res.status(200).json({
            msg:'登入成功',
            token
        })
    }catch (error){
        res.status(500).json({
            msg:`${error}`
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
            return res.status(409).json({
                msg:'用戶已存在'
            })
        }

        if (!validator.isEmail(email)){
            return res.status(400).json({
                msg:'請輸入有效電子信箱'
            })
        }

        if (password.length < 8){
            return res.status(400).json({
                msg:"密碼長度不足，請輸入至少8個字符"
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
        res.status(200).json({
            msg:'註冊成功',
            token:createToken(user._id)
        })
    }catch (error){
        res.status(500).json({
            msg:`${error}`
        })
    }
}

export {
    login,
    register
}
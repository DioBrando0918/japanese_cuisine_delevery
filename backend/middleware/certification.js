import jwt from "jsonwebtoken";

const certification = async (req,res,next) =>{
    const {token} = req.headers;
    if (!token){
        return res.json({
            code:500,
            msg:"不是授權的用戶,請重新登入",
            data:null
        })
    }else{
        try{
            const token_decode = jwt.verify(token,process.env.JWT_SECRET);
            req.body.userId = token_decode._id
            next()
        }catch (error){
            res.json({
                code:500,
                msg:`${error}`,
                data:null
            })
        }
    }
}

export default certification;


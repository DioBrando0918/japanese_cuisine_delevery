import jwt from "jsonwebtoken";

const certification = async (req,res,next) =>{
    const {token} = req.headers;
    if (!token){
        return res.status(401).json({
            msg:"不是授權的用戶,請重新登入"
        })
    }else{
        try{
            const token_decode = jwt.verify(token,process.env.JWT_SECRET);
            req.body.userId = token_decode._id
            next()
        }catch (error){
            res.status(500).json({
                msg:`${error}`
            })
        }
    }
}

export default certification;


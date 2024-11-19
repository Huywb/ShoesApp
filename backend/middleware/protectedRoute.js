import jwt from 'jsonwebtoken'
import { AccessToken } from '../utils/GenerationToken'

export const protectedRoute = async (req,res,next)=>{
    try {
        const authorization = req.headers.authorization

        if(!authorization || !authorization.startsWith('Bearer ')){
            return res.status(401).json({message:"Cannot find Token"})
        }
        const token = authorization.split(" ")[1]
        if(!token){
            return res.status(401).json({message:"Not Authorized"})
        }

        const decoded = jwt.verify(token,process.env.JWT)
        

        req.user = decoded
        next()
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(403).json({ message: "Invalid or expired token" });
    }
}


export const RFprotectedRoute = async (req,res,next)=>{
    try {
        const refreshToken = req.cookies.refreshToken

       
        const token = refreshToken.split(" ")[1]
        if(!token){
            return res.status(401).json({message:"Not Authorized"})
        }
        jwt.verify(token,process.env.RFJWT,(err,user)=>{
            if(err){
                return res.status(401).json({message:"Invalid or expired refresh token"})
            }

            const newAccessToken = AccessToken(user.id)
            res.status(200).json({ accessToken: newAccessToken });
        })

        next()
    } catch (error) {
        console.error("Error refreshing access token:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
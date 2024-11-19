import jwt from 'jsonwebtoken'

export const AccessToken = async (id)=>{
    const accessToken = jwt.sign({id},process.env.JWT,{expiresIn: '1h'})
    return accessToken
}

export const RefreshToken = async(id)=>{
    const refreshToken = jwt.sign({id},process.env.RFJWT,{expiresIn:'7d'})
    return refreshToken
}
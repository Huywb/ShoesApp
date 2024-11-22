import Discount from "../../models/discount/Discount.js"

export const createDiscount = async(req,res)=>{
    try {
        const {name,quantity} = req.body
        if(!name || !quantity){
            return res.status(404).json({message:"All field are required"})
        }
        const createDiscount =  await Discount.create({
            name,
            quantity
        })

        res.status(200).json({data: createDiscount,message:"Create new Discount success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const getAllDiscount = async(req,res)=>{
    try {
        const getallDiscount = await Discount.find({userId: req.user})
        if(getAllDiscount.length<1){
            return res.status(204).json({message:"Discount is empty"})
        }
        res.status(200).json({data : getallDiscount,message:"Get all discount success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})    
    }
}

export default {createDiscount,getAllDiscount}
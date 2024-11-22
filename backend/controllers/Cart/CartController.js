import Cart from "../../models/cart/Cart.js"


export const getAllCart = async(req,res)=>{
    try {
        const {id} = req.body
        const allcart = await Cart.find({userId: id}).populate("product.productId");
        if(allcart.length <1){
            return res.status(204).json({message:"Cart is empty"})
        }

        res.status(200).json({data: allcart,message:"Get All Cart success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }

}

export const getCartById = async (req,res)=>{
    try {
        const {id} = req.params
        
        const getcartbyid = await Cart.findById(id).populate("product.productId");

        if(!getcartbyid){
            return res.status(404).json({message:"Cannot find Cart"})
        }

        res.status(200).json({data: getcartbyid, message:"Get Cart by ID success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export default {getAllCart,getCartById}

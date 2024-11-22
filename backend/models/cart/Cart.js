import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,ref: "User",required:true},
    product: [{
                productId : {type: mongoose.Schema.Types.ObjectId,ref: "Product"}, 
                quantity: { type: Number, required: true }}],
    discount : [{type: mongoose.Schema.Types.ObjectId,ref: "Discount"}],
    status: {type:String, default: "pending"},
    totalPrice : {type: Number, required:true}
},{timestamps:true})

export const Cart = mongoose.model('Cart',cartSchema) || mongoose.models.Cart

export default Cart
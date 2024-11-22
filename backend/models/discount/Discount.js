import mongoose from "mongoose";



const discountSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,ref:"User"},
    name: {type: String,required:true},
    date : {type: Date,required:true},
    expiryDate : {type: Date,required:true},
    quantity: {type: Number, required:true}
},{timestamps:true})

const Discount = mongoose.model("Discount",discountSchema) || mongoose.models.Discount

export default Discount
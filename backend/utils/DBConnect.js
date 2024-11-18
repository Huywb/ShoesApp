import mongoose from "mongoose"

export const ConnectDB = async(req,res)=>{
    try {
        const connect = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`Connected to database: ${connect.connection.name}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
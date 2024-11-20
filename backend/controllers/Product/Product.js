import Product from "../../models/product/Product.js"
import cloudinary from 'cloudinary'



export const getAllProduct = async(req,res)=>{
    try {
        const getAllProduct = await Product.find()
        if(getAllProduct.length<1){
            return res.status(204).json({message:"Product is empty"})
        }

        res.status(200).json({data:getAllProduct,message:"Gett All Product success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const getProductById = async(req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            return res.status(404).json({message:"Product not exist"})
        }

        const getProductbyid = await Product.findById(id)

        if(!getProductById){
            return res.status(404).json({message:'Cannot find Product'})
        }

        res.status(200).json({data:getProductbyid,message:"Get Product by ID success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const createProduct = async (req,res)=>{
    try {
        const {name,description,price,category,inStock,img} = req.body
        if(!name || !description || !price || !category || !inStock || !img){
            return res.status(404).json({message:"All field are required"})
        }

        let imgUrl = [];
        if(img.length>0){
            const saveImg = img.map((item)=>
            cloudinary.v2.uploader.upload(item,{
                folder: 'Shoe-product'
            })
            )

            const uploadResult = await Promise.all(saveImg)

            imgUrl = uploadResult.map((item)=>item.secure_url)

        }

        const newProduct = await Product.create({
            name,
            description,
            price,
            category,
            inStock,
            img: imgUrl 
        })
        res.status(200).json({data: newProduct,message:"Create Product success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const {name,description,price,category,inStock,img} = req.body
        const checkProduct = await Product.findById(id)

        if(!checkProduct){
            return res.status(404).json({message:"Cannot find product"})
        }
        if(!name || !description || !price || !category || !inStock || !img){
            return res.status(404).json({message:"All field are required"})
        }
        const existingImages = checkProduct.img; 
        if (existingImages && existingImages.length > 0) {
            const deletePromises = existingImages.map((url) => {
                const publicId = url.split('/').pop().split('.')[0]; 
                return cloudinary.v2.uploader.destroy(publicId);
            });

            await Promise.all(deletePromises);
        }

        const uploadPromises = img.map((imagePath) => {
            return cloudinary.v2.uploader.upload(imagePath, {
                folder: 'your-folder-name', 
            });
        });

        
        const uploadResults = await Promise.all(uploadPromises);
        const newImageUrls = uploadResults.map(result => result.secure_url);

        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            description,
            price,
            category,
            inStock,
            img: newImageUrls, 
        }, { new: true });

        res.status(200).json({ data: updatedProduct, message: "Product updated successfully" });
    
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            return res.status(404).json({message:"Cannot find Product"})
        }

        const checkProduct = await Product.findById(id)

        if(!checkProduct){
            return res.status(404).json({mesage:"Product not exist"})
        }
        const existingImages = checkProduct.img; 
        if (existingImages && existingImages.length > 0) {
            const deletePromises = existingImages.map((url) => {
                const publicId = url.split('/').pop().split('.')[0]; 
                return cloudinary.v2.uploader.destroy(publicId);
            });

            await Promise.all(deletePromises);
        }

        const deleteP = await Product.findByIdAndDelete(id)

        res.status(200).json({data: deleteP,message:"Delete Product success"})
        
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}
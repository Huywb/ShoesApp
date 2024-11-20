import Category from "../../models/category/Category.js";



export const getAllCategory = async(req,res)=>{
    try {
        const allCategory = await Category.find()

        if(allCategory.length<1){
            return res.status(204).json({message:"Category is empty"})
        }

        res.status(200).json({data:allCategory,message:"Get All Category success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}


export const getCategoryById = async(req,res)=>{
    try {
        const {id} = req.params
        
        if(!id){
            return res.status(404).json({message:"Category not exist"})
        }

        const getCategory = await Category.findById(id)

        res.status(201).json({data:getCategory,message:"Get category by Id success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}



export const createCategory = async (req,res)=>{
    try {
        const {name} = req.body
        
        const checkCate = await Category.findOne({name})

        if(checkCate){
            return res.status(401).json({message:"Category already exist"})
        }

        const newCate = await Category.create({
            name
        })

        res.status(200).json({data : newCate,message:"Create New Category success"})
    } catch (error) {
        console.error("Error ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateCategory  = async (req,res)=>{
    try {
        const {id} = req.params
        const {name} = req.body

        if(!id){
            return res.status(404).json({message:"Category not exist"})
        }

        const checkCate = await Category.findById(id)

        if(!checkCate){
            return res.status(401).json({message:"Cannot find category"})
        }

        const updateCate = await Category.findByIdAndUpdate(id,
            {
                name
            },{new:true}
        )
        res.status(200).json({data:updateCate,message:"Update Category success"})

    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteCategory = async (req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            return res.status(404).json({message:"Category not exist"})
        }
        
        const deleteCategory = await Category.findByIdAndDelete(id)
        if (!deleteCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({message:"Delete Category Success"})
    } catch (error) {
        console.error("Error",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export default {getAllCategory,getCategoryById,createCategory,updateCategory,deleteCategory}
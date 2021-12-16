import Express from "express";
import upload from "../helpers/filehelper.js";
import { addProduct,Product,deleteProduct,updateProduct,getProduct } from "../controller/admin/productController.js";
import { addCategory,Category,updateCategory,deleteCategory,getCategory } from "../controller/admin/categoryController.js";
const adminRoute = Express.Router()

// catrgory route
adminRoute.post('/category/add',upload.single('img'),addCategory)
adminRoute.delete('/category/delete/:id', deleteCategory)
adminRoute.get('/category/', Category)
adminRoute.get('/category/:id', getCategory)
adminRoute.put('/category/',upload.single('img'), updateCategory)

// product route 
adminRoute.post('/product/add', upload.array('img'),addProduct)
adminRoute.delete('/product/delete/:id', deleteProduct)
adminRoute.get('/product/', Product)
adminRoute.get('/product/:id', getProduct)
adminRoute.put('/product/:id',  upload.array('img'),updateProduct)
adminRoute.post('/product/add', upload.array('img'),addProduct)
adminRoute.delete('/product/delete/:id', deleteProduct)
adminRoute.get('/product/', Product)
adminRoute.get('/product/:id', getProduct)
adminRoute.put('/product/:id',  upload.array('img'),updateProduct)

export default adminRoute
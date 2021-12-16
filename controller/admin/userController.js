import userModel from '../../model/users/userModel.js'
import categoryModel from '../../model/admin/categoryModel.js'
import productModel from '../../model/admin/productModel.js'
import  Jwt  from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const addUser = async (resquest, response) => {
    try {
        const isExist= await userModel.findOne({email:resquest.body.email})
        if(isExist){
            response.status(401).send("user already exist")  
        }
        else{
            const salt = await bcrypt.genSalt(10);
            resquest.body.password = await bcrypt.hash(resquest.body.password, salt);
            const user = await userModel(resquest.body)
            user.save()
            response.status(200).json(user)
        }
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const loginUser = async (request, response) => {
    try {
        const email=request.body.email
        const password=request.body.password
        const isExist= await  userModel.findOne({email})
         
      
        if(!isExist){
            response.status(401).json({message:"invalid email or password"})
        }else{
            const validPassword = await bcrypt.compare(password,isExist.password);
            if(!validPassword){
                response.status(401).json({message:"invalid email or password"})
            }
            var token = Jwt.sign({name:isExist.name,email:isExist.email},'secret1235')
            const user={
                username:isExist.name,
                email:isExist.email,
            }
            response.status(200).header('x-auth-token', token).json(user)
        }
        
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const User = async (resquest, response) => {
    try {
        const users = await userModel.find()
        response.status(200).json(users)
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const updateUser = async (resquest, response) => {
    const {id} = resquest.params
    try {
        const user = await userModel.findById(id)
        response.status(200).json(user)
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const getUser = async (resquest, response) => {
    const {id} = resquest.params
    try {
        const user = await userModel.findById(id)
        response.status(200).json(user)
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const deleteUser = async (resquest, response) => {
    const {id} = resquest.params
    try {
         await userModel.deleteOne({ _id: id })
        response.status(200).send("success")
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}


export const productByCategory = async (resquest, response) => {
    const {id} = resquest.params
    try {
        const products = await productModel.find({category:id})
        response.status(200).json(products)
    }
    catch (error) {
        response.status(401).send("something wrong")
    }
}
export const homeData = async (resquest, response) => {
    try {
        const categories = await categoryModel.find();
        const mainData = await fetchProductsForEachCategory(categories);
        response.status(200).json(mainData);
    }
    catch (error) {
        response.status(401).send("error",error)
    }
}



async function fetchProductsForEachCategory(categories) {
    const mainData = [];
    for(const row of categories) {
        const products = await productModel.find({ category: row._id });
        mainData.push({
            category: row.name,
            products
        });
    }
    return mainData;
}
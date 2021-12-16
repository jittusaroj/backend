import mangoose from "mongoose"
import autoIncrement from 'mongoose-auto-increment';

const productSchema=mangoose.Schema({
    name: String,
    mrp: String,
    category:String,
    price: String,
    desc: String,
    img: [Object]
})
autoIncrement.initialize(mangoose.connection)
productSchema.plugin(autoIncrement.plugin,'product')

const userModel=mangoose.model('product',productSchema)
export default userModel
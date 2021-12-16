import mangoose from "mongoose"
import autoIncrement from 'mongoose-auto-increment';

const categorySchema=mangoose.Schema({
    name:String,
    img:String,
    path:String,
})
autoIncrement.initialize(mangoose.connection)
categorySchema.plugin(autoIncrement.plugin,'category')

const categoryModel=mangoose.model('category',categorySchema)
export default categoryModel
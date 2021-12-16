import mangoose from "mongoose"
import autoIncrement from 'mongoose-auto-increment';

const userSchema=mangoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String
    
})
autoIncrement.initialize(mangoose.connection)
userSchema.plugin(autoIncrement.plugin,'user')

const userModel=mangoose.model('user',userSchema)
export default userModel
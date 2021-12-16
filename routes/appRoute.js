import  Express  from "express";
import {getUser,deleteUser,updateUser,User,addUser,homeData} from "../controller/admin/userController.js"
    const userRouter=Express.Router()
          userRouter.post('/add',addUser)
          userRouter.delete('/delete/:id',deleteUser)
          userRouter.get('/',homeData)
          userRouter.get('/user',User)
          userRouter.get('/:id',getUser)
          userRouter.get('/:id',getUser)
          


export default userRouter
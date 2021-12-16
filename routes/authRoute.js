import  Express  from "express";
import { addUser, loginUser, updateUser, User } from '../controller/admin/userController.js';
    const authRouter=Express.Router()
          authRouter.post('/register',addUser)
          authRouter.post('/login',loginUser)
        //   authRouter.get('/login',loginUser)
          authRouter.post('/users',User)
          authRouter.post('/getuser',updateUser)

export default authRouter
import appRoute from "./appRoute.js"
import adminRoute from "./adminRoute.js";
import express  from "express";
import authRoute from "./authRoute.js"

const Route=express.Router()
Route.use('/', appRoute);
Route.use('/admin', adminRoute)
Route.use('/auth', authRoute)

export default Route




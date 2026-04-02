import { NextFunction,Request,Response } from "express";
import { HttpError } from "http-errors";
import envConfig from "../config";


const globalErrorHandler =(err:HttpError,req:Request,res:Response,next:NextFunction)=>{
const statusCode = err.statusCode || 500
res.status(statusCode).json({
    message : err.message,
    errorStock: envConfig.environment ==='development' ? err.stack :"Something went wrong"

})
}
export default globalErrorHandler

import { NextFunction, Request,Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config";
import createHttpError from "http-errors";

const createNote =async(req: Request,res:Response,next:NextFunction)=>{
    try {
        const file =(req as any).file ? `${envConfig.backendurl}/${(req as any).file.filename}` :'https://www.google.com/imgres?q=hahha&imgurl=https%3A%2F%2Fmedia.tenor.com%2F7qk5NdELmVoAAAAe%2Fhahha-laugh.png&imgrefurl=https%3A%2F%2Ftenor.com%2Fview%2Fhahha-laugh-giggle-happy-gif-16039624&docid=4HijO_Kxq_QbBM&tbnid=FTjIiC7W2YEr5M&vet=12ahUKEwj6tbvypc-TAxXG3jgGHWZgNi8QnPAOegQIIhAB..i&w=640&h=518&hcb=2&ved=2ahUKEwj6tbvypc-TAxXG3jgGHWZgNi8QnPAOegQIIhAB'
    const {title, subtitle,description}=req.body  
    if(!title || !subtitle || !description){
            res.status(400).json({
                message :"please prove title,subtitle, description"
            })
            return
        }  
        await  noteModel.create({
            title,
            subtitle,
            description,
            file
        })
        res.status(200).json({
            message :"note created !"
        })

    } catch (error) {
       console.log(error) 
        return next(createHttpError(500,'Error while creating.'))
    }
}
export {createNote}
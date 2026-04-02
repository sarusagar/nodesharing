import mongoose from 'mongoose';
import envConfig from './config';
const connectTodatase =async()=>{
    try {
        await mongoose.connect( envConfig.databaseString as string)
        mongoose.connection.on("connected",()=>{
            console.log("dabatabase connedted successfully.")
        })
    } catch (error) {
        console.log("Failed to connect db.")
        process.exit(1)
        
    }
}
export  default connectTodatase


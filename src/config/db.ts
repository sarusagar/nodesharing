import mongoose from 'mongoose';
import envConfig from './config';
const connectTodabase =async()=>{
    try {
        await mongoose.connect( envConfig.databaseString as string)
        mongoose.connection.on("connected",()=>{
            console.log("dabatabase connedted successfully done by sagar saru .")
        })
    } catch (error) {
        console.log("Failed to connect db.")
        process.exit(1)
        
    }
}
export  default connectTodabase


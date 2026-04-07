import express from 'express'
import globalErrorHandler from './config/middlewares/globalErrorHandler'
import noteRoute from './config/note/noderouter'
import cors from 'cors'
import envConfig from './config/config'

const app=express()
//PARSE INCOMING JSON TO HANDLE  UNDEFINED ERROR
app.use(express.json())

//cors configuration
app.use(cors({
    origin:envConfig.frontendUrl
}))


app.use("/api/notes",noteRoute)
//image public
app.use(express.static("./src/uploads"))
app.use(globalErrorHandler)
export default app

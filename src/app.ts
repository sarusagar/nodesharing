import express from 'express'
import globalErrorHandler from './config/middlewares/globalErrorHandler'
import noteRoute from './config/note/noderouter'

const app=express()
app.use(express.json())
app.use("/api/notes",noteRoute)
app.use(express.static("./src/uploads"))
app.use(globalErrorHandler)
export default app

import express from 'express'
import globalErrorHandler from './config/middlewares/globalErrorHandler'
import noteRoute from './config/note/noderouter'

const app=express()

app.use("/api/notes",noteRoute)
app.use(globalErrorHandler)
export default app

import app from "./src/app"
import envConfig from "./src/config/config"
import connectTodatabase from "./src/config/db"

const startServer=async()=>{
   await connectTodatabase()
    const port =envConfig.port || 3000
    app.listen(port,()=>{
        console.log(`Server started at port number ${port}`)
    })
}
startServer()
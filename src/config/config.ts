

import { config } from 'dotenv'
config()

const envConfig ={
    port : process.env.PORT,
    databaseString : process.env.MONGODB_URL,
    backendurl : process.env.BACKEND_URL,
    environment :process.env.NODE_ENV
    frontendUrl:process.env.FORNTEND_URL
}
export default envConfig

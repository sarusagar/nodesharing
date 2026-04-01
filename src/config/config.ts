// import {config} from 'dotenv'
// config()

// const envConfig ={
//     port : process.env.PORT
// }


// export default envConfig

import { config } from 'dotenv'
config()

const envConfig ={
    port : process.env.PORT,
    databaseString : process.env.MONGODB_URL
}
export default envConfig

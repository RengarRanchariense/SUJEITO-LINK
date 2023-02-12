
import axios from "axios"

export const key = "d60a8f0dd349b758a93a136a4c092b517835630c"


const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4/",
    headers:{
        "Authorization": `Bearer ${key}`
    }
})

export default api
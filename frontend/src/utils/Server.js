import axios from 'axios'

const Server = axios.create({
    baseURL: "https://server.sbfunds.in/v1"
})

export default Server
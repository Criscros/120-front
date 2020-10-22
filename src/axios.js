// axios
import axios from 'axios'

const baseURL = "http://localhost:3000/"


export default axios.create({
  baseURL: baseURL,
  headers: {
      'authorization': localStorage.getItem('accessToken')
  }
  //You can add your headers here
})

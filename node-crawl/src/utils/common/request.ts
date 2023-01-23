import axios from 'axios'
/**
 * 封装axios
 */

axios.interceptors.response.use(
  (res) => res,
  (err) => err
)

export default axios

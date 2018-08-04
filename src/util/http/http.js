import axios from 'axios'


// 配置axios的默认URL
axios.defauls.baseURL = 'http://local.musichouse.cn/api/'
// 配置允许跨域携带cookie
axios.defaults.withCredentials = true
// 配置超时时间
axios.defaults.timeout = 100000
// 标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(response => {
  if (response.data.state === '200') {
    return response.data
  } else {
    throw Error(response.data || '服务异常')
  }
})
​
export default axios

import axios from 'axios'

const prefix = '/api/' // api地址前缀

// 配置 axios 的默认URL
axios.defaults.baseURL = `http://music.jesbrian.cn${prefix}`
// 配置允许跨域携带 cookie
axios.defaults.withCredentials = true
// 配置超时时间
axios.defaults.timeout = 100000
// 标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'


axios.interceptors.response.use( response => {
  if (response.status === 200 || response.status === '200') {
    return response.data
  } else {
    throw Error('服务异常!')
  }
})

export default axios
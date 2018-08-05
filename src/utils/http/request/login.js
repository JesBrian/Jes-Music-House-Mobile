import http from '../http.js' // 导入封装的 axios 对象
import API_PATH  from '../apis.js' // 导入封装的 apis 对象

export function phoneLogin(params = {}) {
  return http.post(API_PATH.phoneLogin, params)
}

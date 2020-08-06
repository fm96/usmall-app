import axios from 'axios'
import qs from 'qs'
// 响应拦截
axios.interceptors.response.use(res=>{
    console.group('本次拦截的地址：'+res.url)
    console.log(res)
    console.groupEnd()
    return res
})
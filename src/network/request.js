import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/api',
    timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
    //授权login

    //放行
    return config
}, err => {
    // 根据状态码提示错误
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(result => {
    return (result.data ? result.data : res)
}, err => {
    return Promise.reject(err)
})

export default instance
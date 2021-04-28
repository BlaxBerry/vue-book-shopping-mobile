import Vue from "vue"
import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/api',
    timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
    //授权login
    const token = window.localStorage.getItem('token');
    // 判断请求接口是否需要token
    // 根据API接口需要
    if (token) {
        config.headers.Authorization = ' Bearer ' + token;
    }

    //放行
    return config
}, err => {
    // 根据状态码提示错误
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(result => {
    return (result.data ? result.data : result)

}, err => {
    if (err.response.data.errors != {}) {
        console.log("请求失败拦截器根据状态码处理的结果", err.response.data);

        // obj[Object.keys(obj)[0]]

        Vue.prototype.$toast({
            message: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0],
            position: 'top',
        })
    }
})

export default instance
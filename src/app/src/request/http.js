import store from '../redux/store'
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'antd-mobile';

// axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;  // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  // 配置请求头
axios.defaults.headers.common['token'] = store.getState().token;
// axios.defaults.baseURL = 'http://api.demo.haotian.pub';  //配置接口地址
axios.defaults.baseURL = 'http://localhost:8000/v1';  //配置接口地址

// POST传参序列化(添加请求拦截器)
// 在发送请求之前做某件事
axios.interceptors.request.use((config) => {
    if (store.getState().token) {
        config.headers.common['token'] = store.getState().token;
    }
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) =>{
    console.log('错误的传参');
    return Promise.reject(error);
});

// 返回状态判断(添加响应拦截器)
// 对响应数据做些事
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常');

    Toast.hide();
    Toast.offline('网络异常', 1, null, false);

    return Promise.reject(error);
});

// 发送post请求
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 发送get请求
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    post,
    get
}

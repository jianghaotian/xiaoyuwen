import { get, post } from './http';

const api = {
    login: p => post('users/login', p),
    verity: p => post('users/verification', p),
    verilogin: p => post('user/verilogin', p),

    getinfo: () => get('info/get')



} 

export default api;

// 调用
// api.login(表单).then(res => {
//     // 获取数据成功后的其他操作
//     …………
// }) 
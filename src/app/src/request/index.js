import { get, post } from './http';

const api = {
    login: p => post('users/login', p),
    login_veri: p => post('users/login/verification', p),
    veri_login: p => post('users/verilogin', p),

    register_veri: p => post('users/register/verification', p),
    register: p => post('users/register', p),

    get_token: p => get('users/gettoken'),
    get_info: () => get('info/get')



}

export default api;

// 调用
// api.login(表单).then(res => {
//     // 获取数据成功后的其他操作
//     …………
// }) 
import { get, post } from './http';

const api = {
    login: p => post('users/login', p),
    login_veri: p => post('users/login/verification', p),
    veri_login: p => post('users/verilogin', p),
    register_veri: p => post('users/register/verification', p),
    register: p => post('users/register', p),
    get_token: p => get('users/gettoken', p),
    get_info: p => get('info/get',p),


    change_pwd: p => post('users/changepwd', p),
    change_pwd_veri: p => post('users/cpwdveri', p),
    veri_change_pwd: p => post('users/vericpwd', p),

    set_grade: p => post('info/setgrade', p),
    set_name: p => post('info/setname', p),
    set_signature: p => post('info/setsignature', p),
    set_sex: p => post('info/setsex', p),
    set_birthday: p => post('info/setbir', p)

}


export default api;

// 调用
// api.login(表单).then(res => {
//     // 获取数据成功后的其他操作
//     …………
// }) 
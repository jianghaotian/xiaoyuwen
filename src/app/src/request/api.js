import { get, post } from './http';

const api = {
    login: p => post('users/login', p),
    login_veri: p => post('users/login/verification', p),
    veri_login: p => post('users/verilogin', p),
    register_veri: p => post('users/register/verification', p),
    register: p => post('users/register', p),
    get_token: p => get('users/gettoken', p),
    get_info: p => get('info/get',p),
    // 修改密码
    change_pwd: p => post('users/changepwd', p),
    change_pwd_veri: p => post('users/cpwdveri', p),
    veri_change_pwd: p => post('users/vericpwd', p),
    // 修改个人资料
    set_grade: p => post('info/setgrade', p),
    set_name: p => post('info/setname', p),
    set_signature: p => post('info/setsignature', p),
    set_sex: p => post('info/setsex', p),
    set_birthday: p => post('info/setbir', p),
    set_phone_veri: p => post('info/sphoneveri', p),
    set_phone: p => post('info/setphone', p),

    // 拼音
    get_xuepinyin: p => get('data/xpy', p),

    get_kanzishiyin: p => get('data/kzsy', p),
    post_kanzishiyin: p => post('data/kzsy', p),
    get_kzsy_grade: p => get('data/kzsy/grade', p),
    post_tingyinxuanzi: p => post('data/tyxz', p),
    get_tyxz_grade: p => get('data/tyxz/grade', p),

    // 成语
    get_xuechengyu: p => get('data/xcy', p),
    get_cyycz: p => get('data/cyycz', p),
    get_ccy : p => get('data/ccy', p),
    post_ccy : p => post('data/ccy', p),
    get_ccy_grade: p => get('data/ccy/grade', p),

    // 诗词
    get_buchongshiju: p => get('data/bcsj', p),
    post_buchongshiju: p => post('data/bcsj', p),
    get_bcsj_grade: p => get('data/bcsj/grade', p),

    get_xueshici: p => get('data/xsc', p),
    get_scycz: p => get('data/scycz', p),

}


export default api;

// 调用
// api.login(表单).then(res => {
//     // 获取数据成功后的其他操作
//     …………
// }) 
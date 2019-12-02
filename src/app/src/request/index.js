import { get, post } from './http';

const api = {
    login : p => post('student/login', p),

    info: () => get('info/a')



} 

export default api;

// 调用
// api.login(表单).then(res => {
//     // 获取数据成功后的其他操作
//     …………
// }) 
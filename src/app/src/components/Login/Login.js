import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button, Icon, Toast } from 'antd-mobile';
import '../../css/Login/login.css'
import api from '../../request'
import store from '../../redux/store'
import { setToken } from '../../redux/actions'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            password: ''
        }
    }
    changePhone = (e) => {
        var reg = /^[0-9]*$/;

        if (reg.test(e.target.value) && e.target.value.length <= 11) {
            this.setState({
                phone: e.target.value
            })
        }
    }
    changePassword = (e) => {
        if (e.target.value.length <= 16) {
            this.setState({
                password: e.target.value
            })
        }
    }
    login = () => {
        if (this.state.phone === '' || this.state.password === '') {
            Toast.info('用户名或密码不能为空', 1, null, false);
        } else {
            Toast.loading('正在登录...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
    
            let formData = {
                phone: this.state.phone,
                password: this.state.password
            }
            api.login(formData).then(res => {
                console.log(res);
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('登录成功', 1);
                    store.dispatch(setToken(res.data.data.token));
                    Toast.hide();
                    this.props.history.push('/home/pinyin');
                } else if (res.data.status === 10004) {
                    Toast.fail('用户名或密码错误', 1, null, false);
                    
                } else {
                    Toast.fail('服务器错误', 1, null, false);
                }
            })
        }
    }
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}} rightContent={<Link to="/register" style={{color:'#fff'}}>立即注册</Link>}>登 录</NavBar>

                <div className="logininput">
                    <input type="text" placeholder="请输入手机号" value={this.state.phone} onChange={this.changePhone}/>
                    <input type="password" placeholder="请输入密码" value={this.state.password} onChange={this.changePassword}/>
                    <div className="methods">
                        <Link to="/login/phone" style={{}}>验证码登录</Link>
                    </div>
                    <Button 
                        style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                        activeStyle={{background:'grey'}}
                        onClick={this.login}
                    >登 录</Button>
                </div>
                <div className="bottomicon">
                    <i className="iconfont icon-qq"></i>
                    <i className="iconfont icon-weixin1"></i>
                </div>
            </div>
        )
    }
}

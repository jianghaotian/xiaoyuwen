import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button, Icon, Toast } from 'antd-mobile';
// import api from '../../request'
import store from '../../redux/store'
import { setToken } from '../../redux/actions'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            verityDiv:'verity-div',
            verityText:'获取验证码',
            veriToken: '',
            time:'',
            phone: '',
            verity: '',
            password: '',
            password1: '',
            name: '',
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
    changeVerity = (e) => {
        this.setState({
            verity: e.target.value
        })
    }
    changePassword = (e) => {
        if (e.target.value.length <= 20) {
            this.setState({
                password: e.target.value
            })
        }
    }
    changePassword1 = (e) => {
        if (e.target.value.length <= 20) {
            this.setState({
                password1: e.target.value
            })
        }
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    verity =()=>{
        if (this.state.phone.length === 11) {
            this.setState({
                verityDiv: 'verity-div1',
                verityText: '正在获取...'
            })
            this.$api.register_veri({'phone': this.state.phone}).then(res => {
                console.log(res);
                if (res.data.status === 0) {
                    let verityNum = 60;
                    let time = setInterval(() => {
                        verityNum--;
                        this.setState({
                            verityText: verityNum + 's后重新获取'
                        })
                        if (verityNum <= 0) {
                            clearInterval(this.state.time);
                            this.setState({
                                verityDiv: 'verity-div',
                                verityText: '重新获取',
                            })
                        }
                    }, 1000);
                    this.setState({
                        veriToken: res.data.data.veriToken,
                        verityDiv: 'verity-div1',
                        time: time,
                        verityText: verityNum + 's后重新获取'
                    })
                } else {
                    Toast.fail('验证码获取失败', 1, null, false);
                    this.setState({
                        verityDiv: 'verity-div',
                        verityText: '重新获取'
                    })
                }
            }, () => {
                this.setState({
                    verityDiv: 'verity-div',
                    verityText: '重新获取'
                })
            });
        } else {
            Toast.info('请输入正确的手机号', 1, null, false);
        }
    }
    register = () => {
        if (this.state.phone.length !== 11) {
            Toast.info('请输入正确的手机号', 1, null, false);
        } else if (this.state.verity === '') {
            Toast.info('验证码不能为空', 1, null, false);
        } else if (this.state.password === '') {
            Toast.info('请输入密码', 1, null, false);
        } else if (this.state.password.length < 6) {
            Toast.info('密码长度不能低于6位', 1, null, false);
        } else if (this.state.password1 === '') {
            Toast.info('请再次输入密码', 1, null, false);
        } else if (this.state.password1 !== this.state.password) {
            Toast.info('两次输入的密码不一致', 1, null, false);
        } else {
            Toast.loading('正在注册...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            let formData = {
                phone: this.state.phone,
                password: this.state.password,
                name: this.state.name,
                verification: this.state.verity,
                token: this.state.veriToken
            }
            this.$api.register(formData).then(res => {
                console.log(res);
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('注册成功', 1);
                    Toast.hide();
                    this.props.history.push('/login');
                } else if (res.data.status === -2) {
                    Toast.fail('验证码错误', 1, null, false);
                } else {
                    Toast.fail('服务器错误', 1, null, false);
                }
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.time);
    }
    render() {
        return (
            <div className="logincontainer">
                {/* <div className="wode_back"></div> */}
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}} rightContent={<Link to="/login" style={{color:'#fff'}}>返回登录</Link>}>注 册</NavBar>


                <div className="logininput2">
                    <input type="text" placeholder="请输入手机号" value={this.state.phone} onChange={this.changePhone}/>
                    <div className="verity">
                        <input type="text" placeholder="请输入验证码" value={this.state.verity} onChange={this.changeVerity}/>
                        <button className={this.state.verityDiv} onClick={this.verity}>{this.state.verityText}</button>
                    </div>

                    <input type="password" required placeholder="请输入密码(6-20位英文和数字)" value={this.state.password} onChange={this.changePassword}/>
                    <input type="password" required placeholder="请确认密码" value={this.state.password1} onChange={this.changePassword1}/>
                    <input type="昵称" placeholder="昵称(可选)" value={this.state.name} onChange={this.changeName}/>
                    <Button 
                        style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                        activeStyle={{background:'grey'}}
                        onClick={this.register}
                    >注 册</Button> 
                </div>
            </div>
        )
    }
}

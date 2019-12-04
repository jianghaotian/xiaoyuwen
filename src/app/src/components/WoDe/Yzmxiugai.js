import React, { Component } from 'react';
import { NavBar,Icon,Toast,Button } from 'antd-mobile';


export default class Yzmxiugai extends Component {
    constructor() {
        super();
        this.state = {
            verityDiv:'verity-div',
            verityText:'获取验证码',
            veriToken: '',
            time:'',
            phone: '',
            verity: '',
            newPassword: '',
            newPassword1: '',
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
    changeNew = (e) => {
        if (e.target.value.length <= 20) {
            this.setState({
                newPassword: e.target.value
            })
        }
    }
    changeNew1 = (e) => {
        if (e.target.value.length <= 20) {
            this.setState({
                newPassword1: e.target.value
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
        if (this.state.verity === '') {
            Toast.info('验证码不能为空', 1, null, false);
        } else if (this.state.newPassword === '') {
            Toast.info('请输入新的密码', 1, null, false);
        } else if (this.state.newPassword.length < 6) {
            Toast.info('密码长度不能低于6位', 1, null, false);
        } else if (this.state.newPassword1 === '') {
            Toast.info('请再次输入密码', 1, null, false);
        } else if (this.state.newPassword1 !== this.state.newPassword) {
            Toast.info('两次输入的密码不一致', 1, null, false);
        } else {
            Toast.loading('正在修改...', 10, () => {
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
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info/zhanghao')}}/>} style={{background:'#617ca6',color:'#fff'}}>修 改 密 码</NavBar>
                <div className="logininput">
                    <div style={{width:'100%',float:'left',height:'2.5rem'}}> 
                        <span className='xiutext'>当前手机号：</span>
                        <span className='xiutext'>后端获取</span>
                    </div>
                    <span className='xiutext'>请输入验证码：</span>
                    <div className="verity">
                        <input type="text" placeholder="请输入验证码" value={this.state.verity} onChange={this.changeVerity}/>
                        <button className={this.state.verityDiv} onClick={this.verity}>{this.state.verityText}</button>
                    </div>
                    <span className='xiutext'>请输入密码：</span>
                    <input type="password" placeholder="请输入新密码" value={this.state.newPassword} onChange={this.changeNew}/>
                    <span className='xiutext'>请再次输入密码：</span>
                    <input type="password" placeholder="请再次输入密码" value={this.state.newPassword1} onChange={this.changeNew1}/>
                </div>
                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                            margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                    onClick={this.register}
                >确 定</Button> 
            </div>
        )
    }
}

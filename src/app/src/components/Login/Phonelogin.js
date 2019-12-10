import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Button, Icon, Toast } from 'antd-mobile';
import { setTokenAll } from '../../redux/actions';

export default class Phonelogin extends Component {
    constructor() {
        super();
        this.state = {
            verityText: '获取验证码',
            verityDiv: 'verity-div',
            veriToken: '',
            time: '',
            phone: '',
            verity: ''
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
    verity = () => {
        if (this.state.phone.length === 11) {
            this.setState({
                verityDiv: 'verity-div1',
                verityText: '正在获取...'
            })
            this.$api.login_veri({'phone': this.state.phone}).then(res => {
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
                    if (res.data.status === 1024 || res.data.status === 1023) {
                        Toast.fail('验证码获取次数过多，请稍后再试', 1, null, false);
                    } else {
                        Toast.fail('验证码获取失败', 1, null, false);
                    }
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
    login = () => {
        if (this.state.phone.length !== 11) {
            Toast.info('请输入正确的手机号', 1, null, false);
        } else if (this.state.veriToken === '') {
            Toast.info('请先获取验证码', 1, null, false);
        } else if (this.state.verity === '') {
            Toast.info('请输入验证码', 1, null, false);
        } else {
            Toast.loading('正在登录...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            let formData = {
                phone: this.state.phone,
                verification: this.state.verity,
                token: this.state.veriToken
            }
            this.$api.veri_login(formData).then(res => {
                console.log(res);
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('登录成功', 1, null, false);
                    this.$store.dispatch(setTokenAll(res.data.data.token, res.data.data.uid));
                    // Toast.hide();
                    this.props.history.push('/home/wode');
                } else if (res.data.status === -2) {
                    Toast.fail('验证码错误', 1, null, false);
                } else {
                    Toast.fail('服务器错误', 1, null, false);
                }
            })
        }
    }
    UNSAFE_componentWillUnmount() {
        clearInterval(this.state.time);
    }
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>登 录</NavBar>
                <div className="logininput">
                    <input type="text" placeholder="请输入手机号" value={this.state.phone} onChange={this.changePhone}/>
                    <div className="verity">
                        <input type="text" placeholder="请输入验证码" value={this.state.verity} onChange={this.changeVerity}/>
                        <button className={this.state.verityDiv} onClick={this.verity}>{this.state.verityText}</button>
                    </div>
                    <div className="methods">
                        <Link to="/login" style={{color:'#000'}}>密码登录</Link>
                    </div>
                    <Button 
                        style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                        activeStyle={{background:'grey'}}
                        onClick={this.login}
                    >登 录</Button> 
                </div>
                {/* <div className="bottomicon">
                    <i className="iconfont icon-qq"></i>
                    <i className="iconfont icon-weixin1" style={{}}></i>
                </div> */}
            </div>
        )
    }
}

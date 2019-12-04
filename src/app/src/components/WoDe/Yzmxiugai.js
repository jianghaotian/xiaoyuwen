import React, { Component } from 'react';
import { NavBar,Icon,Toast,Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { clearTokenAll, clearUsers, setUsers } from '../../redux/actions';


export default class Yzmxiugai extends Component {
    constructor() {
        super();
        this.state = {
            verityDiv:'verity-div',
            verityText:'获取验证码',
            veriToken: '',
            time:'',
            phone: this.$store.getState().users.phone,
            verity: '',
            newPassword: '',
            newPassword1: ''
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
    verity =()=>{
        if (this.state.phone.length === 11) {
            this.setState({
                verityDiv: 'verity-div1',
                verityText: '正在获取...'
            })
            this.$api.change_pwd_veri({'phone': this.state.phone}).then(res => {
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
                } else if (res.data.status === -1) {
                    Toast.fail('登录信息有误，请重新登录', 1, null, false);
                    this.$store.dispatch(clearTokenAll());
                    this.$store.dispatch(clearUsers());
                    this.props.history.push('/login');
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
    changePwd = () => {
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
                password: this.state.newPassword,
                verification: this.state.verity,
                veriToken: this.state.veriToken
            }
            // TODO
            this.$api.veri_change_pwd(formData).then(res => {
                console.log(res);
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('修改密码成功', 1, null, false);
                    this.props.history.push('/wode/info/zhanghao');
                } else if (res.data.status === -2) {
                    Toast.fail('验证码错误', 1, null, false);
                } else if (res.data.status === -1) {
                    Toast.fail('登录信息有误，请重新登录', 1, null, false);
                    this.$store.dispatch(clearTokenAll());
                    this.$store.dispatch(clearUsers());
                    this.props.history.push('/login');
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
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info/zhanghao')}}/>} style={{background:'#617ca6',color:'#fff'}}>修 改 密 码</NavBar>
                <div className="logininput">
                    <div style={{width:'100%',float:'left',height:'2.5rem'}}> 
                        <span className='xiutext'>当前手机号：</span>
                        <span className='xiutext'>{this.state.phone}</span>
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
                <div className="methods">
                    <Link to="/wode/info/mima">通过密码修改</Link>
                </div>
                </div>
                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                            margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                    onClick={this.changePwd}
                >确 定</Button> 
            </div>
        )
    }
}

import React, { Component } from 'react';
import { List, InputItem, Button,NavBar,Icon,Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { clearTokenAll, clearUsers, setUsers } from '../../redux/actions';


import { createForm } from 'rc-form';

class Xiugaimima extends Component {
    constructor() {
        super();
        this.state = {
            oldPassword: '',
            newPassword: '',
            newPassword1: ''
        }
    }
    changeOld = (e) => {
        if (e.target.value.length <= 20) {
            this.setState({
                oldPassword: e.target.value
            })
        }
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
    changePwd = () => {
        if (this.state.oldPassword === '') {
            Toast.info('请输入旧密码', 1, null, false);
        } else if (this.state.newPassword === '') {
            Toast.info('请输入新密码', 1, null, false);
        } else if (this.state.newPassword.length < 6) {
            Toast.info('密码长度不能低于6位', 1, null, false);
        } else if (this.state.newPassword1 === '') {
            Toast.info('请再次输入密码', 1, null, false);
        } else if (this.state.newPassword1 !== this.state.newPassword) {
            Toast.info('两次输入的密码不一致', 1, null, false);
        } else if (this.state.oldPassword === this.state.newPassword) {
            Toast.info('输入的旧密码和新密码相同', 1, null, false);
        } else {
            Toast.loading('正在修改...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            let formData = {
                oldp: this.state.oldPassword,
                newp: this.state.newPassword
            }

            this.$api.change_pwd(formData).then(res => {
                // console.log(res);
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('修改密码成功', 1, null, false);
                    this.props.history.push('/wode/info/zhanghao');
                } else if (res.data.status === -3) {
                    Toast.fail('旧密码错误', 1, null, false);
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

    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info/zhanghao')}}/>} style={{background:'#617ca6',color:'#fff'}}>修 改 密 码</NavBar>
                <div className="logininput">
                    <span className='xiutext'>旧密码：</span>
                    <input type="text" placeholder="请输入旧密码" value={this.state.oldPassword} onChange={this.changeOld}/>
                    <span className='xiutext'>新密码：</span>
                    <input type="password" placeholder="请输入新密码" value={this.state.newPassword} onChange={this.changeNew}/>
                    <span className='xiutext'>确认密码：</span>
                    <input type="password" placeholder="请再次输入新密码" value={this.state.newPassword1} onChange={this.changeNew1}/>
                    <div className="methods">
                        <Link to="/verification">通过验证码修改</Link>
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

export default createForm()(Xiugaimima);

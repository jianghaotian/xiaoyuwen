import React, { Component } from 'react';
import { List, InputItem, Button,NavBar,Icon,Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import api from '../../request'

import { createForm } from 'rc-form';

class Xiugaimima extends Component {
    state = {
        value: 1,
        oldPassword: ''
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
    register = () => {
        if (this.state.oldPassword === '') {
            Toast.info('请输入旧密码', 1, null, false);
        } else if (this.state.oldPassword.length < 6) {
            Toast.info('密码长度不能低于6位', 1, null, false);
        } else if (this.state.newPassword === '') {
            Toast.info('请输入新密码', 1, null, false);
        } else if (this.state.newPassword.length < 6) {
            Toast.info('密码长度不能低于6位', 1, null, false);
        } else if (this.state.newPassword1 === '') {
            Toast.info('请再次输入密码', 1, null, false);
        } else if (this.state.newPassword1 !== this.state.newPassword) {
            Toast.info('两次输入的密码不一致', 1, null, false);
        } else {
            Toast.loading('正在注册...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            let formData = {
                /**姜皓天改这里！！！！！！！！！！！！！ */
                phone: this.state.phone,
                password: this.state.password,
                name: this.state.name,
                verification: this.state.verity,
                token: this.state.veriToken
            }
            api.register(formData).then(res => {
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
    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
            } else {
                alert('Validation failed');
            }
        });
    }
    onReset = () => {
        this.props.form.resetFields();
    }
    validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('At least four characters for account'));
        }
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
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
                    onClick={this.register}
                >确 定</Button> 
            </div>
        )
    }
}

export default createForm()(Xiugaimima);

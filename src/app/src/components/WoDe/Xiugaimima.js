import React, { Component } from 'react';
import history from '../../config/history';
import { List, InputItem, Button,NavBar,Icon } from 'antd-mobile';
import { createForm } from 'rc-form';

const Item = List.Item;

class Xiugaimima extends Component {
    state = {
        value: 1,
    }
    toPath = (path) => {
        history.push(path);
        history.go();
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
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/wode/info/zhanghao')}}/>} style={{background:'#617ca6',color:'#fff',height:'55px'}}>账 号 与 安 全</NavBar>
                <div className="wode_back"></div>
                <InputItem {...getFieldProps('password')} placeholder="请输入旧密码" type="password">
                    旧密码
                </InputItem>
                <InputItem {...getFieldProps('password')} placeholder="请输入新密码" type="password">
                    新密码
                </InputItem>
                <InputItem {...getFieldProps('password')} placeholder="请再次输入密码" type="password">
                    确认密码
                </InputItem>
                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                            margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                >确 定</Button> 
            </div>
        )
    }
}

export default createForm()(Xiugaimima);
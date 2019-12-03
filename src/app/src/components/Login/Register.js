import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button, Icon } from 'antd-mobile';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            verity: '',
            password: '',
            password1: '',
            name: ''
        }
    }
    changePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    changeVerity = (e) => {
        this.setState({
            verity: e.target.value
        })
    }
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    changePassword1 = (e) => {
        this.setState({
            password1: e.target.value
        })
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}} rightContent={<Link to="/login" style={{color:'#fff'}}>返回登录</Link>}>注 册</NavBar>


                <div className="logininput2">
                    <input type="text" placeholder="请输入手机号" value={this.state.phone} onChange={this.changePhone}/>
                    <div className="verity">
                        <input type="text" placeholder="请输入验证码" value={this.state.verity} onChange={this.changeVerity}/>
                        <a>获取验证码</a>
                    </div>

                    <input type="password" required placeholder="请输入密码(6-20位英文和数字)" value={this.state.password} onChange={this.changePassword}/>
                    <input type="password" required placeholder="请确认密码" value={this.state.password1} onChange={this.changePassword1}/>
                    <input type="昵称" placeholder="昵称(可选)" value={this.state.name} onChange={this.changeName}/>
                    <Button 
                        style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                        activeStyle={{background:'grey'}}
                    >注 册</Button> 
                </div>
            </div>
        )
    }
}

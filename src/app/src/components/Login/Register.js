import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button, Icon } from 'antd-mobile';

export default class Register extends Component {
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>注 册</NavBar>
                <div className="logintop">
                    {/* <span className="iconfont icon-zuojiantou"></span> */}
                </div>
                <div className="choosemethod2">
                    {/* <span>密码登录</span><span>&ensp;|&ensp;</span><Link to="/register">立即注册</Link> */}
                    <a>密码登录</a><span>&ensp;|&ensp;</span><a>立即注册</a>
                </div>
                <div className="logininput2">
                    <form action="">
                        <input type="text" required placeholder="请输入手机号/邮箱" />
                        <div className="verity">
                        <input type="text" required placeholder="请输入验证码" />
                        <a>获取验证码</a>
                        </div>

                        <input type="password" required placeholder="请输入密码(6-20位英文和数字)" />
                        <input type="password" required placeholder="请确认密码" />
                        <input type="昵称" placeholder="昵称(可选)" />
                        <Button 
                            style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                    margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                            activeStyle={{background:'grey'}}
                        >注 册</Button> 
                    </form>
                </div>
                <div className="bottomicon">
                    <a className="iconfont icon-qq"></a>
                    <a className="iconfont icon-weixin"></a>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Loginipt extends Component {
    render() {
        return (
            <div className="logininput">
                <form action="">
                    <input type="text" placeholder="请输入手机号/邮箱" />
                    <input type="password" placeholder="请输入密码" />
                    <div className="methods">
                        <a>短信登陆</a>
                        <a>忘记密码?</a>
                    </div>
                    <input type="submit" value="登录" />
                </form>
            </div>
        )
    }
}

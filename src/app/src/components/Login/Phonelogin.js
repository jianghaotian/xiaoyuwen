import React, { Component } from 'react'

export default class Phonelogin extends Component {
  render() {
    return (
      <div className="logincontainer">
        <div className="logintop">
          <span className="iconfont icon-zuojiantou"></span>
        </div>
        <div className="choosemethod">
          {/* <Link to="/pwdlogin">密码登录</Link><span>|</span><Link to="/register">立即注册</Link> */}
          <a>短信登录</a><span>&ensp;|&ensp;</span><a>立即注册</a>
        </div>
        <div className="logininput">
          <form action="">
            <input type="text" required placeholder="请输入手机号" />
            <div className="verity">
              <input type="text" required placeholder="请输入验证码" />
              <a>获取验证码</a>
            </div>
            <div className="methods">
              {/* <Link to="/phonelogin">短信登陆</Link>
              <Link to="/forgetpwd">忘记密码</Link> */}
              <a>短信登陆</a>
              <a>忘记密码?</a>
            </div>
            <input type="submit" value="登录" />
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

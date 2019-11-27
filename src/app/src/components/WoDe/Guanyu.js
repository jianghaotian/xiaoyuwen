import React, { Component } from 'react';
import history from '../../config/history';
import { NavBar, Icon } from 'antd-mobile';
import '../../css/WoDe/Guanyu.css'

export default class Guanyu extends Component {
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    render() {
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff',height:'55px'}}>关 于 小 语 文</NavBar>
                <div className="about_box">
                    <div className='about_logo_box'>
                        <div style={{textAlign:'center'}}>
                            <img className='about_logo' src={require('../../images/headImage.jpg')} />
                            <div className="about_text_box">
                                <span className='about_text1'>小语文 XiaoYW</span>
                                <br />
                                <span className='about_text2'>Version </span>
                                <span className='about_text2'>1.0.0</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="about_tab">
                    <i className={'iconfont icon-gengxin about_i'}></i>
                    <span className="about_tab_text">版本更新</span>
                    <div className="about_red"></div>
                </div>
            </div>
        )
    }
}

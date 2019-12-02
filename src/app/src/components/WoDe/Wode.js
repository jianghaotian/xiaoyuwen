import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import '../../css/WoDe/Wode.css';

export default class Wode extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <NavBar mode="dark" style={{background:'#617ca6',color:'#fff'}}>我 的</NavBar>
                <div className="wode_info a_click" onClick={()=>{this.props.history.push('/wode/info')}}>
                    <div style={{height:'90%',padding:'1rem'}}>
                        <img className="wode_header" src={require('../../images/headImage.jpg')} />
                        <div style={{float:"right",width:'70%'}}>
                            <div style={{float:"left",fontSize:'20px',minWidth:'100%'}}>姜皓天</div>
                            <div style={{float:"left",fontSize:'15px',marginTop:'1rem'}}>这里是个性签名，限制25个字</div>
                        </div>
                    </div>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/nianji')}}>
                    <i className={'iconfont icon-nianji wode_i'}></i>
                    <span className="wode_tab_text">年级</span>
                    <span className="wode_you" style={{fontSize:'13px'}}>
                        一年级
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/jindu')}}>
                    <i className={'iconfont icon-xuexijindu wode_i'}></i>
                    <span className="wode_tab_text">学习进度</span>
                    <i className={'iconfont icon-youjiantou wode_you'}></i>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/shoucang')}}>
                    <i className={'iconfont icon-shoucangjia wode_i'}></i>
                    <span className="wode_tab_text">收藏夹</span>
                    <i className={'iconfont icon-youjiantou wode_you'}></i>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/fankui')}}>
                    <i className={'iconfont icon-yijianfankui wode_i'}></i>
                    <span className="wode_tab_text">意见反馈</span>
                    <i className={'iconfont icon-youjiantou wode_you'}></i>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/guanyu')}}>
                    <i className={'iconfont icon-banbenhao wode_i'}></i>
                    <span className="wode_tab_text">关于小语文</span>
                    <span className="wode_you" style={{fontSize:'13px'}}>
                        版本1.0.0
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
                <div className="wode_tab a_click">
                    <i className={'iconfont icon-gengxin wode_i'}></i>
                    <span className="wode_tab_text">更新题库</span>
                    <div className="wode_red"></div>
                </div>
            </div>
        )
    }
}

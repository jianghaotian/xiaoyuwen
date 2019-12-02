import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../../css/WoDe/Xuexijindu.css';

export default class Xuexijindu extends Component {
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>学 习 进 度</NavBar>
                <div className="xxjd_box">
                    <i className={'iconfont icon-xuexijindu xxjd_tubiao'}></i>
                    <span className="xxjd_text">学习进度</span>
                    <div className="xxjd_text_l">
                        <span>当前完成总关卡</span>
                        <span>6</span><span>/100</span>
                    </div>
                </div>
                <div className="xxjd_big">
                    <div>
                        <span className="left_block"></span>
                        <span>拼音</span>
                    </div>
                    <div className="container">
                        <div className='container_text'>
                            <span >看音识字:</span>
                            <span>3</span>
                            <span className='container_text1'>听音选字:</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>
                <div className="xxjd_big">
                    <div>
                        <span className="left_block"></span>
                        <span>成语</span>
                    </div>
                    <div className="container">
                        <div className='container_text'>
                            <span >成语接龙:</span>
                            <span>3</span>
                            <span className='container_text1'>猜成语:</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>
                <div className="xxjd_big">
                    <div>
                        <span className="left_block"></span>
                        <span>诗词</span>
                    </div>
                    <div className="container">
                        <div className='container_text'>
                            <span >补充诗句:</span>
                            <span>3</span>
                            {/* <span className='container_text1'>猜成语:</span>
                            <span>3</span> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

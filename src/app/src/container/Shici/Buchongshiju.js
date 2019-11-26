import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../../css/Shici/Buchongshiju.css';

export default class Buchongshiju extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    style={{background:'#617ca6',color:'#fff',height:'55px'}}
                    >补 充 诗 句
                </NavBar>
                <div className="bcsj_back"></div>
                <div className="bcsj_box">
                    <p><span>第 </span><span className="bcsj_text1">1/100</span><span> 个</span></p>
                    <div className="bcsj_poetry">
                        <div style={{margin:'0 auto'}}>床前明月光，</div>
                        <div className="bcsj_poetry_text">
                            疑是地上霜
                            <span>。</span>
                        </div>
                        <div style={{marginTop:'20%'}}>
                            <div className="bcsj_option">低头思故乡</div>
                            <div className="bcsj_option">疑是地上霜</div>
                            <div className="bcsj_option">举头望明月</div>
                            <div className="bcsj_option">粒粒皆辛苦</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

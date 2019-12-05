import React, { Component } from 'react';
import { NavBar, Icon, List } from 'antd-mobile';
import '../../css/WoDe/Shoucangjia.css';

const Item = List.Item;
const Brief = Item.Brief;

export default class Shoucangjia extends Component {
    constructor(){
        super();
        this.state = {
            disabled: false
        };
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>收 藏 夹</NavBar>
                <div className="scj_tab" onClick={()=>{this.props.history.push('/wode/shoucang/pinyin')}}>
                    <i className={'iconfont icon-pinyin scc_i'} style={{fontSize:'22px'}}></i>
                    <span className="scj_tab_text">拼音</span>
                    <span className="scj_you" style={{fontSize:'13px'}}>
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
                <div className="scj_tab" onClick={()=>{this.props.history.push('/wode/shoucang/chengyu')}}>
                    <i className={'iconfont icon-cy scc_i'}></i>
                    <span className="scj_tab_text">成语</span>
                    <span className="scj_you" style={{fontSize:'13px'}}>
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
                <div className="scj_tab" onClick={()=>{this.props.history.push('/wode/shoucang/shici')}}>
                    <i className={'iconfont icon-shicidaquan scc_i'}></i>
                    <span className="scj_tab_text">诗词</span>
                    <span className="scj_you" style={{fontSize:'13px'}}>
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
            </div>
        )
    }
}

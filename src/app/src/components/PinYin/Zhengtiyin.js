import React, { Component } from 'react'
import '../../css/PinYin/pinyin.css'
import {Link} from "react-router-dom"
import {NavBar,SearchBar,Icon} from 'antd-mobile';
export default class Zhengtiyin extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            favor:false,
            content:{
                yin:'zi',
                diao:'zī',
                zi:'资',
                ci:['资料','资源'],
                img:'zhengtiyin.jpg'
            }
        }
    }
    left=()=>{
        this.setState((state)=>{
            if(state.num===1){
                return{
                    num:1
                }
            }
            return{
                num:--state.num
            }
        })
    }
    right=()=>{
        this.setState((state)=>{
            return{
                num:++state.num
            }
        })
    }
    change=(e)=>{
        e.target.className=(e.target.className==="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black";
        this.setState((state)=>{
            return{
                favor:state.favor?false:true
            }
        })
    }
    render() {
        return (
            <div className="s1">
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}} />} style={{backgroundColor:"#617ca6"}}>整 体 音</NavBar>
                <div className="s2">
                    <SearchBar
                        placeholder="查找"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        onChange={this.onChange}
                        style={{height:"2rem",marginTop:'5%'}}
                    />
                    <div className='sm-box'>
                        <div className='sm-textBox'>
                            第 <span>{this.state.num}</span><span> / </span><span>100</span> 个
                        </div>
                    </div>
                    {/* <div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div> */}
                    <div onClick={this.change} className="iconfont icon-xingxing black"></div>
                    <div className="s3">
                        <div className="s4">{this.state.content.yin}</div>
                        <div className='s5'>
                            <div className="iconfont icon-laba1 s6"></div>
                            <div className="s7">{this.state.content.diao}</div>
                            <div className="s8">{this.state.content.zi}</div>
                        </div>
                        <div className="s9">
                            <div className="s11">{this.state.content.ci[0]}</div>
                            <div className="s11">{this.state.content.ci[1]}</div>
                        </div>
                    </div>
                    
                    <div className="s10">
                        <img src={require("../../images/"+this.state.content.img)}/>
                    </div>
                </div>
                <Link className="iconfont icon-ico_leftarrow left" to={'/zhengyiyin/'+this.state.num==1?1:this.state.num-1}></Link>
                <Link className="iconfont icon-youjiantou right" to={'/zhengyiyin/'+this.state.num==100?100:this.state.num+1}></Link>
            </div>
        )
    }
}

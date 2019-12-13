import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,SearchBar,TextareaItem,Icon, Toast} from 'antd-mobile';
import "../../css/ShiCi/xsc.css"
// import Peomcon from "./Poemcon"

export default class Learnpoem extends Component {
    constructor() {
        super();
        this.state = {
            littleClass:'',
            shoucangClass: 'icon-xingxing black',
            poemname: "",
            author: "",
            line: "",
            translation: "",
            makeground: "",
            num: 1,
            max: 1
        }
    }
    componentDidMount() {
        this.getTi();
    }
    getTi = () => {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });
        this.$api.get_xueshici({grade: this.$store.getState().users.grade || 1, index: this.state.num - 1}).then(res => {
            Toast.hide();
            let line = '';
            res.data.data.main.content.forEach(v => {
                line += v;
            });
            if(res.data.data.main.content[0].length===6){
                this.setState({
                    littleClass:"littleline"
                })
            }else{
                this.setState({
                    littleClass:""
                })
            }
            this.setState({
                poemname: res.data.data.main.name,
                author: res.data.data.main.author,
                line: line,
                translation: res.data.data.main.translation,
                makeground: res.data.data.main.background,
                max: res.data.data.num
            });
        });
    }
    shoucang = () => {
        if (this.state.shoucangClass == "icon-xingxing black") {
            this.setState({
                shoucangClass: "icon-xingxing1 yello"
            })
        } else {
            this.setState({
                shoucangClass: "icon-xingxing black"
            })
        }
    }
    minus = () => {
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            }, () => {this.getTi()})
        }
    }
    adds = () => {
        if (this.state.num < this.state.max) {
            this.setState({
                num: this.state.num + 1
            }, () => {this.getTi()})
        }
    }
    render() {
        return (
            <div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/shici')}}/>} style={{backgroundColor:"#617ca6"}}>学 诗 词</NavBar>
                
                <div className="learnpeombody"> 
                    
                    <div className="learnpeomcon">
                        <SearchBar
                            placeholder="查找"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            onChange={this.onChange}
                            style={{height:"2rem"}}
                        />
                    <div>
                    <div className="orange">第<span> {this.state.num}</span><span> / </span><span>{this.state.max} </span>个</div>
                    <div onClick={this.shoucang} className={"iconfont " + this.state.shoucangClass}></div>
                    {/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg") }/></div> */}
                    <div className="poemcon">
                        <div className="poems">
                            <div className={this.state.littleClass}>
                                <p style={{marginBottom:10}}>《{this.state.poemname}》</p>
                                <p>
                                    {/* <span>{this.state.time}</span>
                                    <span>·</span> */}
                                    <span>{this.state.author}</span>
                                </p>
                                <p style={{marginTop:7}}>{this.state.line}</p>
                                <div className="iconfont icon-laba1 poemlaba"></div>
                            </div>
                            
                        </div>
                        <div className="poemothers">
                            <img src={require("../../images/shici.jpeg") }></img>
                            <textarea value={"白话翻译:"+this.state.translation+"\n"+"创作背景:"+this.state.makeground}></textarea>
                        </div>
                    </div>
                </div>
                </div>
               
                   <div className="idiomsleft" ><Link onClick={this.minus} className="iconfont icon-ico_leftarrow"></Link></div>
                   <div className="idiomsright" onClick={this.adds}><Link  className="iconfont icon-ico_leftarrow"></Link></div>
               
            </div>
            </div>
        )
    }
}

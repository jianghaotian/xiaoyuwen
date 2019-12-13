import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
import "../../css/ShiCi/xsc.css"
// import Peomcon from "./Poemcon"

export default class Learnpoem extends Component {
    constructor(){
        super();
        this.content={
            poemname:"静夜思",
            time:"唐",
            author:"李白",
            line:"床前明月光,疑是地上霜。举头望明月,低头思故乡。",
            translation:"明亮的月光洒在窗户纸上，好像地上泛起了一层霜。我禁不住抬起头来，看那天窗外空中的一轮明月，不由得低头沉思，想起远方的家乡。",
            makeground:"李白的《静夜思》创作于唐玄宗开元十四年（726年）九月十五日的扬州旅舍，时李白26岁。同时同地所作的还有一首《秋夕旅怀》。在一个月明星稀的夜晚，诗人抬望天空一轮皓月，思乡之情油然而生，写下了这首传诵千古、中外皆知的名诗《静夜思》。"
        }
        this.state={
            num:1
        }
    }
    change=(e)=>{
        e.target.className=(e.target.className=="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black"
    }
    minus=(e)=>{
        this.setState((state)=>{
            if(state.num==1){
                return{
                    num:1
                }
            }
            return{
                num:--state.num
            }
        })
    }
    adds=()=>{
        
        this.setState((state)=>{
            return{
                num:++state.num
            }
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={{backgroundColor:"#617ca6"}}
                    >学 诗 词</NavBar>
                
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
                    <div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div>
                    <div onClick={this.change} className="iconfont icon-xingxing black"></div>
                    {/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg") }/></div> */}
                    <div className="poemcon">
                        <div className="poems">
                            <p style={{marginBottom:10}}>《{this.content.poemname}》</p>
                            <p>
                                <span>{this.content.time}</span>
                                <span>·</span>
                                <span>{this.content.author}</span>
                            </p>
                            <p style={{marginTop:7}}>{this.content.line}</p>
                            <div className="iconfont icon-laba1 poemlaba"></div>
                        </div>
                        <div className="poemothers">
                            <img src={require("../../../images/shici.jpeg") }></img>
                            <textarea value={"白话翻译:"+this.content.translation+"\n"+"创作背景:"+this.content.makeground}>
                            </textarea>
                        </div>
                    </div>
                </div>
                </div>
               
               <Router>
                   <div className="idiomsleft" ><Link onClick={this.minus} className="iconfont icon-ico_leftarrow"></Link></div>
                   <div className="idiomsright" onClick={this.adds}><Link  className="iconfont icon-ico_leftarrow"></Link></div>
               </Router>
               
            </div>
            </div>
        )
    }
}

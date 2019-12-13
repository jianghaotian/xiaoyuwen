import React, { Component } from 'react'
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Link} from "react-router-dom"
import "../../css/ChengYu/err.css"
export default class Guessidioms extends Component {
    constructor(){
        super();
        this.content={
            chengyu:"一毛不拔",
            errwords:["拔"]
        }
        this.state={
            num:1
        }
        this.arr=(this.content.chengyu).split("");
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
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}}/>} style={{backgroundColor:"#617ca6"}}>成 语 易 错 字</NavBar>
                <div className="idiomerrbody"> 
                    
                    <div className="idiomerrcon">
                        <div>
                            <div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div>
                            <div onClick={this.change} className="iconfont icon-xingxing black"></div>
                            <div className="errcon">
                                {/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg") }/></div> */}
                                {/* <div className="erridiom">{this.props.content.chengyu}</div> */}
                                <div className="erridiom">
                                    {
                                        this.arr.map((item,index)=>{
                                            var str='black';
                                            this.content.errwords.map((item1,index1)=>{
                                                console.log(item,item1,index)
                                                if(item==item1){
                                                    str='red';
                                                }
                                                
                                            });
                                            return <span key={index} style={{color:str}}>{item}</span>
                                        })
                                    }
                                </div>
                                
                                <div className="iconfont icon-laba1" style={{fontSize:22,color:"#617ca6",marginTop:"20%"}}></div>
                                {(this.content.errwords).map((item,index)=>(
                                    <div key={index} className="errword">{item}</div>
                                ))}
                                <div className="outfeiji">
									<img className="feiji" src={require("../../images/feiji1.png")}></img>
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

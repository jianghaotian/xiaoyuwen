import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,Icon, Toast} from 'antd-mobile';
import "../../css/ChengYu/jielong.css"

export default class idiomjielong extends Component {
    constructor(){
        super();
        this.content={
            question:[
                ["#","#","#","#","百","#"],
                ["#","走","*","观","*","#"],
                ["#","#","*","#","*","#"],
                ["#","#","*","#","*","#"],
                ["#","#","功","#","#","#"],
                ["#","#","#","#","#","#"]
            ],
            choose:["放","马","齐","乘","花","到","景","成"],
            answer:[
                ["#","#","#","#","百","#"],
                ["#","走","马","观","花","#"],
                ["#","#","到","#","齐","#"],
                ["#","#","成","#","放","#"],
                ["#","#","功","#","#","#"],
                ["#","#","#","#","#","#"]
            ],
        }
        this.state={
            num:1,
            content:{
                question:[
                    ["#","#","#","#","百","#"],
                    ["#","走","*","观","*","#"],
                    ["#","#","*","#","*","#"],
                    ["#","#","*","#","*","#"],
                    ["#","#","功","#","#","#"],
                    ["#","#","#","#","#","#"]
                ],
                choose:["放","马","齐","乘","花","到","景","成"],
                answer:[
                    ["#","#","#","#","百","#"],
                    ["#","走","马","观","花","#"],
                    ["#","#","到","#","齐","#"],
                    ["#","#","成","#","放","#"],
                    ["#","#","功","#","#","#"],
                    ["#","#","#","#","#","#"]
                ],
            }
        }
        this.takeArr=["",""];
        this.count=0;
        this.content.question.map((item,index)=>{
            item.map((item1,index1)=>{
                if(item1==="*"){
                    this.count+=1;
                }
            })
        })
        this.statu=false;
        this.pro="";
    }
    show=(e)=>{
        var name=e.target.className;
        if(e.target.id.indexOf("f")!==-1){
            var value=e.target.innerHTML;
            this.takeArr[1]=value;
           
        }
        this.pro=this.takeArr[0];
        if(e.target.id.indexOf("f")===-1){
            this.takeArr[0]=e.target.id;
        }
        
        var x=parseInt(this.takeArr[0].split("")[0]);
        var y=parseInt(this.takeArr[0].split("")[1]);
        if(this.takeArr[0]===""){
             Toast.info("请选择要填入汉字的位置");
             this.takeArr[1]="" 
             return;
        }
        this.setState((state)=>{
            state.content.question[x][y]=this.takeArr[1]; 
            if(this.count===0){
                for(var a=0;a<this.content.answer.length;a++){
                    for(var b=0;b<state.content.question.length;b++){
                        if(state.content.question[a][b]!=this.content.answer[a][b]){
                            this.statu=true;
                        }
                    }
                }
            }
            if(this.statu && this.count===0){
                Toast.info("太遗憾了，你答错啦！😭") 
            }
            if(!this.statu && this.count===0)
            {
                Toast.info("恭喜你，答对啦！撒花🎉！！")
            }
            if(this.takeArr[1]===""){
                if(this.pro!==this.takeArr[0]){
                    this.count-=1;
                }
            }
            this.takeArr[1]='';
            return{
                content:state.content
            }
        })
        
        // console.log(this.statu)
    }
    try=(e)=>{
        var content={
            question:[
                ["#","#","#","#","百","#"],
                ["#","走","*","观","*","#"],
                ["#","#","*","#","*","#"],
                ["#","#","*","#","*","#"],
                ["#","#","功","#","#","#"],
                ["#","#","#","#","#","#"]
            ],
            choose:["放","马","齐","乘","花","到","景","成"],
            answer:[
                ["#","#","#","#","百","#"],
                ["#","走","马","观","花","#"],
                ["#","#","到","#","齐","#"],
                ["#","#","成","#","放","#"],
                ["#","#","功","#","#","#"],
                ["#","#","#","#","#","#"]
            ],
        };
        this.setState({
            content:content
        })
        this.takeArr=["",""];
        this.count=0;
        this.content.question.map((item,index)=>{
            item.map((item1,index1)=>{
                if(item1==="*"){
                    this.count+=1;
                }
            })
        })
        this.statu=false;
        this.pro="";
    }
    minus=(e)=>{
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
    adds=(e)=>{
        
        this.setState((state)=>{
            if(state.num===3){
                return{
                    num:3
                }
            }
            return{
                num:++state.num
            }
        })
        if(this.state.num===2){
            e.target.innerHTML="下一关"
        }
    }
    change=(e)=>{
        e.target.className=(e.target.className==="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black"
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}} />}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={{backgroundColor:"#617ca6"}}
                    >成 语 接 龙</NavBar>
                
                <div className="idiomjlbody"> 
                    
                    <div className="learnidiomcon">
                        <div>
                            <div className="orange">第<span> {this.state.num}</span><span> / </span><span>3 </span>个</div>
                            {/* <div onClick={this.change} className="iconfont icon-xingxing black"></div> */}
                            <div><img className="learnimg" src={require("../../images/bg2.jpeg") }/></div>
                            <div className="jielongcon">
                                <div className="jlcode">
                                    <div className="jlquestion">
                                        {
                                            this.state.content.question.map((item,index)=>(
                                                (item).map((item2,index2)=>{
                                                    if(item2===""){
                                                        return <div id={index+""+index2} className="active wordcode">{item2}</div>
                                                    }
                                                    else if(item2==="#"){
                                                        return <div id={index+""+index2} className="nocode">{item2}</div>
                                                    }
                                                    else if(item2==="*"){
                                                        return <div onClick={this.show} id={index+""+index2} className="whitecode">{item2}</div>
                                                    }
                                                    else{
                                                        return <div id={index+""+index2} className="wordcode">{item2}</div>
                                                    }
                                                    // return((item2==="#")?<div id={index+""+index2} className="nocode">{item2}</div>:(item2=="*")?<div onClick={this.show} id={index+""+index2} className="whitecode">{item2}</div>:<div id={index+""+index2} className="wordcode">{item2}</div>) 
                                                })
                                            ))
                                            
                                        }
                                    </div>
                                </div>  
                                <div className="answercode">
                                    {
                                        this.content.choose.map((item,index)=>{
                                            return <div id={"f"+index} onClick={this.show} draggable="true" className="choosecode">{item}</div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jloutsubmit">
                        <button onClick={this.try}  class="submit" style={{marginBottom:"5%"}}>重做</button>
                        <button onClick={this.adds} class="submit">下一题</button>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {NavBar,Icon,Toast} from 'antd-mobile';
import "../../css/ChengYu/guess.css"

export default class Guessidioms extends Component {
    constructor(){
        super();
        this.content={
            description:"形容好得难以用文字、语言表达。",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        }
        this.state={
            num:1
        }
        this.no=0;
        this.objArr=[];
        this.arr=[];
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
        var aa=(this.answer===this.content.answer);
        if(aa && this.no===4){
            this.arr.map((item,index)=>{
               
                item.className="guessonetrue"
            }) 
            Toast.info("恭喜你，答对啦！撒花🎉！！",1,()=>{
                this.setState((state)=>{
                    if(state.num==3){
                        return{
                            num:3
                        }
                    }
                    return{
                        num:++state.num
                    }
                })
                if(this.state.num==3){
                    this.setState({
                        next:"下一关"
                    })
                }
            })
            this.answer="";
        }
        else if(!aa && this.no===4){
            this.arr.map((item,index)=>{
                item.className="guessonefalse";
            })
            Toast.info("太遗憾了，你答错了！😭",1,()=>{
                this.setState((state)=>{
                    if(state.num==3){
                        return{
                            num:3
                        }
                    }
                    return{
                        num:++state.num
                    }
                })
                if(this.state.num==3){
                    this.setState({
                        next:"下一关"
                    })
                }
            }) 
            // flag=true;
            this.answer="";
            this.no=0;
            this.objArr=[];
            setTimeout(()=>{
                this.arr.map((item,index)=>{
                    item.innerHTML=""
                    item.id="";
                    item.className="guessone"
                })
            },500)
            
        }
    }
    change=(e)=>{
        e.target.className=(e.target.className==="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black"
    }
    getGid=(e)=>{
        this.answer="";
        var value=e.target.innerHTML;
        if(this.objArr.length<4){
            ++this.no;
            var obj={key:this.no,value:value}
            this.objArr.push(obj);
            var elem1=this.refs.a.children[this.no-1]
            this.arr.push(elem1);
        }
        this.arr.map((item,index)=>{
            this.objArr.map((item1,index1)=>{
                item.id="";
                if(index === index1){
                    item.innerHTML = item1.value;
                    item.id="active"
                }
            })
        })
        for(var i=0;i<this.objArr.length;i++){
            this.answer+=this.objArr[i].value
        }
        
        var aa=(this.answer===this.content.answer);
        if(!aa && this.no===1){
            this.no=0;
            this.objArr=[];
            this.arr=[];
            this.answer="";
            var value=e.target.innerHTML;
            if(this.objArr.length<4){
                ++this.no;
                var obj={key:this.no,value:value}
                this.objArr.push(obj);
                var elem1=this.refs.a.children[this.no-1]
                this.arr.push(elem1);
            }
            this.arr.map((item,index)=>{
                
                this.objArr.map((item1,index1)=>{
                    item.id="";
                    if(index === index1){
                        item.innerHTML = item1.value;
                        item.id="active";
                        
                    }
                })
            })
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}} />}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={{backgroundColor:"#617ca6"}}
                    >猜 成 语</NavBar>
                
                <div className="learnidiombody"> 
                    
                    <div className="learnidiomcon">
                        <div>
                            <div className="orange">第<span> {this.state.num}</span><span> / </span><span>3 </span>个</div>
                            {/* <div onClick={this.change} className="iconfont icon-xingxing black"></div> */}
                            <div><img className="learnimg" src={require("../../images/bg2.jpeg") }/></div>
                            <div className="guesscon">
                                <div className="descrip">
                                    <p>{this.content.description}</p>
                                </div>
                                <div className="answer">
                                    <div ref="a" style={{width:"60vw",height:"10vw"}}>
                                        {
                                            [1,2,3,4].map((item,index)=>(
                                                <div key={index} id={"a"+item} className="guessone">

                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                </div>
                                <div className="chooseguess">
                                    <div style={{width:"75vw"}}>
                                        {
                                            (this.content.words).map((item,index)=>(
                                                <div onClick={this.getGid} id={"g"+index} className="chooseone">
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="outsubmit">
                        <button onClick={this.adds} className="submit">下一题</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

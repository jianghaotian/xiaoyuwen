import React, { Component } from 'react'
import {NavBar,Icon,Toast} from 'antd-mobile';
import "../../css/ChengYu/guess.css"

export default class Guessidioms extends Component {
    constructor(){
        super();
        this.all=[
        {
            description:"形容好得难以用文字、语言表达。",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。1",
            answer:"妙不可言",
            words:["好","易","难","不","言","1","以","1","1","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。2",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。3",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。4",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。5",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。6",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。7",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。8",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        },
        {
            description:"形容好得难以用文字、语言表达。9",
            answer:"妙不可言",
            words:["好","易","难","不","言","妙","以","可","表","语"]
        }
        ]
        this.state={
            num:1,
            next:"下一题"
        }
        this.no=0;
        this.objArr=[];
        this.arr=[];
        this.answerArr={1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{}};
        this.bool=false;
    }
    minus=(e)=>{
        this.setState((state)=>{
            if(--state.num<1){
                return{
                    num:1
                }
            };
            this.borderclear();
            this.judge(state.num);
            console.log(this.answerArr);
            return{
                num:state.num,
                next:"下一题"
            }
        })
    }
    adds=(e)=>{
        this.objArr=[];
        this.no=0;
        this.setState((state)=>{
            if(++state.num>10){
                return{
                    num:10,
                    next:"提交"
                }
            };
            this.borderclear();
            this.judge(state.num);
            return{
                num:state.num,
                next:"下一题"
            }
        })    
    }
    judge=(num)=>{
        if(Object.keys(this.answerArr[num]).length !== 0){
            this.arr.map((item,index)=>{
                if(this.answerArr[num][index+1] !== undefined){
                    console.log(num,this.answerArr[num][index+1]);
                   item.innerHTML= this.answerArr[num][index+1];
                   console.log(item); 
                }else{
                    item.innerHTML="";
                }
            })
        }else if(Object.keys(this.answerArr[num]).length === 0){
            this.arr.map((item,index)=>{
                item.innerHTML= "";
            })
        }
    }
    borderclear=()=>{
        this.arr.map((item,index)=>{
            item.id="";
            item.className="guessone";
         })
    }
    change=(e)=>{
        e.target.className=(e.target.className==="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black"
    }
    clear=(num)=>{
        this.no=0;
        this.objArr=[];
        this.arr.map((item,index)=>{
            item.innerHTML=""
            item.id="";
            item.className="guessone"
        })
        for(var key in this.answerArr[num]){
            delete this.answerArr[num][key];
        }
    }
    getGid=(e)=>{
        this.answer="";
        var value=e.target.innerHTML;
        if(this.objArr.length<4){
            ++this.no;
            var obj={[this.no]:value}
            this.objArr.push(obj);
        }
        this.arr.map((item,index)=>{
            this.objArr.map((item1,index1)=>{
                item.id="";
                if(index === index1){
                    item.innerHTML = item1[index+1];
                    item.id="active"
                }
            })
        })
        for(var i=0;i<this.objArr.length;i++){
            this.answerArr[this.state.num][i+1]=this.objArr[i][i+1]
        }
        
    }
    componentDidMount(){
        for(var i=0;i<this.refs.a.children.length;i++){
            this.arr[i]=this.refs.a.children[i]
        };
    }
    componentWillUpdate(){
        for(var i=0;i<this.refs.a.children.length;i++){
            this.arr[i]=this.refs.a.children[i]
        };
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left"/>}
                    style={{backgroundColor:"#617ca6"}}
                    >猜 成 语</NavBar>
                
                <div className="guessidiombody"> 
                    
                    <div className="guessidiomcon">
                        <div>
                            <div className="orange">第<span> {this.state.num}</span><span> / </span><span>10 </span>个</div>
                            {/* <div><img className="learnimg" src={require("../../../images/playbackground.jpeg") }/></div> */}
                            <div className="guesscon">
                                <div className="descrip">
                                    <p>{this.all[this.state.num-1].description}</p>
                                </div>
                                <div className="answer">
                                    <div ref="a" style={{width:"60vw",height:"12vw"}}>
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
                                            (this.all[this.state.num-1].words).map((item,index)=>(
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
                        <button onClick={this.minus} className="submitguess">上一题</button>
                        <button onClick={()=>this.clear(this.state.num)} className="submitguess" style={{display:"inline"}}>清空</button>
                        <button onClick={this.adds} className="submitguess">{this.state.next}</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
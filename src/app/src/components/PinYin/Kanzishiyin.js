import React, { Component } from 'react'
import '../../css/PinYin/shengmu.css';
import '../../css/PinYin/kanzishiyin.css'
import {NavBar,Icon,Toast} from 'antd-mobile';
export default class Kanzishiyin extends Component {
    constructor(){
        super();
        this.index=0;
        this.jian=['ɑ','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','ü','w','x','y','z'];
        this.state={
            num:1,
            correct:0,
            value:'',
            content:[
                {
                    diao:['','`',''],
                    zi:'太',
                    mu:"tɑi"
                },
                {
                    diao:['','´','',''],
                    zi:'阳',
                    mu:"yɑng"
                }
            ],
            str1:"   ",
            str2:"    "
        }
        this.count=1;
        this.flag="";
        this.Btn=<button onClick={this.submit} className="t11">提交</button>;
                 

    }
    submit=()=>{
        console.log(this.state.str1,this.state.str2,this.state.content[0].mu+this.state.content[1].mu)
        if(this.state.str1+this.state.str2===this.state.content[0].mu+this.state.content[1].mu){
            
            Toast.info('恭喜你，答对啦！撒花🎉！！', 1,()=>{
                this.setState({
                    correct:this.state.correct+1,
                    num:this.state.num+1
                    
                })
                this.count=this.count+1;
                if(this.count===4){
                    this.Btn=<button onClick={this.enter} className="t11">下一关</button>
                }
            });
            
        }
        else{
            
            Toast.info('太遗憾了，你答错啦！😭！', 1,()=>{
                this.setState({
                    num:this.state.num+1
                })
                this.count=this.count+1;
                if(this.count===4){
                    this.Btn=<button onClick={this.enter} className="t11">下一关</button>
                }
            });
                
        }
    }
    one=(e,index)=>{
        this.flag="one";
        this.index=index;
        var div1=this.refs.first.children;
        var div2=this.refs.second.children;

        for(var i=0;i<div1.length;i++){
            div1[i].className="k5";
            div1[0].id="";
            
        }
        for(var i=0;i<div2.length;i++){
            div2[i].className="k5";
        }
        div1[index].className="k5 k7";
    }
    two=(e,index)=>{
        this.index=index;
        this.flag="two";
        var div1=this.refs.first.children;
        var div2=this.refs.second.children;

        for(var i=0;i<div1.length;i++){
            div1[i].className="k5";
            div1[0].id="";
            
        }
        for(var i=0;i<div2.length;i++){
            div2[i].className="k5";
        }
        div2[index].className="k5 k7";


    }
    // enter=()=>{
    //     var obj ={
    //         nth:
    //         num:
    //         type:
    //     }
    //     this.props.changeProps(obj);
    // }

    add=(e)=>{
        if(this.flag==="one"){
            this.setState({
                str1:this.state.str1.substring(0,this.index)+e.target.innerHTML+this.state.str1.substring(this.index+1)
            })
            
        }
        else if(this.flag==="two"){
            this.setState({
                str2:this.state.str2.substring(0,this.index)+e.target.innerHTML+this.state.str2.substring(this.index+1)
            })
        }
        else{
            var div1=this.refs.first.children;
            var div2=this.refs.second.children;
            if(this.state.str1.indexOf(' ')<0){
                this.setState({
                    str2:this.state.str2.substring(0,this.index)+e.target.innerHTML+this.state.str2.substring(this.index+1)
                },()=>{
                    this.index++;
                    if(this.index ===4){
                        this.index = 3;
                        return;
                    }
                    for(var i=0;i<div1.length;i++){
                        div1[i].className="k5";
                        div1[0].id="";
                        
                    }
                    for(var i=0;i<div2.length;i++){
                        div2[i].className="k5";
                    }
                    div2[this.index].className="k5 k7";
                })
                return;
            }
            if(this.state.str1.indexOf(' ')>=0){
                this.setState({
                    str1:this.state.str1.substring(0,this.index)+e.target.innerHTML+this.state.str1.substring(this.index+1)
                })
                
                if(this.index == this.state.content[0].mu.length-1){
                    this.index=0;
                    for(var i=0;i<div1.length;i++){
                        div1[i].className="k5";
                        div1[0].id="";
                        
                    }
                    for(var i=0;i<div2.length;i++){
                        div2[i].className="k5";
                    }
                    div2[this.index].className="k5 k7";
                    return;
                }
                for(var i=0;i<div1.length;i++){
                    div1[i].className="k5";
                    div1[0].id="";
                    
                }
                for(var i=0;i<div2.length;i++){
                    div2[i].className="k5";
                }
                div1[this.index+1].className="k5 k7";
                this.index++;
            }
        }    
    }

    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}} />}
                    style={{backgroundColor:"#617ca6"}}
                    >看 字 识 音</NavBar>
                <div className='k1'></div>
                <div className="s2">
                    <div className="orange">第<span> {this.state.num}</span><span> / </span><span>3 </span>个</div>
                    <div className='k2'>
                        <div className="k3">
                            <div className="k4" ref="first">
                                {
                                    this.state.content[0].diao.map((item,index)=>{
                                        return(
                                            <div className="k5" key={index} id={'div0-'+index} onClick={(e)=>{this.one(e,index)}}>
                                                <div className="k6">{item}</div>
                                                {this.state.str1[index]}
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                            <div className='k9'>{this.state.content[0].zi}</div>
                        </div>
                        <div className="k3">
                            <div className="k4" ref="second">
                                {
                                    this.state.content[1].diao.map((item,index)=>{
                                        return(
                                            <div className="k5" key={index} id={'div1-'+index} onClick={(e)=>{this.two(e,index)}}>
                                                <div className="k6">{item}</div>
                                                {this.state.str2[index]}
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                            <div className='k9'>{this.state.content[1].zi}</div>
                        </div>
                    </div>
                    <div className="k10">
                        {
                            this.jian.map((item,index)=>{
                                return(
                                    <div className="k11" onClick={this.add} key={index}>{item}</div>
                                )
                            })
                        }
                    </div>
                    <div className="t10">
                        {this.Btn}
                    </div>
                </div>
            </div>
        )
    }
}

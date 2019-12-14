import React, { Component } from 'react'
import '../../css/PinYin/shengmu.css';
import '../../css/PinYin/kanzishiyin.css'
import {NavBar,Icon,Toast} from 'antd-mobile';
export default class Kanzishiyin extends Component {
    constructor(){
        super();
        this.index=0;
        this.result=[{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""}];
        this.jian=['ɑ','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','ü','w','x','y','z'];
        this.state={
            num:0,
            value:'',
            content:[
                [
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
                [
                    {
                        diao:['','ˇ',''],
                        zi:'早',
                        mu:"zɑo"
                    },
                    {
                        diao:['','','`','',''],
                        zi:'上',
                        mu:"shɑng"
                    }
                ],
                [
                    {
                        diao:['','','ˉ','',''],
                        zi:'中',
                        mu:"zhong"
                    },
                    {
                        diao:['','ˇ'],
                        zi:'午',
                        mu:"wu"
                    }
                ],
                [
                    {
                        diao:['','ˇ',''],
                        zi:'晚',
                        mu:"wɑn"
                    },
                    {
                        diao:['','','`','',''],
                        zi:'上',
                        mu:"shɑng"
                    }
                ],
                [
                    {
                        diao:['','`',''],
                        zi:'月',
                        mu:"yüe"
                    },
                    {
                        diao:['','','`','',''],
                        zi:'亮',
                        mu:"liɑng"
                    }
                ],
                [
                    {
                        diao:['','`','',''],
                        zi:'星',
                        mu:"xing"
                    },
                    {
                        diao:['','`','',''],
                        zi:'星',
                        mu:"xing"
                    }
                ],
                [
                    {
                        diao:['','`'],
                        zi:'地',
                        mu:"di"
                    },
                    {
                        diao:['','´',''],
                        zi:'球',
                        mu:"qiu"
                    }
                ],
                [
                    {
                        diao:['','ˇ'],
                        zi:'女',
                        mu:"nü"
                    },
                    {
                        diao:['','ˉ','','',''],
                        zi:'生',
                        mu:"sheng"
                    }
                ],
                [
                    {
                        diao:['','´',''],
                        zi:'男',
                        mu:"nɑn"
                    },
                    {
                        diao:['','','ˉ','',''],
                        zi:'生',
                        mu:"sheng"
                    }
                ],
                [
                    {
                        diao:['','`',''],
                        zi:'太',
                        mu:"tɑi"
                    },
                    {
                        diao:['','`',''],
                        zi:'太',
                        mu:"tɑi"
                    }
                ]
            ], 
            str1:"   ",
            str2:"    "
        }
        this.count=1;
        this.flag="";
        this.Btn1=<button className="t11" onClick={this.prev}>上一题</button>;
        this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
                 
    }


    next=()=>{
        this.index=0;
        this.count=this.state.num;
        var div1=this.refs.first.children;
        var div2=this.refs.second.children;

        for(var i=0;i<div1.length;i++){
            div1[i].className="k5";
            div1[0].id="";
            
        }
        for(var i=0;i<div2.length;i++){
            div2[i].className="k5";
        }
        div1[this.index].className="k5 k7";
        if(this.result[this.count+1].one===""&&this.result[this.count+1].two===""){
            this.flag="";
            this.setState({
                str1:"",
                str2:""
            })
            for(var i=0;i<this.state.content[this.count+1][0].mu.length;i++){
                console.log(this.state.str1);
                this.setState((state)=>{
                    return{
                        str1:state.str1+" "
                    }
                })
            }
            for(var i=0;i<this.state.content[this.count+1][1].mu.length;i++){
                this.setState((state)=>{
                    return{
                        str2:state.str2+" "
                    }
                })
            }

            if(this.count===8){
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.Btn2=<button onClick={this.submit} className="t11">交卷</button>;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.setState({
                    num:this.state.num+1,
                })
                console.log(this.result)
            }
        }
        else{
            this.flag="one";
            this.setState({
                str1:this.result[this.count+1].one,
                str2:this.result[this.count+1].two,
            })
            if(this.count===8){
                this.Btn2=<button onClick={this.submit} className="t11">交卷</button>;
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.setState({
                    num:this.state.num+1,
                })
            }
        }
            
        
    }
    prev=()=>{
        this.index=0;
        this.flag="one";
        this.count=this.state.num;
        var div1=this.refs.first.children;
        var div2=this.refs.second.children;

        for(var i=0;i<div1.length;i++){
            div1[i].className="k5";
            div1[0].id="";
            
        }
        for(var i=0;i<div2.length;i++){
            div2[i].className="k5";
        }
        div1[this.index].className="k5 k7";
        if(this.count===0){
            this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
            this.setState({
                num:0
            })
        }
        else{
            this.setState({
                str1:this.result[this.count-1].one,
                str2:this.result[this.count-1].two,
                num:this.state.num-1
            })
            this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
        }
    }
    submit=()=>{
        this.result[this.count+1]=this.state.value;
        console.log("交卷");
        console.log(this.result);

        // console.log(this.state.str1,this.state.str2,this.state.content[0].mu+this.state.content[1].mu)
        // if(this.state.str1+this.state.str2===this.state.content[0].mu+this.state.content[1].mu){
        //     this.setState({
        //         correct:this.state.correct+1,
        //         num:this.state.num+1 === 4?3:this.state.num+1
                
        //     })
        //     Toast.info('恭喜你，答对啦！撒花🎉！！', 1);
        //     this.count=this.count+1;
        //     if(this.count===4){
        //         this.Btn=<button onClick={this.enter} className="t11">下一关</button>
        //     }
        // }
        // else{
        //     this.setState({
        //         num:this.state.num+1
        //     })
        //     Toast.info('太遗憾了，你答错啦！😭！', 1);
        //     this.count=this.count+1;
        //     if(this.count===4){
        //         this.Btn=<button onClick={this.enter} className="t11">下一关</button>
        //     }
        // }
    }
    one=(index)=>{
        console.log(index);
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
    two=(index)=>{
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
        console.log(this.state.str1);
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
            console.log(this.state.str1);
            if(this.state.str1.indexOf(' ')<0){
                this.setState({
                    str2:this.state.str2.substring(0,this.index)+e.target.innerHTML+this.state.str2.substring(this.index+1)
                },()=>{
                    this.index++;
                    if(this.index ===this.state.content[this.state.num][1].mu.length){
                        this.index = this.state.content[this.state.num][1].mu.length-1;
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
                
                if(this.index == this.state.content[this.state.num][0].mu.length-1){
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
            <div className="k1">
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}} />} style={{backgroundColor:"#617ca6"}}>看 字 识 音</NavBar>
                {/* <div className='k1'></div> */}
                <div className="s2">
                <div className='sm-box'>
                    <div className='sm-textBox'>
                        第 <span>{this.state.num+1}</span><span> / </span><span>10</span> 题
                    </div>
                </div>
                    {/* <div className="orange">第<span> {this.state.num}</span><span> / </span><span>3 </span>个</div> */}
                    <div className='k2'>
                        <div className="k3">
                            <div className="k4" ref="first">
                                {
                                    this.state.content[this.state.num][0].diao.map((item,index)=>{
                                        return(
                                            <div className="k5" key={index} id={'div0-'+index} onClick={()=>{this.one(index)}}>
                                                <div className="k6">{item}</div>
                                                {this.state.str1[index]}
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                            <div className='k9'>{this.state.content[this.state.num][0].zi}</div>
                        </div>
                        <div className="k3">
                            <div className="k4" ref="second">
                                {
                                    this.state.content[this.state.num][1].diao.map((item,index)=>{
                                        return(
                                            <div className="k5" key={index} id={'div1-'+index} onClick={()=>{this.two(index)}}>
                                                <div className="k6">{item}</div>
                                                {this.state.str2[index]}
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                            <div className='k9'>{this.state.content[this.state.num][1].zi}</div>
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
                        <div className="t12">
                            {this.Btn1}
                        </div>
                        <div className="t12">
                            {this.Btn2}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

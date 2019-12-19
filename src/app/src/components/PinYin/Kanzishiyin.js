import React, { Component } from 'react'
import '../../css/PinYin/shengmu.css';
import '../../css/PinYin/kanzishiyin.css'
import {NavBar,Icon,Toast,Button} from 'antd-mobile';
export default class Kanzishiyin extends Component {
    constructor(){
        super();
        this.index=0;
        this.result=[{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""},{one:"",two:""}];
        this.jian=['ɑ','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','ü','w','x','y','z'];
        this.data=[
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            },
            {
                write:{one:"",two:""},
                answer:{one:"",two:""},
                word:"",
                status:false  
            }
            
        ];
        this.state={
            num:0,
            value:'',
            content:[[{diao: []}, {diao: []}]],
            str1:"",
            str2:""
        }
        this.count=1;
        this.flag="";
        this.score=0;
        this.Btn1=<Button className="t13" onClick={this.prev}>上一题</Button>;
        this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>; 
    }
    componentDidMount() {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        let grade = this.$store.getState().users.grade || 1;
        this.$api.get_kanzishiyin({grade: grade}).then(res => {
            Toast.hide();
            // console.log(res);

            this.setState({
                content: res.data.data
            },()=>{
                var str1="";
                var str2="";
                for(var i=0;i<this.state.content[0][0].mu.length;i++){
                    str1+=" "
                }
                this.setState({
                    str1:str1
                },()=>{
                    for(var i=0;i<this.state.content[0][1].mu.length;i++){
                        str2+=" "
                    }
                    this.setState({
                        str2:str2
                    })
                })
                
            })
        });

    }
    next=()=>{
        this.index=0;
        this.count=this.state.num;
        var div1=this.refs.first.children;
        var div2=this.refs.second.children;
        this.Btn1=<Button className="t11" onClick={this.prev}>上一题</Button>;

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
            },()=>{
                var str1="";
                var str2="";
                for(var i=0;i<this.state.content[this.count+1][0].mu.length;i++){
                    str1+=" "
                }
                this.setState({
                    str1:str1
                },()=>{
                    // console.log(this.count)
                    // console.log(this.state.content[this.count+1][1])
                    for(var i=0;i<this.state.content[this.count+1][1].mu.length;i++){
                        str2+=" "
                    }
                    this.setState({
                        str2:str2
                    })
                })
                
            })
        

            if(this.count===8){
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.Btn2=<Button onClick={this.submit} className="t11">交卷</Button>;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.setState({
                    num:this.state.num+1,
                })
                // console.log(this.result)
            }
        }
        else{
            this.flag="one";
            this.setState({
                str1:this.result[this.count+1].one,
                str2:this.result[this.count+1].two,
            })
            if(this.count===8){
                this.Btn2=<Button onClick={this.submit} className="t11">交卷</Button>;
                this.result[this.count].one=this.state.str1;
                this.result[this.count].two=this.state.str2;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
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
            this.Btn1=<Button className="t13" onClick={this.prev}>上一题</Button>;

            this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
            this.setState({
                num:0
            })
        }
        else if(this.count===1){
            this.Btn1=<Button className="t13" onClick={this.prev}>上一题</Button>;

            this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
            this.setState({
                str1:this.result[this.count-1].one,
                str2:this.result[this.count-1].two,
                num:this.state.num-1
            })
        }
        else{
            this.setState({
                str1:this.result[this.count-1].one,
                str2:this.result[this.count-1].two,
                num:this.state.num-1
            })
            this.Btn1=<Button className="t11" onClick={this.prev}>上一题</Button>;
            this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
        }
    }
    submit=()=>{
        this.result[this.count+1].one=this.state.str1;
        this.result[this.count+1].two=this.state.str2;
        for(var i=0;i<this.data.length;i++){
            this.data[i].write=this.result[i];
            this.data[i].word=this.state.content[i][0].word + this.state.content[i][1].word;
            this.data[i].answer.one=this.state.content[i][0].spell;
            this.data[i].answer.two=this.state.content[i][1].spell;
            // console.log(this.result[i]);
            // console.log(this.state.content[i]);

            if(this.result[i].one===this.state.content[i][0].mu&&this.result[i].two===this.state.content[i][1].mu){
                this.data[i].status=true;
                this.score++;
            }
            else{
                this.data[i].status=false;
            }
        }

        if (this.$store.getState().token.uid !== '' && this.$store.getState().token.token !== '' && this.$store.getState().users.phone !== '') {
            Toast.loading('正在判题...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            this.$api.post_kanzishiyin({data:this.data,score:this.score}).then(res => {
                Toast.hide();
                if (res.data.status === 0) {
                    this.props.history.push('/pinyin/kanzi/grade/' + res.data.data);
                } else {
                    Toast.offline('网络异常', 1, null, false);
                }
            })
        } else {
            Toast.info('当前未登录，不会存储答题信息', 1, null, false);
            this.props.history.push({pathname:'/pinyin/kanzi/grade',state:{data:this.data,score:this.score}});
        }
        
        // console.log("交卷");
        // console.log(this.result);

        // console.log(this.state.str1,this.state.str2,this.state.content[0].mu+this.state.content[1].mu)
        // if(this.state.str1+this.state.str2===this.state.content[0].mu+this.state.content[1].mu){
        //     this.setState({
        //         correct:this.state.correct+1,
        //         num:this.state.num+1 === 4?3:this.state.num+1
                
        //     })
        //     Toast.info('恭喜你，答对啦！撒花🎉！！', 1);
        //     this.count=this.count+1;
        //     if(this.count===4){
        //         this.Btn=<Button onClick={this.enter} className="t11">下一关</Button>
        //     }
        // }
        // else{
        //     this.setState({
        //         num:this.state.num+1
        //     })
        //     Toast.info('太遗憾了，你答错啦！😭！', 1);
        //     this.count=this.count+1;
        //     if(this.count===4){
        //         this.Btn=<Button onClick={this.enter} className="t11">下一关</Button>
        //     }
        // }
    }
    one=(index)=>{
        // console.log(index);
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
        // console.log(this.state.str1);
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
            // console.log(this.state.str1);
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
                            <div className='k9'>{this.state.content[this.state.num][0].word}</div>
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
                            <div className='k9'>{this.state.content[this.state.num][1].word}</div>
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

import React, { Component } from 'react';
import { NavBar, Icon,Toast,Button } from 'antd-mobile';
import '../../css/ShiCi/Buchongshiju.css';

export default class Buchongshiju extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            scsubmitFront:'scsubmit-front',
            answerArr:{},
            front:'上一题',
            next:"下一题",
            shang:'',
            xia:'',
            shangStyle:{borderBottom:'#fff 1px solid'},
            xiaStyle:{borderBottom:'#fff 1px solid'},
            /**0为填下句，1为填上句*/
            data:{
                1:{
                    flag:0,
                    show:'床前明月光哈哈。',
                    choose:["低头思故乡哈哈。","疑是地上霜。","举头望明月。","粒粒皆辛苦。"],
                },
                2:{
                    flag:1,
                    show:'疑是地上霜。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","床前明月光。"],
                },
                3:{
                    flag:0,
                    show:'床前明月光。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","粒粒皆辛苦。"],
                },
                4:{
                    flag:1,
                    show:'疑是地上霜。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","床前明月光。"],
                },
                5:{
                    flag:0,
                    show:'床前明月光。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","粒粒皆辛苦。"],
                },
                6:{
                    flag:1,
                    show:'疑是地上霜。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","床前明月光。"],
                },
                7:{
                    flag:0,
                    show:'床前明月光。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","粒粒皆辛苦。"],
                },
                8:{
                    flag:1,
                    show:'疑是地上霜。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","床前明月光。"],
                },
                9:{
                    flag:0,
                    show:'床前明月光。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","粒粒皆辛苦。"],
                },
                10:{
                    flag:1,
                    show:'疑是地上霜。',
                    choose:["低头思故乡。","疑是地上霜。","举头望明月。","床前明月光。"],
                }
            }
    }
}
    getAnswer=(item)=>{
        if(this.state.data[this.state.num].flag==0){
            this.setState({
                xia:item
            })
        }
        else{
            this.setState({
                shang:item
            })
        }
        let answer = {...this.state.answerArr};
        answer[this.state.num] = item;
        this.setState({
            answerArr:answer
        })
    }
    componentDidMount(){
        this.createQuestion();
    }
    createQuestion=()=>{
        if(this.state.data[this.state.num].flag==0){
            this.setState({
                shang:this.state.data[this.state.num].show,
                xia:this.state.answerArr[this.state.num] || '',
                shangStyle:{borderBottom:'#fff 1px solid'},
                xiaStyle:{borderBottom:'rgb(0, 0, 0) 1px solid'}
            })
        }
        else{
            this.setState({
                shang:this.state.answerArr[this.state.num] || '',
                xia:this.state.data[this.state.num].show,
                shangStyle:{borderBottom:'rgb(0, 0, 0) 1px solid'},
                xiaStyle:{borderBottom:'#fff 1px solid'}
            })
        }
    }
    adds=()=>{
        this.setState({
            scsubmitFront:'scsubmit-front1'
        })
        if(this.state.num == 9){
            this.setState({
                next:'交 卷'
            })
        }
        else if(this.state.num < 10){
            this.setState({
                next:'下一题'
            })
        }
        this.setState((state)=>{
            if(state.num==10){
                return{
                    num:10
                }
            }
            return{
                num:++state.num
            }
        },()=>this.createQuestion())
    }
    less=()=>{
        if(this.state.num <= 10){
            this.setState({
                next:'下一题'
            })
        }
        if(this.state.num == 2){
            this.setState({
                scsubmitFront:'scsubmit-front'
            })
        }
        this.setState((state)=>{
            if(state.num==1){
                return{
                    num:1
                }
            }
            return{
                num:--state.num
            }
        },()=>this.createQuestion())
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/shici')}}/>}
                    style={{background:'#617ca6',color:'#fff',height:'55px'}}
                    >补 充 诗 句
                </NavBar>
                <div className="bcsj_back"></div>
                <div className="bcsj_box">
                <p><span>第 </span><span className="bcsj_text1"><span>{this.state.num}</span>/10</span><span> 个</span></p>
                    <div className="bcsj_poetry">
                        <div className="iconfont icon-tuding tuding"></div>
                        <div id="answer" className="bcsj_poetry_text" style={this.state.shangStyle}>{this.state.shang}</div>
                        <div id="answer" className="bcsj_poetry_text" style={this.state.xiaStyle}>{this.state.xia}</div>
                        <div style={{marginTop:'20%'}}>
                            {
                                (this.state.data[this.state.num].choose).map((item,index)=>{
                                    return <div key={index} onClick={()=>{this.getAnswer(item)}} className="bcsj_option">{item}</div>
                                })
                            }
                        </div>
                        <div className="scoutsubmit">
                            <Button onClick={this.less} className={this.state.scsubmitFront}>{this.state.front}</Button>
                            <Button onClick={this.adds} className="scsubmit-next">{this.state.next}</Button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

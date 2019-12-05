import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../../css/ShiCi/Buchongshiju.css';

export default class Buchongshiju extends Component {
    constructor(){
        super();
        this.content={
            choose:["低头思故乡。","疑是地上霜。","举头望明月。","粒粒皆辛苦。"],
            answer:"疑是地上霜。"
        }
        this.state={
            num:1,
            next:"下一题"
        }
    }
    getAnswer=(e)=>{
        var answer=this.refs.answer
        answer.innerHTML=e.target.innerHTML;
    }
    adds=(e)=>{
        var answer=this.refs.answer
        if(answer.innerHTML==this.content.answer){
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
        }
        else{
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
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    style={{background:'#617ca6',color:'#fff',height:'55px'}}
                    >补 充 诗 句
                </NavBar>
                <div className="bcsj_back"></div>
                <div className="bcsj_box">
                <p><span>第 </span><span className="bcsj_text1"><span>{this.state.num}</span>/3</span><span> 个</span></p>
                    <div className="bcsj_poetry">
                        <div style={{margin:'0 auto'}}>床前明月光，</div>
                        <div ref="answer" id="answer" className="bcsj_poetry_text">

                            
                        </div>
                        <div style={{marginTop:'20%'}}>
                            {
                                (this.content.choose).map((item,index)=>{
                                    return <div onClick={this.getAnswer} className="bcsj_option">{item}</div>
                                })
                            }
                            
                            
                        </div>
                        <div className="scoutsubmit">
                            <button onClick={this.adds} class="scsubmit">{this.state.next}</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

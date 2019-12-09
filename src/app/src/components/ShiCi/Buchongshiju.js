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
            num:1
        }
    }
    getAnswer=(e)=>{
        var answer=document.getElementById("answer");
        answer.innerHTML=e.target.innerHTML;
        if(answer.innerHTML==this.content.answer){
            answer.className="bcsj_poetry_textgreen"
        }
        else{
            answer.className="bcsj_poetry_textred"
        }
    }
    adds=(e)=>{
        
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
        if(this.state.num==2){
            e.target.innerHTML="下一关"
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/shici')}} />}
                    style={{background:'#617ca6',color:'#fff',height:'55px'}}
                    >补 充 诗 句
                </NavBar>
                <div className="bcsj_back"></div>
                <div className="bcsj_box">
                <div className='sm-box'>
                        <div className='sm-textBox'>
                            第 <span>{this.state.num}</span><span> / </span><span>100</span> 个
                        </div>
                    </div>
                    <div className="bcsj_poetry">
                        <div style={{margin:'0 auto'}}>床前明月光，</div>
                        <div id="answer" className="bcsj_poetry_text">

                            
                        </div>
                        <div style={{marginTop:'20%'}}>
                            {
                                (this.content.choose).map((item,index)=>{
                                    return <div onClick={this.getAnswer} className="bcsj_option">{item}</div>
                                })
                            }
                            
                            
                        </div>
                        <div className="scoutsubmit">
                            <button onClick={this.adds} class="scsubmit">下一题</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

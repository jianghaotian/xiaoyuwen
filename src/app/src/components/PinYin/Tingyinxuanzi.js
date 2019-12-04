import React, { Component } from 'react'
import '../../css/PinYin/shengmu.css';
import '../../css/PinYin/tingyinxuanzi.css'

import {NavBar,Icon,Toast} from 'antd-mobile';
export default class Tingyinxuanzi extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            correct:0,
            value:'',
            content:{
                yin:'zǎo',
                zi:'早',
                choice:['旱','卓','阜','皁','早','旱','卓','阜','皁','早','旱','卓','阜','皁','早']
            }
        };
        this.Btn='';
        this.count=1;
    }

    dui=()=>{
        this.setState({
            correct:this.state.correct+1,
            num:this.state.num+1
        })
        Toast.info('恭喜你，答对啦！撒花🎉！！', 1);
        this.count=this.count+1;
        if(this.count === 3){
            this.Btn=<button onClick={this.enter} className="t11">下一关</button>
        }
        console.log(this.count);
    }
    cuo=()=>{
        this.setState({
            num:this.state.num+1
        })
        Toast.info('太遗憾了，你答错啦！😭！', 1);
        this.count=this.count+1;
        if(this.count===4){
            this.Btn=<button onClick={this.enter} className="t11">下一关</button>
        }
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
        if(e.target.id===this.state.content.zi){
            this.Btn=<button onClick={this.dui} className="t11">提交</button>
            this.setState({
                value:e.target.id
            })
        }
        else{
            this.Btn=<button onClick={this.cuo} className="t11">提交</button>;
            this.setState({
                value:e.target.id,
            })
        }
    }

    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}} />}
                    style={{backgroundColor:"#617ca6"}}
                    >听 音 选 字</NavBar>
                <div className='t1'></div>
                <div className="s2">
                    <div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div>
                    <div className="iconfont icon-laba1 t4"></div>
                    <div className='t2'>{this.state.content.yin}</div>
                    <div className='t3'>
                        <img src={require('../../images/mizige.jpg')}/>
                        <div className='t7'>{this.state.value}</div>
                    </div>
                    <div className='t5'>
                        {
                            this.state.content.choice.map((item,index)=>{
                                return(
                                    <div className='t6' onClick={this.add} id={item} key={index}>{item}</div>
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

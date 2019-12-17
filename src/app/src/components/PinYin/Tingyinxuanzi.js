import React, { Component } from 'react'
import '../../css/PinYin/shengmu.css';
import '../../css/PinYin/tingyinxuanzi.css'

import {NavBar,Icon,Toast} from 'antd-mobile';
export default class Tingyinxuanzi extends Component {
    constructor(){
        super();
        this.result=["","","","","","","","","",""];
        this.state={
            num:0,
            correct:0, 
            value:'',
            content:[
                {
                    yin:'zǎo',
                    zi:'早',
                    choice:['旱','卓','阜','皁','早','炮','饱','抱','袍','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'shàng',
                    zi:'上',
                    choice:['下','卓','阜','皁','上','炮','饱','抱','袍','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'wǒ',
                    zi:'我',
                    choice:['俄','卓','阜','皁','我','炮','饱','抱','袍','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'chī',
                    zi:'吃',
                    choice:['呓','卓','阜','皁','乞','炮','饱','抱','吃','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'le',
                    zi:'了',
                    choice:['子','字','阜','皁','早','炮','饱','抱','袍','了','補','辅','哺','脯','仆']
                },
                {
                    yin:'jī',
                    zi:'鸡',
                    choice:['鸟','卓','袅','皁','早','炮','饱','鸡','袍','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'dàn',
                    zi:'蛋',
                    choice:['疍','蜃','胥','皁','早','炮','饱','抱','袍','泡','補','蛋','哺','脯','仆']
                },
                {
                    yin:'hé',
                    zi:'和',
                    choice:['种','卓','阜','皁','早','炮','和','抱','袍','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'miàn',
                    zi:'面',
                    choice:['面','而','阜','皁','早','炮','饱','抱','袍','泡','補','辅','哺','脯','仆']
                },
                {
                    yin:'bāo',
                    zi:'包',
                    choice:['句','卓','阜','皁','早','炮','饱','抱','袍','泡','補','辅','哺','脯','包']
                }
        ]
        };
        this.data=[
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            },
            {
                write:'',
                answer:"",
                status:false    
            }

        ]
        this.score=0;
        this.Btn1=<button className="t11" onClick={this.prev}>上一题</button>;
        this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
        this.count=0;
    }

    next=()=>{
        this.count=this.state.num;
        if(this.result[this.count+1]===undefined){
            this.setState({
                value:""
            })
            if(this.count===8){
                this.Btn2=<button onClick={this.submit} className="t11">交卷</button>;
                this.result[this.count]=this.state.value;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
                this.result[this.count]=this.state.value;
                this.setState({
                    num:this.state.num+1,
                })
            }
        }
        else{
            this.setState({
                value:this.result[this.count+1]
            })
            if(this.count===8){
                this.Btn2=<button onClick={this.submit} className="t11">交卷</button>;
                this.result[this.count]=this.state.value;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
                this.result[this.count]=this.state.value;
                this.setState({
                    num:this.state.num+1,
                })
            }
        }    
    }

    prev=()=>{
        this.count=this.state.num;
        if(this.count===0){
            this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
            this.setState({
                num:0
            })
        }
        else{
            this.result[this.count]=this.state.value;
            this.setState({
                value:this.result[this.count-1],
                num:this.state.num-1
            })
            this.Btn2=<button onClick={this.next} className="t11">下一题</button>;
        }
    }

    // dui=()=>{
    //     this.setState({
    //         correct:this.state.correct+1,
    //         num:this.state.num+1
    //     })
    //     Toast.info('恭喜你，答对啦！撒花🎉！！', 1);
    //     this.count=this.count+1;
    //     if(this.count === 3){
    //         this.Btn=<button onClick={this.enter} className="t11">下一关</button>
    //     }
    //     console.log(this.count);
    // }
    // cuo=()=>{
    //     this.setState({
    //         num:this.state.num+1
    //     })
    //     Toast.info('太遗憾了，你答错啦！😭！', 1);
    //     this.count=this.count+1;
    //     if(this.count===4){
    //         this.Btn=<button onClick={this.enter} className="t11">下一关</button>
    //     }
    // }

    // enter=()=>{
    //     var obj ={
    //         nth:
    //         num:
    //         type:
    //     }
    //     this.props.changeProps(obj);
    // }

    submit=()=>{
        this.result[this.count+1]=this.state.value;
        for(var i=0;i<this.data.length;i++){
            this.data[i].write=this.result[i];
            this.data[i].answer=this.state.content[i].zi;
            if(this.result[i]===this.state.content[i].zi){
                this.data[i].status=true;
                this.score++;
            }
            else{
                this.data[i].status=false;

            }
        }
        this.props.history.push({pathname:'/pinyin/tingyin/grade',state:{data:this.data,score:this.score}});

        console.log("交卷");
        console.log(this.result);
    }
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
            <div className="t1">
                <NavBar
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}} />}
                    style={{backgroundColor:"#617ca6"}}
                    >听 音 选 字</NavBar>
                {/* <div className='t1'></div> */}
                <div className="s2">
                    <div className='sm-box'>
                        <div className='sm-textBox'>
                            第 <span>{this.state.num+1}</span><span> / </span><span>10</span> 题
                        </div>
                    </div>
                    {/* <div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div> */}
                    <div className="iconfont icon-laba1 t4"></div>
                    <div className='t2'>{this.state.content[this.state.num].yin}</div>
                    <div className='t3'>
                        <img src={require('../../images/mizige.jpg')}/>
                        <div className='t7'>{this.state.value}</div>
                    </div>
                    <div className='t5'>
                        {
                            this.state.content[this.state.num].choice.map((item,index)=>{
                                return(
                                    <div className='t6' onClick={this.add} id={item} key={index}>{item}</div>
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

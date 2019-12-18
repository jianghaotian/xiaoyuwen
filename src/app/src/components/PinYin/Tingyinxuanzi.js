import React, { Component } from 'react'
import '../../css/PinYin/shengmu.css';
import '../../css/PinYin/tingyinxuanzi.css'

import {NavBar,Icon,Button,Toast} from 'antd-mobile';
export default class Tingyinxuanzi extends Component {
    constructor(){
        super();
        this.result=["","","","","","","","","",""];
        this.state={
            num:0,
            correct:0, 
            value:'',
            content: [{chioce:[]}]
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
        this.Btn1=<Button className="t13" onClick={this.prev}>上一题</Button>;
        this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
        this.count=0;
    }

    next=()=>{
        this.count=this.state.num;
        this.Btn1=<Button className="t11" onClick={this.prev}>上一题</Button>;
        if(this.result[this.count+1]===undefined){
            this.setState({
                value:""
            })
            if(this.count===8){
                this.Btn2=<Button onClick={this.submit} className="t11">交卷</Button>;
                this.result[this.count]=this.state.value;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
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
                this.Btn2=<Button onClick={this.submit} className="t11">交卷</Button>;
                this.result[this.count]=this.state.value;
                this.setState({
                    num:this.state.num+1,
                })
            }
            else{
                this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
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
            this.Btn1=<Button className="t13" onClick={this.prev}>上一题</Button>;
            this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
            this.setState({
                num:0
            })
        }
        else if(this.count===1){
            this.Btn1=<Button className="t13" onClick={this.prev}>上一题</Button>;
            this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
            this.result[this.count]=this.state.value;
            this.setState({
                value:this.result[this.count-1],
                num:this.state.num-1
            })
        }
        else{
            this.result[this.count]=this.state.value;
            this.setState({
                value:this.result[this.count-1],
                num:this.state.num-1
            })
            this.Btn2=<Button onClick={this.next} className="t11">下一题</Button>;
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
    //         this.Btn=<Button onClick={this.enter} className="t11">下一关</Button>
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
    //         this.Btn=<Button onClick={this.enter} className="t11">下一关</Button>
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
                console.log(this.score)
            }
            else{
                this.data[i].status=false;

            }
        }

        if (this.$store.getState().token.uid !== '' && this.$store.getState().token.token !== '' && this.$store.getState().users.phone !== '') {
        	Toast.loading('正在判题...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
			});
			
            this.$api.post_tingyinxuanzi({data:this.data,score:this.score}).then(res => {
                Toast.hide();
                if (res.data.status === 0) {
                    this.props.history.push('/pinyin/tingyin/grade/' + res.data.data);
                } else {
                    Toast.offline('网络异常', 1, null, false);
                }
            })
        } else {
            Toast.info('当前未登录，不会存储答题信息', 1, null, false);
            this.props.history.push({pathname:'/pinyin/tingyin/grade',state:{data:this.data,score:this.score}});
        }

    }
    add=(e)=>{
        if(e.target.id===this.state.content.zi){
            this.Btn=<Button onClick={this.dui} className="t11">提交</Button>
            this.setState({
                value:e.target.id
            })
        }
        else{
            this.Btn=<Button onClick={this.cuo} className="t11">提交</Button>;
            this.setState({
                value:e.target.id,
            })
        }
    }
    componentDidMount() {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        let grade = this.$store.getState().users.grade || 1;
        this.$api.get_tingyinxuanzi({grade: grade}).then(res => {
            Toast.hide();
            console.log(res);

            this.setState({
                content: res.data.data
            })
        });

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
                            this.state.content[this.state.num].chioce.map((item,index)=>{
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

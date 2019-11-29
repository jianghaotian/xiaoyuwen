import React, { Component } from 'react';
import history from '../../config/history';
import { NavBar, SearchBar, Icon } from 'antd-mobile';

export default class Tingyinxuanzi extends Component {
    constructor() {
        super();
        this.state = {
            num:1,
            correct:0,
            value:'',
            content:{
                yin:'zǎo',
                zi:'早',
                choice:['旱','卓','阜','皁','早','旱','卓','阜','皁','早','旱','卓','阜','皁','早']
            }
        };
        this.Btn=<button onClick={this.enter} className="t11">进入下一关</button>;
    }
    toPath = (path) => {
        history.push(path);
        history.go();
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
        console.log(e.target.id);

        if(e.target.id===this.state.content.zi){
            // if(this.state.num===3){
            //     this.Btn=<button onClick={this.enter} className="t11">进入下一关</button>
            // }
            // else{
            //     this.Btn='';
            // }
            this.setState({
                value:e.target.id,
                num:this.state.num+1
            })
            e.target.className="t6 t8";
            
        }
        else{
            // if(this.state.num===3){
            //     this.Btn=<button onClick={this.enter} className="t11">进入下一关</button>
            // }
            // else{
            //     this.Btn='';
            // }
            this.setState({
                value:'',
                num:this.state.num+1

            })
            e.target.className="t6 t9";
            
        }
    }
    render() {
        return (
            <div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.toPath('/home/pinyin')}}/>} style={{backgroundColor:"#617ca6"}}>听 音 选 字</NavBar>
                <div className='t1'></div>
                <div className="s2">
                    <SearchBar
                        placeholder="查找"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        onChange={this.onChange}
                        style={{height:"2rem",marginTop:'5%'}}
                    />
                    <div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div>
                    <div className="iconfont icon-laba1 t4"></div>
                    <div className='t2'>{this.state.content.yin}</div>
                    <div className='t3'>
                        <img src={require('../../images/mizige.jpg')}/>
                        <div className='t7'>{this.state.value}</div>
                    </div>
                    <div className='t5'>
                        {
                            this.state.content.choice.map((item)=>{
                                return(
                                    <div className='t6' onClick={this.add} id={item}>{item}</div>
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

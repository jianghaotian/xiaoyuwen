import React, { Component } from 'react';
import history from '../../config/history';
import { NavBar, Icon } from 'antd-mobile';

export default class Kanzishiyin extends Component {
    constructor(){
        super();
        this.jian=['ɑ','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','ü','w','x','y','z'];
        this.state={
            num:1,
            content:[
                {
                    diao:[',','`',','],
                    zi:'太',
                    mu:['t','ɑ','i']
                },
                {
                    diao:[',','´',',',','],
                    zi:'阳',
                    mu:['y','ɑ','n','g']
                }
            ]
        }
        this.Btn=<button onClick={this.enter} className="t11">进入下一关</button>;
    }
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    render() {
        return (
            <div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.toPath('/home/pinyin')}}/>} style={{backgroundColor:"#617ca6"}}>看 字 识 音</NavBar>
                <div className='k1'></div>
                <div className="s2">
                    <div className="orange">第<span> {this.state.num}</span><span> / </span><span>3 </span>个</div>
                    <div className='k2'>
                        <div className="k3">
                            <div className="k4">
                                {
                                    this.state.content[0].diao.map((item,index)=>{
                                        return(
                                            <div className="k5">
                                                <div className="k6">{item}</div>
                                                <div className="k7">
                                                    <img src={require('../../images/zi.png')}/>
                                                    <div className='k8'>{this.state.content[0].mu[index]}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='k9'>{this.state.content[0].zi}</div>
                        </div>
                        <div className="k3">
                            <div className="k4">
                                {
                                    this.state.content[1].diao.map((item,index)=>{
                                        return(
                                            <div className="k5">
                                                <div className="k6">{item}</div>
                                                <div className="k7">
                                                    <img src={require('../../images/zi.png')}/>
                                                    <div className='k8'>{this.state.content[1].mu[index]}</div>
                                                </div>
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
                            this.jian.map((item)=>{
                                return(
                                    <div className="k11">{item}</div>
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

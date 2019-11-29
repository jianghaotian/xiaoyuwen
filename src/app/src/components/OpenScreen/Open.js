import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

export default class Open extends Component {
    constructor() {
        super();
        this.Btn = '';
    }
    enter = () => {
        this.props.history.push('/home/pinyin');
    }
    render() {
        return (
            <div>
                <button onClick={this.enter} className='a_click' style={{position:'fixed',top:15,right:15,width:40,height:40,border:'1px solid #BBB6B6',backgroundColor:"#BBB6B6",color:'#fff',borderRadius:40,zIndex:999}}>跳过</button>
                <Carousel autoplay={false} infinite={false}>
                    {[1,2,3].map(val => {
                        if (val === 3){
                            this.Btn = <button onClick={this.enter} className='a_click' style={{fontSize:16,position:'absolute',left:'35%',bottom:'10%',width:110,height:40,backgroundColor:'#6189B8',color:'#fff',border:'1px solid #6189B8'}}>进入小语文</button>
                        } else {
                            this.Btn = '';
                        }
                        return (
                            <div key={val} style={{ display: 'inline-block', width: '100%', height: '100%',position:'relative'}}>
                                {this.Btn} 
                                <img
                                    src={require("../../images/open" + val + ".jpg")}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' ,touchAction: 'none' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                    
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </div>
                    )})}
                </Carousel>
            </div>
        )
    }
}

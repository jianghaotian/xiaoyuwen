import React, { Component } from 'react'
import {Carousel} from 'antd-mobile';
export default class Open extends Component {
    constructor(){
        super();
        this.Btn='';
    }
    enter=()=>{
        this.props.history.push('/shouye');
    }
    render() {
        return (
            <div>
                <Carousel
                    autoplay={false}
                    infinite={false}
                    >
                    {[1,2,3].map(val => {
                        if(val === 3){
                            this.Btn=<button onClick={this.enter} style={{fontSize:16,position:'absolute',left:'35%',bottom:'10%',width:110,height:40,backgroundColor:'#6189B8',color:'#fff',border:'1px solid #6189B8'}}>进入小语文</button>
                        }
                        else{
                            this.Btn='';
                        }
                        return(
                        <div
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: '100%',position:'relative'}}
                        >
                        <button onClick={this.enter} style={{position:'absolute',top:10,right:10,width:60,height:25,border:'1px solid #BBB6B6',backgroundColor:"#BBB6B6",color:'#fff',borderRadius:10}}>跳过</button>
                        {this.Btn} 
                        <img
                            src={require("../../images/open"+val+".jpg")}
                            alt=""
                            style={{ width: '100%',height:'100%', verticalAlign: 'top' ,touchAction: 'none' }}
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

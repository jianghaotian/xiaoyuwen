import React, { Component } from 'react';

export default class Grade extends Component {
    render() {
        return (
            <div>
                <div style={{position:'relative',width:'100%',height:'8rem',margin:'0 auto',textAlign:'center'}}>
                    <img style={{width:'80%',paddingTop:'1rem'}} src={require('../images/word3.PNG')} />
                    <div style={{position:'absolute',bottom:'0',right:'2rem',height:'2rem'}}>
                        <div style={{fontSize:'20px',fontWeight:'bolder',height:'2rem',lineHeight:'2rem',float:'left'}}>得分：</div>
                        <img src={require(`../images/num${this.props.num || 0}.PNG`)} />
                    </div>
                </div>
            </div>
        )
    }
}

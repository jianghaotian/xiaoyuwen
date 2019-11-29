import React, { Component } from 'react';
import history from '../../config/history';
import { List, Radio, NavBar, Icon, Button } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

export default class Nianji extends Component {
    constructor(){
        super();
        this.state = {
            value: 3
        };
    }
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    onChange = (value) => {
        this.setState({
            value: value
        });
    };
    render() {
        const { value } = this.state;
        const data = [
            { value: 1, label: '一年级' },
            { value: 2, label: '二年级' },
            { value: 3, label: '三年级' },
            { value: 4, label: '四年级' },
            { value: 5, label: '五年级' },
            { value: 6, label: '六年级' },
        ];
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>年 级</NavBar>
                <List renderHeader={() => '请选择年级'}>
                    {data.map(i => (
                        <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </List>
                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                >完成</Button>  
            </div>
        )
    }
}

import React, { Component } from 'react';
import history from '../../config/history';
import { List, NavBar, Icon, DatePicker } from 'antd-mobile';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

export default class Shengri extends Component {
    constructor() {
        super();
        this.state = {
            date: now,
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
        }
    }
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    render() {
        console.log(this.state.date)
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>生 日</NavBar>
                <div className="wode_back"></div>
                <DatePicker
                    mode="date"
                    title="请选择您的生日"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">请选择生日</List.Item>
                </DatePicker>
            </div>
        )
    }
}

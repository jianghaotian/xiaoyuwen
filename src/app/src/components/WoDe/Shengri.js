import React, { Component } from 'react';
import { List, NavBar, Icon, DatePicker, Toast, Button } from 'antd-mobile';
import { setBirthday, clearUsers, setUsers } from '../../redux/actions';

export default class Shengri extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date(this.$store.getState().users.birthday) || '',
            visible: true
        }
    }
    ok = (date) => {
        let sDate = new Date(date).getTime();
        // console.log(sDate)

        Toast.loading('正在保存...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        if (this.$store.getState().users.phone !== '') {
            this.$api.set_birthday({date: sDate}).then(res => {
                Toast.hide();
                console.log(res);
                if (res.data.status === 0) {
                    Toast.success('保存成功', 1, null, false);
                    this.$store.dispatch(setBirthday(sDate));
                    this.props.history.push('/wode/info');
                } else {
                    Toast.fail('保存失败', 1, null, false);
                }
            });
        }
    }
    dismiss = () => {
        this.props.history.push('/wode/info');
    }
    render() {
        // console.log(new Date(this.state.date).getTime())
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>生 日</NavBar>
                <DatePicker
                    mode="date"
                    minDate={new Date(1950, 1, 1, 0, 0, 0)}
                    maxDate={new Date()}
                    title="请选择您的生日"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    visible={this.state.visible}
                    onOk={date => {this.ok(date)}}
                    onDismiss={this.dismiss}
                >
                    {/* <List.Item arrow="horizontal">请选择生日</List.Item> */}
                </DatePicker>
            </div>
        )
    }
}

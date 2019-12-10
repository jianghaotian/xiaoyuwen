import React, { Component } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { NavBar, Icon, Button, Toast } from 'antd-mobile';
import axios from 'axios';
import { baseUrl } from '../../request/http';
import store from '../../redux/store';
import { setHead } from '../../redux/actions/index';

const service = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {'Content-Type': 'multipart/form-data'}
});
service.defaults.headers.common['token'] = store.getState().token.token;

export default class Cropimg extends Component {
    cropImage = () => {
        if (this.cropper.getCroppedCanvas() === 'null') {
            Toast.fail('修改失败', 1, null, false);
            return false;
        }
        // TODO: 这里可以尝试修改上传图片的尺寸
        this.cropper.getCroppedCanvas().toBlob(blob => {
            const formData = new FormData()
            formData.append('file', blob, this.props.location.state.name);
            Toast.loading('正在修改', 10, () => {
                Toast.fail('修改失败', 1, null, false);
            });
            service.post('/images/head',formData).then(res => {
                console.log(res);
                if (res.data.status === 0) {
                    Toast.success('修改成功', 1 ,null, false);
                    this.$store.dispatch(setHead(res.data.data.filename));
                    this.props.history.push({pathname:'/wode/info/touxiang', state:{src:this.cropper.getCroppedCanvas().toDataURL()}})   
                } else {
                    Toast.fail('修改失败', 1, null, false);
                }
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>头 像</NavBar>

                <div style={{width: '100%'}}>
                    <Cropper
                        src={this.props.location.state.src}
                        ref={cropper => {
                            this.cropper = cropper;
                        }}
                        style={{height: 400, width: '100%'}}
                        aspectRatio={1/1}
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={this.cropImage}
                        style={{width:'60%',height:'20%',background:'#617ca6',color:'#fff',margin:'0 auto',marginTop:'7%'}}
                        activeStyle={{background:'grey'}}
                    >确认</Button>
                </div>
            </div>
        );
    }
}
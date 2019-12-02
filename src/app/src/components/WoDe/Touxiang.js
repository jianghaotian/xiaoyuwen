import React, { Component } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile';


export default class Touxiang extends Component {
    constructor() {
        super();
        this.state = {
            src: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        };
    }
    componentDidMount() {

        if (this.props.location.state) {

            this.setState({
                src: this.props.location.state.src
            });
        }

    }

    changeImg = (e) => {
        let file = e.target.files[0]

        if (file) {
            console.log(file.size);
            if (file.size <= 99999999999999999999) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({
                        imgPreview: reader.result,
                        result: true,
                        faceCheck: true
                    })
                    this.props.history.push({pathname:'/wode/info/touxiang/crop',state:{src:reader.result}})
                 }; 
            } else {
                console.log("文件过大");
            }
        }
        e.target.value = '';
    }

    render() {
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} rightContent={<label for="addFile"><i style={{fontSize:'20px'}} className={'iconfont icon-sangedian1'}></i></label>} style={{background:'#617ca6',color:'#fff',height:'55px'}}>头 像</NavBar>
                
                <img src={this.state.src} style={{width:'100%',height:'100vw'}}/>


                <input type="file" accept="image/*" id="addFile" style={{display:'none'}} onChange={this.changeImg}/>

            </div>
        );
      }
}

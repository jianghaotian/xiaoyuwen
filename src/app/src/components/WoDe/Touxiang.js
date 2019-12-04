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
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} rightContent={<label for="addFile"><i style={{fontSize:'20px'}} className={'iconfont icon-sangedian1'}></i></label>} style={{background:'#617ca6',color:'#fff'}}>头 像</NavBar>
                
                <div style={{width:'100%',height:'100vh',background:'#000',position:'fixed'}}>
                    <img src={this.state.src} style={{width:'100%',height:'100vw',position:'fixed',
                            top: '50%',transform: 'translate(0, -50%)'
                    }}/>
                </div>

                <input type="file" accept="image/*" id="addFile" style={{display:'none'}} onChange={this.changeImg}/>

            </div>
        );
      }
}

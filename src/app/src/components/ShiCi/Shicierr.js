import React, { Component } from 'react'
import {NavBar,SearchBar,TextareaItem,Icon,Toast} from 'antd-mobile';
import {BrowserRouter as Router,Link} from "react-router-dom"
import "../../css/ShiCi/shicierr.css"

export default class Shicierr extends Component {
	constructor() {
		super();
		this.state = {
            shoucangClass: 'icon-xingxing black',
			chengyu: "",
			name: "",
			errwords: [],
			arr: [],
            num: 1,
            max: 1
		}
	}
	componentDidMount() {
        this.getTi();
    }
    getTi = () => {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });
        this.$api.get_scycz({grade: this.$store.getState().users.grade || 1, index: this.state.num - 1}).then(res => {
			Toast.hide();
			
			let arr = (res.data.data.shici).split("");

            this.setState({
				chengyu: res.data.data.shici,
				name: res.data.data.name,
				errwords: res.data.data.errwords,
				arr: arr,				
                max: res.data.data.max
            });
        });
    }
	shoucang = () => {
        if (this.state.shoucangClass == "icon-xingxing black") {
            this.setState({
                shoucangClass: "icon-xingxing1 yello"
            })
        } else {
            this.setState({
                shoucangClass: "icon-xingxing black"
            })
        }
    }
    minus = () => {
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            }, () => {this.getTi()})
        }
    }
    adds = () => {
        if (this.state.num < this.state.max) {
            this.setState({
                num: this.state.num + 1
            }, () => {this.getTi()})
        }
    }
	render() {
		return (
			<div>
				<NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/shici')}}/>} style={{ backgroundColor: "#617ca6"}}>诗 词 易 错 字</NavBar>
				<div className="learnidiombody">

					<div className="learnidiomcon">
						<div>
							<div className="orange">第<span> {this.state.num}</span><span> / </span><span>{this.state.max} </span>个</div>
                    		<div onClick={this.shoucang} className={"iconfont " + this.state.shoucangClass}></div>
							<div className="errcon">
								{/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg")} /></div> */}
								<div className="erridiom">
									{
										this.state.arr.map((item, index) => {
											var str = 'black';
											this.state.errwords.map((item1, index1) => {
												if (item == item1) {
													str = 'red';
												}

											});
											return <span key={index} style={{ color: str }}>{item}</span>
										})
									}
								</div>
								<div className="shiciname">{"-------" + this.state.name}</div>
								<div className="scallcode">
									{(this.state.errwords).map((item, index) => {
										return (
											<div className="scerrcode">
												<div className="iconfont icon-laba1" style={{ fontSize: 22, color: "#617ca6", marginTop: "20%" }}></div>
												<div key={index} className="scerrword">{item}</div>
											</div>
										)
									})}
									<div className="clear"></div>
								</div>
								<div className="outfeiji">
									<img className="feiji" src={require("../../images/feiji1.png")}></img>
								</div>
								
							</div>
						</div>
					</div>
					<Router>
						<div className="idiomsleft" ><Link onClick={this.minus} className="iconfont icon-ico_leftarrow"></Link></div>
						<div className="idiomsright" onClick={this.adds}><Link className="iconfont icon-ico_leftarrow"></Link></div>
					</Router>
				</div>
			</div>
		)
	}
}


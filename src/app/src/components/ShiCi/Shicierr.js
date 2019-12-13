import React, { Component } from 'react'
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
import {BrowserRouter as Router,Link} from "react-router-dom"
import "../../css/ShiCi/shicierr.css"

export default class Shicierr extends Component {
	constructor() {
		super();
		this.content = {
			chengyu: "疑是地上霜",
			name: "《静夜思》",
			errwords: ["疑", "霜"]
		}
		this.state = {
			num: 1
		}
		this.arr = (this.content.chengyu).split("");
	}
	minus = (e) => {
		this.setState((state) => {
			if (state.num == 1) {
				return {
					num: 1
				}
			}
			return {
				num: --state.num
			}
		})
	}
	adds = () => {

		this.setState((state) => {
			return {
				num: ++state.num
			}
		})
	}
	change = (e) => {
		e.target.className = (e.target.className == "iconfont icon-xingxing black") ? "iconfont icon-xingxing1 yello" : "iconfont icon-xingxing black"
	}
	render() {
		return (
			<div>
				<NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/shici')}}/>} style={{ backgroundColor: "#617ca6"}}>成 语 易 错 字</NavBar>
				<div className="learnidiombody">

					<div className="learnidiomcon">
						<div>
							<div className="orange">第<span> {this.state.num}</span><span> / </span><span>100 </span>个</div>
							<div onClick={this.change} className="iconfont icon-xingxing black"></div>
							<div className="errcon">
								{/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg")} /></div> */}
								<div className="erridiom">
									{
										this.arr.map((item, index) => {
											var str = 'black';
											this.content.errwords.map((item1, index1) => {
												if (item == item1) {
													str = 'red';
												}

											});
											return <span key={index} style={{ color: str }}>{item}</span>
										})
									}
								</div>
								<div className="shiciname">{"-------" + this.content.name}</div>
								<div className="scallcode">
									{(this.content.errwords).map((item, index) => {
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


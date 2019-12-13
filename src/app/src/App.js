import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";


import Bar from './components/Bar';
import Open from './components/OpenScreen/Open';
import Gerenxinxi from './components/WoDe/Gerenxinxi';
import Nianji from './components/WoDe/Nianji';
import Xuexijindu from './components/WoDe/Xuexijindu';
import Shoucangjia from './components/WoDe/Shoucangjia';
import Yijianfanhui from './components/WoDe/Yijianfanhui';
import Guanyu from './components/WoDe/Guanyu';
import Gexingqianming from './components/WoDe/Gexingqianming';
import Nicheng from './components/WoDe/Nicheng';
import Shengri from './components/WoDe/Shengri';
import Zhanghao from './components/WoDe/Zhanghao';
import Xiugaimima from './components/WoDe/Xiugaimima';
import Shoujihao from './components/WoDe/Shoujihao';
import Shengmu from './components/PinYin/Shengmu';
import Yunmu from './components/PinYin/Yunmu';
import Zhengtiyin from './components/PinYin/Zhengtiyin';
import Tingyinxuanzi from './components/PinYin/Tingyinxuanzi';
import Kanzishiyin from './components/PinYin/Kanzishiyin';
import Xingbie from './components/WoDe/Xingbie';
import Touxiang from './components/WoDe/Touxiang';
import Cropimg from './components/WoDe/Cropimg';
import Login from './components/Login/Login';
import Phonelogin from './components/Login/Phonelogin';
import Register from './components/Login/Register';
import Shoupinyin from './components/WoDe/Shoupinyin';
import Shouchengyu from './components/WoDe/Shouchengyu';
import Shoushici from './components/WoDe/Shoushici';
import Yzmxiugai from './components/WoDe/Yzmxiugai';
import LearnIdioms from './components/ChengYu/LearnIdioms';
import Erridioms from './components/ChengYu/Erridioms';
import Guessidioms from './components/ChengYu/Guessidioms';
import Idiomjielong from './components/ChengYu/Idiomjielong';
import Buchongshiju from './components/ShiCi/Buchongshiju';
import Learnpoem from './components/ShiCi/Learnpoem';
import Shicierr from './components/ShiCi/Shicierr';
import Guanqia from './components/Guanqia';
import ShiciGrade from './components/ShiCi/ShiciGrade'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* 主页面 */}
                    <Route exact path="/" component={()=><Redirect from='/' to='/home/pinyin' />} />
                    <Route exact path="/home" component={()=><Redirect from='/home' to='/home/pinyin' />} />
                    <Route exact path="/home/:tab" component={Bar} />
                    <Route exact path ="/guanqia"  component={Guanqia}/>
                    {/* 开屏 */}
                    <Route exact path="/open" component={Open} />
                    {/* 拼音 */}
                    <Route exact path="/pinyin/shengmu" component={Shengmu} />
                    <Route exact path="/pinyin/yunmu" component={Yunmu} />
                    <Route exact path="/pinyin/zhengtiyin" component={Zhengtiyin} />
                    <Route exact path="/pinyin/kanzi" component={Kanzishiyin} />
                    <Route exact path="/pinyin/tingyin" component={Tingyinxuanzi} />

                    {/* 成语 */}
                    <Route exact path="/chengyu/xuechengyu" component={LearnIdioms} />
                    <Route exact path="/chengyu/yicuozi" component={Erridioms} />
                    <Route exact path="/chengyu/caichengyu" component={Guessidioms} />
                    <Route exact path="/chengyu/chengjielong" component={Idiomjielong} />

                    {/* 诗词 */}
                    <Route exact path="/shici/buchong" component={Buchongshiju} />
                    <Route exact path="/shici/xueshici" component={Learnpoem} />
                    <Route exact path="/shici/yicuozi" component={Shicierr} />


                    {/* 我的 */}
                    <Route exact path="/wode/info" component={Gerenxinxi} />
                    <Route exact path="/wode/nianji" component={Nianji} />
                    <Route exact path="/wode/jindu" component={Xuexijindu} />
                    <Route exact path="/wode/shoucang" component={Shoucangjia} />
                    <Route exact path="/wode/fankui" component={Yijianfanhui} />
                    <Route exact path="/wode/guanyu" component={Guanyu} />
                    <Route exact path="/wode/info/touxiang" component={Touxiang} />
                    <Route exact path="/wode/info/nicheng" component={Nicheng} />
                    <Route exact path="/wode/info/geqian" component={Gexingqianming} />
                    <Route exact path="/wode/info/xingbie" component={Xingbie} />
                    <Route exact path="/wode/info/shengri" component={Shengri} />
                    <Route exact path="/wode/info/zhanghao" component={Zhanghao} />
                    <Route exact path="/wode/info/mima" component={Xiugaimima} />
                    <Route exact path="/wode/info/shouji" component={Shoujihao} />
                    <Route exact path="/wode/shoucang/pinyin" component={Shoupinyin} />
                    <Route exact path="/wode/shoucang/chengyu" component={Shouchengyu} />
                    <Route exact path="/wode/shoucang/shici" component={Shoushici} />

                    <Route exact path="/wode/info/touxiang/crop" component={Cropimg} />

                    {/* 登录注册 */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/login/phone" component={Phonelogin} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/verification" component={Yzmxiugai} />

                    {/* 成绩单 */}
                    <Route exact path="/shicigrade" component={ShiciGrade} />
                </Switch>
            </Router>
        )
    }
}

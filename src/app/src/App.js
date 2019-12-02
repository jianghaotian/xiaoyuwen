import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
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


export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* 主页面 */}
                    <Route exact path="/" component={()=><Redirect from='/' to='/home/pinyin' />} />
                    <Route exact path="/home" component={()=><Redirect from='/home' to='/home/pinyin' />} />
                    <Route exact path="/home/:tab" component={Bar} />
                    {/* 开屏 */}
                    <Route exact path="/open" component={Open} />
                    {/* 拼音 */}
                    <Route exact path="/pinyin/shengmu" component={Shengmu} />
                    <Route exact path="/pinyin/yunmu" component={Yunmu} />
                    <Route exact path="/pinyin/zhengtiyin" component={Zhengtiyin} />
                    <Route exact path="/pinyin/kanzi" component={Kanzishiyin} />
                    <Route exact path="/pinyin/tingyin" component={Tingyinxuanzi} />

                    

                    {/* 成语 */}



                    {/* 诗词 */}



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

                    <Route exact path="/wode/info/touxiang/crop" component={Cropimg} />




                </Switch>
            </Router>
        )
    }
}

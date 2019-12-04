var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');

const getRandom = require('../src/users/verification');
const sendMsg = require('../src/users/message');

var v_minute = 3; // 验证码有效时间

/**
 * 注册获取验证码
 * POST
 * 接收参数:
 *     phone : 手机号
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {veriToken}
 */
router.post('/register/verification', function (req, res, next) {
    let { phone } = req.body;
    runSql('select uid from user where uphone = ?', [phone], (result1) => {
        if (result1.status === 0) {
            if (result1.data.length === 0) {
                let verification = getRandom(6);

                let tokenContent = {
                    verification: verification,
                    phone: phone
                };
                let params = {
                    expiresIn: 60 * v_minute
                }
                let veriToken = getToken(tokenContent, params);

                sendMsg(phone, verification, '' + v_minute, (result2) => {
                    let jsonData = {
                        status: result2.status,
                        message: result2.message,
                        data: {
                            veriToken: veriToken
                        }
                    }
                    res.json(jsonData);
                });
            } else {
                let jsonData = {
                    status: 10005,
                    message: 'user exist'
                }
                res.json(jsonData);
            }
        } else {
            res.json(result1);
        }
    })
});

/**
 * 登录获取验证码
 * POST
 * 接收参数:
 *     phone : 手机号
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {veriToken}
 */
router.post('/login/verification', function (req, res, next) {
    let { phone } = req.body;

    let verification = getRandom(6);

    let tokenContent = {
        verification: verification,
        phone: phone
    };
    let params = {
        expiresIn: 60 * v_minute
    }
    let veriToken = getToken(tokenContent, params);

    sendMsg(phone, verification, '' + v_minute, (result2) => {
        let jsonData = {
            status: result2.status,
            message: result2.message,
            data: {
                veriToken: veriToken
            }
        }
        res.json(jsonData);
    });
});



/**
 * 用户注册
 * POST
 * 接收参数:
 *     phone        : 手机号
 *     password     : 密码
 *     name         : 昵称
 *     verification : 验证码
 *     token        : 验证码token
 * 
 * 返回参数:
 *     status: 0,
 *     message: "OK"
 */
router.post('/register', function (req, res, next) {
    let { phone, password, name, verification, token } = req.body;

    if (name == '' || name == null) {
        name = '小语文_' + getRandom(6);
    }

    checkToken(token, (result) => {
        if (result.status === 0) {
            if (result.data.verification == verification && result.data.phone == phone) {
                runSql('insert into user(uphone, upassword, uname, uday) values (?,?,?,?)', [phone, password, name, getTimestamp_13()], (result) => {
                    res.json(result);
                });
            } else {
                let jsonData = {
                    status: -2,
                    message: 'veri error'
                }
                res.json(jsonData);
            }
        } else {
            res.json(result);
        }
    });
});


/**
 * 用户登录
 * POST
 * 接收参数:
 *     phone        : 手机号
 *     password     : 密码
 * 
 * 返回参数:
 *     status: 0,
 *     message: "OK"
 */
router.post('/login', function (req, res, next) {
    let { phone, password } = req.body;
    runSql('select uid from user where uphone = ? and upassword = ?', [phone, password], (result) => {
        // console.log(result);
        if (result.status === 0) {
            if (result.data.length === 0) {
                let jsonData = {
                    status: -1,
                    message: 'login error'
                }
                res.json(jsonData);
            } else {
                let tokenContent = {
                    uid: result.data[0].uid
                };
                let params = {
                    expiresIn: 60 * 60 * 24 * 31  // 31天过期
                }

                let token = getToken(tokenContent, params);

                let jsonData = {
                    status: 0,
                    message: 'OK',
                    data: {
                        token: token,
                        uid: result.data[0].uid
                    }
                }
                res.json(jsonData);
            }
        } else {
            res.json(result);
        }
    });
});

/**
 * 验证码登录
 * POST
 * 接收参数:
 *     phone : 手机号
 *     verification : 验证码
 *     token : 验证码token
 * 返回参数:
 *     status: 0,
 *     message: "OK"
 */
router.post('/verilogin', function (req, res, next) {
    let { phone, verification, token } = req.body;

    checkToken(token, (result) => {
        if (result.status === 0) {
            if (result.data.verification == verification && result.data.phone == phone) {
                runSql('select Uid from user where uphone = ?', [phone], (result) => {
                    if (result.status === 0) {
                        if (result.data.length === 0) {
                            runSql('insert into user(uphone, uday) values (?,?)', [phone, getTimestamp_13()], (result1) => {
                                // console.log(result1);
                                runSql('select Uid from user where uphone = ?', [phone], (result2) => {
                                    if (result2.status === 0) {
                                        let tokenContent = {
                                            uid: result2.data[0].uid
                                        };
                                        let params = {
                                            expiresIn: 60 * 60 * 24 * 31  // 31天过期
                                        };
                        
                                        let token = getToken(tokenContent, params);
                        
                                        let jsonData = {
                                            status: 0,
                                            message: 'OK',
                                            data: {
                                                token: token,
                                                uid: result2.data[0].uid
                                            }
                                        }
                                        res.json(jsonData);
                                    } else {
                                        res.json(result2);
                                    }
                                });
                            });
                        } else {
                            let tokenContent = {
                                uid: result.data[0].uid
                            };
                            let params = {
                                expiresIn: 60 * 60 * 24 * 31  // 31天过期
                            };
            
                            let token = getToken(tokenContent, params);
            
                            let jsonData = {
                                status: 0,
                                message: 'OK',
                                data: {
                                    token: token,
                                    uid: result.data[0].uid
                                }
                            }
                            res.json(jsonData);
                        }
                    } else {
                        res.json(result);
                    }
                });
            } else {
                let jsonData = {
                    status: -2,
                    message: 'veri error'
                }
                res.json(jsonData);
            }
        } else {
            res.json(result);
        }
    });
});




/**
 * 更新token
 * GET
 * 接收参数:
 *     uid : 用户id
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {token}
 */
router.get('/gettoken', function (req, res, next) {
    let { uid } = req.query;
    let token = req.header('token');


    checkToken(token, (result) => {
        if (result.status === 0) {
            if ( uid == result.data.uid) {
                let tokenContent = {
                    uid: uid
                };
                let params = {
                    expiresIn: 60 * 60 * 24 * 31  // 31天过期
                }

                let token = getToken(tokenContent, params);

                let jsonData = {
                    status: 0,
                    message: 'OK',
                    data: {
                        token: token
                    }
                }
                res.json(jsonData);
            } else {
                let jsonData = {
                    status: -2,
                    message: 'uid or token error'
                }
                res.json(jsonData);
            }
        } else {
            res.json(result);
        }
    });
});






module.exports = router;

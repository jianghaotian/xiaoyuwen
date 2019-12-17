var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');

let { getBuchongshiju, getShici, getShiciycz } = require('../src/data/shici')
let { getPinyin, getKanzishiyin } = require('../src/data/pinyin')
let { getChengyu, getChengyuycz, getCaichengyu } = require('../src/data/chengyu');




// ---------- 拼 音 ---------- //

/**
 * （声母、韵母、整体音）
 * GET
 * 接收参数:
 *     flag  : 'shengmu', 'yunmu', 'zhengtiyin'
 *     index : 索引
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/xpy', function (req, res, next) {
    let { flag, index } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getPinyin(flag, index)
    }
    res.json(jsonData);
});

/**
 * （看字识音）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/kzsy', function (req, res, next) {
    let { grade } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getKanzishiyin(grade)
    }
    res.json(jsonData);
});

/**
 * （看字识音判题后存储）
 * POST
 * 接收参数:
 *     answer : 用户答案信息
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/kzsy', function (req, res, next) {
    let answer = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {
            let day = getTimestamp_13();
            runSql('insert into question(Uid, Qtype, Qscore, Qday) values (?,?,?,?)', [result.data.uid, 'kzsy', answer.score, day], (result1) => {
                if (result1.status === 0) {
                    // let fileCont = {
                    //     answer: answer
                    // }
                    let filePath = path.join(__dirname, '../data/users/kzsy/' + day + '.json');
                    let str = JSON.stringify(answer);
                    fs.writeFile(filePath, str, (err) => {
                        if (err) {
                            let jsonData = {
                                status: -1,
                                message: 'write file error'
                            }
                            res.json(jsonData);
                        } else {
                            let jsonData = {
                                status: 0,
                                data: day
                            }
                            res.json(jsonData);
                        }
                    });
                } else {
                    res.json(result1);
                }
            });
        } else {
            res.json(result);
        }
    });
});

/**
 * （看字识音成绩单）
 * GET
 * 接收参数:
 *     time : 文件名
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/kzsy/grade', function (req, res, next) {
    let { time } = req.query;
    // let token = req.header('token');
    let data = require(path.join(__dirname, '../data/users/kzsy/' + time + '.json'));

    let jsonData = {
        status: 0,
        data: data
    }
    res.json(jsonData);
});

/**
 * （听音选字判题后存储）
 * POST
 * 接收参数:
 *     answer : 用户答案信息
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/tyxz', function (req, res, next) {
    let { answer } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        let num = 0;
        answer.forEach(value => {
            if (value.flag) {
                num++;
            }
        });
        if (result.status === 0) {
            let day = getTimestamp_13();
            runSql('insert into question(Uid, Qtype, Qscore, Qday) values (?,?,?,?)', [result.data.uid, 'tyxz', num, day], (result1) => {
                if (result1.status === 0) {
                    let fileCont = {
                        answer: answer,
                        grade: num
                    }
                    let filePath = path.join(__dirname, '../data/users/tyxz/' + day + '.json');
                    let str = JSON.stringify(fileCont);
                    fs.writeFile(filePath, str, (err) => {
                        if (err) {
                            let jsonData = {
                                status: -1,
                                message: 'write file error'
                            }
                            res.json(jsonData);
                        } else {
                            let jsonData = {
                                status: 0,
                                data: day
                            }
                            res.json(jsonData);
                        }
                    });
                } else {
                    res.json(result1);
                }
            });
        } else {
            res.json(result);
        }
    });
});

/**
 * （听音选字成绩单）
 * GET
 * 接收参数:
 *     time : 文件名
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/tyxz/grade', function (req, res, next) {
    let { time } = req.query;
    // let token = req.header('token');
    let data = require(path.join(__dirname, '../data/users/tyxz/' + time + '.json'));

    let jsonData = {
        status: 0,
        data: data
    }
    res.json(jsonData);
});


// ---------- 成 语 ---------- //

/**
 * （学成语）
 * GET
 * 接收参数:
 *     grade : 年级
 *     index : 索引
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/xcy', function (req, res, next) {
    let { grade, index } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getChengyu(grade, index)
    }
    res.json(jsonData);
});

/**
 * （易错字）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/cyycz', function (req, res, next) {
    let { grade, index } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getChengyuycz(grade, index)
    }
    res.json(jsonData);
});

/**
 * （猜成语）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/ccy', function (req, res, next) {
    let { grade } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getCaichengyu(grade)
    }
    res.json(jsonData);
});

/**
 * （猜成语判题后存储）
 * POST
 * 接收参数:
 *     answer : 用户答案信息
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/ccy', function (req, res, next) {
    let { answer } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        let num = 0;
        answer.forEach(value => {
            if (value.flag) {
                num++;
            }
        });
        if (result.status === 0) {
            let day = getTimestamp_13();
            runSql('insert into question(Uid, Qtype, Qscore, Qday) values (?,?,?,?)', [result.data.uid, 'ccy', num, day], (result1) => {
                if (result1.status === 0) {
                    let fileCont = {
                        answer: answer,
                        grade: num
                    }
                    let filePath = path.join(__dirname, '../data/users/bcsj/' + day + '.json');
                    let str = JSON.stringify(fileCont);
                    fs.writeFile(filePath, str, (err) => {
                        if (err) {
                            let jsonData = {
                                status: -1,
                                message: 'write file error'
                            }
                            res.json(jsonData);
                        } else {
                            let jsonData = {
                                status: 0,
                                data: day
                            }
                            res.json(jsonData);
                        }
                    });
                } else {
                    res.json(result1);
                }
            });
        } else {
            res.json(result);
        }
    });
});

/**
 * （猜成语成绩单）
 * GET
 * 接收参数:
 *     time : 文件名
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/ccy/grade', function (req, res, next) {
    let { time } = req.query;
    // let token = req.header('token');
    let data = require(path.join(__dirname, '../data/users/bcsj/' + time + '.json'));

    let jsonData = {
        status: 0,
        data: data
    }
    res.json(jsonData);
});




// ---------- 诗 词 ---------- //

/**
 * （学诗词）
 * GET
 * 接收参数:
 *     grade : 用户年级
 *     index : 索引
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/xsc', function (req, res, next) {
    let { grade, index } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getShici(grade, index)
    }
    res.json(jsonData);
});

/**
 * （补充诗句）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/bcsj', function (req, res, next) {
    let { grade } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getBuchongshiju(grade)
    }
    res.json(jsonData);
});

/**
 * （补充诗句判题后存储）
 * POST
 * 接收参数:
 *     answer : 用户答案信息
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/bcsj', function (req, res, next) {
    let { answer } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        let num = 0;
        answer.forEach(value => {
            if (value.flag) {
                num++;
            }
        });
        if (result.status === 0) {
            let day = getTimestamp_13();
            runSql('insert into question(Uid, Qtype, Qscore, Qday) values (?,?,?,?)', [result.data.uid, 'bcsj', num, day], (result1) => {
                if (result1.status === 0) {
                    let fileCont = {
                        answer: answer,
                        grade: num
                    }
                    let filePath = path.join(__dirname, '../data/users/bcsj/' + day + '.json');
                    let str = JSON.stringify(fileCont);
                    fs.writeFile(filePath, str, (err) => {
                        if (err) {
                            let jsonData = {
                                status: -1,
                                message: 'write file error'
                            }
                            res.json(jsonData);
                        } else {
                            let jsonData = {
                                status: 0,
                                data: day
                            }
                            res.json(jsonData);
                        }
                    });
                } else {
                    res.json(result1);
                }
            });
        } else {
            res.json(result);
        }
    });
});

/**
 * （补充诗句成绩单）
 * GET
 * 接收参数:
 *     time : 文件名
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/bcsj/grade', function (req, res, next) {
    let { time } = req.query;
    // let token = req.header('token');
    let data = require(path.join(__dirname, '../data/users/bcsj/' + time + '.json'));

    let jsonData = {
        status: 0,
        data: data
    }
    res.json(jsonData);
});


/**
 * （易错字）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/scycz', function (req, res, next) {
    let { grade, index } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getShiciycz(grade, index)
    }
    res.json(jsonData);
});



module.exports = router;

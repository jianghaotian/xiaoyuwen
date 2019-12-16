var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');

let { getBuchongshiju, getShici } = require('../src/data/shici.js')
let { getPinyin } = require('../src/data/pinyin.js')
let { getChengyu } = require('../src/data/chengyu');




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



// ---------- 成 语 ---------- //

/**
 * （成语）
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
        if (result.status === 0) {
            // result.data.uid

            console.log(answer);
            res.json(answer);

        } else {
            let jsonData = {
                status: 0,
                data: getBuchongshiju(grade)
            }
            res.json(jsonData);
        }
    });

    
});

router.get('/bcsj/grade', function (req, res, next) {
    let { grade } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getBuchongshiju(grade)
    }
    res.json(jsonData);
});


/**  TODO
 * （易错字）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/ycz', function (req, res, next) {
    let { grade } = req.query;
    // let token = req.header('token');

    // let jsonData = {
    //     status: 0,
    //     data: ？？？(grade, index)
    // }
    // res.json(jsonData);
});



module.exports = router;

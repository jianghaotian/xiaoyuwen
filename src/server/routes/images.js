var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');


router.post('/head', function (req, res, next) {

    let { uid } = req.body;
    let token = req.header('token');




});






module.exports = router;

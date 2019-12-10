var express = require('express');
var router = express.Router();
var multer = require("multer");
const path = require('path');

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');
const getRandom = require('../src/users/verification');


const storage = multer.diskStorage({
    // 配置文件上传的位置
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/users/headimages'));
    },
    // 配置上传文件的名称（包含后缀）
    filename: (req, file, cb) => {
        // 文件后缀
        let ext = path.extname(file.originalname);
        cb(null, getTimestamp_13() + '_' + getRandom(2) + ext);
    }
});
const upload = multer({storage: storage});


router.post('/head', upload.any(), function (req, res, next) {
    let token = req.header('token');
    
    checkToken(token, (result) => {
        console.log(token);
        console.log(result);

        
        if (result.status === 0) {
            var filename = req.files[0].filename;
            runSql('update user set Uimage = ? where Uid = ?', [filename, result.data.uid], (result1) => {
                let jsonData = {...result1};
                jsonData.data.filename = filename;
                res.json(jsonData);
            });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;

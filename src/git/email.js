const nodemailer = require("nodemailer");
const {email} = require("./config");

// 定义邮件服务器
var transporter = nodemailer.createTransport({
    host: email.host,
    service: email.service,
    secure: true,
    auth: {
        user: email.username,
        pass: email.password
    }
});

// 发送函数
function sendEmail (sendTo, sendHtml, sendSubject, callback) {
    var mailOptions = {
        from: email.username,  // 发送邮件的地址
        to: sendTo,  // 接收邮件的地址
        subject: sendSubject,  // 邮件主题
        html: sendHtml  // 以HTML的格式显示
    };

    // 发送邮件
    transporter.sendMail(mailOptions, function (error, info) {
        var result = {};
        if (error) {
            result = {status: -1, message: error};
        } else {
            result = {status: 0, message: info};
        }
        return callback(result);
    });
}

// 时间格式化
function formatTime (a) {
    a = '' + a;
    if (a.length === 1) {
        return '0' + a;
    } else {
        return a;
    }
}

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = formatTime(date.getHours());
var minute = formatTime(date.getMinutes());
var second = formatTime(date.getSeconds());
var now = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;

var sendSubject = '【小语文】服务器代码更新成功'
var sendHtml = `
    <p>【小语文】服务器代码更新成功</p>
    <p>${now}</p>
`;
var sendTo = '2478904897@qq.com';

sendEmail(sendTo, sendHtml, sendSubject, r => {
    // console.log(r);
})

const QcloudSms = require('qcloudsms_js');
const {message} = require('../../config');

// 实例化 QcloudSms
var qcloudsms = QcloudSms(message.appid, message.appkey);

function sendMsg (phoneNumber, verification, minute, callback) {
    var ssender = qcloudsms.SmsSingleSender();
    var params = [verification, minute];
    ssender.sendWithParam("86", phoneNumber, message.templateId, params, message.smsSign, "", "", (err, res, resData) => {
        if (err) {
            let jsonData = {
                status: -1, 
                message: err
            };
            callback(jsonData);
        } else {
            let jsonData = {
                status: resData.result, 
                message: resData.errmsg
            };
            callback(jsonData);
        }
    }); 
}

module.exports = sendMsg;

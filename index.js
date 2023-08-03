/*
 * Created by admin on 11/06/2020.
 */

var AWS = require('aws-sdk');
let awsConfig = {
    accessKeyId: 'AKIAIYIZISP5DEWZ74XQ',
    secretAccessKey: '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',
    region: 'ap-south-1'
};
AWS.config.update(awsConfig);
let request = require('request');

/*
 * SMS Configuration
 */
var SMSUNIFIEDBUZZ = 'cfe7792a00cac7c32f657ceebad15aca';
var SMSAPI2FAC = '5564db46-5e8b-11e8-a895-0200cd936042';

class Sms {
    constructor(data) {
    }
    
    sendSMS(data,callback) {
        if(data.mobile!=undefined) {
            let code = (data.code === undefined ? "+91" : data.code)
            var params = {
                Message: data.message,
                PhoneNumber: code + data.mobile,
                MessageAttributes: {
                    'AWS.SNS.SMS.SenderID': {
                        DataType: 'String',
                        StringValue: 'TASKII'
                    }
                },
            };
            var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
            publishTextPromise.then(
                function (data) {
                    console.log("MessageID is " + data.MessageId);
                    return callback(1);
                }).catch(function (err) {
                console.log(err)
                return callback(0);
            });
        }
        /*this.sms2factor(data, smsresponse => {
            return callback(smsresponse);
        })*/
    }

    sendOTP(data, callback) {
        let code=(data.code===undefined?"+91":data.code)
        var params = {
            Message: "account: "+data.otp+" is your taSki account verification code.",
            //Message:"[#] taSki Cabs - taski.in - Please use this OTP to login - : "+data.otp+" "+(data.smscode!==undefined?data.smscode:''),
            PhoneNumber: code+data.mobile,
            MessageAttributes: {
                'AWS.SNS.SMS.SenderID': {
                    DataType: 'String',
                    StringValue: 'TASKII'
                }
            },
        };
        var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
        publishTextPromise.then(rspdata=> {
            //console.log("MessageID is " + rspdata.MessageId);
            this.smsOTP2factor(data, smsresponse => {
            })
            return callback(1);
        }).catch(err=> {
            this.smsOTP2factor(data, smsresponse => {
            })
            return callback(1);
        });
    }
    /*
     * Send OTP SMS through 2factor
     */
    smsOTP2factor(data, callback) {
        var url = "https://2factor.in/API/V1/" + SMSAPI2FAC + "/SMS/91" + data.mobile + "/" + data.otp + "/otp";
        request({
            uri: url,
            method: 'GET'
        },
        function (error, response, body) {
            if (error) {
                return callback(0);
            }else{
                return callback(1);
            }
        });
    }
    /*
     * Send SMS through 2factor
     */
    sms2factor(data, callback) {
        var url = "http://2factor.in/API/V1/" + SMSAPI2FAC + "/ADDON_SERVICES/SEND/TSMS";
        request({
            url: url,
            method: 'POST',
            body: JSON.stringify({
                'From': 'TASKII',
                'To': data.mobile,
                'Msg': 'taSki Cabs '+data.message
            })
        },
        function (error, response, body) {
            if (error) {
                return callback(0);
            }else{
                return callback(1);
            }
        });
    }
    
    /*
     * Send SMS through unifiedbuzz
     */
    smsUnifiedbuzz(data, callback) {
        var url = "http://unifiedbuzz.com/api/insms/format/json/?mobile=" + data.mobile + "&text=" + data.message + "&flash=0&type=1&tiny=0&sender=TASKII";
        request({
            headers: {
                'X-API-Key': SMSUNIFIEDBUZZ
            },
            uri: url,
            method: 'GET'
        },
        function (error, response, body) {
            if (error) {
                return callback(0);
            }else{
                return callback(1);
            }
        });
    }
}
module.exports = Sms;
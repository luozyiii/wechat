var API = require('wechat-api');
var config = require('config');
var app_id      = config.get('wx.app_id');
var app_secret  = config.get('wx.app_secret');

var api = new API(app_id,app_secret);
api.uploadLogo('public/images/logo.png', function (err,result) {
	console.log(result);
	console.log(err)
});
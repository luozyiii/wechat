var API = require('wechat-api');
var config = require('config');
var app_id      = config.get('wx.app_id');
var app_secret  = config.get('wx.app_secret');

var api = new API(app_id,app_secret);
api.sendText("oCSCPuNKHWmZcdXmxOduP5ggH17s","hello world",function (err,result) {
	console.log(result);
})
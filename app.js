var API = require('wechat-api');
var config = require('config');
var app_id      = config.get('wx.app_id');
var app_secret  = config.get('wx.app_secret');

//配置
// var api = new API(app_id, app_secret,function (callback) {
// 	// 传入一个获取全局token的方法
// 	console.log(api)
// 	fs.readFile('access_token.txt', 'utf8', function(err, txt) {
// 		if (err) {
// 			return callback(err);
// 		}
// 		callback(null, JSON.parse(txt));
// 	});
// },function (token, callback) {
// 	// 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
// 	// 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
// 	fs.writeFile('access_token.txt', JSON.stringify(token), callback);
// });
var api = new API(app_id,app_secret);
api.getIp(function (err,result) {
	console.log(result);
});
// console.log(api)
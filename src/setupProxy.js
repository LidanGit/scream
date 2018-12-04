var proxy = require('http-proxy-middleware');
module.exports = function(app){
	app.use(proxy('/message',{
		target:'https://m.wowdsgn.com',
		host:'m.wowdsgn.com',
		changeOrigin:true
	}))
}
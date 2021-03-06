var proxy = require('http-proxy-middleware');
module.exports = function(app){
	app.use(proxy('/message',{
		target:'https://m.wowdsgn.com',
		host:'m.wowdsgn.com',
		changeOrigin:true
	}));
	app.use(proxy('/topic',{
		target:'https://m.wowdsgn.com',
		host:'m.wowdsgn.com',
		changeOrigin:true
	}));
	app.use(proxy('/recommend',{
		target:'https://m.wowdsgn.com',
		host:'m.wowdsgn.com',
		changeOrigin:true
	}));
	app.use(proxy('/itemdetail',{
		target:'https://m.wowdsgn.com',
		host:'m.wowdsgn.com',
		changeOrigin:true
	}));
	app.use(proxy('/pages',{
		target:'https://m.wowdsgn.com',
		host:'m.wowdsgn.com',
		changeOrigin:true
	}))
}
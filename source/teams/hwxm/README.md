项目名称为：华为商城电商项目
项目实现功能介绍：
    1、首先本项目要放到本地服务器根目录，使用服务器环境打开
    2、首页是通过写好结构后所有商品都是通过ajax获取json数据进行渲染
    3、每一个商品点击就会进入商品详情页，
                 商品详情页的数据通过点击时url上拼接当前点击的商品id,在详情页通过ajax和json数据对比，查找到相同的id然后进行渲染
   4、购物车的实现    
	 通过详情页点击加入购物车就会自动跳到购物车，添加时还可以选择添加的数量。
                 功能实现  时通过浏览器cook存储数据   在购物车页面读取cook数据，然后进行渲染
   5、注册  
	从网页头部右上角注册进入 
	注册同样使用cook  向cook发送字段只有    电话号码和密码   也就是账号和密码
	注册手机号和密码通过正则表达式进行验证。注册时只需填手机号和密码就可以；如果重名会提示，如果注册成功会弹出选项框，进入登陆或者留在注册页
  6、登录
	注册完成后就可以登陆了
	登陆同样会验证     三种情况     1、未注册，快去注册吧    2、密码错误     3、登陆成功
	通过注册页向cook添加的数据进行读取验证；登陆成功会弹出框是否去首页
7、活动页     点击首页banner图片中第一个图片进入  
项目目录介绍：
css文件：
	iconfont     是小图标字体
	about.css    商品详情页css
	banner.css  首页banner部分样式
	css.css	   为公用样式
	gouwu.css    购物车样式
	style.css       为除公共部份外样式
data 文件:
	html公共文件  主要是头部和底部
images   :
	站点所有图片
jq文件     :
	jquery.cookie.js    cook插件
	jquery.js 	           jquery官方插件
js文件     ：
	about.js       商品详情页js
	che.js           商品详情加入购物车 向cook发数据
	jquery.banner.1.0.js    首页banner部分
	load.js          公共部分html加载
	main.js         非公共部分
	shop.js         购物车js
jsonp文件：
	jsp.json        模拟数据
login文件：	登陆和注册文件
      css文件：
	    log.css     登陆注册公共文件
      date文件：
	    hefo.html 登陆注册头部底部公共文件
      images文件             登陆注册图片
      js文件：
	  log.js          登陆页js            
	  login.js       注册页js	
      log.html        登陆页html
      login.html      注册页html
README.md     项目说明
shop.html        购物车
about.html      商品详情页
active.html       活动页
index.html       首页	

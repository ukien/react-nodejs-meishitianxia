/**
 * Created by Administrator on 2017/2/4.
 */
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var staticapp = express.Router();
var vhost = require('vhost');
app.use(vhost('static.study.com', staticapp));

var handlebars = require('express3-handlebars').create({
    defaultLayout:'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});



staticapp.use(express.static("F:\meishizhijia"));
staticapp.get("/",function (req,res) {
    res.send("你不能直接使用static.study.com");
});


var api = require("./api/api");
api(app);

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 80);
var rootPath = require('path').normalize(__dirname + '/../..');
app.use(express.static(rootPath + '/public'));
app.use(bodyParser());


app.get("/",function (req,res) {
    res.render("home",{
        title:"仿美食天下 ---- 蔡荣庚"
    });
});

app.get("/back-end",function (req,res) {
    res.render("back-end",{
        title:"仿美食天下 管理页面 ---- 蔡荣庚"
    });
});


app.listen(app.get("port"), function () {
    console.log("服务器已经启动: http://localhost:" + app.get("port"))
});


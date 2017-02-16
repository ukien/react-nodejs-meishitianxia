
/**
 * Created by Administrator on 2017/2/5.
 */
var formidable = require('formidable');
var fs = require("fs");
var conf = require("../conf");
var sql = require("../dao/sql");
var mysql = require("mysql");

var pool = mysql.createPool(conf.mysql);




function commonResult(res) {
    return function (err,result) {
        if(result){
            res.json({
                code:1,
                msg:result
            });
        }
        else{
            res.json({
                code:0,
                msg:"操作失败"
            });
        }
    }
}


function commonQuery(res, sql, arr) {
    pool.getConnection(function (err,connection) {
        connection.query(sql,arr,commonResult(res));
        connection.release();
    });
}


module.exports = function (app) {
    food(app);
    ingredients(app);
    user(app);
    maintain(app);
    menu(app);
    subject(app);
    article(app);
};

function article(app) {
    app.get("/api/article/:id",function (req,res) {
        commonQuery(res,sql.article.query,[req.params.id]);
    })
}

function subject(app) {
    app.get("/api/subject/:subject",function (req,res) {
        commonQuery(res,sql.subject.query,[req.params.subject]);
    })
}


//
function menu(app) {
    app.get("/api/menu/rookie/:num",function (req,res) {
        var num = req.params.num || 3;
        commonQuery(res,sql.menu.rookie,num);
    })

    app.get("/api/menu/gallery/:num",function (req,res) {
        var num = req.params.num || 3;
        commonQuery(res,sql.menu.gallery,Number(num));
    })
}
//


function maintain(app) {
    app.get("/api/maintain/carousel",function (req,res) {
        commonQuery(res,sql.carousel);
    });
    app.get("/api/maintain/news/:name/:num",function (req,res) {
        commonQuery(res,sql.news.get,[req.params.name, Number(req.params.num)]);
    });
    // app.post("/api/maintain/carousel",function (req,res) {
    //     var form = formidable.IncomingForm();
    //     var files = [];
    //     form.on('file', function (filed,file) {
    //         var readStream=fs.createReadStream(file.path);
    //         var writeStream=fs.createWriteStream(conf.workDir+"/maintain\home_carousel"+file.name);
    //         readStream.pipe(writeStream);
    //         readStream.on('end',function(){
    //             fs.unlinkSync(file.path);
    //         });
    //     });
    //     form.parse(req,function (err,fields,files) {
    //         if(err) res.json({code:0,msg:"上传文件出错!"});
    //     });
    // });
}


function food(app) {
    app.get("/api/foods/id/:id",function (req,res) {
        commonQuery(res,sql.food.query,[req.params.id]);
    });

    app.get("/api/foods/name/:name", function (req, res) {

    });

    app.get("/api/foods/type/:type", function (req, res) {
        commonQuery(res,sql.food.type,[req.params.type,9]);
    });

    app.get("/api/foods/rookie/:num", function (req, res) {
        // commonQuery(res,sql.food.rookie,[Number(req.params.num)]);
        commonQuery(res,sql.food.recent,[Number(req.params.num)]);
    });

    app.get("/api/foods/recent/:num", function (req, res) {
        commonQuery(res,sql.food.recent,[Number(req.params.num)]);
    });
    app.get("/api/foods/recent/hot/:num", function (req, res) {
        commonQuery(res,sql.food.recentHot,[Number(req.params.num)]);
    });
    app.get("/api/foods/random/:num", function (req, res) {
        commonQuery(res,sql.food.random,[Number(req.params.num)]);
    });
}

function ingredients(app) {
    app.get("/api/ingredients/id/:id", function (req, res) {

    });

    app.get("/api/ingredients/name/:name", function (req, res) {

    });

    app.get("/api/ingredients/some", function (req, res) {
        commonQuery(res,sql.ingredients.some);
    });
}

function user(app) {
    app.post("/login", function (req, res) {

    });

    app.post("/register", function (req, res) {

    });

    app.put("/avator",function (req,res) {

    });

    app.put("/info",function (req,res) {

    });
}

/**
 * Created by Administrator on 2017/2/5.
 */
var conf = require("./conf.js");
var sql = require("./dao/sql.js");

module.exports = {
    officialAdd:function (req,res,next) {
        var pool = mysql.createPool(conf.mysql);
    },
    userAdd:function (req,res,next) {
        
    },
    get:function (req,res,next) {
        
    }
};
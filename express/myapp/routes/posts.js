var express = require('express');
var router = express.Router();
//var mysql      = require('mysql');
//数据库参数配置
//var dbConfig = require('../db/DBConfig');
//配置增 、删、改 、查 的sql语句
//var userSQL = require('../db/Usersql');
//创建连接池
//var pool = mysql.createPool(dbConfig.mysql);

/* POST users listing. */

router.post('/',function(reg,res){
	res.send('POST request to the homepage');
});

module.exports = router;

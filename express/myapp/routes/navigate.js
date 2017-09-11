var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
//数据库参数配置
var dbConfig = require('../db/DBConfig1');
//配置增 、删、改 、查 的sql语句
var userSQL = require('../db/Usersql1');
//创建连接池
var pool = mysql.createPool(dbConfig.mysql);

/* GET users listing. */
router.get('/', function(req, res, next) { 
	pool.getConnection(function(err,connection) {
	  /*connection.connect();
	  connection.query("USE test"); */
	 // console.log('The ip is: ');
	  ///var ip = req.query.ipaddress;
	  //var date = req.query.date;
	   //console.log('The date is: ', ip);
	   
	  connection.query("SELECT urlrowcount,urlcolcount from user ", function(err, rows, fields){
	   if (err) throw err;
	        global.row= rows[0].urlrowcount;
	        global.col= rows[0].urlcolcount;
	   console.log('The ip is: ' +  row + col);
	  });
	  
	  connection.query("SELECT * from urls ", function(err, rows, fields) {
	  if (err) throw err;   
	  console.log('The ip is: ', "SSSSSSS");
	  
	  connection.query("SELECT urlrowcount,urlcolcount from user ", function(err, rows, fields){
	   if (err) throw err;
	   var row= rows[0].urlrowcount;
	   var col= rows[0].urlcolcount;
	   //console.log('The ip is: ' +  row + col);
	  });
	  //console.log('The solution is: ', rows.length);
	  var arr = new Array();
	  for(var i=0;i<rows.length/global.col;i++){
		  arr[i] = new Array();		  
		  for(var j=0;j<global.col;j++){
			if(rows.length>j+global.col*i){
			  arr[i][j]=rows[j+global.col*i];
		      }
		  }
	  }
	  
	  res.json(arr);
	  res.end();
	  
	  connection.release(); 
		});	
	});


	
});

router.get('/columnset',function(req, res, next){
	var columnset = req.query.columnset;
	console.log('post  columnset: ', columnset); 
    pool.getConnection(function(err,connection) {	    
	  connection.query("update user set urlcolcount=" + columnset , function(err, rows, fields){
	   if (err) throw err;
	  });
	  console.log('post  columnset: ', columnset);  
	  res.json("OK");
	  res.end();	  
	  connection.release(); 
	});	
});

module.exports = router;

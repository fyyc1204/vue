var express = require('express');
var router = express.Router();
//var mysql      = require('mysql');
//���ݿ��������
//var dbConfig = require('../db/DBConfig');
//������ ��ɾ���� ���� ��sql���
//var userSQL = require('../db/Usersql');
//�������ӳ�
//var pool = mysql.createPool(dbConfig.mysql);

/* POST users listing. */

router.post('/',function(reg,res){
	res.send('POST request to the homepage');
});

module.exports = router;

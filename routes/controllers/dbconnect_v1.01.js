'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */
var mariasql = require('mariasql');

exports.connection = function(){
    //db연결정보 지정
//    var host = '192.168.3.2';
var host = '183.102.159.138';
    var user = 'admin';
    var password = '1234';
    var db = '2015_02_04_ymc';


//connection setting
    var c = new mariasql();
    c.connect({
        host : host,
        user : user,
        password : password,
        db : db
    });


    return c;
}

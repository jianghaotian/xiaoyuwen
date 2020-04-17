var mysql = require('mysql');
var mysqlconfig = require('../config').mysql;  // 引入mysql连接配置
var poolextend = require('./poolextend');  // 引入连接池配置

var pool = mysql.createPool(poolextend({}, mysqlconfig));  // 使用连接池，提升性能

function runSql(sql, data) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        let jsonData = {
          status: err.errno,
          message: err.sqlMessage,
          data: {
            code: err.code
          }
        }
        reject(jsonData);
      } else {
        connection.query(sql, data, function (err, result) {
          if (err) {
            let jsonData = {
              status: err.errno,
              message: err.sqlMessage,
              data: {
                sql: err.sql,
                code: err.code
              }
            }
            reject(jsonData);
          } else {
            let jsonData = {
              status: 0,
              message: 'OK',
              data: result
            }
            resolve(jsonData);
          }
          connection.release();
        });
      }
    });
  });
}

module.exports = runSql;

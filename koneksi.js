var mysql = require ('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhoast',
    user:'root',
    password:'',
    database:'dbrestapi'
});

conn.connect((error)=>{
    if(error) throw error;
    console.log('Mysql Terkoneksi');
})

module.exports = conn;
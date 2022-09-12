'use strict';

var response = require ('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API Berjalan!", res)
};

//Menampilkan semua data pegawai
exports.tampilsemuapegawai = function (req,res){
    connection.query('SELECT * FROM pegawai', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data pegawai berdasarkan id
exports.tampilberdasarkanid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM pegawai WHERE id_pegawai= ?', [id], 
        function (error, rows, fileds){
            if(error){
                connection.log(error);
            }else {
                response.ok(rows,res);
            }
        });
};

//menambahkan data pegawai
exports.tambahpegawai = function (req,res){
    var nip = req.body.nip;
    var nama = req.body.nama;
    var jabatan = req.body.jabatan;

    connection.query('INSERT INTO pegawai (nip,nama,jabatan) VALUES (?,?,?)', 
    [nip,nama,jabatan],
    function (error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};
'use strict';

module.exports = function(app) {
    var jsonku = require ('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuapegawai);
    
    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahpegawai);

    app.route('/ubah')
        .put(jsonku.ubahpegawai);
    
    app.route('/hapus')
        .delete(jsonku.hapuspegawai);
    
    app.route('/tampiltupoksi')
        .get(jsonku.tampilgrouptupoksi);

}
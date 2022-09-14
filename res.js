'use strict';

exports.ok = function(values,res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
}

//response untuk nested tupoksi
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama]){
            //buat variabel group nama pegawai
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah tupoksi
            if(Array.isArray(group.tupoksi)){
                //tambahkan value ke dalam group tupoksi
                group.tupoksi.push(item.tupoksi);
            }else {
                group.tupoksi = [group.tupoksi, item.tupoksi];
            }
        }else{
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };

    res.json(data);
    res.end();

}
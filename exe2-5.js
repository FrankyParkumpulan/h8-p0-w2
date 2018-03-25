function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var angkotPenumpang = [];
  for(var i = 0; i<arrPenumpang.length;i++){
  var ruteAngkot = {};
  rute[arrPenumpang[i][0]] = arrPenumpang[i][1];
   ruteAngkot.penumpang = arrPenumpang[i][0];
   ruteAngkot.naikDari = arrPenumpang[i][1];
   ruteAngkot.tujuan = arrPenumpang[i][2];
   ruteAngkot.bayar = 2000*(rute.indexOf(ruteAngkot.tujuan)-rute.indexOf(ruteAngkot.naikDari));
    angkotPenumpang.push(ruteAngkot);
  } 
  return angkotPenumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

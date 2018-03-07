function dataHandling2(input){
  
  input.splice(1,2);
  input.splice(1,0, 'Roman Alamsyah Elsharawy');
  input.splice(2,0);
  input.splice(2,0, 'Provinsi Bandar Lampung');
  input.splice(4,0, 'Pria');
  input.splice(5,1);
  input.splice(5,0, 'SMA Internasional Metro');
  console.log(input);
  console.log('\n');
  
  var tanggal = input[3];
  
  console.log(tanggal)

  Pisah_Tanggal = tanggal.split('/');
  console.log(Pisah_Tanggal)

  potong_Tanggal = Pisah_Tanggal[1];
  tanggal_lahir = parseInt(potong_Tanggal);
  
  var a_Bulan;
  
  switch(tanggal_lahir){
    case 1: {a_Bulan=('Januari');break;}
    case 2: {a_Bulan=('Februari');break;}
    case 3: {a_Bulan=('Maret');break;}
    case 4: {a_Bulan=('April');break;}
    case 5: {a_Bulan=('Mei');break;}
    case 6: {a_Bulan=('Juni');break;}
    case 7: {a_Bulan=('Juli');break;}
    case 8: {a_Bulan=('Agustus');break;}
    case 9: {a_Bulan=('September');break;}
    case 10: {a_Bulan=('Oktober');break;}
    case 11: {a_Bulan=('November');break;}
    case 12: {a_Bulan=('Desember');break;}
  }
  console.log(a_Bulan);
  console.log();
  
  urutkan_Tanggal = Pisah_Tanggal.sort(function(a, b) { 
    return b - a; 
    
  });
  console.log(Pisah_Tanggal);
  console.log();
  
  ubahTanggal = tanggal.split('/').join('-');
  console.log(ubahTanggal);  
  console.log();

  
  input.splice(1,2);
  input.splice(1,0, 'Roman Alamsyah');
  console.log(input[1]);
    console.log();


}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]));

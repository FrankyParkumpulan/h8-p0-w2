  function kaliTerusRekursif(angka) {
    // you can only write your code here!

    var str = angka.toString()
    var jumlah = 1;
    if (str.length == 1) {
        return Number(angka);
    }else{
        for (i = 0; i < str.length; i++) {
            jumlah = jumlah * Number(str[i])
        }
        return kaliTerusRekursif(jumlah);
    }
    
  }
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
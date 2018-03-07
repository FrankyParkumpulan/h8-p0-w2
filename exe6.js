//1. Melakukan Looping Menggunakan While

  var i=0;
  while(i<=1){
    console.log("looping pertama");
    i+=2;
    var j=2;
      while(j<=20){
        console.log(j+"  saya suka koding");
          j+=2;
  }
}
 console.log("looping kedua");
  var l=20;
  while(l>0){
    console.log(l+"  i become full stack javascript");
    l-=2;
  }

 console.log();
 console.log();
//--------------------------------------------------------------------------------------------------------------------------
//2. Melakukan Looping Menggunakan For

for(var i=0;i<=0;i++){
  console.log("looping pertama");
  for(var j=1;j<=20;j++){
    console.log(j+" aku suka coding");
  }
  
}
console.log("looping kedua");
for(var k=20;k>=1;k--){
  console.log(k +" become full stack java script");
  
  
}
  console.log();
  console.log();
 
//------------------------------------------------------------------------------------------------------------------------
//3. Angka Ganjil dan Genap


//soal hitung 1-100;
   var i=1;
  while(i<=100){
  console.log(i);
  i++;
               }

  console.log();
  console.log();
//---------------------------------------------------------------------------------------------------------------------------
//soal ganjil genap
var i=1;
while(i<=100){
  if(i%2===0){
    console.log(i+" genap");
    i++;
    
  }
  else{
    console.log(i+" ganjil");
    i++;
  }
}

  console.log();
  console.log();
//---------------------------------------------------------------------------------------------------------------------------
//soal ganjil genap kelipatan
for(i=1;i<=100;i+=2){
  if(i%3===0){
    console.log(i+'kelipatan 3');
  }
  }
  
  console.log();
  console.log();
  
for(i=1;i<=100;i+=5){
  if(i%6===0){
    console.log(i+"kelipatan 6");
}
}

  console.log();
  console.log();

for(i=1;i<=100;i+=9){
  if(i%10===0){
  console.log(i+"kelipatan 10");
}
}
}

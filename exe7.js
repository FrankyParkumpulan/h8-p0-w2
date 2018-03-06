//1. Menyusun Barisan Bintang


for(var i=0;i<5;i++){
  var baris="";
  for(var j=0;j<1;j++){
    baris+='*';
  }
   console.log(baris);
   
}
console.log("\n");


-------------------------------------------------------------------------------------------------------------


//2. Menyusun Barisan Bintang Dengan Nested Looping


for(var i=0;i<5;i++){
  var baris="";
  for(var j=0;j<5;j++){
    baris+='*';
  }
  console.log(baris);
}

console.log("\n");


-----------------------------------------------------------------------------------------------------------




//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var baris="";
var i=0;
 while(i<5){
   i++;
   var j=0;
   while(j<=i){
     
     baris+='*';
     j++;
     
   }
   baris+= '\n';
 }
 console.log(baris);


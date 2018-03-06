function xo(str){

  
  var x = ""
  var y = ""

  for(i = 0; i<str.length;i++){
    if(str[i]=="x"){
      x = x + "x" 
    } else{
       y = y + "y"
    }
   }
   return x.length == y.length
 }

 console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

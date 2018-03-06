unction balikKata(kata) {
   var belakang = kata[kata.length - 1];
   if (kata.length == 1 ){
     return kata;
   } else {
     return belakang + balikKata(kata.slice(0,kata.length -1 ));
   }
 }
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

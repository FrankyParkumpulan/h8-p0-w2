//Tugas 1
function shoutOut(){
  
 return 'halo function!' }
 console.log(shoutOut());

---------------------------------------------------------------------------------------------------------------------------------------------


//Tugas 2
function calculateMultiply() {
  var num1=5;
  var num2=6;
  return num1*num2;
}

var Hasilperkalian = calculateMultiply();
console.log(Hasilperkalian);


---------------------------------------------------------------------------------------------------------------------------------------------
//Tugas 3
function processSentence(){
  return 'nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby
  
}



var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence)

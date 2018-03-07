function balikString(word){
  
  var katabalik = '';
  
  for (var i = word.length -1 ; i >= 0 ; i --){
    
    katabalik += word[i]
  }
  
  return katabalik
}

console.log(balikString("Hello World"))


console.log('\n');
function changeMe(arr) {
  // console.log(arr[0][1]);
  var no = 0;
  var fullName = '';
  for(var i=0; i < arr.length; i++){
    no++;
    fullName = arr[i][0] + ' ' + arr[i][1];
    var objPerson = {};
    objPerson.firstName = arr[i][0];
    objPerson.lastName = arr[i][1];
    objPerson.gender = arr[i][2];
    if(arr[i][3] === undefined){
      objPerson.age = 'Invalid Birth Year';
    } else {
      objPerson.age = 2018 - arr[i][3];
    }
    console.log(no + '.' + fullName);
    console.log(objPerson);
  }
}

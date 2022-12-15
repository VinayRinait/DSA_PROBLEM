function checkForSymmetry(n, matrix) {
    var x = true;
  var y = true;
  for(var i = 0 ; i < Math.floor(n/2); i++){
  
  var c = ""
  var d = ""
  for(var j =0 ; j<n ;j++){
  c+=matrix[i][j];
  d+=matrix[n-1-i][j]
  }
  if(c!==d){
  x = false
  break;
  }
  }
  //console.log(c,d)
  
  for(var i = 0 ; i<Math.floor(n/2); i++){
  var e = ""
  var f = ""
  for(var j=0 ; j<n ; j++){
  e+=matrix[j][i]
  f+=matrix[j][n-1-i]
  }
  if(e!==f){
  y = false;
  break;
  }
  }
  
  
  if(x==true && y == true){
  console.log("BOTH")
  }
  else if(x==false && y ==false){
  console.log("NO")
  }
  else if(x==false && y==true){
  console.log("VERTICAL")
  }
  else{
  console.log("HORIZONTAL")
  }
  }
  
  
  
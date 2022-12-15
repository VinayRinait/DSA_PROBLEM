//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var query = +input[0]
   var line = 1
   for(let i=0;i<query;i++){
       let x = input[line].trim().split(" ")
       let type = x[0]
       let n = null 
       if(type === 'E'){
           a = +x[1]
           b = +x[2]
       }else{
           a = null
           b = null
       }
       line++
       celeb(type,a,b)
   }
}

var team1 = []
var team2 = []
var team3 = []
var team4 = []
var main = []
function celeb(type,a,b){
   // console.log(type,a,b)
   if(type === 'E'){
       let flag = true
       for(let i=0;i<main.length;i++){
           if(main[i] === a){
               flag = false
           }
       }
       if(flag){
           main.push(a)
       }
   
       
       if(a === 1){
           team1.push(b)
       }
       else if(a === 2){
           team2.push(b)
       }
       else if(a === 3){
           team3.push(b)
       }
       else{
           team4.push(b)
       }
   }
   
   else{
       let front = main[0]
       
       if(front === 1 ){
           console.log(1,team1[0])
           team1.shift()
           if(team1.length === 0){
               main.shift()
           }
       }
       else if(front === 2){
           console.log(2,team2[0])
           team2.shift()
           if(team2.length === 0){
               main.shift()
           }
       }
       else if(front === 3){
           console.log(3,team3[0])
           team3.shift()
           if(team3.length === 0){
               main.shift()
           }
       }
       else{
           console.log(4,team4[0])
           team4.shift()
           if(team4.length === 0){
               main.shift()
           }
       }
   }
   
   
   // console.log('team1',team1)
   // console.log('team2',team2)
   // console.log('team3',team3)
   // console.log('team4',team4)
   // console.log('main',main)
}




if (process.env.USER === "sangam") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
   
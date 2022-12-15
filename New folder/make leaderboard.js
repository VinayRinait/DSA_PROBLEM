//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var n = +input[0]
   var name = []
   var marks = []
   for(var i=1;i<=n;i++){
       var stu = input[i].trim().split(" ")
       name.push(stu[0])
       marks.push(Number(stu[1]))
   }
   leaderboard(n,marks,name)
}


function leaderboard(n,marks,name){
   sortByName(n,marks,name)
   sortByMarks(n,marks,name)
   table(n,marks,name)
}

function table(n,marks,name){
   var i=0
   while(i<n){
       var initial = marks[i]
       var j = i
       while(j<n){
           if(initial===marks[j]){
               console.log(i+1,name[j])
               j++
           }
           else{
               break;
           }
       }
       i = j
   }
}

function sortByName(N,marks,name){
   for(var i=0;i<N;i++){
       for(var j=0;j<N-i-1;j++){
           if(name[j]>name[j+1]){
               swap(name,j)
               swap(marks,j)
           }
       }
   }
   return {marks,name}
}

function sortByMarks(N,marks,name){
   for(var i=0;i<N;i++){
       for(var j=0;j<N-i-1;j++){
           if(marks[j]<marks[j+1]){
               swap(marks,j)
               swap(name,j)
           }
       }
   }
   return {marks,name}
}


function swap(arr,j){
   var temp = arr[j]
   arr[j] = arr[j+1]
   arr[j+1] = temp
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
   
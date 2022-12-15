//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var s=+input[0]
    var arrive=input[1].trim().split(" ")
    var depart=input[2].trim().split(" ")
    arrivefinal=[]
    var departfinal=[]
    
   for(var i=0; i<s; i++)
   {
       var arr=arrive[i].split(":")
       var arr2=depart[i].split(":")
       arrivefinal.push(Number(arr.join("")))
       departfinal.push(Number(arr2.join("")))
   }
   fun(arrivefinal,departfinal,s)
}
function fun(arrivefinal,departfinal,s){
    var c=0;
    var ovrlap=0;
    var i=0;
    var j=0;
    while(i<s&&j<s)
    {
        if(arrivefinal[i]<departfinal[j])
        {
            c++
            if(c>ovrlap)
            {
                ovrlap=c
            }
            i++
        }
        else
        {
            c--
            j++
        }
    }
    console.log(ovrlap)
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
   
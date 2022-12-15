function runProgram(input) {
    var inp=input.split("\n")
    var test=Number(inp[0])
    let line=1
    for(var i=0;i<test;i++){
        var n=Number(inp[line++])
        var str=inp[line++].trim().split("")
      //  console.log(n-1,str[1])
        var res=encrypt(0,n-1,str)
        console.log(res)
    }
 
    function encrypt(l,r,str){
        if(l==r){
            return str[l]
        }
        else{
           // console.log("hi")
            if(l<r){
                var mid=Math.floor((l+r)/2)
                //console.log(str[mid])
                return str[mid]+encrypt(l,mid-1,str)+encrypt(mid+1,r,str)
            }
            else
                return ""
        }
    }
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
 
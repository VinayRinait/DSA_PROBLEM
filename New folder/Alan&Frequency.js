function runProgram(input) {
    input = input.trim().split("\n");
    var el=+input[0].trim()
    var string=input[1].trim().split("")
    var str=string.sort()
  //  console.log(str)
    var obj={}
    for(var i=0;i<el;i++)
    {
        var data=str[i]
        if(obj[data]===undefined)
        {
            obj[data]=1
        }
        else
        {
            obj[data]++
        }
    }
    console.log(obj)
    for(key in obj)
    {
        console.log(`${key}-${obj[key]}`)
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
 
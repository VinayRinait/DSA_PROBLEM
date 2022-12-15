//Enter code here
function runProgram(input) {
    var sam = input.split("\n");
    var tc = Number(sam[0]);
    for (var i=1; i<=tc; i++) 
    {
        var n= Number(sam[i]);
        if (isitpowerof3(n))
        
            console.log("YES");
        else
            console.log("NO");

    }}
function isitpowerof3(n) {
    if (n==0)
    
        return false;
        
    while (n%3 == 0) 
    {
        n=n/3;
    }
    return n==1;
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
  
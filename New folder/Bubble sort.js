function runProgram(input){
    input = input.trim().split("\n")
    let n = +input[0]
    let a = input[1].trim().split(" ").map(Number)
    BubbleSort(n,a)
}
function BubbleSort(n,a){
    let count = 0
     for (var i = 0; i < n; i++) {   
        for (var j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
               count++
               let temp = a[j]
               a[j] = a[j+1]
               a[j+1]=temp
                
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[n-1]}`)
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
 
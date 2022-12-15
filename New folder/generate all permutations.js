//Enter code here
let ans = []
function runProgram(input){
    input = input.split("\n")
    
    let n = +input[0]
    let arr = input[1].split(" ").map(Number)

    gp(arr, 0)
    ans.sort()
    
    for(let x of ans){
        console.log(x.join(" "))
    }
}


function gp(arr, index){
   
    if(index === arr.length) {
        ans.push( [...arr])
        return
    } 
 
    for(let i=index; i<arr.length; i++) {
        
        swap(arr, index, i)
        gp(arr, index + 1)
        swap(arr, index, i)

    }
}

function swap(arr, index, i) {
    let temp = arr[index]
    arr[index] = arr[i]
    arr[i] = temp
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
 
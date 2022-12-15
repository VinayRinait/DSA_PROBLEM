//Enter code here
let result = []
function runProgram(input) {
    input = input.split("\n")
    
    let n = +input[0]
    let data = []
    for(let i=1; i<=n; i++){
        data.push(i)
    }
    // console.log(data)
    let ans = []
    gs(data, ans, 0)
    // console.log(result.length)
    for(let x of result) {
        console.log(x.join(" "))
    }
}


function gs(nums, ans, index) {
    if(ans.length === 0){
        result.push([])
    }
    if(ans.length > 0){
        result.push([...ans])
    }
    if(index === nums.length){
        return
    }
    
    for(let i=index; i<nums.length; i++){
        ans.push(nums[i])
        // console.log("nums",ans)
        gs(nums, ans, i + 1)
        ans.pop()

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
 
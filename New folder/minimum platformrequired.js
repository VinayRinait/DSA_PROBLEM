//Enter code here
function runProgram(input){
    input = input.trim().split('\n')
    var  n = +input[0];
    var arr = input[1].trim().split(' ')
    var dep = input[2].trim().split(' ')
    trains(arr, dep, n)
    }
    function trains(arr, dep, n){
    var  result = 1;
    var count = 1;
    arr  = arr.map((elem)=>Number(elem.split(':').join('.')))
    dep  = dep.map((elem)=>Number(elem.split(':').join('.')))
    
    
    for(let i=0; i<n; i++){
    count = 1
    for(let j=i+1; j<n; j++){
    if((arr[i] >= arr[j] && arr[i] <= dep[j]) ||
    (arr[j] >= arr[i] && arr[j] <= dep[i])){
    count++;
    }
    }
    result = Math.max(result, count)
    }
    console.log(result)
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
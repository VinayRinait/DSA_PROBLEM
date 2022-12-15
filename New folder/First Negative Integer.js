function negativeNumb(N, K, arr){

    // console.log(N, K, arr);
    let low = 0;
    let high = K;
    let ans = []

   while(high <= N){
        let c = 0;
       for(let i = low; i < high; i++){

            if(arr[i] < 0){
                ans.push(arr[i]);
                c++;
                break;
            }

       }

       if(c == 0){
           ans.push(0)
       }

       low++;
       high++;
   }

    console.log(ans.join(" "));
}


function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];

   let line = 1;

   for(let i = 0; i < testCases; i++){

    let [N, K] = input[line].trim().split(" ").map(Number);
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    negativeNumb(N, K, arr)
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
   
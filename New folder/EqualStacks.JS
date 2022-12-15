// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    //console.log(input)
    const [one, two, three] = input[0]
   // let x = (Math.min(...input[0])) - 1
    input.shift()
    const stack1 = []
    const stack2 = []
    const stack3 = []
   // let line = 1;
    let sum1 = 0;
    let sum2 = 0
    let sum3 = 0
    for (let i = one - 1; i >= 0; i--) {
        let x = input[0]
        sum1 += x[i]
        stack1.push(x[i])
    }
    input.shift()
    for (let i = two - 1; i >= 0; i--) {
        let x = input[0]
        sum2 += x[i]
        stack2.push(x[i])
    }
    input.shift()
    for (let i = three - 1; i >= 0; i--) {
        let x = input[0]
        sum3 += x[i]
        stack3.push(x[i])
    }
    ///console.log(sum1,sum2,sum3)
    //console.log(stack1,stack2,stack3)
    var count=0;
    let maxCount=stack3.length+stack1.length+stack2.length
    while (count<=maxCount) {
        //   console.log(x)
        if (sum1 == sum2 && sum1 == sum3) {
            console.log(sum1)
            break;
        }
        else {
    
          var  out = Math.max(sum1, sum2, sum3)
           // console.log(out)
            if (out == sum1) {
                sum1 = sum1 - stack1[stack1.length - 1]
                stack1.pop()
              //  console.log(stack1,stack2,stack3)
            }
            else if (out == sum2) {
                sum2 = sum2 - stack2[stack2.length - 1]
                stack2.pop()
           ///   console.log(stack1,stack2,stack3)
            }
           else if (out == sum3) {
                sum3 = sum3 - stack3[stack3.length - 1]
                stack3.pop()
            //  console.log(stack1,stack2,stack3)
            }
              //    console.log(sum1,sum2,sum3)
        }
        count++
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
   
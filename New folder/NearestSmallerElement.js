function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)

    let test = input[0]
    let line = 0
    input.shift()
    for (let i = 0; i < test; i++) {
        let el = input[line++]
        let arr = input[line++]
        let x = right(el, arr)
        let y = left(el, arr)
        small(x, y, arr)
        // console.log(x,y)
    }

}
function right(el, arr) {

    const stack = [];
    let str = "";
    var x = "";

    //console.log(el,arr)
    for (let i = el - 1; i >= 0; i--) {
        if (stack.length === 0) {
            str += "-1" + " "
            x += "-1" + " "
            stack.push([i, arr[i]])
            continue
        }
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j][1] < arr[i]) {
                str += stack[j][0] + " "
                x += stack[j][1] + " "
                break;
            }
            stack.pop()
        }
        if (stack.length === 0) {
            str += "-1" + " "
            x += "-1" + " "
        }
        stack.push([i, arr[i]])
    }
    // console.log(str,x)
    str = str.trim().split(" ").map(Number)
    x = x.trim().split(" ").map(Number)
    //console.log(str,x)
    let reverse = ""
    let x2 = ""
    for (let i = str.length - 1; i >= 0; i--) {

        reverse += str[i] + " "
        x2 += x[i] + " "
    }
    //console.log(reverse,x2)
    return reverse
}
function left(el, arr) {
    const stack = []
    let str = "";
    var x = ""
    //console.log(el,arr)
    for (let i = 0; i < el; i++) {
        if (stack.length === 0) {
            str += "-1" + " "
            x += "-1" + " "
            stack.push([i, arr[i]])
            continue
        }
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j][1] < arr[i]) {
                str += stack[j][0] + " "
                x += stack[j][1] + " "
                break;
            }
            stack.pop()
        }
        if (stack.length === 0) {
            str += "-1" + " "
            x += "-1" + " "
        }
        stack.push([i, arr[i]])
    }
    // console.log(x)
    return str
}
function small(x, y, arr) {
    let left = x.trim().split(" ").map(Number)
    let right = y.trim().split(" ").map(Number)
    let str = ""
    for (let i = 0; i < left.length; i++) {
        if (left[i] == -1 && right[i] == -1) {
            str += "-1" + " "
        }
        else if (left[i] == -1) {
            str += arr[right[i]] + " "
        }
        else if (right[i] == -1) {
            str += arr[left[i]] + " "
        }
        else if(i-right[i]<left[i]-i)
        {
            str += arr[right[i]] + " "
        }
        else if(i-right[i]==left[i]-i)
        {
            str += arr[right[i]] + " "
        }
        else
        {
            str += arr[left[i]] + " "
        }

    }
    console.log(str)
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
   
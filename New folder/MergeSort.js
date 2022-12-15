function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    let high = input[0] - 1
    let low = 0;
    let arr = input[1]
    //  console.log(input)
    console.log(merge_Sort(arr, low, high).join(" "))
}
function merge_Sort(arr, low, high) {
    if (low < high) {
        var mid = low + Math.floor((high - low) / 2)
        merge_Sort(arr, low, mid)
        merge_Sort(arr, mid + 1, high)
        mergeArr(arr, low, mid, high)
    }
    return arr
}
function mergeArr(arr, low, mid, high) {
    // console.log(mid,low,high)
    let n1 = mid - low + 1
    let n2 = high - mid;
    //console.log(n1,n2)
    var Left = new Array(n1);
    var Right = new Array(n2)
    for (let i = 0; i < n1; i++) {
        //  Left.push(arr[i+low])
        Left[i] = arr[low+i]
    }
    for (let j = 0; j < n2; j++) {
        // Right.push(arr[j+mid+1])
        Right[j] = arr[mid + 1+j]
    }
   // console.log(Left, Right)
    var x = 0;
    var y = 0;
    var k = low;
    // console.log(arr)
    while (x < n1 && y < n2) {
        if (Left[x] <= Right[y]) {
            arr[k] = Left[x]
            x++
        }
        else {
            arr[k] = Right[y]
            y++
        }
        k++
    }
    //console.log(x,y,k)
    while (x < n1) {
        arr[k] = Left[x]
        x++;
        k++
    }

    while (y < n2) {
        arr[k] = Right[y]
       
        y++;
        k++
    }
    //  console.log(arr)
    //     return Arr

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
   
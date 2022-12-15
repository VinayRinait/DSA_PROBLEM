function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
        let row = input[0]
        //console.log(row)
        input.shift()
        var result = "";
        let left = 0;
        let top = 0;
        let right = row - 1;
        let bottom = row - 1;
        let direction = "right"

        while (left <= right && top <= bottom) {
            if (direction === "right") {
                for (let j = left; j <= right; j++) {
                    result +=input[top][j]+" "
                }
                top++;
                direction = "down"
            }
            else if (direction === "down") {
                for (let j = top; j <= bottom; j++) {
                    result +=input[j][right]+" "
                }
                right--;
                direction = "left"
            }
            else if (direction === "left") {
                for (let j = right; j >= left; j--) {
                    result +=input[bottom][j]+" "
                }
                bottom--;
                direction = "up"
            }
            else if (direction === "up") {
                for (let j = bottom; j >= top; j--) {
                    result +=input[j][left]+" "
                }
                left++;
                direction = "right"
            }
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
   
   
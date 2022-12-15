function runProgram(input) {
    // Write code here  Time Complexity =
    var input = input.trim().split("\n")
    let test = input[0].trim().split(" ").map(Number)

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)

    let count = 1
    for (let j = 0; j < test[0]; j++) {
        let start = input[count][0]
        let end = input[count++][1]
        var list = [];
        for (var i = 0; i < end; i++) {
            list.push({ 'w': input[count][0], 'v': input[count][1], "r": input[count][1] / input[count][0] });
            count++
        }
        list.sort((a, b) => (b.r - a.r))
        // console.log(list, start)
        var weight = 0
        var ans = 0
        for (let k = 0; k < list.length; k++) {
            weight += list[k].w
            if (start >= weight) {
                ans += list[k].v
            } else if (start - (weight - list[k].w) >= list[k + 1].w) {
                ans += list[k + 1].v
            }
            else {
                break
            }
        }
        console.log(ans)
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
 
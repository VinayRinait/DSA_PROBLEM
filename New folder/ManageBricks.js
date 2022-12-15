function runProgram(input) {
  input = input.trim().split(/[\r+\n]+/)
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  let boxes = input[1]
  let n = input[0]
  console.log(maxLevel(boxes, n))
}
function maxLevel(boxes, n) {
  // Sort objects in increasing order
  // of widths
  boxes.sort((a,b)=>a-b)
  //console.log(boxes)

  let ans = 1 // Initialize result

  // Total width of previous level
  // and total number of objects in
  // previous level
  let prev_width = boxes[0]
  let prev_count = 1

  // Number of object in current
  // level.
  let curr_count = 0

  // Width of current level.
  let curr_width = 0
  for (let i = 1; i < n; i++) {
    // Picking the object. So
    // increase current width
    // and number of object.
    curr_width += boxes[i]
    curr_count += 1

    // If current width and
    // number of object
    // are greater than previous.
    if (curr_width > prev_width && curr_count > prev_count) {
      // Update previous width,
      // number of object on
      // previous level.
      prev_width = curr_width
      prev_count = curr_count

      // Reset width of current
      // level, number of object
      // on current level.
      curr_count = 0
      curr_width = 0
      // Increment number of
      // level.
      ans++
    }
  }

  return ans
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
 
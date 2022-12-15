const partition = (array, l, h) => {
    let i = l,j = h,pivot = array[l];
    while(i < j){
        while(array[i] >= pivot)i++;
        while (array[j] < pivot) j--;
        if(i < j)[array[i], array[j]] = [array[j], array[i]]
    }
    [array[j], array[l]] = [array[l], array[j]]
    return j;
}
const quick = (array,l,h)=>{
    if(l < h){
        let pivot = partition(array, l, h)
        quick(array,l,pivot-1)
        quick(array,pivot+1,h)
    }
}

const runProgram = (input)=> {
   input = input.trim().split("\n");
   let n = +input[0],array = input[1].trim().split(' ').map(Number);
   quick(array,0,n-1),console.log(array.join(' '))
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
   
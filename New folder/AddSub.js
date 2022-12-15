function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    let test=input[0]
    let line=1
    var inc = 3
    var dec = 5
    for(let i=0;i<test;i++)
    {
        const [el,target]=input[line++]
        let arr=input[line++]
        let out=[]
        for(let j=0;j<el;j++)
        {
            let find=[]
            for(let k=0;k<el;k++)
            {
                if(arr[j]>=arr[k])
                {
                    find.push((arr[j]-arr[k])*inc)
                }else
                {
                    find.push((arr[k]-arr[j])*dec)
                }
            }
            find.sort((a,b)=>a-b)
            let sum=0
            for (var k = 0; k < target; k++) {
                sum += find[k]
              }
              out.push(sum)
        }
        console.log(Math.min(...out))
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
 
 
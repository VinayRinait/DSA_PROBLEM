//Enter code here
function runProgram(input){
    input=input.trim().split('\n')
    var test=+input[0];
    var line=1;
    for(var i=0; i<test; i++)
    {
        
        var l=+input[line++];
        var sam=input[line++];
        var sam1= input[line++];
        
        out(sam,sam1)
    }
}

function out(sam,sam1){
    var obj1 = {};
    var obj2 = {};
    
    var bag1 = [];
    var bag2 = [];
    
    for(var i=0; i<sam.length; i++)
    {
        if(obj1[sam[i]]==undefined)
        {
            obj1[sam[i]]=1;
        }
        else
        {
            obj1[sam[i]]=obj1[sam[i]]+1;
        }
    }
    for(var j=0; j<sam1.length; j++)
    {
        if(obj2[sam1[j]]==undefined)
        {
            obj2[sam1[j]]=1;
        }
        else
        {
            obj2[sam1[j]] = obj2[sam1[j]] + 1;
        }
    }

    for(var k in obj1)
    {
        bag1.push(obj1[k])
    }
    for(var l in obj2)
    {
        bag2.push(obj2[l])
    }
    
    var a1 =bag1.sort().join('')
    var a2 =bag2.sort().join('')
    if(a1===a2)
    {
        console.log('Equivalent')
    }
    
    else
    {
      console.log('Not Equivalent')
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
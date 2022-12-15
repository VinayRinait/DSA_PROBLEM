function runProgram(input)
{
  input=input.trim();
  input=Number(input)
  var hr= input/60;
  hr=Math.floor(hr);
  var min=input%60;
  if(hr==1)
  {
      if(min==0)
      {
          console.log(hr+"hr 00mins")
      }
      else
      {
        console.log(hr+"hr "+ min+"mins")
      }
  }
  else
  {
    if(min==0)
    {
        console.log(hr+"hrs 00mins")
    }
    else
    {
      console.log(hr+"hrs "+ min+"mins")
    }

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
 
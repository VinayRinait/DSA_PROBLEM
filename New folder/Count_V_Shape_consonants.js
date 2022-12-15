function runProgram(input)
{
  input=input.trim();
  input = input.split(/[\r\n]+/);
  var a = input[0];
  
for(var k=1;k<=a;k++)
{
    var index=1;
    var data=input[index].split(" ").map(Number);
    var loop=data[0]
    console.log(loop)
    var num=data[1]
    var count=0;
    
    if(loop%2==1)
    {
        for(var i=0;i<loop;i++)
         {
          var check=input[i].split(" ")
          for(var j=0;j<num;j++)
          {
              if(j%2==0)
              {
                 if(check[num-1]!="a"&&check[num-1]!="e"&&check[num-1]!="i"&&check[num-1]!="o"&&check[num-1]!="u")
                 {
                     count++
                     break;
                 }
              }
              else 
              {
                  if(check[0]!="a"&&check[0]!="e"&&check[0]!="i"&&check[0]!="o"&&check[0]!="u")
                  {
                      count++
                      break;
                  }
              }
          }
          console.log(count)
         } // console.log(count)
    }
    else
    {
            console.log("-1")
    }
    
    index=index+loop+1
    
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
   

// 5
// 1 1
// f
// 2 5
// d y t h w
// c j f s u
// 6 8
// b a g m v m q c
// b h w s c k f d
// w x i s i t p f
// f k g c n j t u
// w g n h n j s b
// u n o i q q d s
// 9 7
// e l q a h g d
// m b b u b u v
// x g q k y j n
// e v m m q f x
// c n r y h m a
// j t c s e n d
// l z m i t w m
// t g c j y o y
// g n c u g i v
// 8 3
// u n w
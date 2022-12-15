//Enter code here
function runProgram(input){
    input=input.trim().split('\n') 
    
    var sam1=input[0]
    var sam2=input[1]
    
    console.log(MyAnagram(sam1,sam2))
}

function MyAnagram(sam1,sam2){
    
    var co1 = Array.from({length: 26}, (_, i) => 0);
    var co2 = Array.from({length: 26}, (_, i) => 0);
 
  
    for (i=0; i<sam1.length ; i++)
    
        co1[sam1.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
 
  
    for (var i=0; i<sam2.length; i++)
        co2[str2.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
 
 
    var res=0;
    for(var i=0; i<26; i++)
    
        res += Math.abs(co1[i] -  co2[i]);
                          
    return res;
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
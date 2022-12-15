let n = 4;
let i = 0
while(0 <= n){
  let x = n % 2;
  n = Math.floor(n/2)
  if(n == 0){
      console.log("yes");
      return
  }
  if(x == 1){
      console.log("no");
      return
  }
}
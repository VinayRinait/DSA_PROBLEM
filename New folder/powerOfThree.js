function findit(){
    let n = 28;
let i = 0;
while(i< n){
let x = Math.pow(3,i)
if(x == n)return true;
if(x > n)return false;
i++
}
}

console.log(findit());
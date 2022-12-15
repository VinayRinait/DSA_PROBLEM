const findit = (n)=>{
    while(n >= 1){
 console.log(Math.floor(n%2));
 n = n/2
    }
}

findit(15)

let str = ''
const res = (n)=>{
    if(n <=1) {str += 1; return}
    else{
        res(n/2)
        str += Math.floor(n%2)
        return;
    }
}
res(128)
console.log(str);
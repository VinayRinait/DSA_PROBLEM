 let n = 38;
 let x = n.toString().split('')
 while(n > 9){
    let res = n % 10;
    n = Math.floor(n/10)
    n += res
 }
 console.log(n);
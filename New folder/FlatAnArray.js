const arr = [11, [22, 33, [4, [5, 6, 7, [7]]]], [44, 55], [66, 77], 88, 99];
let res = [];
function yess(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) yess(arr[i]);
    else res.push(arr[i]);
  }
}
yess(arr);
console.log(res);
let aa = [1,2]
aa.customProperty = true;
console.log(aa);
for(let i = 0; i < aa.length; i++)console.log(aa[i]);

let arr2  = [1,2,15,-7,300 ]
console.log(arr2.sort());

function fun(a){
  if(a.length <= 1)return a;
  return fun(a.slice(1)) + a.charAt(0)
}

console.log(fun("dharm"));

const f = n => n <= 1 ? 1 : f(n-1)
console.log(f(4));

const a =  ["Hello","World"]

a.forEach((word,i)=>{
  word[i] = word.split("").reverse().join("").toLowerCase()
})
console.log(a);
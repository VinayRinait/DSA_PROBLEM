let s = "Hello,          my name is John"

let count = s.length && s[0] !== ' '  ? 1 : 0;;
for(let i = 1;i< s.length;i++){
 if(s[i] !== ' ' && s[i-1] === ' ')count++;
}
console.log(count);
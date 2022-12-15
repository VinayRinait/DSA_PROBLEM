let s = "aabbz";
function findit(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == undefined) obj[s[i]] = 1;
    else obj[s[i]]++;
  }
let a = Object.keys(obj)
let b = Object.values(obj)
let flag = -1;
for(let i = 0;i< b.length;i++){
if(b[i] == 1)flag = a[i]
}
if(flag != -1){
    for(let i = 0;i< s.length;i++){
        if(s[i] == flag){
            flag = i;
            break
        }
    }
}
return flag
}
console.log(findit(s));

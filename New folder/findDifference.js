let s = 'zabcd', t = 'zabacd'
let obj = {}
for(let i = 0;i < s.length;i++){
    if(obj[s[i]] == undefined)obj[s[i]] = 1;
    else obj[s[i]]++
}

for(let i = 0;i < t.length;i++){
    if(obj[t[i]] == undefined)obj[t[i]] = 1;
    else obj[t[i]]++
}

for(key in obj){
    if(obj[key] % 2 != 0)return key
}
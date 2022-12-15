let t = 'asddsfdsfdfsdfsdfsdfsdfsdfsdfsdfsdfsdbcd'
let s = 'abc'
let j = 0;
for(let i = 0;i< t.length&&j < s.length;i++){
    if(s[j] === t[i]){
        console.log(s[j],t[i]);
        j++
    }
}
return j >= s.length

function findit(s) {
  let obj = {},
    obj2 = {};
  for (let i = 0; i < s.length; i++) {
    let res = "";
    for (let j = i; j < s.length; j++) {
      res += s[j];
      if (obj[res] == undefined) obj[res] = 1;
      else obj[res]++;
    }
  }

  let newOne = Object.keys(obj)
  for (let i = 0; i < newOne.length; i++) {
    let res = newOne[i];
    let final = "";
    for (let j = res.length - 1; j >= 0; j--) {
      final += res[j];
    }
    if (obj2[final] == undefined) obj2[final] = 1;
    else obj2[final]++;
  }

  let x = Object.keys(obj2)
  let final = []
  for(let i = 0;i< x.length;i++){
      for(let j = 0;j< newOne.length;j++){
          if(newOne[j] == x[i])final.push(newOne[j])
      }
  }
let max = 0;
let res;
for(let i = 0;i< final.length;i++){
    max = Math.max(max,final[i].length)
}
for(let i = 0;i< final.length; i++){
if(final[i].length == max)res = final[i]
}
return res;
}

findit("babad");

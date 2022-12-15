const generatePermutatuion = (res,curr,array)=>{
    if(curr === array.length-1)!obj[array.join("")] ? obj[array.join("")] = 1 : obj[array.join("")]++;
  for(let i = curr;i< array.length; i++){
      let temp = array[i];
      array[i] = array[curr]
      array[curr] = temp;
      generatePermutatuion(res,i+1,array)
      let temp2 = array[i];
      array[i] = array[curr]
      array[curr] = temp2;
  }
}

let n = 3;
let array = []
for(let i = 0;i< n; i++){
    array.push("(")
    array.push(")")
}
let obj = {};
generatePermutatuion([],0,array)


console.log(obj);
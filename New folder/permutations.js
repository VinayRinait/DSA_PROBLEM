let arr = [1,1,2]

function findit(arr,curr,flag){
    if(curr == arr.length){
        if(flag[arr.join(' ')] == undefined)flag[arr.join(' ')] = 1;
        else flag[arr.join(' ')]++
    }
    for(let i = curr;i< arr.length;i++){
        swap(arr,i,curr)
        findit(arr,curr+1,flag)
        swap(arr,i,curr)
    }
}


function swap(array,i,j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
let flag = {}
findit(arr,0,flag)
let res = Object.keys(flag)
let ans = []

for(let i = 0;i< res.length;i++){
    ans.push(res[i].split(' ').map(Number))
}
console.log(ans);
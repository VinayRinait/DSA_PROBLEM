let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
function findit(nums, target) {
let a = first(nums,target)
let b = last(nums,target)
let res = []
res[0] = a;
res[1]= b;
return res;
}
console.log(findit(nums, target));



function first(nums,target){
    let i = 0, j = nums.length-1;
    let res = -1;
    while(i <= j){
        let mid = Math.floor(i + (j-i)/2)
        if(nums[mid] == target){
            res = mid;
            j = mid-1;
        }
        if(nums[mid] > target)j= mid-1;
        if(nums[mid] < target)i = mid+1;
    }
    return res
}

function last(nums,target){
    let i = 0, j = nums.length-1;
    let res = -1;
    while(i <= j){
        let mid = Math.floor(i + (j-i)/2)
        if(nums[mid] == target){
            res = mid;
            i = mid+1;
        }
        if(nums[mid] > target)j= mid-1;
        if(nums[mid] < target)i = mid+1;
    }
    return res
}
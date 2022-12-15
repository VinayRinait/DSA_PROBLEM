var minOperations = function(nums) {
    let count = 0;
    for(let i = 1;i< nums.length;i++){
        if(nums[i] <= nums[i-1]){
            let x = nums[i-1] +1 - nums[i];
            count+=x
            nums[i] = nums[i-1]+ 1;
        }
    }
    return count
};



minOperations([1,1,1])
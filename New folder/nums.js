let nums = [1,0,1,1];
function findit(nums) {
  let i = 0,
    j = nums.length - 1,
    k = 1;
  while (i < j) {
    if (nums[i] == nums[j] && Math.abs(i - j) <= k) return true;
    if (nums[i] == nums[j] && Math.abs(i - j) > k) j--;
    if(nums[i] < nums[j])j--
    else i++;
  }
  return false;
}
console.log(findit(nums));

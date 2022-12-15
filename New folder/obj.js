var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) obj[nums[i]] = 1;
    else obj[nums[i]]++;
  }
  let count = 0;
  let a = Object.values(obj);
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 1) count++;
  }
   return count != 0
};

console.log(containsDuplicate([1, 2, 3, 1]));

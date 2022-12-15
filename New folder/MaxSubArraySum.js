function maxSubarraySum(arr,num){
    // add whatever parameters you deem necessary - good luck!
  //  console.log(arr,num)
    let maxsum=0;
    let tempsum=0;
    for(let i=0;i<num;i++)
    {
       tempsum+=arr[i]
    }
    //console.log(tempsum)
    maxsum=tempsum
    for(let i=num;i<arr.length;i++)
    {
        tempsum=tempsum-arr[i-num]+arr[i]
       // console.log(tempsum)
        maxsum=Math.max(tempsum,maxsum)
    }
    console.log(maxsum)
  }

  maxSubarraySum([1,4,2,10,23,3,1,0,20],4)

  //maxSubArray Solution
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
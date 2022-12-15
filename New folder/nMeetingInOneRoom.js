
//   N = 6
// start[] = {1,3,0,5,8,5}
// end[] =  {2,4,6,7,9,9}
// Output: 
// 4/
let arr1 = [1,3,0,5,8,5]
let arr2 = [2,4,6,7,9,9]
arr1.sort((a,b)=>a-b)
arr2.sort((a,b)=>a-b)

function find(arr1,arr2){
    let ans = 0;
let i = 1,j= 0,count = 0;
while( i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[i]){
        count++,i++;
    }
    else{
        j++,count--
    }
  ans =  Math.max(ans,count)
}
console.log(ans);
}
find(arr1,arr2)



// * count = 0
// * Sort the array arrival[]
// * Sort the array departure[]
// * int i = 1
// * int j = 0
// * while(i < arrival.size and j < departure.size){
//          if (arrival[i] <= departure[j]){
//                 count++;
//                 i++;
//             }
//         else{
//             j++;
//             count--;   
//         }
//         * if (count > k) return false;
//     }
// * return true;
let arr = [1,2,3,4,5,6,7]
let a = Math.floor(arr.length/2)
let b = Math.ceil(arr.length/2)
console.log((a+b)/2);








function findit(nums1,nums2){
    let res = [],i = 0,j = 0;

    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j])res.push(nums1[i++])
        else res.push(nums2[j++])
    }
    while(i < nums1.length)res.push(nums1[i++])
    while(j < nums2.length)res.push(nums2[j++])
   let a = Math.floor(res.length/2)
   let x = (res[a] + res[a-1])/2
   return x;
}



let x = findit([1,2],[3,4])
console.log(x);
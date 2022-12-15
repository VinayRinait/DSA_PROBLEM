let nums1 = [4,9,5],nums2 = [9,4,9,8,4]
let obj = {},obj2 = {}
// [4,9,5]
// [9,4,9,8,4]
for(let i = 0;i< nums1.length; i++){
    if(obj[nums1[i]] == undefined)obj[nums1[i]] = 1;
}
for(let i = 0;i< nums2.length;i++){
    if(obj2[nums2[i]] == undefined)obj2[nums2[i]] = 1;
    else obj2[nums2[i]]++
}
let final = []
let key = Object.keys(obj2)
for(let i = 0;i< key.length; i++){
    if(obj[key[i]] == undefined) obj[key[i]] = 1;
    else obj[key[i]]++
}
for(key in obj){
    if(obj[key] >=2)final.push(+key)
}

return final
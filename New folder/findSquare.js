let array = [1,2,4,5,6,8,14]
let k = 25;
function Square(array,k){
    let left = 0,right = array.length-1;
    while(left <= right){
        let mid = Math.floor(left + (right-left)/2)
        if(array[mid] * array[mid] == k)return array[mid]
        if(array[mid] * array[mid] > k)right = mid-1;
        if(array[mid] * array[mid] < k)left = mid+1
    }
    return -1;
}
console.log(Square(array,k));
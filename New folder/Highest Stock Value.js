function stockValue(n,arr){
    // write code here
  
var sam=[];
var stock=0;
sam[0]=stock;

for(let i=0; i<n; i++)
{
    stock+=arr[i];
    sam.push(stock);
}
console.log(Math.max(...sam))
}

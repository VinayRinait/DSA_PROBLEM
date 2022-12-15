function applyBasicMaths(N,A){
   //write code here
   var small = null;
   for(var i=0;i<N;i++)
   {
       var sum = 0;
       for(var j=0;j<N;j++)
       {
           if(i!=j)
           {
               // console.log(A[j]);
               sum += A[j];
           }
       }
       // console.log("sum ==",sum);
       if(sum%7==0)
       {
           if(small==null || small>A[i])
           {
               small = A[i];
           }
       }
       // console.log(A.indexOf(small));
   }
   if(small==null)
   {
       console.log("-1");
   }
   else
   {
       console.log(A.indexOf(small));
   }
}

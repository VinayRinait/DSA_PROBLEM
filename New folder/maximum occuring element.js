function maximumOccuringElement(A,N){
   //write code here
   var max = 0;
   var index = 0;
   var ele = null;
   for(var i=0;i<N;i++){
       var count = 0;
       for(var j=i;j<N;j++){
           if(A[i]==A[j]){
               count++
           }
       }
       if(max<count){
           max = count;
           // index = i;
           ele = A[i];
       }
       
   }
   console.log(ele)
}
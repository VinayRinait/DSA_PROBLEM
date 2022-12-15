function goInZigZag(N, M, matrix){
   //write code here
   var bag = "";
   for(var i=0;i<N;i++)
   {
       if(i%2!=0)
       {
           for(var j=0;j<M;j++)
           {
               bag += (matrix[i][j]) + " "
           }
       }
       else
       {
           for(var j=M-1;j>=0;j--)
           {
               bag += (matrix[i][j]) + " "
           }
       }
   }
   console.log(bag);
}
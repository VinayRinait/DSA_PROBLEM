function twoArrayAndSum(n, m, matrix, s){
   //write code here
   var count = 0;
   for(var i=0;i<n;i++){
       for(var j=0;j<m;j++){
           if(j<m-2)
           {
               var sumH = matrix[i][j]+matrix[i][j+1]+matrix[i][j+2];
               // console.log("sumH ==",i,j,sumH);
               if(sumH==s){
                   count++;
               }
           }
           
           if(i<n-2)
           {
               var sumV = matrix[i][j]+matrix[i+1][j]+matrix[i+2][j];
               // console.log("sumV ==",i,j,sumV)
               if(sumV==s){
                   count++;
               }
           }
           
           if(j<m-2 && i<n-2)
           {
               var sumD1 = matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2];
               // console.log("sumD1 ==",i,j,sumD1)
               if(sumD1==s){
                   count++;
               }
           }
           
           if(j<m-2 && i>=2)
           {
               var sumD2 = matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2];
               // console.log("sumD2 ==",i,j,sumD2)
               if(sumD2==s){
                   count++;
               }
           }
       }
   }  
   console.log(count);
}
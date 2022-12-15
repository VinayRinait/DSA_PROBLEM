function twoArrayAndProduct(n, m, mat, p){
    
   //row 
   var count=0
   var i,j;
   for(i=0;i<n;i++){
       for(j=0;j<=m-3;j++){
           if(mat[i][j]*mat[i][j+1]*mat[i][j+2]===p){
               // console.log(mat[i][j]*mat[i][j+1]*mat[i][j+2])
               count++
               // console.log("row",count)
           }
       }
   }
   
   //column
   for(j=0;j<m;j++){
       for(i=0;i<=n-3;i++){
           if(mat[i][j]*mat[i+1][j]*mat[i+2][j]===p){
               count++
               // console.log("col",count)
           }
       }
   }
   
   //diagonal 1
   
   for(i=0;i<=n-3;i++){
       for(j=0;j<=m-3;j++){
           if(mat[i][j]*mat[i+1][j+1]*mat[i+2][j+2]===p){
               count++
               // console.log("dia1",count)
           }
       }
   }
   
   // diagonal 2
   for(i=n-1;i>=2;i--){
       for(j=0;j<m-3;j++){
           if(mat[i][j]*mat[i-1][j+1]*mat[i-2][j+2]===p){
               count++
               // console.log("dia1",count)
           }
       }
   }
   console.log(count)
}
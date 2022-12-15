function twoArrayAndPhrase(n, m, matrix){
   //write code here
   var count = 0;
   for(var i=0;i<n;i++){
       for(var j=0;j<m-3;j++){
           if(matrix[i][j]=="s" && matrix[i][j+1]=="a" && matrix[i][j+2]=="b" && matrix[i][j+3]=="a"){
               count++;
           }
       }
   }  
   
   for(var j=0;j<m;j++){
       for(var i=0;i<n-3;i++){
           if(matrix[i][j]=="s" && matrix[i+1][j]=="a" && matrix[i+2][j]=="b" && matrix[i+3][j]=="a"){
               count++;
           }
       }
   }
   
   for(var i=0;i<n-3;i++){
       for(var j=0;j<m-3;j++){
           if(matrix[i][j]=="s" && matrix[i+1][j+1]=="a" && matrix[i+2][j+2]=="b" && matrix[i+3][j+3]=="a"){
               count++;
           }
       }
   }

   for(var i=3;i<n;i++){
       for(var j=0;j<m-3;j++){
           if(matrix[i][j]=="s" && matrix[i-1][j+1]=="a" && matrix[i-2][j+2]=="b" && matrix[i-3][j+3]=="a"){
               count++;
           }
       }
   }
   
   console.log(count);
}
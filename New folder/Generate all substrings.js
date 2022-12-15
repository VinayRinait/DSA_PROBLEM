function generateALlSubstr(N,A){
  
    for(var i=0;i<N;i++){
       for(var j=i;j<N;j++){
           var sam= "";
           for(var k=i;k<=j;k++){
               sam= sam + A[k];
           }
           console.log(sam);
       }
   }
   }
function halfPalindrome(N, str) {
   //write code here
   var str1 = "";
   var str2 = "";
   for(var i=0;i<N;i++){
       if(i<(N/2)){
           str1 += str[i];
       }
       else{
           str2 += str[i];
       }
   }
 //   console.log(str1,str2);
     var rstr1 = "";
     var rstr2 = "";
     
     for(var j = (N/2)-1;j>=0;j--){
         rstr1 += str1[j];
         rstr2 += str2[j];
     }
     // console.log(rstr1,rstr2);
     if(rstr1 == str1 && rstr2 == str2){
         console.log("yes");
     }
     else{
         console.log("no");
     }
 }
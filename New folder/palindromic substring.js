function masaiPalSubString(S){
   //write code here
       var n = S.length;
   var length = 0;
   for (var i = 0; i < n ; i++) {
       var bag = "";
       for (var j = i; j < n; j++) {
           bag = bag + S[j];
           var rS = "";
           for (var k = (bag.length - 1); k >= 0; k--) {
               rS = rS + bag[k];
           }
           if (rS == bag && length < bag.length) {
               length = bag.length;
           }
       }
   }
   console.log(length);
}
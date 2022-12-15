
function validAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
       let check1 = {};
       let check2 = {};
       for(let i =0; i<str1.length;i++){
           if(check1[str1[i]] === undefined){
               check1[str1[i]] = 1;
           }
           else{
               check1[str1[i]] += 1;
           }
       }
       for(let i =0; i<str2.length;i++){
           if(check2[str2[i]] === undefined){
               check2[str2[i]] = 1;
           }
           else{
               check2[str2[i]] += 1;
           }
       }
   
       for( let key in check1){
           if(check1[key] !== check2[key]){
               return false;
           }
       }
       
       return true;
    }
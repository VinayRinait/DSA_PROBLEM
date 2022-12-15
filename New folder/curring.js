function fun(a){
   return (b)=>{
       return (c)=>{
           return (d)=>{
               console.log(a+b+c+d);
           }
       }
   }
}


fun(1)(2)(3)(3)
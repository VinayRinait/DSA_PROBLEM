function identifyPrime(num) {
    // Write code here
    var count =0;
    for(var s=0; s<=num; s++)
    {
    
    if(num % s ===0)
    {
    count++;
    }
    
    }
    if(count == 2)
    {
    console.log("Yes");
    }
    else
    {
    console.log("No");
    }
   }
   
   
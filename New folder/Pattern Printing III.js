function patternPrinting3(N){
    //write code here
    
    var x=""
    var y=""
    var z="*"
    for(var i=0; i<N; i++)
    {
       x+="*"+" "
    }
    for(var i=0; i<N-1; i++)
    {
        y+=" "+" "
    } 
    for(var i=0; i<N; i++)
    {
        if(i==0||i==N-1)
        {
            console.log(x)
        }
        else
        {
           console.log(y+z)
        }
    }
}
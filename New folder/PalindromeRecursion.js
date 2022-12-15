const findit = (i,j,str)=>{
    if(j <= i) return true;
    if(str[i] != str[j]) return false;
    return findit(i+1,j-1,str)
}





console.log(findit(0,2,"aba"));
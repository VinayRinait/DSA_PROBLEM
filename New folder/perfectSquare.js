function findit(n){
    for(let i = 1;i< n;i++){
        if((i*i) == n){
            console.log(i);
            break;
        }
        else{
            if((i*i) > n){
                console.log('no');
                break;
            }
        }
    }
}


findit(987)
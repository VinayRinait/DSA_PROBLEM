function ediblePlants(N,edible,M,plants){
    // write code herelet 
    let c = 0;
    for( i = 0 ; i < N ; i++){
        for(j = 0 ; j < M ; j++){
            if(edible[i]==plants[j])
            c++
        }
    }
    console.log(c)
}
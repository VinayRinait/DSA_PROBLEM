function partyPlanning(N,PamID,M,JimID){
   let pamObj = {}
   let arr1 = []
   let jimObj = {}
   let arr2 = []

   for(let i=0; i<N; i++){
       if(pamObj[PamID[i]] === undefined){
           pamObj[PamID[i]] = PamID[i]
           arr1.push(pamObj[PamID[i]])
       }
   }
   for(let i=0; i<M; i++){
       if(jimObj[JimID[i]] === undefined){
           jimObj[JimID[i]] = JimID[i]
           arr2.push(jimObj[JimID[i]])
       }
   }
   arr1.sort()
   arr2.sort()
   // console.log(arr1,arr2)
   var flag = true
   for(let i=0; i<arr1.length; i++){
       if(arr1[i] !== arr2[i]){
           flag = false
       }
   }
   if(arr1.length !== arr2.length){
       flag = false
   }
   if(flag){
       console.log("Yes")
   } else{
       console.log("No")
   }
}
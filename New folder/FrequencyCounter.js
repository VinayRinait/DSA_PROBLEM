function sameFrequency(aar1, aar2) {
    aar1 = aar1.toString().split("");
    aar2 = aar2.toString().split("");
    if (aar1.length !== aar2.length) {
        return false;
    }
    let check1 = {};

    for (let i = 0; i < aar1.length; i++) {
        let key = aar1[i];
        if (check1[key] === undefined) {
            check1[key] = 1;
        }
        else {
            check1[key] += 1;
        }
    }

    for (let i = 0; i < aar2.length; i++) {
        let key = aar2[i];
        if (check1[key] === undefined) {
            return false
        }
        else {
            check1[key] -= 1;
        }
    }
    return true
}


// sameFrequency Solution
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }
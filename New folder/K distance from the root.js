
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below and use the array below

main_arr=[]
function atKDist(root,k){
    
    if(root==null || k<0)
    {
        return;
    }
    if(k===0)
    return main_arr.push(root.val)
    
    atKDist(root.left, k-1);
    atKDist(root.right, k-1);
    
}


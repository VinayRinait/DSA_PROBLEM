
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below

function mirror(root){
    
   
   if(!root) return root;
   
   var s = mirror(root.left);
   var m = mirror(root.right);
   
   root.left = m;
   root.right = s;
   
   return root
   
}


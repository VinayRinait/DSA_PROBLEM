// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var lowestCommonAncestor = function(root, p, q) {
    
    if (root== null)
           return null
           
           if (root.val>p && root.val>q)
           return lowestCommonAncestor(root.left,p,q);
   
       if (root.val<p&&root.val<q)
           return lowestCommonAncestor(root.right,p,q);
   
       return root;

}

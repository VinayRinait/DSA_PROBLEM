// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var pathSum = function(root, sum){
    
    var sam = [];
    
    masai(root,0,[]);
    
    return sam;
    
    function masai(node,sum1,arr){
        
        if (!node)
        {
            return;
        }
        sum1+=node.val;
        
        arr.push(node.val);
        
        if (sum1===sum && !node.right && !node.left) 
        {
            sam.push(arr);
            return;
        }
        masai(node.left, sum1, [...arr]);
        
        masai(node.right, sum1, [...arr]);
    }
    

}

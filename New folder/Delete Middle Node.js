
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var deleteMiddle = function(head,n) {
    
   if(!head.next)return null;
   var sam=head;
  
  var masai=head.next.next;
  
  
  while(masai&& masai.next)
  {
    sam=sam.next;
    masai=masai.next.next;
  }
  
  sam.next=sam.next.next;
  return head;
    
};


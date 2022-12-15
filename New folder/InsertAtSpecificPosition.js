const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let newNode=new LinkedListNode(data);
   if(position===0)
   {
       newNode.next=head;
       head=newNode
       return head
   }
   else
   {
       let current=head;
       let prev=null;
       let count=-1;
       while(count<position-1)
       {
           count++;
           prev=current;
           current=current.next
       }
       let temp=current;
       newNode.next=current;
       prev.next=newNode
       return head
   }
}
//console.log(insertNodeAtPosition(3,4,2))
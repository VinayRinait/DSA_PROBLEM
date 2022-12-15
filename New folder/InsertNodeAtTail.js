
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let newNode=new LinkedListNode(data)
    if(head===null)
    {
        head=newNode
        return head
    }
    else
    {
        let current=head;
        while(current.next)
        {
            current=current.next
        }
        current.next=newNode
        return head
    }
   // return newNode
}
//console.log(insertNodeAtTail(1,4))
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let p=head;
    let f=head;
    let count=1;
    while(count<=n-1)
    {
        f=f.next
        count++
    }
    while(f.next!=null)
    {
        f=f.next;
        p=p.next
    }
    
    return p.data
}

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    if (l1 == null)
    return l2;
    if (l2 == null)
    return l1;

// start with the linked list
// whose head data is the least
if (l1.data < l2.data) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
} else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
}
};

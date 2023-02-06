var head = 13;

class Node{

    constructor(val){
        this.data = val
        this.next = null;
    }
}


function print(){

    var n = head;

    while(n!=null){

        console.log(n.data);
        n= n.next;
    }
}

var head = new Node(12);

var node2 = new Node(13)

var node3 = new Node(17)

head.next = node2;
node2.next = node3;

print();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        let temp = this.tail;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            // this.tail.prev = temp;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        }
        else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }
}

const node1 = new DoubleLinkedList(1);
node1.push(2);
// node1.push(3);
node1.pop();
console.log(node1);
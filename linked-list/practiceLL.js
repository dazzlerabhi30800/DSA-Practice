class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    getMiddle() {
        if (!this.head) return undefined;
        let middle = Math.floor(this.length / 2);
        let temp = this.head;
        for (var i = 0; i < middle; i++) {
            temp = temp.next;
        }
        return temp;
    }
    reverse() {
        let temp = this.head;
        let prev = null;
        let next = temp.next;
        this.head = this.tail;
        this.tail = temp;


        for (var i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}


class Node2 extends Node {
    constructor(value) {
        super(value);
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node2(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node2(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    reverse() {
        if (!this.head || !this.head.next) return undefined;
        let curr = this.head;
        let temp = null;
        while (curr != null) {
            temp = curr.prev;
            curr.prev = curr.next
            curr.next = temp;
            curr = curr.prev;
        }

        if (temp != null) {
            let tempHead = this.head;
            this.head = this.tail;
            this.tail = tempHead;
        }
    }
}

const node1 = new LinkedList(3);
node1.push(44);
node1.push(15);
node1.push(18);
node1.push(22);
node1.push(60);
node1.push(77);
// console.log(node1.getMiddle());
// console.log(node1.reverse());
// console.log(node1);



const node2 = new DoubleLinkedList(4);
node2.push(74);
node2.push(88);
node2.push(34);
node2.reverse();
console.log(node2);
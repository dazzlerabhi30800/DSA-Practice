class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length == 0) return undefined;
        let temp = this.top;
        if (this.length === 1) {
            this.top = null;
        }
        else {
            this.top = this.top.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}


class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) return undefined;
        let temp = this.first;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

// const stack1 = new Stack(4);
// stack1.push(77);
// stack1.push(10);
// console.log(stack1.pop());
// console.log(stack1);


const queue1 = new Queue(10);
queue1.enqueue(7);
queue1.enqueue(20);
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
console.log(queue1);

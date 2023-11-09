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
    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let next = this.head.next;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            next.prev = null;
            this.head = next;
            temp.next = null;
        }
        this.length--;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (index < Math.floor(this.length / 2)) {
            for (var i = 0; i < index; i++) {
                temp = temp.next;
            }
        }
        else {
            temp = this.tail;
            for (var i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp;
    }
    set(index, value) {
        let temp = this.get(index);
        if (!temp) return false;
        temp.value = value;
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return undefined;
        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < 0 || index > this.length) return undefined;
        const temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.prev = null;
        temp.next = null;
        this.length--
    }
    reverse() {
        if (!this.head || !this.head.next) return this;
        let current = this.head;
        let temp = null;
        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }


        if (temp != null) {
            this.head = temp.prev;
        }
        console.log(this);
        // return this;
    }
}

const node1 = new DoubleLinkedList(1);
node1.push(2);
node1.push(3);
node1.push(4);
// node1.push(3);
// node1.pop();
// node1.unshift(8);
// node1.shift();
// console.log(node1.get(3));

// node1.set(2, 444);
// node1.insert(2, 444);
// node1.remove(1);
node1.reverse();
// console.log(node1)
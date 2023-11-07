
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
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let temp = this.head;
        let pre = temp;
        if (!this.head) return undefined;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre
        this.tail.next = null;
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
        let temp = this.head
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            newNode.next = temp;
        }
        this.length++;
        // return
    }
    shift() {
        let temp = this.head;
        if (!this.head) return undefined;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
    }
    get(index) {
        let temp = this.head;
        if (index < 0 || index >= this.length) return undefined;
        if (!this.head) return undefined;
        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    set(index, value) {
        if (!this.head) return undefined;
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        const newNode = new Node(value);
        if (!this.head) return undefined;
        if (index < 0 || index >= this.length) return undefined;
        let prev = this.get(index - 1);
        let temp = this.get(index);
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        // return this
    }
    remove(index) {
        if (!this.head) return undefined;
        if (index < 0 || index >= this.length) return undefined;
        let prev = this.get(index - 1);
        let temp = this.get(index);
        prev.next = temp.next;
        temp.next = null;
        this.length--;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let pre = null;
        for (var i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }

        return true;
    }


}

const node1 = new LinkedList(4);
node1.push(7);
node1.push(10);
node1.push(5);
node1.push(18);
// console.log(node1.pop());
// node1.unshift(100);
// node1.shift();
// node1.remove(3);
node1.reverse();
// console.log(node1.get(0))
// console.log(node1.set(0, 200))
// console.log(node1.insert(2, 300))
// console.log(node1.shift())
// console.log(node1.set(2, 34));
// console.log(node1);
// console.log(node1.insert(0, 37));
// node1.insert(0, 37);
// node1.insert(2, 37);
// console.log(node1.remove(3));
// console.log(node1.reverse());
console.log(node1);
// console.log(node1);
// console.log(node1.set(2, 100));
// console.log(node1.get(0))
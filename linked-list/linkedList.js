
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
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
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
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return [this, temp];
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return temp;
    }
    get(index) {
        let temp = this.head;
        if (!this.head) return undefined;
        if (index < 0 || index >= this.length) return undefined;
        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    set(index, value) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index >= this.length) return false;
        const newNode = new Node(value);


        const temp = this.get(index - 1);
        console.log(temp);
        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;

        return true;
    }
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length) this.pop();
        if (index < 0 || index >= this.length) return false;

        const before = this.get(index - 1);
        const currentTemp = before.next;
        before.next = currentTemp.next;
        currentTemp.next = null;
        this.length--;

        return currentTemp;

    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;


        let next = temp.next;
        let prev = null

        for (var i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }

}

const node1 = new LinkedList(4);
node1.push(7);
node1.push(10);
node1.push(5);
node1.push(18);
// console.log(node1.pop());
// console.log(node1.unshift(100));
// console.log(node1.shift())
// console.log(node1.set(2, 34));
// console.log(node1);
// console.log(node1.insert(0, 37));
// node1.insert(0, 37);
// node1.insert(2, 37);
// console.log(node1.remove(3));
console.log(node1.reverse());
// console.log(node1);
// console.log(node1);
// console.log(node1.set(2, 100));
// console.log(node1.get(0))
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return true;
        }
        let temp = this.root;
        while (true) {
            if (temp.value > newNode.value) {
                if (!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left
            }
            else if (temp.value < newNode.value) {
                if (!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
            else {
                return this;
            }
        }
    }
    contains(value) {
        if (!this.root) return undefined;
        let temp = this.root;
        while (true) {
            if (temp.value > value) {
                temp = temp.left;
            }
            else if (temp.value < value) {
                temp = temp.right;
            }
            else {
                return temp;
            }
        }
    }
    minValueNode(currentNode) {
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
    maxValueNode(currentNode) {
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }
    getMiddle(node) {
        let temp = this.root
        let currTemp = this.root;
        let i = 0;
        if (this.root.left.value === node.value) {
            while (temp.left) {
                temp = temp.left;
                i++;
            }
            for (var j = 0; j < Math.floor(i / 2); j++) {
                currTemp = currTemp.left;
            }
            return currTemp;
        }
        else if (this.root.right.value === node.value) {
            while (temp.right) {
                temp = temp.right;
                i++;
            }
            console.log(i);
            for (var j = 0; j < Math.floor(i / 2); j++) {
                currTemp = currTemp.right;
            }
            return currTemp;
        }
        else {
            return this.root;
        }
    }
}

let myTree = new BST();
myTree.insert(4);
myTree.insert(8);
myTree.insert(3);
myTree.insert(2);
myTree.insert(7);
myTree.insert(44);
// console.log(myTree);
// console.log(myTree.contains(3));
// console.log(myTree.contains(3));
// console.log(myTree.minValueNode(myTree.root.right));
// console.log(myTree.maxValueNode(myTree.root.right));
console.log(myTree.getMiddle(myTree.root.left));
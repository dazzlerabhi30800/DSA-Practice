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
        let temp = this.root
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right
            }
        }
    }
    contains(value) {
        if (!this.root) return false;
        let temp = this.root;
        while (temp) {
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
        if (!temp) {
            return undefined;
        }
    }
    minValueNode(currentNode) {
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

}

let myTree = new BST();
myTree.insert(4);
myTree.insert(8);
myTree.insert(3);
myTree.insert(2);
myTree.insert(7);
// console.log(myTree.contains(3));
console.log(myTree.minValueNode(myTree.root.right));
// console.log(myTree.right);
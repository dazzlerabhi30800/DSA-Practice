console.log("Tree Traversal");



class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null
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
                temp = temp.left;
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
        while (temp) {
            if (temp.value < value) {
                temp = temp.right;
            }
            else if (temp.value > value) {
                temp = temp.left;
            }
            else {
                return temp;
            }
        }
    }
    // Breadth First Search
    BFS() {
        let currentNode = this.root;
        let queue = [];
        let results = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return results;
    }
    // Depth First Search  PreOrder
    DFSPreOrder() {
        let results = []
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);

        // return the result array preorder
        return results;
    }


    // Depth First Search PostOrder
    DFSPostOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);

        return results;

    }

}


const myTree = new BST();
myTree.insert(7);
myTree.insert(8);
myTree.insert(10);
myTree.insert(5);
myTree.insert(6);
// console.log(myTree.BFS());
// console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());
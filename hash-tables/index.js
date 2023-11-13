
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
    _hash(key) { // we are using this underscore to tell the other developer that this method should be run insider other methods not directly.
        let hash = 0; // this hash function will generate the index in which we will store the value.
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
    set(key, value) {
        let index = this._hash(key);
        console.log(index);
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value]);
        return this;
    }
    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys;
    }
}



const table1 = new HashTable();
table1._hash("nails");
table1.set("nails", 400);
table1.set("washers", 50);
console.log(table1.get("washers"));
console.log(table1.keys());
// console.log(table1);


// Interview Question

function itemsInCommon1(arr1, arr2) { // big o will be n^2
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

function itemsInCommon2(arr1, arr2) { // big o will be n^2
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    console.log(obj);
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true;
    }
    return false;
}


let arr1 = [1, 3, 5];
let arr2 = [4, 2, 5];



console.log(itemsInCommon1(arr1, arr2));
console.log(itemsInCommon2(arr1, arr2));
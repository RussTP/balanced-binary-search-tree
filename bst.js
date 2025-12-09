import { Node } from "./node.js";
import { prettyPrint } from "./prettyPrint.js";
export class Tree {
    constructor(array) {
        this.root = this.buildTree(array, 0, array.length -1);
    }

    buildTree(array, start, end) {
    if (start > end) return null;
    
    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid])

    root.left = this.buildTree(array, start, mid -1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
    }

}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log("Root is:", tree.root);
prettyPrint(tree.root);




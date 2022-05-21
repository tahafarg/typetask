/////////////////////////////////////////////////////////////////\
var Stack1 = /** @class */ (function () {
    function Stack1(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Stack1.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Stack1.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack1.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack1.prototype.size = function () {
        return this.storage.length;
    };
    return Stack1;
}());
var stack2 = new Stack1();
stack2.push("A");
stack2.push("B");
stack2.size();
stack2.peek();
stack2.size();
stack2.pop();
stack2.size();
var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Queue.prototype.enqueue = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.size();
queue.dequeue();
queue.size();
/////////////////////////linked list///////////////////////////
var Node1 = /** @class */ (function () {
    function Node1(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return Node1;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.insertAtEnd = function (data) {
        var node = new Node1(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var getLast_1 = function (node) {
                return node.next ? getLast_1(node.next) : node;
            };
            var lastNode = getLast_1(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    };
    LinkedList.prototype.insertInBegin = function (data) {
        var node = new Node1(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };
    LinkedList.prototype.deleteNode = function (node) {
        if (!node.prev) {
            this.head = node.next;
        }
        else {
            var prevNode = node.prev;
            prevNode.next = node.next;
        }
    };
    LinkedList.prototype.search = function (comparator) {
        var checkNext = function (node) {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    };
    LinkedList.prototype.traverse = function () {
        var array = [];
        if (!this.head) {
            return array;
        }
        var addToArray = function (node) {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    };
    LinkedList.prototype.size = function () {
        return this.traverse().length;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.traverse(); // [];
linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });
linkedList.traverse();
linkedList.search(function (_a) {
    var title = _a.title;
    return title === "Post A";
});
///////////////////////////singleton pattern/////////////////////
var count = /** @class */ (function () {
    function count() {
    }
    count.get = function () {
        return this.co;
    };
    count.prototype.addone = function () {
        count.co.c++;
    };
    count.co = new count();
    return count;
}());

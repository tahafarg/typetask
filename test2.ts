
/////////////////////////////////////////////////////////////////\

////////////////////stack///////////////////
interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
  }
  

class Stack1<T> implements IStack<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    push(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Stack has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
  
    pop(): T | undefined {
      return this.storage.pop();
    }
  
    peek(): T | undefined {
      return this.storage[this.size() - 1];
    }
  
    size(): number {
      return this.storage.length;
    }
  }
  
  const stack2 = new Stack1<string>();
  stack2.push("A");
  stack2.push("B");
  
  stack2.size();
  stack2.peek(); 
  stack2.size(); 
  stack2.pop();  
  stack2.size(); 
  ////////////////////////////queue//////////////

  interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
  }

  class Queue<T> implements IQueue<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    enqueue(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Queue has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
    dequeue(): T | undefined {
      return this.storage.shift();
    }
    size(): number {
      return this.storage.length;
    }
  }
  
  const queue = new Queue<string>();
  
  queue.enqueue("A");
  queue.enqueue("B");
  
  queue.size();    
  queue.dequeue(); 
  queue.size();    

  /////////////////////////linked list///////////////////////////

  class Node1<T> {
    public next: Node1<T> | null = null;
    public prev: Node1<T> | null = null;
    constructor(public data: T) {}
  }

  interface ILinkedList<T> {
    insertInBegin(data: T): Node1<T>;
    insertAtEnd(data: T): Node1<T>;
    deleteNode(node: Node1<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node1<T> | null;
  }

  class LinkedList<T> implements ILinkedList<T> {
    private head: Node1<T> | null = null;
  
    public insertAtEnd(data: T): Node1<T> {
      const node = new Node1(data);
      if (!this.head) {
        this.head = node;
      } else {
        const getLast = (node: Node1<T>): Node1<T> => {
          return node.next ? getLast(node.next) : node;
        };
  
        const lastNode = getLast(this.head);
        node.prev = lastNode;
        lastNode.next = node;
      }
      return node;
    }
  
    public insertInBegin(data: T): Node1<T> {
      const node = new Node1(data);
      if (!this.head) {
        this.head = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
      return node;
    }
  
    public deleteNode(node: Node1<T>): void {
      if (!node.prev) {
        this.head = node.next;
      } else {
        const prevNode = node.prev;
        prevNode.next = node.next;
      }
    }
  
    public search(comparator: (data: T) => boolean): Node1<T> | null {
      const checkNext = (node: Node1<T>): Node1<T> | null => {
        if (comparator(node.data)) {
          return node;
        }
        return node.next ? checkNext(node.next) : null;
      };
  
      return this.head ? checkNext(this.head) : null;
    }
  
    public traverse(): T[] {
      const array: T[] = [];
      if (!this.head) {
        return array;
      }
  
      const addToArray = (node: Node1<T>): T[] => {
        array.push(node.data);
        return node.next ? addToArray(node.next) : array;
      };
      return addToArray(this.head);
    }
  
    public size(): number {
      return this.traverse().length;
    }
  }
  
  interface Post {
    title: string;
  }
  const linkedList = new LinkedList<Post>();
  
  linkedList.traverse() // [];
  
  linkedList.insertAtEnd({ title: "Post A" });
  linkedList.insertAtEnd({ title: "Post B" });
  linkedList.insertInBegin({ title: "Post C" });
  linkedList.insertInBegin({ title: "Post D" });
  
  linkedList.traverse() 
  linkedList.search(({ title }) => title === "Post A") 

  ///////////////////////////singleton pattern/////////////////////

  class count{
    c:number
    private constructor(){}
    private static co= new count();
    public static get(){
      return this.co;
    }
   addone():void{
      count.co.c++;
    }

}

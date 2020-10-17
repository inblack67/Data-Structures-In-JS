class TsNode{
    data: any;
    next: any;
    constructor(data: any, next:any=null) {
        this.data = data;
        this.next = next;
    }
}

class TsLinkedList{
    head: TsNode;
    size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(data: any){
        const newNode = new TsNode(data, this.head);
        this.head = newNode;
        this.size++;
    }
    insertLast(data: any){
        if(!this.head){
            const newNode = new TsNode(data);
            this.head = newNode;
            this.size++;
        }
        else{
            let curr: TsNode = this.head;
            while(curr.next){
                curr = curr.next;
            }
            const newNode = new TsNode(data);
            curr.next = newNode;
            this.size++;
        }
    }
    insertAtIndex(data: any, index: number){
        if(index > this.size){
            return;
        }
        if(index === 0 || !this.head){
            this.insertFirst(data);
            return;
        }
        let curr: TsNode = this.head;
        let prev: TsNode;
        let count = 0;
        while(count < index){
            prev = curr;
            curr = curr.next;
            count++;
        }
        const newNode = new TsNode(data);
        prev.next = newNode;
        newNode.next = curr;
    }
    clearList(){
        this.head = null;
        this.size = 0;
    }
    display(){
        let current: TsNode = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const tsll = new TsLinkedList();
tsll.insertFirst(10);
tsll.insertFirst(20);
tsll.insertFirst(30);
tsll.insertLast(40);
tsll.insertLast(50);
tsll.insertAtIndex(67, 0);
tsll.display()
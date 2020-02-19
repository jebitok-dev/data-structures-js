const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack()
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record)
    }
// 1['a'] //2['a'] 1 ['']
// 2['a'] 1['']
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }

        const record = this.second.pop()

        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
    }
}
const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.peek();
q.remove();
q.remove();
q.remove();
console.log(q);
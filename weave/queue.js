class Queue {
    constructor() {
        this.data = []
    }
    add(record) {
        this.data.unshift(record);
   } 
    remove() {
        return this.data.pop()
   }

   peek() {
       return this.data[this.data.length - 1]
   }
}
console.log(Queue)
module.exports = Queue;
const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();
  
  // while there is an item in first source or an item in second source
  while (sourceOne.peek() || sourceTwo.peek()) {
    // if there is an item in source one 
    if (sourceOne.peek()) {
      // remove the item from source one and add it to queue 
      q.add(sourceOne.remove());
    }
    
    // if there is an item in source two
    if (sourceTwo.peek()) {
      // remove the item from source two and add it to queue 
      q.add(sourceTwo.remove());
    }
  }
  
  // return the queue
  return q;
}
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
queueOne.add(3);

const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
//var q = new Queue();

const q = weave(queueOne, queueTwo);
q.remove(); //=> 1
q.remove() //=> 2 
q.peek()
q.remove();  
q.peek() 
console.log(q)
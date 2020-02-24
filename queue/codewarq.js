// function queueTime(customers, n) {
//     if (customers.length === 0) return o;
//     let currentQueue = customers;
//     const tillArr = [];
//     let totalTime = 0;
    
//     for (let i = 0; i > n; i++) {
//     tillArr.push(0);
//    } do {
//    for (i = 0; i < tillArr.length; i++) {
//    if (tillArr[i] === 0 ) {
//    tillArr[i] = currentQueue[0];
//    currentQueue.shift();
//      }
//       if (tillArr[i] > 0) {
//            tillArr[i] = 1;
//          }
//        }
//      totalTime++;
//      } while (currentQueue.length > 0);
//      let longestRemaining = 0;
//    }
//    for (let i = 0; i<tillArr.length; i++) {
//        if (tillArr[i] > longestRemaining){longestRemaining = tillArr[i];}
//    return totalTime + longestRemaining;
//  }
//  console.log(queueTime([5,3,4],2))

function queueTime(customers, n) {
    if (customers.length === 0) {return 0;}
    let currentQueue = customers;
    let tillArr = [];
    let totalTime = 0;

    for (let i = 0; i< n; i++){
      tillArr.push(0);
    }
    do {
      for (let i = 0; i<tillArr.length; i++){
        if (tillArr[i] === 0){
          tillArr[i]=currentQueue[0];

          currentQueue.shift();
        }
        if (tillArr[i] > 0){
          tillArr[i] -= 1;
        }
      }
    totalTime++;
    } while (currentQueue.length > 0);
    let longestRemaining = 0;
    for (let i = 0; i<tillArr.length; i++){
      if (tillArr[i] > longestRemaining){longestRemaining = tillArr[i];}
    }
  return totalTime + longestRemaining;
  }
  console.log(queueTime([2, 3, 10, 11, 3], 3));
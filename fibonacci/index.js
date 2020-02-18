// function fibonacci(num) {
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
// }
//console.log(fibonacci(3))

// function fibonacci(num) {
//     if (num <= 1) return 1;
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
// } 

function fib(n) {
    const result = [0, 1];

    for (let i = 2; i<= n; i++) {
        const a = result[i - 1]
        const b = result[i - 2];
        result.push(a + b)
    }
    var data = result.map((data) => {
        return data;
    }) 
    console.log(data);
}
(fib(12))

//[0,1,1,2];


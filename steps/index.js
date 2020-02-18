// function steps(n) {
//     let step = ''
//     for (i = 0; i < n ; i++) {
//         console.log(step+= 2)
//     }
// }
// //(steps(3))
// (steps(5))

function steps(n, i = 1) {
    if (i > n) {
        return;
    } 
    console.log('#'.repeat(i) + ' '.repeat(n - i))
    steps(n, i + 1) //recursion-technique of repeating
}
(steps(3))


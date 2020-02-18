// Write a function that accepts a positive N
//The function should console log a pyramid shape
//with N levels using the #character. make sure the 
//pyramid has spaces on both the left *and* right hand sides
//examples 
//pyramid(1)
//'#'
//pyramid(2)
//     '#'
//    '###'
// pyramid(3)
//     '#'
//    '###'
//   '#####'
//For loop
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)

    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level);
    }
}
(pyramid(3))
//2-0 <= 0 && 2+0 >= 0( )
//2-0 <= 1 && 2+0 >= 1( )
//2-0 <= 2 && 2+0 >= 2(#)
//2-0 <= 3 && 2+0 >= 3( )
//2-0 <= 4 && 2+0 >= 4( )

//2-1 <= 0 && 2+1 >= 0( )
//2-1 <= 1 && 2+1 >= 1(#)
//2-1 <= 2 && 2+1 >= 2(#)
//2-1 <= 3 && 2+1 >= 3(#)
//2-1 <= 4 && 2+1 >= 4( )

//2-2 <= 0 && 2+3 >= 0(#)
//2-3 <= 1 && 2+3 >= 1(#)
//2-3 <= 2 && 2+3 >= 2(#)
//2-3 <= 3 && 2+3 >= 3(#)
//2-3 <= 4 && 2+3 >= 4(#)

//  function pyramid(n) {
//      let pyramid = [];
//     for (let i =0;i<2*n-1;i++) {
//          pyramid[i]=" ";
//      }     pyramid[n-1] = "#";
//   console.log(pyramid.join(""));
//      for (let i =1 ;i<n;i++){
//          pyramid[n-1-i]="#";
//          pyramid[n-1+i]="#";
//          console.log(pyramid.join(""));
//      }
// }
// (pyramid(5));
//  function pyramid(n, row = 0, level = '') {
//    if (row === n){
//          return;
//    }     
//    else if (level.length === 2*n-1){
//        console.log(level);
//          return pyramid(n, row+1, '')  
//           } else {
//          if (level === ''){
//              level = "#";
//              return pyramid(n, row, level);
//          } else { 
//          if (level.length<2*row+1){
//            level="#"+ level +"#";    
//             return pyramid(n, row, level);
//         }  else {
//             level = " " + level + " ";
//              return pyramid(n, row, level);
//          }
//      }

//  }
// }
// (pyramid(3))
//given string return the character that is most 

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    
    for (let char in charMap) { //let in used in an object
        if (charMap[char] > max) {
             max = charMap[char]
             maxChar = char;
        }
    }
    return maxChar
}
console.log(maxChar('windows'));


// var str = 'happiness';
// const char = {}

// for (let data of str) {
//     if (char[data]) {
//         char[data]++
//     } else {
//         char[data] = 1
//     }
// }
// console.log(char)

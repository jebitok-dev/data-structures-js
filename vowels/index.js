//solution with regular expression
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0
// }
console.log(vowels('Hi! there'))
console.log(vowels('awesome'))

//search specific letter (outputs 1)
// function vowels(str) {
//     const read = str.search(/[aeiou]/gi);
//     return read;
// }

//without regular expression
function vowels(str) {
    let count = 0;
    const checker = ['a','e','i','o','u'];
    for (let char of str.toLowerCase()) {
        if(checker.includes(char)) {
            count++
        }
    }
    return count;
}
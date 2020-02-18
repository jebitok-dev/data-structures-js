//---directions
//given a string,return true if the is palindrome
//or false if it is not. palindromes are strings that form the sameword if reversed. *Do* include spaces
//and punctuation in determing if its a string is a palindrome

//function palindrome(str) {
//    const data = str.split('').reverse().join('')
//    return str === data;
//}
//console.log(palindrome('noon2'))

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i -1]
    })
}
console.log(palindrome('noon'))
// 'noon'
// ['n','o','o','n']
// [n-0,o-1,o-2,n-3]
// [n-0]
// 'noon'[4-0-1]3
// 'noon'[4-1-1]2
// 'noon'[4-2-1]1
// 'noon'[4-3-1]0
//data structures is a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.
//...Directions
//Given a string, return a new string with the reversed
// order of characters


//reverse('hello') === 'olleh'
//reverse('Greetings!') === '!sgniteerG'
//function reverse(str) {
//    let reversed = '';
//
//    for (let character of str) {
//        reversed = character + reversed
//    }
//    return reversed;
//}
//console.log(reverse('ij'));//ji
//character -> 'i', 'j'
//reversed 
//[C] =  [R]
//'j' + ''
//'i' + 'j'
//'' + 'i'
//rev = accumulator char= currentvalue
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}
console.log(reverse('cathy'));

['c', 'a', 't', 'h', 'y']

''+c   
c+a
a+t
t+h
h+y

y+''
h+t
t+a
a+c

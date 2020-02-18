// function capitalize(str) {
//     str = str.split(' ')
//     for ( var i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1)
//     }
//     return str.join(' ')
//    }
   
console.log(capitalize("I'm a little tea pot"));
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'))

function capitalize(str) {
    const words = []

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}
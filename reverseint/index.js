// given an interger, return an interger that is the reverse

function reverseInt (num) {
    const reversed = num.toString().split('').reverse().join('');
   // return reversed "string"
    return parseInt(reversed) * Math.sign(num)
}
console.log(reverseInt(675));
console.log(reverseInt(-675));
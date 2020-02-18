// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str) {
//     return str
//         .replace(/[^w]/g, '') //special character
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('')
// }
console.log(anagrams('ROAD! SAFETY', 'fairy tales'))
console.log(anagrams('rail safety', 'fairy tales'))

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true
}

function buildCharMap(str) {
    const CharMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        CharMap[char] = CharMap[char] + 1 || 1
    }
    return CharMap;
}
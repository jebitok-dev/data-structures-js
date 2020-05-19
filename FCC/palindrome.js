//palindrome checker -remove unnecessary char using regex
function palindrome(str) {
  str = str.toLowerCase().replace(/\W|_/g, "")
  const data = str.split('').reverse().join('');
  if (str === data ) {
  return true;
  } else if (str !== data) {
    return false;
  }
}



palindrome("eye");

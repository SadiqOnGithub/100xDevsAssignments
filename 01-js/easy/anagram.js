/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
const inclu = (arr1, arr2) => arr1.every(item => arr2.includes(item));

function isAnagram(str1, str2) {
  const arr1 = str1.split(''),
    arr2 = str2.split('');

  if (arr1.length !== arr2.length) return false;

  const returnVal = inclu(arr1, arr2) && inclu(arr2, arr1) ? true : false;

  console.log(returnVal);

  return returnVal
}

module.exports = isAnagram;

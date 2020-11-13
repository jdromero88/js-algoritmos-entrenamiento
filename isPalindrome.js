//  Escribe un programa que devuelva verdadero o falso si la palabra leida es palíndromo
// Check word is palindrome | chequea si la palabra es palíndromo.
let word = 'salas'

function checkPalindrome(string) {
  // convert to array
  let sArray = string.split('')
  let firstLetter = sArray.shift()
  let lastLetter = sArray.pop()
  if (firstLetter !== lastLetter) {
    return false
  }
  if (sArray.length < 2) {
    return true
  }
  return checkPalindrome(sArray.join(''))
}

console.log(checkPalindrome(word));

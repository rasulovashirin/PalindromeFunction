function checkPalindrome (input){
    var len = input.length - 1

   for(let i = 0; i < (input.length / 2 | 0); i++){
   if(input[i] !== input[len- i]) return false
   }

   return true
}

console.log(checkPalindrome('bob'))
console.log(checkPalindrome('bobby'))
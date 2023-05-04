function Palindrome(num) { 
      
    let numToStringArray = num.toString().split('');
    let reversedArray = num.toString().split('').reverse();
  
  console.log("here", numToStringArray, reversedArray)
    if (num.toString().length<2) {
       return "It's a palindrome"
    }
    else { 
          for (let i = 0; i<numToStringArray.length; i++) {    
             if (numToStringArray[i] !== reversedArray[i]) {
               return "It's not a palindrome"
               }
              else {
                   return "It's a palindrome"
                   }
               }
          } 
  }
  
  console.log(Palindrome(686))
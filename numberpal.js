function isPalindrome(num) {
    let arr = num.toString().split("");
    let reversed=arr.reverse().join("");
    return num == reversed;


}

console.log(isPalindrome(-1121));
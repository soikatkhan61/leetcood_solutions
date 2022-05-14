/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    function reverseString(str) {
         var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    
    let arr = []
    let reverse = ""
    let sSplit = []
    let cutExtraChar = s.replace(/[^A-Za-z0-9]/g, '')
    let lowercaseOfS = cutExtraChar.toLowerCase()
    reverse = reverseString(lowercaseOfS);
    
    
    sSplit = reverse.split(' ').join("").split('')
    arr = lowercaseOfS.split(' ').reverse().join("")
    
    let count = 0
    for (let i=0;i<arr.length;i++){
        if (sSplit[i] == arr[i]){
            count++
        }
    }
    
    if(count == arr.length){
        return true
    }else{
        return false
    }
    
  
};
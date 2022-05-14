/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = [];
    arr = s.split(' ');
    console.log(arr)
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == '') {
        arr.splice(i, 1);
        i--;
      }
    console.log(arr)
    }
  return arr[arr.length - 1].length;
};
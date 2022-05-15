/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr = []
    let arr2 = []
    let checkPoint = ''
    arr = s.split('').sort()
    arr2 = t.split('').sort()
    
    for(let i=0;i<t.length;i++){
        if(arr[i] != arr2[i]){
            checkPoint = arr2[i]
            break
        }
    }
    return checkPoint;

};

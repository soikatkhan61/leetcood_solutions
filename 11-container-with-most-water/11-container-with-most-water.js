/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len=height.length;
    let ans=0;
    let left=0;
    let right=len-1;
    while(left<right){
        let h=Math.min(height[left],height[right])
        let prod=h*(right-left);
        if(prod>ans){
            ans=prod;
        }
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return (ans)
};
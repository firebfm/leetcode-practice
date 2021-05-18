/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sortednums = nums.sort((a, b) => a - b);
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        curr = nums[left] + nums[right];
        if (curr < target) {
            left += 1;
        } else if (curr > target) {
            right -= 1;
        } else {
            return [left, right]
        }
    }
    return [-1, -1]
};

console.log(twoSum([3,2,4], 6));
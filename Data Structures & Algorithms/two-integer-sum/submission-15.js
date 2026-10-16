class Solution {
    twoSum(nums, target) {
        let numsMap = new Map();

        for (let val = 0; val < nums.length; val++) {
            let current = nums[val];
            let needed = target - nums[val];
            if (numsMap.has(needed)) {
                return [numsMap.get(needed), val];
            }
            numsMap.set(current, val);
        }
    }
}

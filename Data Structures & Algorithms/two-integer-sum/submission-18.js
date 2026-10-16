class Solution {
    twoSum(nums, target) {
        const numsMap = new Map();

        for (let num in nums) {
            const val = Number(num)
            const current = nums[val];
            const needed = target - nums[val];
            if (numsMap.has(needed)) {
                return [numsMap.get(needed), val];
            }
            numsMap.set(current, val);
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let numsMap = new Map()

        for(let val=0; val<nums.length;val++){
            const current = nums[val]
            const needed = target-nums[val]
            if(numsMap.has(needed)){
                return [numsMap.get(needed), val]
            }
            numsMap.set(current,val)
        }

    }
}

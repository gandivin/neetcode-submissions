class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let pair = []

        for(let val=0; val<nums.length;val++){
            for(let i=0; i<nums.length;i++){
                if(val !==i && nums[val]+nums[i] === target){
                    pair =  [val,i]
                    console.log(pair)
                    return pair
                }
            }
        }

    }
}

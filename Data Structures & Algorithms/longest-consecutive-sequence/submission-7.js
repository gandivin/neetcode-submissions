class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length)return 0
        const sortedNums = nums.sort((a,b)=>a-b) 
        let currCount = 1
        let maxCount = currCount
        let lastEl = sortedNums[0]
        for(let i = 1; i<nums.length;i++){
            if(lastEl === sortedNums[i])continue
            if(sortedNums[i] === lastEl+1)currCount++
            else currCount=1
            maxCount=maxCount> currCount?maxCount:currCount; 
            lastEl = sortedNums[i]
        }

        return maxCount
    }
}

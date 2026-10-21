class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        // o(NlogN)
        
        // if(!nums.length)return 0
        // const sortedNums = nums.sort((a,b)=>a-b) 
        // let currCount = 1
        // let maxCount = currCount
        // let lastEl = sortedNums[0]
        // for(let i = 1; i<nums.length;i++){
        //     if(lastEl === sortedNums[i])continue
        //     if(sortedNums[i] === lastEl+1)currCount++
        //     else currCount=1
        //     maxCount=maxCount> currCount?maxCount:currCount; 
        //     lastEl = sortedNums[i]
        // }

        // return maxCount


        // o(N)

        const numSet =  new Set(nums)
        let count = 0
        
        nums.forEach(n=>{
            if(!numSet.has(n-1)){
                let currentNum = n
                let currentCount = 1

                while(numSet.has(currentNum+1)){
                    currentNum++
                    currentCount++
                } 
                count = Math.max(currentCount, count)
            }

        })

        return count
    }
}

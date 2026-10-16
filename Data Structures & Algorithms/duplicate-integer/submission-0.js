class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // try{
        //     let arr = []
        //     nums.forEach((n)=>{
        //         arr.forEach((val)=>{
        //            if(n === val){
        //             throw true
        //            }
        //         })
        //         arr.push(n)
        //     })
        //     return false
        // }catch (e){
        //     return e
        // }

        const newSet = new Set();

        for (const num of nums) {
            if (newSet.has(num)) {
                return true;
            }
            newSet.add(num);
        }
        return false;
    }
}

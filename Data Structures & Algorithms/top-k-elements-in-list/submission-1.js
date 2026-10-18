class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const myMap = new Map();

        nums.forEach((val) => {
            let currSum = myMap.get(val) || 0;
            myMap.set(val, ++currSum);
        });
        const res = [...myMap]
            .sort((a, b) => b[1] - a[1])
            .map((v) => v[0])
            .slice(0, k);

        return res;
    }
}

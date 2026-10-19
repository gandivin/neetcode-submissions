class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefArr =nums[0]?[nums[0]]:[1];
        let totalZeroes = 0;
        nums.forEach((nm) => {
            if (nm === 0) totalZeroes++;
        });

        if (totalZeroes > 1) return nums.map(() => 0);

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== 0) prefArr[i] = prefArr[i - 1] * nums[i];
            else prefArr[i] = prefArr[i - 1];
        }

        const totalSum = prefArr[nums.length - 1];

        return nums.map((num) => {
            if (!totalZeroes) {
                return totalSum / num;
            } else {
                if (num === 0) {
                    return totalSum;
                } else {
                    return 0;
                }
            }
        });
    }
}

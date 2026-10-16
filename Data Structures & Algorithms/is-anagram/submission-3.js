class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = {};

        for (const val of s) {
            count[val] = (count[val] || 0) + 1;
        }
        for (const val of t) {
            count[val] = (count[val] || 0) - 1;
        }

        for (const num in count) {
            if (count[num] !== 0) {
                return false;
            }
        }
        return true;
    }
}

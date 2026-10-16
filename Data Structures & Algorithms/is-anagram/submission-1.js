class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = {};

        for (const val in s) {
            count[s[val]] = (count[s[val]] || 0) + 1;
            count[t[val]] = (count[t[val]] || 0) - 1;
        }

        for (const num in count) {
            if (count[num] !== 0) {
                return false;
            }
        }
        return true;
    }
}

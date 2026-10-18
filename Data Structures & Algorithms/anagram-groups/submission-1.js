class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const customMap = new Map();
        const sortedStrs = strs.map((str) => str.split("").sort().join(""));

        sortedStrs.forEach((val, index) => {
            customMap.set(val, [...(customMap.get(val) || []), strs[index]]);
        });

        return [...customMap.values()];
    }
}

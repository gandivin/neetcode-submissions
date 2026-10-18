class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encoded = strs.length ? strs
            .map((val) =>
                val
                    .split("")
                    .map((val) => val.charCodeAt(0))
                    .join("ff")
            )
            .join("bunchxbunch") ||
            "" : "0Length";

        console.log(encoded)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str, "after split", str.split("bunchxbunch"))
        const decoded = str ? str === "0Length" ? [] : str.split("bunchxbunch").map((arr) =>
            arr ?
                arr
                    .split("ff")
                    .map((val) => String.fromCharCode(val))
                    .join("") : [""],
        ) : [""];
        return decoded;
    }
}

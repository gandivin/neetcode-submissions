class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumericCode(char){
        const code = char.charCodeAt(0)
        return(
            (code > 47 && code < 58) ||  // numeric (0-9)
            (code > 64 && code < 91) ||  // upper alpha (A-Z)
            (code > 96 && code < 123)    // lower alpha (a-z)
        )
    }

    isEmptySpace(char){
       return char===" "?true:false
    }

    isPalindrome(s) {
        const str = s.toLowerCase()

        let i=0
        let j=str.length-1
        
        while(i<j){
            if(!this.isAlphanumericCode(str[i]) || this.isEmptySpace(str[i])){
                i++
                continue
            }
            if(!this.isAlphanumericCode(str[j]) || this.isEmptySpace(str[j])){
                j--
                continue
            }
            if(str[i]!==str[j])return false

            i++
            j--
        }

        return true
    }
}

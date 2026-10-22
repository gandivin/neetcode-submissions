class Solution {
    isAlphanumericCode(char){
        const code = char.charCodeAt(0)
        return(
            (code > 47 && code < 58) ||  // numeric (0-9)
            (code > 64 && code < 91) ||  // upper alpha (A-Z)
            (code > 96 && code < 123)    // lower alpha (a-z)
        )
    }

    isPalindrome(s) {

        let i=0
        let j=s.length-1
        
        while(i<j){
            if(!this.isAlphanumericCode(s[i]) ){
                i++
                continue
            }
            if(!this.isAlphanumericCode(s[j]) ){
                j--
                continue
            }
            if(s[i].toLowerCase()!==s[j].toLowerCase())return false

            i++
            j--
        }

        return true
    }
}

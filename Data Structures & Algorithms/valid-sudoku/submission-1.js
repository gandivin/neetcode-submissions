class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // let res= true
        // board.forEach(row=>{
        //     const newMap = new Map()
        //     row.filter(val=> val !==".").forEach(val=>{
        //         if(!newMap.has(val)){
        //             newMap.set(val,1)
        //         }else res = false
        //     })
        // })
        // return res

        const  sideLength = 9

        const uniqueBox = new Set()
        for(let i=0; i<sideLength;i++){
            for(let j=0; j<sideLength;j++){
                const val=board[i][j]

                if(val===".")continue

                const rowKey = `row:${i}-value:${val}`
                const colKey = `col:${j}-value:${val}`
                const boxKey = `box:'${Math.floor(j/3)}-${Math.floor(i/3)}'-value:${val}`

                if(uniqueBox.has(rowKey) || uniqueBox.has(colKey) || uniqueBox.has(boxKey)){
                    console.log(uniqueBox.has(rowKey) , uniqueBox.has(colKey) , uniqueBox.has(boxKey))
                    console.log(rowKey , colKey , boxKey)
                    
                    console.log(uniqueBox)
                    return false
                }

                uniqueBox.add(colKey)
                uniqueBox.add(rowKey)
                uniqueBox.add(boxKey)
            }
        }


        return true

    }
}

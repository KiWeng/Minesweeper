import React from 'react'
import Row from "./Row";


function Field(props) {
    let listItems = []
    for (let i = 0; i < props.rowCount; i++) {
        console.log(props.minePos.length)
        listItems.push(Row({
                length: props.colCount,
                rowPos: i,
                mineInRow: props.minePos[i]
            })
        )
    }
    return (
        <div className="field">
            {
                listItems
                // props.minePos[1][1].toString()
            }
        </div>
    )

}


export default Field
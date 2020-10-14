import React from 'react'
import Cell from "./Cell";

function Row(props) {
    // let numbers = []
    // for (let i = 0; i < props.length; i++) {
    //     numbers.push(i)
    // }

    const listItems = []
    for (let i = 0; i < props.length; i++) {
        listItems.push(React.createElement(Cell, {
                rowPos: props.rowPos,
                colPos: i,
                mine: props.mineInRow[i]
            })
        )
    }

    return (
        <div className="row">
            {
                listItems
                // props.mineInRow.toString()
            }
        </div>
    )
}


export default Row

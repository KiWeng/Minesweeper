import React from 'react'
import Cell from "./Cell";

function Row(props) {

    const listItems = []
    for (let i = 0; i < props.length; i++) {
        // console.log(props.rowStates[i], i, props.rowPos)


        listItems.push(React.createElement(Cell, {
                rowPos: props.rowPos,
                colPos: i,
                mine: props.mineInRow[i],
                cellState: props.rowStates[i],
                handleChange: props.handleChange
            })
        )
    }

    // console.log("rendering row ", props.rowPos)
    return (
        <div className="row">
            {
                listItems
            }
        </div>
    )
}


export default Row

import React from 'react'
import Cell from "./Cell";
import 'antd/dist/antd.css'

function Row(props) {

    const listItems = []
    for (let i = 0; i < props.length; i++) {

        listItems.push(React.createElement(Cell, {
                rowPos: props.rowPos,
                colPos: i,
                cellState: props.rowStates[i],
                handleChange: props.handleChange,
                cellClicked: props.cellClicked,
                cellContextMenu: props.cellContextMenu,
                mine: props.mineInRow[i]
            })
        )
    }

    return (
        <div className="row">
            {
                listItems
            }
        </div>
    )
}


export default Row

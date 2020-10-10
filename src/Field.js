import React from 'react'
import ReactDom from 'react-dom'
import Row from "./Row";

function Field(props) {
    let listItems = []
    for (let i = 0; i < props.rowCount; i++) {
        listItems.push(Row({length: props.colCount, rowPos: i}))
    }
    return (
        <div className="field">
            {listItems}
        </div>
    )

}


export default Field
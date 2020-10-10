import React from 'react'
import ReactDom from 'react-dom'
import Cell from "./Cell";

function Row(props) {
    let numbers = []
    for (let i = 0; i < props.length; i++) {
        numbers.push(i)
    }

    const listItems = numbers.map(number => React.createElement(Cell))

    return (
        <div className="row">
            {/*<cell />*/}
            {/*<Cell />*/}
            {/*<Cell />*/}
            {/*<Cell />*/}
            {/*<Cell />*/}
            {/*<Cell />*/}
            {listItems}
        </div>
    )
}


export default Row

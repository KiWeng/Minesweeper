import React from 'react'
import './Minesweeper.css'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'hidden'}
        this.cellClass = 'cell'
        this.mine = props.mine
    }

    click(event) {
        if (this.state.value !== 'hidden')
            return
        if (event.button === 0 && this.mine) {
            this.setState({value: 'cleared'})
            this.cellClass = 'cell cleared'
        } else if (event.button === 2 && this.mine) {
            this.setState({value: 'flagged'})
            this.cellClass = 'cell flagged'
        } else {
            this.setState({value: 'bombed'})
            this.cellClass = 'cell bombed'
        }
    }

    render() {
        return (
            <button
                className={this.cellClass}
                onMouseDown={(event) => this.click(event)}
            >
            </button>
        )
    }
}


export default Cell

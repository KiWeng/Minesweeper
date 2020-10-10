import React from 'react'
import ReactDom from 'react-dom'
import './Minesweeper.css'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hidden'
        }
        this.cellClass = 'cell'
    }

    click(event) {
        if (event.button === 0) {
            this.setState({value: 'bomb'})
            this.cellClass = 'cell bomb'
        } else if (event.button === 2) {
            this.setState({value: 'flagged'})
            this.cellClass = 'cell flagged'
        }
    }

    render() {
        let cellClass = 'cell'
        switch (this.state) {
            case 'hidden':
                cellClass = 'cell hidden'
                break;
            case 'bomb':
                cellClass = 'cell bomb'
                break;
            case 'flagged':
                cellClass = 'cell flagged'
                break;

        }

        return (
            <button
                className={this.cellClass}
                // onClick={() => this.setState({value: 'X'})}
                onMouseDown={(event) => this.click(event)}
            >
            </button>
        )
    }
}


export default Cell

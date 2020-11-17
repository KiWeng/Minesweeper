import React from 'react'
import './Minesweeper.css'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleContextmenu = this.handleContextmenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {value: this.props.cellState}
        this.cellClass = 'cell'
        this.mine = props.mine
    }

    handleClick() {
        this.props.cellClicked(this.props.rowPos, this.props.colPos)
    }

    handleContextmenu(e) {
        e.preventDefault();
        this.props.cellContextMenu(this.props.rowPos, this.props.colPos)
    }

    setUp() {
        if (this.state.value !== this.props.cellState) {
            this.setState({value: this.props.cellState})
        }
        if (this.state.value === 'opened') {
            this.cellClass = 'cell opened'
        } else if (this.state.value === 'flagged') {
            this.cellClass = 'cell flagged'
        } else if (this.state.value === 'bombed') {
            this.cellClass = 'cell bombed'
        }
    }


    render() {
        this.setUp()
        // console.log(this.props.cellState);
        return (
            <button
                className={this.cellClass}
                onClick={this.handleClick}
                onContextMenu={this.handleContextmenu}
            >
                <span className={"mine-text-" + this.state.value}>
                    {this.mine !== 0 ? this.mine.toString() : ''}
                </span>
            </button>
        )
    }
}


export default Cell

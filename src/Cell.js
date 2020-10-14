import React from 'react'
import './Minesweeper.css'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleContextmenu = this.handleContextmenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {value: 'closed'}
        this.cellClass = 'cell'
        this.mine = props.mine
    }

    handleClick() {
        if (this.state.value !== 'closed' && this.state.value !== 'flagged')
            return
        if (this.mine !== -1) {
            this.setState({value: 'opened'})
            this.cellClass = 'cell opened'
        } else if (this.mine === -1) {
            this.setState({value: 'bombed'})
            this.cellClass = 'cell bombed'
        }
    }

    handleContextmenu(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        if (this.state.value === 'closed') {
            this.setState({value: 'flagged'})
            this.cellClass = 'cell flagged'
        } else if (this.state.value === 'flagged') {
            this.setState({value: 'closed'})
            this.cellClass = 'cell'
        }
    }


    render() {
        return (
            <button
                className={this.cellClass}
                onClick={this.handleClick}
                onContextMenu={this.handleContextmenu}
            >
                <span className={"mine-text-" + this.cellClass}>{this.mine.toString()}</span>
            </button>
        )
    }
}


export default Cell

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
        console.log(props.rowPos, props.colPos)
    }

    handleClick() {
        if (this.state.value !== 'closed' && this.state.value !== 'flagged')
            return
        if (this.mine !== -1) {
            this.setState({value: 'opened'})
            this.cellClass = 'cell opened'
            this.props.handleChange(this.props.rowPos, this.props.colPos, "opened");
        } else if (this.mine === -1) {
            this.setState({value: 'bombed'})
            this.cellClass = 'cell bombed'
            this.props.handleChange(this.props.rowPos, this.props.colPos, "bombed");
        }
    }

    handleContextmenu(e) {
        e.preventDefault();
        if (this.state.value === 'closed') {
            this.setState({value: 'flagged'})
            this.cellClass = 'cell flagged'
            this.props.handleChange(this.props.rowPos, this.props.colPos, "flagged");
        } else if (this.state.value === 'flagged') {
            this.setState({value: 'closed'})
            this.cellClass = 'cell'
            this.props.handleChange(this.props.rowPos, this.props.colPos, "closed");
        }
    }


    render() {
        if (this.state.value !== "opened" && this.props.cellState === "opened") {
            this.setState({value: "opened"})
            this.cellClass = 'cell opened'
            console.log("jiba", this.props.rowPos, this.props.colPos)
        }
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

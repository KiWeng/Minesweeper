import React from 'react'
import './Minesweeper.css'
import 'antd/dist/antd.css'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleContextmenu = this.handleContextmenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            value: this.props.cellState,
            cellClass: "cell",
            mineCount: 0
        }
    }

    handleClick() {
        this.props.cellClicked(this.props.rowPos, this.props.colPos)
    }

    handleContextmenu(e) {
        e.preventDefault();
        this.props.cellContextMenu(this.props.rowPos, this.props.colPos)
    }

    componentDidUpdate(prevProps) {
        // console.log("didUpdate");
        if (this.props.cellState !== prevProps.cellState) {
            let value = this.state.value;
            let cellClass;
            if (value !== this.props.cellState) {
                value = this.props.cellState;
            }
            if (value === 'opened') {
                cellClass = 'cell opened'
            } else if (value === 'flagged') {
                cellClass = 'cell flagged'
            } else if (value === 'bombed') {
                cellClass = 'cell bombed'
            } else {
                cellClass = 'cell'
            }
            this.setState({
                value: value,
                cellClass: cellClass,
                mineCount: this.props.mine
            });
        }
    }


    render() {
        return (
            <button
                className={this.state.cellClass}
                onClick={this.handleClick}
                onContextMenu={this.handleContextmenu}
            >
                <span className={"mine-text-" + this.state.value}>
                    {this.state.mineCount !== 0 ? this.state.mineCount.toString() : ''}
                </span>
            </button>
        )
    }
}


export default Cell

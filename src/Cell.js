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

    // click(event) {
    //     if (event.button === 2) {
    //         if (this.state.value === 'closed') {
    //             this.setState({value: 'flagged'})
    //             this.cellClass = 'cell flagged'
    //         } else if (this.state.value === 'flagged') {
    //             this.setState({value: 'closed'})
    //             this.cellClass = 'cell'
    //         }
    //     } else
    // }

    handleClick() {
        if (this.state.value !== 'closed' && this.state.value !== 'flagged')
            return
        if (!this.mine) {
            this.setState({value: 'opened'})
            this.cellClass = 'cell opened'
        } else if (this.mine) {
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
                {
                    this.mine.toString()
                }
            </button>
        )
    }
}


export default Cell

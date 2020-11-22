import React from 'react'
import Row from "./Row";


class Field extends React.Component {
    constructor(props) {
        super(props)
        this.rowCount = 9;
        this.colCount = 8
        this.updateMineStates = this.updateMineStates.bind(this)
        this.cellClicked = this.cellClicked.bind(this)
        this.cellContextMenu = this.cellContextMenu.bind(this)
        this.setUpMines();
        let posState = []
        for (let i = 0; i < this.rowCount; i++) {
            posState.push([])
            for (let j = 0; j < this.colCount; j++) {
                posState[i].push("closed")
            }
        }
        this.state = {state: posState, isOver: false, isStart: false}
        this.flagCount = 10;
        this.mineCount = 10;
    }

    cellClicked(i, j) {
        // console.log(i, j);
        if (this.state.isStart === false) {
            while (this.minePos[i][j] === -1) {
                this.setUpMines();
            }
            this.setState({isStart: true})
        }

        if (this.state.state[i][j] === 'opened') {
            return
        }
        if (this.minePos[i][j] !== -1) {
            this.updateMineStates(i, j, "opened")
        } else if (this.minePos[i][j] === -1) {
            this.updateMineStates(i, j, "bombed")

        }
    }

    cellContextMenu(i, j) {
        if (this.state.state[i][j] === 'closed' && this.props.flagCount) {
            this.updateMineStates(i, j, 'flagged')
        } else if (this.state.state[i][j] === 'flagged') {
            this.updateMineStates(i, j, 'closed')
        }
    }

    updateMineStates(i, j, type) {
        // console.log(this.state.state[i][j], type)
        if (this.state.isOver === true)
            return;
        if (this.state.state[i][j] === 'flagged' && type === 'opened') {
            this.props.updateGameStatus(false, this.props.flagCount + 1)
        }
        let tmp = this.state.state;
        tmp[i][j] = type;
        this.setState({state: tmp})
        if (type === "opened") {
            if (this.minePos[i][j] === 0) {
                this.revealSafeZone(i, j)
            }
        }
        if (type === "flagged") {
            this.props.updateGameStatus(false, this.props.flagCount - 1)
            if (this.minePos[i][j] === -1) {
                if (++this.mineCount === 10) {
                    this.props.updateGameStatus(true, this.props.flagCount)
                    this.setState({isOver: true})
                }
            }
        }
        if (type === "closed") {
            this.props.updateGameStatus(false, this.props.flagCount + 1)
        }
        if (type === "bombed") {
            this.props.updateGameStatus(true, this.props.flagCount)
            this.setState({isOver: true})
            let tmp = this.state.state;
            for (i in this.minePos) {
                for (j in this.minePos[i]) {
                    if (this.minePos[i][j] === -1) {
                        tmp[i][j] = 'bombed'
                    }
                }
            }
            this.setState({state: tmp})
        }
    }

    revealSafeZone(i, j) {
        let move = [
            [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]
        ]
        let queue = [];
        queue.push([i, j])
        let tmp = this.state.state;
        while (queue.length > 0) {
            let head = queue[0]
            queue.shift()
            for (const moveKey of move) {
                let ni = moveKey[0] + head[0]
                let nj = moveKey[1] + head[1]
                if (ni < 0 || ni >= this.rowCount)
                    continue
                if (nj < 0 || nj >= this.colCount)
                    continue
                if (this.minePos[ni][nj] < 0)
                    continue
                if (tmp[ni][nj] === "closed") {
                    tmp[ni][nj] = "opened";
                    if (this.minePos[ni][nj] === 0) {
                        queue.push([ni, nj])
                    }
                }
            }
        }
        this.setState({state: tmp})
    }

    adjacentMineCount(i, j) {
        if (this.minePos[i][j] === -1)
            return -1
        let count = 0;
        let move = [
            [-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]
        ]
        for (const moveKey of move) {
            let ni = moveKey[0] + i
            let nj = moveKey[1] + j
            if (ni < 0 || ni >= this.rowCount)
                continue
            if (nj < 0 || nj >= this.colCount)
                continue
            count += (this.minePos[ni][nj] === -1)
        }

        return count
    }

    setUpMines() {
        this.minePos = []
        for (let i = 0; i < this.rowCount; i++) {
            this.minePos.push([])
            for (let j = 0; j < this.colCount; j++) {
                this.minePos[i].push(0)
            }
        }

        let mine = new Set()
        while (mine.size < 10) {
            mine.add(Math.floor(
                Math.random() * this.colCount * this.rowCount
            ))
        }

        for (const mineKey of mine) {
            this.minePos[Math.floor(mineKey / this.colCount)][mineKey % this.colCount]
                = -1;
        }

        for (let i = 0; i < this.rowCount; i++) {
            for (let j = 0; j < this.colCount; j++) {
                this.minePos[i][j] = this.adjacentMineCount(i, j)
            }
        }
    }

    render() {
        let listItems = []
        // console.log(this.minePos[0][0]);
        for (let i = 0; i < this.rowCount; i++) {
            // console.log("updating");
            listItems.push(Row({
                    length: this.colCount,
                    rowPos: i,
                    cellClicked: this.cellClicked,
                    rowStates: this.state.state[i],
                    cellContextMenu: this.cellContextMenu,
                    mineInRow: this.minePos[i]
                })
            )
        }
        return (
            <div className="field">
                {
                    listItems
                }
            </div>
        )
    }
}

export default Field
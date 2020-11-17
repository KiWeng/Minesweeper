import React from 'react'
import Row from "./Row";


class Field extends React.Component {
    constructor(props) {
        super(props)
        this.rowCount = 9;
        this.colCount = 8
        this.updateMineStates = this.updateMineStates.bind(this)
        this.setUpMines();
        let clickedPos = []
        for (let i = 0; i < this.rowCount; i++) {
            clickedPos.push([])
            for (let j = 0; j < this.colCount; j++) {
                clickedPos[i].push("closed")
            }
        }
        this.state = {state: clickedPos}
    }

    updateMineStates(i, j, type) {
        let tmp = this.state.state;
        tmp[i][j] = type;
        this.setState({state: tmp})
        if (type === "opened" && this.minePos[i][j] === 0) {
            this.revealSafeZone(i, j)
        }
        console.log(i, j, type)
        // this.render()
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
                    console.log(ni, nj)
                }
            }
        }
        this.setState({state: tmp})
        // for (let x in tmp) {
        //     for (let y in tmp[x]) {
        //         console.log(tmp[x][y], x, y)
        //     }
        //     console.log('\n')
        // }
        this.render()

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
        console.log("Field is rendering")
        let listItems = []
        for (let i = 0; i < this.rowCount; i++) {
            listItems.push(Row({
                    length: this.colCount,
                    rowPos: i,
                    mineInRow: this.minePos[i],
                    rowStates: this.state.state[i],
                    handleChange: this.updateMineStates
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
import React from 'react';
import './App.css';
import './Minesweeper.css'
import Field from "./Field";
import Panel from "./Panel";

class App extends React.Component {
    constructor(props) {
        super(props);
        // document.addEventListener(
        //     'contextmenu', event => event.preventDefault()
        // )
        this.rowCount = 9;
        this.colCount = 8;
        this.setUpMines();
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
        return (
            <div className="App">
                <header className="App-header">
                    <Panel/>
                    <div className="back">
                        <Field
                            colCount={this.colCount}
                            rowCount={this.rowCount}
                            minePos={this.minePos}
                        />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.css';
import './Minesweeper.css'
import Field from "./Field";
import Panel from "./Panel";

class App extends React.Component {
    colCount;
    rowCount;
    minePos = []

    constructor(props) {
        super(props);
        document.addEventListener(
            'contextmenu', event => event.preventDefault()
        )
        this.rowCount = 5;
        this.colCount = 5;
        for (let i = 0; i < this.rowCount; i++) {
            this.minePos.push([])
            for (let j = 0; j < this.colCount; j++) {
                this.minePos[i].push(false)
            }
        }

        let mine = new Set()
        while (mine.size < 10) {
            mine.add(Math.floor(
                Math.random() * this.colCount * this.rowCount
            ))
        }

        for (const mineKey in mine) {
            this.minePos[Math.floor(mineKey / this.colCount)][mineKey % this.colCount]
                = true;
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

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
        this.minePos = []
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

        for (const mineKey of mine) {
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

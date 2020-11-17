import React from 'react';
import './App.css';
import './Minesweeper.css'
import Field from "./Field";
import Panel from "./Panel";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flagCount: 10, isEnded: true}
        this.updateGameStatus = this.updateGameStatus.bind(this)
    }

    updateGameStatus(isEnded, flagCount) {
        this.setState({flagCount: flagCount, isEnded: isEnded})
        this.setState({flagCount: flagCount, isEnded: isEnded})
        console.log("handler", this.state.isEnded)
        // console.log(flagCount)
        // console.log(this.state.flagCount)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Panel
                        isEnded={this.state.isEnded}
                        flagCount={this.state.flagCount}
                    />
                    <Field
                        updateGameStatus={this.updateGameStatus}
                        flagCount={this.state.flagCount}
                    />
                </header>
            </div>
        );
    }
}

export default App;

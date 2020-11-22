import React from 'react';
import './App.css';
import './Minesweeper.css'
import Field from "./Field";
import Panel from "./Panel";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flagCount: 10, isEnded: true, doReset: false}
        this.updateGameStatus = this.updateGameStatus.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    updateGameStatus(isEnded, flagCount) {
        this.setState({flagCount: flagCount, isEnded: isEnded, doReset: false});
    }

    handleReset() {
        this.setState({flagCount: 10, isEnded: true, doReset: true})
    }

    componentDidUpdate() {
        if (this.state.doReset)
            this.setState({doReset: false})
    }

    render() {
        console.log(this.state.doReset);
        return (
            <div className="App">
                <header className="App-header">
                    <Panel
                        isEnded={this.state.isEnded}
                        flagCount={this.state.flagCount}
                        handleReset={this.handleReset}
                        doReset={this.state.doReset}
                    />
                    <Field
                        updateGameStatus={this.updateGameStatus}
                        flagCount={this.state.flagCount}
                        doReset={this.state.doReset}
                    />
                </header>
            </div>
        );
    }
}

export default App;

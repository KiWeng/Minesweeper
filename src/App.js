import React from 'react';
import './App.css';
import './Minesweeper.css'
import Field from "./Field";
import Panel from "./Panel";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Panel/>
                    <Field/>
                </header>
            </div>
        );
    }
}

export default App;

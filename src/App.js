import React from 'react';
import './App.css';
import './Minesweeper.css'
import Field from "./Field";
import Panel from "./Panel";

class App extends React.Component {

    constructor(props) {
        super(props);
        document.addEventListener('contextmenu', event => event.preventDefault())
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Panel/>
                    <div className="back">
                        <Field colCount="10" rowCount="10"/>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

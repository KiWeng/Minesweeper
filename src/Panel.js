import React from "react";
import logo from "./bomb.svg";
import Timer from "./Timer";

function FlagCounter(props) {
    return (
        <p>{props.flagCount}</p>
    )
}

function Reset() {
    return (
        <button>reset</button>
    )
}

class Panel extends React.Component {
    render() {
        return (
            <div>
                <div>
                   <span className="title">
                   Minesweeper
                   </span>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div>
                    <FlagCounter flagCount={this.props.flagCount}/>
                    <Reset/>
                    <Timer isEnded={this.props.isEnded}/>
                </div>
            </div>
        )
    }
}

export default Panel
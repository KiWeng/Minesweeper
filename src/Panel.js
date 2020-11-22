import React from "react";
import logo from "./bomb.svg";
import Timer from "./Timer";

function FlagCounter(props) {
    return (
        <p>{props.flagCount}</p>
    )
}

function Reset(props) {
    return (
        <button
            style={{cursor: "pointer"}}
            onClick={props.handleReset}
        >reset</button>
    )
}

class Panel extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.doReset !== prevProps.doReset) {
        }
    }

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
                    <Reset handleReset={this.props.handleReset}/>
                    <Timer
                        isEnded={this.props.isEnded}
                        doReset={this.props.doReset}
                    />
                </div>
            </div>
        )
    }
}

export default Panel
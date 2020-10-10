import React from "react";
import ReactDom from "react-dom"
import logo from "./bomb.svg";
import FlagCounter from "./FlagCounter";
import Reset from "./Reset";
import Timer from "./Timer";

function Panel() {
    return (
        <div>
            <div>
                <span className="title">
                Minesweeper
                </span>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                <FlagCounter/>
                <Reset/>
                <Timer/>
            </div>
        </div>
    )
}

export default Panel
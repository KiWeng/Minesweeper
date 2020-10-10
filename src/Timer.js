import React from 'react'
import ReactDom from 'react-dom'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <span className="Timer">{this.state.date.toLocaleTimeString()}</span>
        )
    }
}

export default Timer

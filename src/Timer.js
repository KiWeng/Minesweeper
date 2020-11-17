import React from 'react'

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
        console.log(this.props.isEnded);
        if (!this.props.isEnded) {
            this.setState({
                date: new Date()
            });
        }
    }

    render() {
        return (
            <span className="Timer">{this.state.date.toLocaleTimeString()}</span>
        )
    }
}

export default Timer

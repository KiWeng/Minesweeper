import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.startTime = 0
        this.state = {currentTime: 0}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            50
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        // console.log(this.props.isEnded);
        if (!this.props.isEnded) {
            if (this.startTime === 0) {
                this.startTime = new Date().getTime();
            }
            this.setState({
                currentTime: new Date().getTime()
            });
        }
    }

    render() {
        let diff = this.state.currentTime - this.startTime
        let minute = new Date(diff).getMinutes();
        let second = new Date(diff).getSeconds()
        var s = ""
        if (second < 10) {
            s = "0"
        }
        return (
            <span className="Timer">{minute}:{s + second}</span>
        )
    }
}

export default Timer

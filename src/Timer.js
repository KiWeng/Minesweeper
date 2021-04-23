import React from 'react'
import { Statistic } from 'antd'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {startTime: 0, currentTime: 0}
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
        if (!this.props.isEnded) {
            if (this.state.startTime === 0) {
                this.setState({
                    startTime: new Date().getTime()
                })
            }
            this.setState({
                currentTime: new Date().getTime()
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doReset) {
            this.setState({startTime: 0, currentTime: 0})
        }
    }

    render() {
        let diff = this.state.currentTime - this.state.startTime
        let minute = new Date(diff).getMinutes();
        let second = new Date(diff).getSeconds()
        let s = "";
        if (second < 10) {
            s = "0"
        }
        return (
            <Statistic
                title={<div style={{ color: 'white'}}>Timer</div>}
                valueStyle={{color: 'white'}}
                value={'' + minute + ':' + s + second}
            />
        );
    }
}

export default Timer

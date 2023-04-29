import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    condition: false,
    initialMinutes: 25,
    initialSeconds: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {condition} = this.state
    if (condition === true) {
      this.setState(prevState => ({
        initialSeconds: prevState.initialSeconds + 1,
      }))
    }
  }

  startOrPause = () => {
    this.setState(prevState => ({
      condition: !prevState.condition,
    }))
  }

  onClickIncreaseButton = () => {
    const {condition} = this.state
    if (condition !== true) {
      this.setState(prevState => ({
        initialMinutes: prevState.initialMinutes + 1,
      }))
    }
  }

  onClickDecreaseButton = () => {
    const {initialMinutes, condition} = this.state
    if (initialMinutes > 25 && condition !== true) {
      this.setState(prevState => ({
        initialMinutes: prevState.initialMinutes - 1,
      }))
    }
  }

  reset = () => {
    this.setState({
      condition: false,
      initialMinutes: 25,
      initialSeconds: 0,
    })
  }

  render() {
    const {condition, initialMinutes, initialSeconds} = this.state
    let minutes = initialMinutes
    let seconds = '00'
    if (condition === true || condition === false) {
      const totalSeconds = initialMinutes * 60 - initialSeconds
      minutes = parseInt(totalSeconds / 60)
      if (
        parseInt(totalSeconds % 60) === 60 ||
        parseInt(totalSeconds % 60) < 10
      ) {
        seconds = '0'.concat(parseInt(totalSeconds % 60))
      } else {
        seconds = parseInt(totalSeconds % 60)
      }
    }
    const imageUrl = condition
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const imgAltText = condition ? 'pause' : 'play'
    const startOrPause = condition ? 'Pause' : 'Start'
    const timerText = condition ? 'Running' : 'Paused'
    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="container">
          <div className="timer-bg-image">
            <div className="timer-container">
              <h1 className="timer">
                {toString(minutes)} : {toString(seconds)}
              </h1>
              <p className="timer-text">{timerText}</p>
            </div>
          </div>
          <div className="icons-container">
            <div className="icon-container">
              <button className="button" type="button">
                {startOrPause}
              </button>
              <img
                className="icon"
                src={imageUrl}
                alt={`${imgAltText} icon`}
                onClick={this.startOrPause}
              />
              <button className="button" type="button" onClick={this.reset}>
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
              </button>
              <p className="icon-name">Reset</p>
            </div>
            <p className="sub-heading">Set Timer limit</p>
            <div className="icon-container">
              <button
                className="button"
                type="button"
                onClick={this.onClickDecreaseButton}
              >
                -
              </button>
              <div className="minutes-container">
                <p>{initialMinutes}</p>
              </div>
              <button
                className="button"
                type="button"
                onClick={this.onClickIncreaseButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

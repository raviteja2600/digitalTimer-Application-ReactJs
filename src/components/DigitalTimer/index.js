import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    condition: true,
    initialMinutes: 25,
    initialSeconds: 60,
  }

  startOrPause = () => {
    this.setState(prevState => ({
      condition: !prevState.condition,
    }))
  }

  onClickIncreaseButton = () => {
    const {condition} = this.state
    if (condition === true) {
      this.setState(prevState => ({
        initialMinutes: prevState.initialMinutes + 1,
      }))
    }
  }

  onClickDecreaseButton = () => {
    const {initialMinutes, condition} = this.state

    if (initialMinutes > 25 && condition === true) {
      this.setState(prevState => ({
        initialMinutes: prevState.initialMinutes - 1,
      }))
    }
  }

  render() {
    const {condition, initialMinutes, initialSeconds} = this.state
    const imageUrl = condition
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'

    const imgAltText = condition ? 'play' : 'pause'
    const startOrPause = condition ? 'Start' : 'Pause'
    const timerText = condition ? 'Running' : 'Paused'
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="timer-bg-image">
          <div className="timer-container">
            <p>{timerText}</p>
            <p>
              {initialMinutes} : {initialSeconds}
            </p>
          </div>
        </div>
        <div>
          <button type="button" onClick={this.startOrPause}>
            <img src={imageUrl} alt={`${imgAltText} icon`} />
          </button>
          <p>{startOrPause}</p>
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="reset icon"
            />
          </button>
          <p>Reset</p>
        </div>
        <p>Set Timer limit</p>
        <div>
          <button type="button" onClick={this.onClickDecreaseButton}>
            -
          </button>
          <button type="button">{initialMinutes}</button>
          <button type="button" onClick={this.onClickIncreaseButton}>
            +
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

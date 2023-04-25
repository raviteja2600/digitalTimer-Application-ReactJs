import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {}

  render() {
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="timer-bg-image">
          <div className="timer-container">
            <p>timer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

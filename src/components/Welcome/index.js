import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onclick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="Container">
        <div>
          <h1 className="welcome">Welcome</h1>
          <p className="para">Thankyou! Happy Learning</p>
          <button type="button" className="btn" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome

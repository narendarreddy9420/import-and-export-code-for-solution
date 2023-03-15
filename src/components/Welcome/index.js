import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {isSubscribed: false}
  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }
  getText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getText()
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <button type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome

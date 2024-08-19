// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangocount: 0,
    bananacount: 0,
  }

  incrementbanana = () => {
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  incrementmango = () => {
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  render() {
    const {mangocount, bananacount} = this.state

    return (
      <div className="main-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span1 className="mango-count">{mangocount}</span1> mangoes
            <span2 className="banana-count">{bananacount}</span2> bananas
          </h1>
          <div className="fruits-data-container">
            <div className="fruit-mango">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="mango-btn" onClick={this.incrementmango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-banana">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="banana-btn" onClick={this.incrementbanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

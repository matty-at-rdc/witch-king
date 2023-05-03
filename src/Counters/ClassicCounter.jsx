import React from "react"

import "../App.css"


class ClassicCounter extends React.Component {
  constructor(props) {
    super(props)
    this.handleIncClick = this.handleIncClick.bind(this)
    this.handleDecClick = this.handleDecClick.bind(this)
    this.state = {count: 9}
  }

  handleIncClick() {
    this.setState((prevState, props) => ({count: prevState.count + 1}))
  }

  handleDecClick() {
    this.setState((prevState, props) => ({count: prevState.count - 1}))
  }

  render() {
    return (
        <article>
            <p>Classic React Counter</p>
            <div className="counter-buttons-container">
                <button onClick={this.handleIncClick}>+</button>
                <button onClick={this.handleDecClick}>-</button>
            </div>
            <p data-testid="classic-counter-value" className="current-count">{this.state.count}</p>
        </article>
    )
  }
}

export default ClassicCounter

import React from "react"
import { connect } from "react-redux"

import "../App.css"
import { actions } from "../store"


class ReduxCounter extends React.Component {
  constructor(props) {
    super(props)
    this.handleIncClick = this.handleIncClick.bind(this)
    this.handleDecClick = this.handleDecClick.bind(this)
  }

  handleIncClick() {
    this.props.inc()
  }

  handleDecClick() {
    this.props.dec()
  }

  render() {
    return (
        <article>
            <p>Classic Redux Counter</p>
            <div className="counter-buttons-container">
                <button onClick={this.handleIncClick}>+</button>
                <button onClick={this.handleDecClick}>-</button>
            </div>
            <p data-testid="redux-counter-value" className="current-count">{this.props.value}</p>
        </article>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => {
      dispatch({ type: actions.INC })
    },
    dec: () => {
      dispatch({ type: actions.DEC })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)

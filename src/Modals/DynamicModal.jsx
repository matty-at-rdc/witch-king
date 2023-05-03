import React, { Component } from "react"
import { connectModal } from "redux-modal"

class SimpleModal extends Component {
  constructor(props) {
    super(props)

    this.state = {count: 9}

    this.localCountInc = this.localCountInc.bind(this)
    this.localCountDec = this.localCountDec.bind(this)
  }

  localCountInc() {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  localCountDec() {
    this.setState((state) => ({
      count: state.count - 1
    }))
  }

  render() {
    const { show, handleHide, handleDestroy, message } = this.props

    if (!show) {
      return null
    }

    return (
      <div id="simple-modal" className="modal">
        <div className="modal-content" onClick={this.handleClose}>
          <span  onClick={handleDestroy} className="close">&times;</span>
          <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>Your Pitiful Mortal Question Answered:</p>
          <p>{message}</p>
          <div>
            <p>Look another counter... How odd...</p>
            <p>{this.state.count}</p>
            <span>
              <button onClick={this.localCountDec}>-</button> 
              <button onClick={this.localCountInc}>+</button>
            </span>
          </div>
          <button style={{backgroundColor: "#f2e74b", borderColor: "#ede247"}} onClick={handleHide}>Hide (May Destroy)</button>
          <button onClick={handleDestroy}>
            Close (Will Destroy)
          </button>
          <br />
          <small>Dynamic and Potentially Stateful</small>
        </div>
      </div>
    )
  }
}

export default class DynamicModal extends Component {
  render() {
    // change this when you want to learn about retaining state in a "hidden" modal
    const destroyOnHide = false 
    const { name } = this.props
    const WrappedMyModal = connectModal({ name, destroyOnHide})(SimpleModal)
    return <WrappedMyModal />
  }
}



import React, { Component } from "react"
import { connectModal } from "redux-modal"

class SimpleModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { show, handleHide, handleDestroy } = this.props

    if (!show) {
      return null
    }

    return (
      <div id="static-modal" className="modal">
        <div className="modal-content">
          <span onClick={handleDestroy} className="close">&times;</span>
          <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>Tell us about yourself</p>
          <p>Well, like the site says I'm the Witch King of Angmar and ummm have you asked if I can be killed or not?</p>
          <button data-testid="exit-btn" style={{backgroundColor: "red"}} onClick={handleHide}>Exit & Ask If I Can Be Killed</button>
          <br />
          <small>Static and Not Stateful</small>
        </div>
      </div>
    )
  }
}

export default class StaticModal extends Component {
  render() {
    // change this when you want to learn about retaining state in a "hidden" modal
    const destroyOnHide = true 
    const { name } = this.props
    const WrappedMyModal = connectModal({ name, destroyOnHide})(SimpleModal)
    return <WrappedMyModal />
  }
}

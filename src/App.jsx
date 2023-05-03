import "./App.css"
import ClassicCounter from "./Counters/ClassicCounter"
import ReduxCounter from "./Counters/ReduxCounter"

import DynamicModal from "./Modals/DynamicModal"
import StaticModal from "./Modals/StaticModal"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { show } from "redux-modal"

import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleStaticModalOpen = (name) => () => {
    this.props.show(name)
  }

  handleDynamicModalOpen = (name, msg) => () => {
    this.props.show(name, { message: msg })
  }

  render() {
    return (
      <main>
        <section className="welcome-message-container">
          <article>
            <h1>Welcome To The Witch King of Angmar's Bio Page!</h1>
            <img src="/angmar-cute.png" alt="angmar-cute" />
          </article>
        </section>

        <hr />
        <section className="counter-container">
          <p>The Witch King of Angmar is proud to present these counters:</p>
          <aside>
            <ClassicCounter />
          </aside>
          <aside>
            <ReduxCounter />
          </aside>
          <small>They start at 9 how cute is that 🦄</small>
        </section>
        <hr />

        <section className="open-modal-buttons-container">
          <article>
            <p>
              The Witch King of Angmar is pleased to answer the following
              questions:
            </p>
            <div>
              {/* onClick needs a reference not an invocation hence we return a function defined... ugh */}
              <button
                data-testid="tell-us-about-yourself-btn"
                onClick={this.handleStaticModalOpen("tell-us-about-yourself")}
              >
                Can You Tell Us About Yourself?
              </button>
              <StaticModal name="tell-us-about-yourself" />
            </div>
            <div>
              {/* onClick needs a reference not an invocation hence we return a function defined... ugh */}
              <button
                data-testid="can-you-be-killed-btn"
                onClick={this.handleDynamicModalOpen(
                  "can-you-be-killed",
                  "Not by any man!"
                )}
              >
                Can You Be Killed?
              </button>
              <DynamicModal name="can-you-be-killed" />
            </div>
            <div>
              {/* onClick needs a reference not an invocation hence we return a function defined... ugh */}
              <button
                data-testid="caveats-btn"
                onClick={this.handleDynamicModalOpen(
                  "caveats",
                  "Nope seems totally fool proof... 🤦‍♀️"
                )}
              >
                Are There Any Caveats To This Rule?
              </button>
              <DynamicModal name="caveats" />
            </div>
          </article>
        </section>
      </main>
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
    ...bindActionCreators({ show }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

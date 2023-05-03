import { Provider } from "react-redux"

import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "../App"
import { getStore } from "../store"

const customRender = (
  ui,
  { preloadedState, store = getStore(preloadedState), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={getStore({ counter: { value: 9 } })}>{children}</Provider>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

describe("App", () => {
  it("renders with multiple modal launch buttons", () => {
    const { getByTestId } = customRender(<App />)
    const tellUsAboutYourselfBtn = getByTestId("tell-us-about-yourself-btn")
    const canYouBeKilledBtn = getByTestId("can-you-be-killed-btn")
    const caveatBtn = getByTestId("caveats-btn")

    expect(tellUsAboutYourselfBtn.textContent).to.equal(
      "Can You Tell Us About Yourself?"
    )
    expect(canYouBeKilledBtn.textContent).to.equal("Can You Be Killed?")
    expect(caveatBtn.textContent).to.equal(
      "Are There Any Caveats To This Rule?"
    )
  })

  it("opens a modal when a modal launch button is clicked", async () => {
    const expectedModalTitle = "Tell us about yourself"
    const { getByTestId, getByText, queryByText } = customRender(<App />)
    const tellUsAboutYourselfBtn = getByTestId("tell-us-about-yourself-btn")

    const user = userEvent.setup()
    await user.click(tellUsAboutYourselfBtn)
    await waitFor(() => {
        expect(getByText(expectedModalTitle)).toBeInTheDocument()
    })

    const exitBtn = getByTestId("exit-btn")
    await user.click(exitBtn)
    await waitFor(() => {
        expect(queryByText(expectedModalTitle)).not.toBeInTheDocument()
    })
  })

  // This is a WIP Test
  it.skip("can modify and keep state in a hidden modal component", async () => {
    const expectedModalTitle = "Tell us about yourself"
    const { getByTestId, getByText, queryByText } = customRender(<App />)
    const tellUsAboutYourselfBtn = getByTestId("tell-us-about-yourself-btn")

    const user = userEvent.setup()
    await user.click(tellUsAboutYourselfBtn)
    await waitFor(() => {
        expect(getByText(expectedModalTitle)).toBeInTheDocument()
    })

    const exitBtn = getByTestId("exit-btn")
    await user.click(exitBtn)
    await waitFor(() => {
        expect(queryByText(expectedModalTitle)).not.toBeInTheDocument()
    })
  })
})
